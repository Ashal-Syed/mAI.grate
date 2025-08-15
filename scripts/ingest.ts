import 'dotenv/config';
import crypto from 'node:crypto';
import pLimit from 'p-limit';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';

const SEEDS = [
  'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing',
  'https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/overview',
  'https://immi.homeaffairs.gov.au/what-we-do/migration-program-planning-levels',
  'https://immi.homeaffairs.gov.au/what-we-do/migration-strategy',
  'https://immi.homeaffairs.gov.au/news-media',
  'https://www.legislation.gov.au/C1958A00062/latest', // Migration Act
  'https://www.legislation.gov.au/F1996B03551/latest', // Migration Regs
];

const HOST_ALLOW = [
  'immi.homeaffairs.gov.au', 'www.homeaffairs.gov.au', 'www.legislation.gov.au'
];

const CONCURRENCY = 4;
const MAX_PAGES = 200;
const CHUNK_TOKENS = 500;

const supa = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const sha256 = (s: string) => crypto.createHash('sha256').update(s).digest('hex');
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
const okHost = (u: URL) => HOST_ALLOW.includes(u.hostname);
const disallow = (url: string) => /(\.pdf($|\?))|(\.docx?)|(\.xlsx?)|login|logon|search|sitesearch/i.test(url);

function extract(html: string) {
  const $ = cheerio.load(html);
  $('script,style,noscript,header,footer,nav,aside').remove();
  const title = $('title').first().text().trim();
  const publishedText =
    $('[datetime]').attr('datetime') ||
    $('meta[property="article:modified_time"]').attr('content') ||
    $('meta[name="last-modified"]').attr('content') || '';
  const content = $('main').text().trim() || $('body').text().trim();
  return { title, content, publishedText };
}

const estTokens = (s: string) => Math.ceil(s.length / 4);

function chunk(text: string, target = CHUNK_TOKENS) {
  const paras = text.split(/\n{2,}/g).map(p => p.trim()).filter(Boolean);
  const out: string[] = [];
  let buf: string[] = [];
  let tokens = 0;
  for (const p of paras) {
    const t = estTokens(p);
    if (tokens + t > target && buf.length) {
      out.push(buf.join('\n\n'));
      buf = []; tokens = 0;
    }
    buf.push(p); tokens += t;
  }
  if (buf.length) out.push(buf.join('\n\n'));
  return out;
}

async function embedBatch(texts: string[]) {
  const { data } = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: texts
  });
  return data.map(d => d.embedding);
}

async function crawl() {
  const seen = new Set<string>();
  const q: string[] = [...SEEDS];
  const limiter = pLimit(CONCURRENCY);
  const results: {url:string, html:string}[] = [];

  while (q.length && results.length < MAX_PAGES) {
    const url = q.shift()!;
    if (seen.has(url) || disallow(url)) continue;
    seen.add(url);

    let u: URL;
    try { u = new URL(url); } catch { continue; }
    if (!okHost(u)) continue;

    await limiter(async () => {
      const res = await fetch(url, { headers: { 'User-Agent': 'edu-research-bot/0.1' } });
      if (!res.ok) return;
      const html = await res.text();
      results.push({ url, html });

      const $ = cheerio.load(html);
      $('a[href]').each((_i, a) => {
        const href = $(a).attr('href')!;
        try {
          const nu = new URL(href, url);
          if (okHost(nu) && !disallow(nu.href) && nu.protocol.startsWith('http')) {
            if (nu.href.startsWith('https://immi.homeaffairs.gov.au/visas') ||
                nu.href.startsWith('https://immi.homeaffairs.gov.au/what-we-do') ||
                nu.href.startsWith('https://www.legislation.gov.au/')) {
              q.push(nu.href);
            }
          }
        } catch {}
      });
      await sleep(300);
    });
  }
  await sleep(100);
  return results;
}

async function upsertDoc(d: { source: string, url: string, title: string, content: string, published_at: string | null }) {
  const hash = sha256(d.content);
  const { data: existing } = await supa.from('documents').select('id, sha256').eq('url', d.url).maybeSingle();

  let docId: string | undefined = existing?.id;
  if (!existing || existing.sha256 != hash) {
    const { data: ins, error } = await supa.from('documents').upsert({
      source: d.source, url: d.url, title: d.title,
      published_at: d.published_at ? new Date(d.published_at).toISOString() : null,
      sha256: hash, content: d.content, crawled_at: new Date().toISOString()
    }, { onConflict: 'url' }).select('id').single();
    if (error) throw error;
    docId = ins.id;

    await supa.from('chunks').delete().eq('doc_id', docId);
    const parts = chunk(d.content);
    for (let i = 0; i < parts.length; i += 50) {
      const slice = parts.slice(i, i+50);
      const embs = await embedBatch(slice);
      const rows = slice.map((text, k) => ({
        doc_id: docId, idx: i + k, text, token_count: estTokens(text), embedding: embs[k] as any
      }));
      const { error: ce } = await supa.from('chunks').insert(rows as any);
      if (ce) throw ce;
    }
  }
}

(async () => {
  const pages = await crawl();
  for (const { url, html } of pages) {
    const { title, content, publishedText } = extract(html);
    if (!content || content.length < 500) continue;
    const host = new URL(url).hostname.includes('legislation') ? 'legislation' :
                 new URL(url).hostname.includes('immi') ? 'immi' : 'homeaffairs';
    await upsertDoc({ source: host, url, title, content, published_at: publishedText || null });
    console.log('Upserted:', url);
  }
  console.log('Done.');
})();

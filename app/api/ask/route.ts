import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { createClient } from '@supabase/supabase-js';

const SYSTEM = `You are an Australian immigration information assistant.
Do NOT give personalised legal advice. Provide general information, cite sources with [n], and encourage users to verify on official sites.
If asked for tailored advice, state you cannot provide legal advice and point to the OMARA register.
When asked for process steps, use concise bullet points.
`;

const INTENT_PROMPT = `Classify the user's intent into one of:
[general_info, eligibility, process_steps, definitions, updates].
Return JSON only: {"intent":"..."}.
`;

export async function POST(req: NextRequest) {
  const { question } = await req.json();

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
  const supa = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

  // classify
  const ic = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'system', content: INTENT_PROMPT }, { role: 'user', content: question }],
    response_format: { type: 'json_object' }
  });
  const { intent } = JSON.parse(ic.choices[0].message.content);

  // retrieve
  const emb = await openai.embeddings.create({ model: 'text-embedding-3-small', input: question });
  const { data: rows } = await supa.rpc('match_chunks', { query_embedding: emb.data[0].embedding, match_count: 8, match_threshold: 0.25 });

  const context = (rows ?? []).map((r: any, i: number) =>
    `[[${i+1}]] ${r.title || ''}
URL: ${r.url}
${r.content_snippet}`
  ).join('\n\n');

  // answer
  const msg = [
    { role: 'system', content: SYSTEM },
    { role: 'user', content: `Question: ${question}\n\nContext:\n${context}\n\nRules:\n- Use only the context for facts.\n- Add [n] markers mapping to the numbered context.\n- End with a one-line disclaimer.` }
  ] as const;

  const ans = await openai.chat.completions.create({
    model: 'gpt-4.1-mini',
    messages: msg,
    temperature: 0.2
  });

  const sources = (rows ?? []).map((r: any, i: number) => ({ n: i+1, title: r.title, url: r.url }));
  return NextResponse.json({ intent, answer: ans.choices[0].message.content, sources });
}

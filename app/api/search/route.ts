import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';

export async function POST(req: NextRequest) {
  const { q, k = 6 } = await req.json();
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
  const supa = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

  const emb = await openai.embeddings.create({ model: 'text-embedding-3-small', input: q });
  const { data: rows, error } = await supa.rpc('match_chunks', { query_embedding: emb.data[0].embedding, match_count: k, match_threshold: 0.2 });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(rows ?? []);
}

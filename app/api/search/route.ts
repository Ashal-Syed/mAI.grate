import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: NextRequest) {
  const { q, k = 6 } = await req.json();
  const supa = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENAI_API_KEY!);
  const embedModel = genAI.getGenerativeModel({ model: 'text-embedding-004' });
  const emb = await embedModel.embedContent(q);

  const { data: rows, error } = await supa.rpc('match_chunks', {
    query_embedding: emb.embedding.values,
    match_count: k,
    match_threshold: 0.2
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(rows ?? []);
}

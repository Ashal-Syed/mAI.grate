import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { GoogleGenerativeAI } from '@google/generative-ai';

const SYSTEM = `You are an Australian immigration information assistant.
Do NOT give personalised legal advice. Provide general information, cite sources with [n], and encourage users to verify on official sites.
If asked for tailored advice, state you cannot provide legal advice and point to the OMARA register.
When asked for process steps, use concise bullet points.
`;

const INTENT_PROMPT = `Classify the user's intent into one of:
[general_info, eligibility, process_steps, definitions, updates].
Return JSON only: {"intent":"..."} with no extra text.`;

function parseJson(text: string) {
  const t = text.trim().replace(/^```json\s*|\s*```$/g, '').trim();
  return JSON.parse(t);
}

export async function POST(req: NextRequest) {
  try {
    const { question } = await req.json();

    // Copy exact working code from search API
    const supa = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENAI_API_KEY!);
    const embedModel = genAI.getGenerativeModel({ model: 'text-embedding-004' });
    const emb = await embedModel.embedContent(question);

    // Use the exact same call as the working search API
    const { data: rows, error } = await supa.rpc('match_chunks', {
      query_embedding: emb.embedding.values,
      match_count: 5,
      match_threshold: 0.2
    });

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    // Generate AI response using the search results
    const answerModel = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const context = (rows ?? []).map((r: any, i: number) =>
      `[[${i+1}]] ${r.title || ''}\nURL: ${r.url}\n${r.content_snippet}`
    ).join('\n\n');

    const answerPrompt = `${SYSTEM}

Question: ${question}

Context:
${context}

Rules:
- Use only the context for facts.
- Add [n] markers mapping to the numbered context.
- End with a one-line disclaimer.`;

    const ans = await answerModel.generateContent({
      contents: [{ role: 'user', parts: [{ text: answerPrompt }]}],
    });

    const sources = (rows ?? []).map((r: any, i: number) => ({ n: i+1, title: r.title, url: r.url }));
    
    return NextResponse.json({ 
      intent: 'search', 
      answer: ans.response.text(), 
      sources 
    });
  } catch (error) {
    console.error('Error in ask route:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
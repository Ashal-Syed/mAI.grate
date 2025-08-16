import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import { GoogleGenerativeAI } from '@google/generative-ai';
import crypto from 'node:crypto';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
dotenv.config();

const supa = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENAI_API_KEY!);
const embedModel = genAI.getGenerativeModel({ model: 'text-embedding-004' });

const sha256 = (s: string) => crypto.createHash('sha256').update(s).digest('hex');

const immigrationData = [
  {
    source: 'immi',
    url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-nominated-489',
    title: 'Skilled Nominated visa (subclass 489)',
    content: `The Skilled Nominated visa (subclass 489) is a provisional visa that allows skilled workers to live and work in a specified regional area of Australia for up to 4 years. This visa is part of the Regional Sponsored Migration Scheme (RSMS).

Key requirements:
- Be under 45 years of age
- Have competent English
- Have a nominated occupation on the relevant skilled occupation list
- Be nominated by an Australian state or territory government agency
- Score at least 65 points on the points test
- Meet health and character requirements

The visa allows you to:
- Live and work in a specified regional area of Australia for up to 4 years
- Study in Australia
- Travel to and from Australia as many times as you want
- Include eligible family members in your application

After living in a regional area for at least 2 years and working full-time for at least 1 year, you may be eligible to apply for a permanent visa.`
  },
  {
    source: 'immi',
    url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/partner-820-801',
    title: 'Partner visa (subclasses 820 and 801)',
    content: `The Partner visa allows the partner or spouse of an Australian citizen, Australian permanent resident or eligible New Zealand citizen to live in Australia. The visa is granted in two stages: temporary (subclass 820) and permanent (subclass 801).

Eligibility requirements:
- Be in a genuine and continuing relationship with your partner
- Be married or in a de facto relationship
- Meet health and character requirements
- Your partner must be an Australian citizen, permanent resident or eligible New Zealand citizen

The temporary Partner visa (subclass 820) allows you to:
- Live in Australia with your partner
- Work in Australia
- Study in Australia (no government funding)
- Access Medicare

After 2 years, you can apply for the permanent Partner visa (subclass 801) if your relationship is still genuine and continuing.`
  },
  {
    source: 'immi',
    url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
    title: 'Student visa (subclass 500)',
    content: `The Student visa (subclass 500) allows you to stay in Australia to study full-time in a recognised education institution. This visa is designed for international students who want to study in Australia.

Key requirements:
- Be enrolled in a full-time course of study
- Have sufficient funds to cover your stay and course fees
- Meet English language requirements
- Meet health and character requirements
- Have adequate health insurance (Overseas Student Health Cover)
- Be a genuine temporary entrant

The visa allows you to:
- Study full-time in Australia
- Work up to 40 hours per fortnight while your course is in session
- Work unlimited hours during scheduled course breaks
- Include family members in your application
- Travel to and from Australia as many times as you want

Visa duration depends on the length of your course, typically up to 5 years.`
  },
  {
    source: 'legislation',
    url: 'https://www.legislation.gov.au/C1958A00062/latest',
    title: 'Migration Act 1958',
    content: `The Migration Act 1958 is the primary legislation governing immigration to Australia. It establishes the legal framework for visa applications, entry, stay, and removal of non-citizens.

Key provisions include:
- Powers of the Minister for Immigration
- Visa application and decision-making processes
- Detention and removal of unlawful non-citizens
- Review rights and procedures
- Offences and penalties
- Border protection measures

The Act provides the legal basis for:
- Visa categories and requirements
- Character and health requirements
- Cancellation of visas
- Administrative review processes
- Compliance and enforcement measures

The Migration Regulations 1994 provide detailed rules and requirements under the Act, including specific visa criteria, application procedures, and evidentiary requirements.`
  },
  {
    source: 'immi',
    url: 'https://immi.homeaffairs.gov.au/what-we-do/migration-program-planning-levels',
    title: 'Migration Program Planning Levels',
    content: `The Migration Program Planning Levels set the number of permanent visas that can be granted each year across different visa categories. These levels are determined annually by the Australian Government.

The program is divided into several streams:
- Skill stream: For skilled workers, business people, and their families
- Family stream: For partners, children, parents, and other family members
- Special Eligibility stream: For special cases and former residents

Key planning levels for recent years:
- Skill stream typically receives around 70% of total places
- Family stream receives around 30% of total places
- Special eligibility receives a small allocation

The planning levels help manage:
- Population growth and demographic changes
- Economic needs and skill shortages
- Family reunion priorities
- Social cohesion and integration

These levels are reviewed annually and adjusted based on economic conditions, demographic trends, and government priorities.`
  }
];

async function addImmigrationData() {
  console.log('Adding comprehensive immigration data to database...');
  
  for (const data of immigrationData) {
    const hash = sha256(data.content);
    
    // Insert document
    const { data: doc, error: docError } = await supa.from('documents').upsert({
      source: data.source,
      url: data.url,
      title: data.title,
      published_at: new Date().toISOString(),
      sha256: hash,
      content: data.content,
      crawled_at: new Date().toISOString()
    }, { onConflict: 'url' }).select('id').single();
    
    if (docError) {
      console.error('Error inserting document:', docError);
      continue;
    }
    
    console.log('Document inserted:', data.title);
    
    // Create chunks from content
    const paragraphs = data.content.split(/\n{2,}/g).map(p => p.trim()).filter(Boolean);
    const chunks = [];
    
    for (const para of paragraphs) {
      if (para.length > 50) { // Only include substantial paragraphs
        chunks.push(para);
      }
    }
    
    if (chunks.length === 0) {
      chunks.push(data.content.substring(0, 1000)); // Fallback to first 1000 chars
    }
    
    // Create embeddings for chunks
    const requests = chunks.map((t) => ({
      content: { role: 'user', parts: [{ text: t }] }
    }));
    
    const { embeddings } = await embedModel.batchEmbedContents({ requests });
    
    const chunkRows = chunks.map((text, i) => ({
      doc_id: doc.id,
      idx: i,
      text,
      token_count: Math.ceil(text.length / 4),
      embedding: embeddings[i].values
    }));
    
    // Delete existing chunks for this document
    await supa.from('chunks').delete().eq('doc_id', doc.id);
    
    // Insert new chunks
    const { error: chunkError } = await supa.from('chunks').insert(chunkRows as any);
    
    if (chunkError) {
      console.error('Error inserting chunks for', data.title, ':', chunkError);
    } else {
      console.log('Chunks inserted for', data.title, ':', chunks.length);
    }
  }
  
  console.log('Immigration data addition completed!');
}

addImmigrationData().catch(console.error);

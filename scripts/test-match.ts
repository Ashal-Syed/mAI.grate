import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
dotenv.config();

const supa = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENAI_API_KEY!);
const embedModel = genAI.getGenerativeModel({ model: 'text-embedding-004' });

async function testMatch() {
  console.log('Testing match_chunks function...');
  
  // Test 1: Check if we have any chunks
  const { count: chunkCount } = await supa.from('chunks').select('*', { count: 'exact', head: true });
  console.log(`Total chunks in database: ${chunkCount}`);
  
  // Test 2: Check if we have any documents
  const { count: docCount } = await supa.from('documents').select('*', { count: 'exact', head: true });
  console.log(`Total documents in database: ${docCount}`);
  
  // Test 3: Get a sample chunk to see its structure
  const { data: sampleChunk } = await supa.from('chunks').select('*').limit(1).single();
  console.log('Sample chunk:', sampleChunk);
  
  // Test 4: Create embedding for "student visa"
  const emb = await embedModel.embedContent('student visa');
  console.log('Embedding created, length:', emb.embedding.values.length);
  
  // Test 5: Test match_chunks with different thresholds
  const thresholds = [0.1, 0.2, 0.3, 0.4, 0.5];
  
  for (const threshold of thresholds) {
    console.log(`\nTesting threshold: ${threshold}`);
    const { data: rows, error } = await supa.rpc('match_chunks', {
      query_embedding: emb.embedding.values,
      match_count: 5,
      match_threshold: threshold
    });
    
    if (error) {
      console.error('Error:', error);
    } else {
      console.log(`Results with threshold ${threshold}:`, rows?.length || 0);
      if (rows && rows.length > 0) {
        console.log('First result:', rows[0]);
      }
    }
  }
  
  // Test 6: Direct query to see what's in chunks
  const { data: chunks } = await supa.from('chunks').select('text, doc_id').limit(3);
  console.log('\nSample chunk texts:');
  chunks?.forEach((chunk, i) => {
    console.log(`${i + 1}. ${chunk.text.substring(0, 100)}...`);
  });
}

testMatch().catch(console.error);

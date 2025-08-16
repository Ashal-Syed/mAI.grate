import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
dotenv.config();

const supa = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

async function checkData() {
  console.log('Checking database contents...\n');
  
  // Count documents
  const { count: docCount, error: docError } = await supa
    .from('documents')
    .select('*', { count: 'exact', head: true });
  
  if (docError) {
    console.error('Error counting documents:', docError);
  } else {
    console.log(`📄 Documents in database: ${docCount}`);
  }
  
  // Count chunks
  const { count: chunkCount, error: chunkError } = await supa
    .from('chunks')
    .select('*', { count: 'exact', head: true });
  
  if (chunkError) {
    console.error('Error counting chunks:', chunkError);
  } else {
    console.log(`🔗 Chunks in database: ${chunkCount}`);
  }
  
  // List all documents
  const { data: documents, error: listError } = await supa
    .from('documents')
    .select('id, title, source, url')
    .order('crawled_at', { ascending: false });
  
  if (listError) {
    console.error('Error listing documents:', listError);
  } else {
    console.log('\n📋 Documents in database:');
    documents?.forEach((doc, index) => {
      console.log(`${index + 1}. ${doc.title} (${doc.source})`);
      console.log(`   URL: ${doc.url}`);
      console.log(`   ID: ${doc.id}\n`);
    });
  }
}

checkData().catch(console.error);

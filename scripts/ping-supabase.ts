// scripts/ping-supabase.ts
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' }); // load .env.local
dotenv.config();                       // fallback to .env

import { createClient } from '@supabase/supabase-js';

(async () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error('Missing env: NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
    process.exit(1);
  }

  const supa = createClient(url, key);
  const { data, error } = await supa.from('documents').select('id').limit(1);
  console.log({ ok: !error, error: error?.message, rows: data?.length ?? 0, url });
})();

# Australian Immigration Assistant (MVP)

**General info only. Not legal advice.**

## Quick start

```bash
pnpm i
cp .env.example .env.local   # fill keys
# In Supabase SQL Editor, run sql/001_init.sql
pnpm dev
# In another shell:
pnpm ingest
```

## Env

- `OPENAI_API_KEY`
- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY` (server only; Next.js API routes)

## Scripts

- `pnpm ingest` – crawl seed pages, chunk, embed, upsert.
- `pnpm dev` – run Next.js app.

## Notes

- Respects allowed hosts for day-1 MVP.
- Answers use RAG over ingested content with sources.
- Use Vercel cron `/api/reindex` for lightweight refresh when ready.

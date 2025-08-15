-- Enable pgvector (Supabase: Database -> Extensions)
create extension if not exists vector;

create table if not exists documents (
  id uuid primary key default gen_random_uuid(),
  source text not null,
  url text unique not null,
  title text,
  published_at timestamptz,
  crawled_at timestamptz not null default now(),
  sha256 text not null,
  content text not null
);

create table if not exists chunks (
  id bigserial primary key,
  doc_id uuid references documents(id) on delete cascade,
  idx int not null,
  text text not null,
  token_count int not null,
  embedding vector(1536)
);

create index if not exists chunks_embedding_idx on chunks using ivfflat (embedding vector_cosine_ops) with (lists = 100);
create index if not exists documents_source_pub_idx on documents (source, published_at desc);

-- similarity search RPC
create or replace function match_chunks(
  query_embedding vector(1536),
  match_count int default 6,
  match_threshold float default 0.2
)
returns table (
  doc_id uuid,
  url text,
  title text,
  content_snippet text,
  similarity float
)
language plpgsql as $$
begin
  return query
  select c.doc_id, d.url, d.title,
         left(c.text, 800) as content_snippet,
         1 - (c.embedding <=> query_embedding) as similarity
  from chunks c
  join documents d on d.id = c.doc_id
  where 1 - (c.embedding <=> query_embedding) >= match_threshold
  order by c.embedding <=> query_embedding
  limit match_count;
end $$;

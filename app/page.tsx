'use client';
import { useState } from 'react';

type Msg = { role: 'user' | 'assistant', text: string, sources?: {n:number,title:string,url:string}[] };

export default function Page() {
  const [q, setQ] = useState('');
  const [items, setItems] = useState<Msg[]>([]);
  const [busy, setBusy] = useState(false);

  async function ask(e: React.FormEvent) {
    e.preventDefault();
    if (!q.trim()) return;
    const me: Msg = { role: 'user', text: q };
    setItems(x => [...x, me]); setQ(''); setBusy(true);
    try {
      const res = await fetch('/api/ask', { method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify({ question: me.text }) });
      const data = await res.json();
      setItems(x => [...x, { role:'assistant', text: data.answer, sources: data.sources }]);
    } catch (e:any) {
      setItems(x => [...x, { role:'assistant', text: 'Error answering. Try again.' }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <header className="text-sm text-gray-600 space-y-2">
        <h1 className="text-2xl font-semibold">Australian Immigration Assistant</h1>
        <p><strong>Disclaimer:</strong> General information only. Not legal advice. For advice, see a registered migration agent (OMARA).</p>
      </header>

      <div className="space-y-4">
        {items.map((m, i) => (
          <div key={i} className={m.role==='user' ? 'text-right' : ''}>
            <div className={"inline-block rounded-2xl px-4 py-3 shadow-sm " + (m.role==='user' ? 'bg-blue-50' : 'bg-white')}>
              <div className="whitespace-pre-wrap">{m.text}</div>
              {m.sources && m.sources.length > 0 && (
                <div className="mt-3 text-xs">
                  <div className="font-semibold">Sources</div>
                  <ul className="list-disc pl-5 space-y-1">
                    {m.sources.slice(0,5).map((s)=>(
                      <li key={s.n}><a href={s.url} target="_blank" rel="noreferrer">[{s.n}] {s.title || s.url}</a></li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={ask} className="flex gap-2">
        <input value={q} onChange={e=>setQ(e.target.value)} className="flex-1 border rounded-xl px-3 py-2" placeholder="Ask about a visa..." />
        <button disabled={busy} className="px-4 py-2 rounded-xl border">{busy ? '...' : 'Ask'}</button>
      </form>
    </main>
  );
}

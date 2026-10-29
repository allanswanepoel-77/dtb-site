import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Search, ShieldAlert } from "lucide-react";

export default function Results() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(12);

  useEffect(() => {
    let active = true;
    fetch("/results-preview.json")
      .then((response) => { if (!response.ok) throw new Error("Could not load results"); return response.json(); })
      .then((data) => { if (active) setResults(Array.isArray(data) ? data : []); })
      .catch(() => { if (active) setError("Results are temporarily unavailable."); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);

  const filtered = useMemo(() => results.filter((result) =>
    `${result.author} ${result.summary} ${result.date}`.toLowerCase().includes(query.toLowerCase())
  ), [results, query]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-white/10 bg-gradient-to-b from-orange-500/10 to-transparent">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-orange-300">DTB Traders Community</div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">Trading Results</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/70">Browse trading outcomes shared by community members, including positive and negative experiences. These are member-reported examples, not audited performance records.</p>
          <div className="mt-7 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm leading-6 text-white/70"><strong className="text-amber-300">Preview:</strong> This page currently displays a limited sample from the existing scanner archive. Automatic updates and screenshot migration are not connected yet.</div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div><h2 className="text-2xl font-bold">Community posts</h2><p className="mt-1 text-sm text-white/50">{filtered.length} preview records</p></div>
          <label className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 sm:w-80"><Search size={18} className="text-white/50" /><input value={query} onChange={(event) => { setQuery(event.target.value); setVisible(12); }} placeholder="Search posts" aria-label="Search results" className="w-full bg-transparent text-sm outline-none placeholder:text-white/40" /></label>
        </div>
        {loading && <p className="text-white/60">Loading results…</p>}
        {error && <p role="alert" className="text-amber-300">{error}</p>}
        {!loading && !error && filtered.length === 0 && <p className="text-white/60">No matching results.</p>}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.slice(0, visible).map((result) => (
            <article key={result.id} className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-white/50"><span>{result.date || "Date unavailable"}</span><span>{result.image_count ? `${result.image_count} archived image(s)` : "Text post"}</span></div>
              <h3 className="mt-4 font-semibold text-white/90">{result.author || "Community member"}</h3>
              <p className="mt-3 flex-1 whitespace-pre-wrap break-words text-sm leading-7 text-white/70">{result.summary || "No text provided."}</p>
              {result.discord_link?.startsWith("https://discord.com/") && <a href={result.discord_link} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-300 hover:text-orange-200">Original Discord post <ArrowUpRight size={15} /></a>}
            </article>
          ))}
        </div>
        {visible < filtered.length && <div className="mt-10 text-center"><button onClick={() => setVisible((n) => n + 12)} className="rounded-xl bg-dtb px-6 py-3 font-semibold hover:bg-dtb-hover">Load more</button></div>}
        <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm leading-7 text-white/65"><div className="mb-2 flex items-center gap-2 font-semibold text-white"><ShieldAlert size={18} /> Important risk disclosure</div>Futures trading involves substantial risk of loss. Community posts are self-reported, may include simulated or evaluation-account results, and have not been independently verified. The sample is not representative of typical results. Past performance does not predict future results. <Link to="/#risk-disclosure" className="text-orange-300 underline">Read the full risk disclosure.</Link></div>
      </section>
    </main>
  );
}

import logo from "../assets/brand/dtb-logo.png";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// ✅ IMPORT IMAGES
import article1Img from "../assets/articles/article1.png";
import article2Img from "../assets/articles/article2.png";
import article3Img from "../assets/articles/article3.png";
import article4Img from "../assets/articles/article4.png";
import article5Img from "../assets/articles/article5.png";
import article6Img from "../assets/articles/article6.png";

export default function Articles() {
  const articles = [
    {
      id: "article-1",
      title: "The Foggy Map vs. the Laser Blueprint",
      date: "June 2025",
      excerpt: "By Jason Taylor",
      image: article1Img,
      imageAlt: "Trading chart example",
      body: `Imagine driving through a city using a map that redraws itself every five minutes. Streets shift. Important details disappear. Just when you think you understand the route, everything changes again.

That’s what trading with 5-minute charts can feel like.

Time-based bars divide the market into fixed intervals — but markets don’t move in time. They move when orders interact and price actually changes. When price is forced into arbitrary time boxes, the real structure of the market can get lost.

DTB Bars take a different approach.

Instead of waiting for the clock, DTB Bars form only when price moves. Built directly from raw tick data, they show reaction levels created by real market activity — not by artificial time slices.

Trade from Structure, Not Guesswork

Traditional candlestick patterns often change or disappear when you switch timeframes. That’s because they’re built on chart settings, not on true price movement.

DTB Bars focus on what actually happened:
• Bars form only when price reaches meaningful levels  
• Structure stays consistent across views  
• Signals come from movement, not timing  

You’re not interpreting shapes — you’re responding to real reactions in the market.

Why 5-Minute Bars Still Exist?

They’re common mostly because they’re easy:
• Default settings on most platforms  
• Legacy systems built around time intervals  
• Simpler visuals for beginners  
• Convenient? Yes. Precise? Not always.

Markets Move by Price — Not by the Clock

A single 5-minute candle can represent slow chop, a breakout, or a fast reversal — yet it looks the same. That’s where confusion starts.`,
    },
    {
      id: "article-2",
      title: "Article Title 2",
      date: "March 2026",
      excerpt: "Short preview text for article two.",
      image: article2Img,
      imageAlt: "Market structure example",
      body: `Paste full article 2 content here.`,
    },
    {
      id: "article-3",
      title: "Article Title 3",
      date: "March 2026",
      excerpt: "Short preview text for article three.",
      image: article3Img,
      imageAlt: "Execution workflow",
      body: `Paste full article 3 content here.`,
    },
    {
      id: "article-4",
      title: "Article Title 4",
      date: "March 2026",
      excerpt: "Short preview text for article four.",
      image: article4Img,
      imageAlt: "Risk management concept",
      body: `Paste full article 4 content here.`,
    },
    {
      id: "article-5",
      title: "Article Title 5",
      date: "March 2026",
      excerpt: "Short preview text for article five.",
      image: article5Img,
      imageAlt: "System diagram",
      body: `Paste full article 5 content here.`,
    },
    {
      id: "article-6",
      title: "Article Title 6",
      date: "March 2026",
      excerpt: "Short preview text for article six.",
      image: article6Img,
      imageAlt: "Strategy example",
      body: `Paste full article 6 content here.`,
    },
  ];

  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* =======================
          HEADER
      ======================= */}
      <header className="border-b border-white/10">
        {/* First Row */}
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center">
            <img src={logo} alt="DTB Traders" className="h-24 w-auto" />
          </Link>

          <Link
            to="/"
            className="text-sm text-white/70 hover:text-white"
          >
            Back to Site
          </Link>
        </div>

        {/* Second Row — Right Aligned Get Started */}
        <div className="mx-auto max-w-6xl px-4 pb-6 pt-2 flex justify-end border-t border-white/5">
          <Link
            to="/#pricing"
            className="inline-flex items-center gap-2 rounded-xl bg-dtb px-6 py-3 text-sm font-semibold hover:bg-dtb-hover"
          >
            Get Started <ArrowRight size={18} />
          </Link>
        </div>
      </header>

      {/* =======================
          MAIN
      ======================= */}
      <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Articles
        </h1>

        <p className="mt-4 max-w-2xl text-white/70">
          Research, system design, and structured execution insights from DTB
          Traders.
        </p>

        {/* Article Cards */}
        <div className="mt-12 space-y-10">
          {articles.map((article) => (
            <div
              key={article.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              {article.image && (
                <img
                  src={article.image}
                  alt={article.imageAlt || article.title}
                  className="w-full h-64 object-cover rounded-xl mb-6 border border-white/10"
                  loading="lazy"
                />
              )}

              <div className="text-sm text-white/60">{article.date}</div>

              <h2 className="mt-2 text-2xl font-semibold">
                {article.title}
              </h2>

              <p className="mt-2 text-white/70">{article.excerpt}</p>

              <a
                href={`#${article.id}`}
                className="mt-4 inline-block text-sm underline hover:text-white"
              >
                Read Article
              </a>
            </div>
          ))}
        </div>

        <hr className="my-16 border-white/10" />

        {/* Full Articles */}
        <div className="space-y-24">
          {articles.map((article) => (
            <article key={article.id} id={article.id}>
              <h2 className="text-3xl font-bold tracking-tight">
                {article.title}
              </h2>

              <div className="mt-2 text-sm text-white/60">
                {article.date}
              </div>

              {article.image && (
                <img
                  src={article.image}
                  alt={article.imageAlt || article.title}
                  className="w-full max-h-[500px] object-cover rounded-2xl border border-white/10 mt-6"
                  loading="lazy"
                />
              )}

              <div className="mt-6 text-white/75 leading-relaxed whitespace-pre-line">
                {article.body}
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* =======================
          FOOTER
      ======================= */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/55 flex justify-between">
          <div>© {year} DTB Traders. All rights reserved.</div>
          <Link className="hover:text-white" to="/">
            Home
          </Link>
        </div>
      </footer>
    </div>
  );
}


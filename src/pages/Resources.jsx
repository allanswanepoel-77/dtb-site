import { Link } from "react-router-dom";
import { ArrowRight, Shield } from "lucide-react";

export default function Resources() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-5xl font-bold">Resources</h1>

      <section className="mt-10 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-3xl font-bold">NinjaTrader 8 Software Free Download</h2>
        <p className="mt-4 text-white/70">Our recommended trading platform.</p>

        <ul className="mt-6 space-y-3 text-white/75">
          <li>• Real-time futures data</li>
          <li>• Advanced charting</li>
          <li>• Trade simulator</li>
          <li>• Strategy development and backtesting</li>
        </ul>

        <a
          href="https://ninjatrader.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex rounded-xl bg-dtb px-6 py-3 font-semibold hover:bg-dtb-hover"
        >
          Get Started for Free <ArrowRight size={18} />
        </a>
      </section>

      <section className="mt-8 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-3xl font-bold">Recommended Market Data Feed</h2>
        <p className="mt-4 text-white/70">
          Kinetick delivers reliable, fast, cost-effective market data for active traders.
        </p>

        <a
          href="https://kinetick.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex rounded-xl bg-dtb px-6 py-3 font-semibold hover:bg-dtb-hover"
        >
          Get It Now <ArrowRight size={18} />
        </a>
      </section>

      <section className="mt-8 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-3xl font-bold">Make Trading Simplified with DTB</h2>
        <p className="mt-4 text-white/70">
          Get the best indicators to highlight important actions for your live trading needs.
        </p>

        <Link
          to="/jumpstart"
          className="mt-6 inline-flex rounded-xl bg-dtb px-6 py-3 font-semibold hover:bg-dtb-hover"
        >
          View Our Products <ArrowRight size={18} />
        </Link>
      </section>

      <section className="mt-8 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-300">
          <Shield size={18} /> Risk Disclosure
        </div>
        <p className="mt-4 text-sm text-white/60 leading-relaxed">
          Futures trading contains substantial risk and is not for every investor.
          An investor could potentially lose all or more than the initial investment.
          Past performance is not necessarily indicative of future results.
        </p>
      </section>
    </div>
  );
}
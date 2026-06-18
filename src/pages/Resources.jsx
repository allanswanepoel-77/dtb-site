import { Link } from "react-router-dom";
import { ArrowRight, Shield } from "lucide-react";

export default function Resources() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-5xl font-bold">Resources</h1>

      {/* =======================
          NINJATRADER
      ======================= */}
      <section className="mt-10 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-3xl font-bold">
          NinjaTrader 8 Software Free Download
        </h2>

        <p className="mt-4 text-white/70 leading-relaxed">
          NinjaTrader® is our #1 recommended trading platform preferred by
          traders worldwide, including our clients.
        </p>

        <p className="mt-6 text-white/70">
          Download NinjaTrader and receive immediate FREE access to:
        </p>

        <ul className="mt-4 space-y-3 text-white/75">
          <li>• Real-time futures data</li>
          <li>• Advanced charting</li>
          <li>• Trade simulator</li>
          <li>• Strategy development and backtesting</li>
        </ul>

        <p className="mt-6 text-white/70 leading-relaxed">
          NinjaTrader's award-winning trading platform is consistently voted an
          industry leader by the trading community. Featuring thousands of Apps
          and Add-Ons for virtually unlimited customization, NinjaTrader is used
          by more than 500,000 traders for advanced market analysis,
          professional charting, and fast order execution.
        </p>

        <p className="mt-6 text-white/70 leading-relaxed">
          For new traders, start preparing for the live markets with a free
          trading simulator featuring real-time market data. Develop your
          skills, test strategies, and gain confidence before risking real
          capital.
        </p>

        <a
          href="https://ninjatrader.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-xl bg-dtb px-6 py-3 font-semibold hover:bg-dtb-hover"
        >
          Download NinjaTrader Free
        </a>
      </section>

      {/* =======================
          KINETICK
      ======================= */}
      <section className="mt-8 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-3xl font-bold">
          Recommended Market Data Feed
        </h2>

        <p className="mt-4 text-white/70 leading-relaxed">
          Kinetick® delivers reliable, fast, and cost-effective market data to
          help level the playing field for active traders.
        </p>

        <p className="mt-6 text-white/70 leading-relaxed">
          Take advantage of unfiltered, real-time quotes for stocks, futures,
          and forex that exceed the expectations of the world's most demanding
          traders, including us.
        </p>

        <p className="mt-6 text-white/70 leading-relaxed">
          Get started with FREE end-of-day historical market data directly
          through the NinjaTrader platform and learn how you can significantly
          reduce CME Group Globex exchange fees on real-time market data with
          Kinetick.
        </p>

        <a
          href="https://kinetick.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-xl bg-dtb px-6 py-3 font-semibold hover:bg-dtb-hover"
        >
          Get Started with Free EOD Data
        </a>
      </section>

      {/* =======================
          DTB TRADERS
      ======================= */}
      <section className="mt-8 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-3xl font-bold">
          Make Trading Simplified with DTB
        </h2>

        <p className="mt-4 text-white/70">
          Get the best indicators to highlight important actions for your live
          trading needs.
        </p>

        <Link
          to="/jumpstart"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-dtb px-6 py-3 font-semibold hover:bg-dtb-hover"
        >
          View Our Products <ArrowRight size={18} />
        </Link>
      </section>

      {/* =======================
          RISK DISCLOSURE
      ======================= */}
      <section className="mt-8 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-300">
          <Shield size={18} /> Risk Disclosure
        </div>

        <p className="mt-4 text-sm text-white/60 leading-relaxed">
          Futures trading contains substantial risk and is not for every
          investor. An investor could potentially lose all or more than the
          initial investment. Risk capital is money that can be lost without
          jeopardizing one's financial security or lifestyle. Past performance
          is not necessarily indicative of future results.
        </p>
      </section>
    </div>
  );
}
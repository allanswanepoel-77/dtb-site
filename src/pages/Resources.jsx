import { Link } from "react-router-dom";
import { ArrowRight, Shield } from "lucide-react";

import NinjaTraderLogo from "../assets/resources/NinjaTrader_Logo.jpg";
import KinetickLogo from "../assets/resources/Kinetick_Logo-1.jpg";

export default function Resources() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-5xl font-bold text-center">Resources</h1>

        <p className="mt-4 text-center text-white/70 max-w-3xl mx-auto">
          Recommended tools, software, and resources used by DTB Traders to help
          traders build a professional trading environment.
        </p>

        {/* =======================
            NINJATRADER
        ======================= */}
        <section className="mt-12 mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="flex justify-center mb-8">
            <img
              src={NinjaTraderLogo}
              alt="NinjaTrader"
              className="h-20 w-auto object-contain"
            />
          </div>

          <h2 className="text-3xl font-bold text-center">
            NinjaTrader 8 Software Free Download
          </h2>

          <p className="mt-6 text-white/70 leading-relaxed">
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
            NinjaTrader's award-winning trading platform is consistently voted
            an industry leader by the trading community. Featuring thousands of
            Apps and Add-Ons for virtually unlimited customization,
            NinjaTrader is used by more than 500,000 traders for advanced
            market analysis, professional charting, and fast order execution.
          </p>

          <p className="mt-6 text-white/70 leading-relaxed">
            For new traders, start preparing for the live markets with a free
            trading simulator featuring real-time market data. Develop your
            skills, test strategies, and gain confidence before risking real
            capital.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="https://ninjatrader.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-dtb px-6 py-3 font-semibold hover:bg-dtb-hover"
            >
              Download NinjaTrader Free
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* =======================
            KINETICK
        ======================= */}
        <section className="mt-10 mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="flex justify-center mb-8">
            <img
              src={KinetickLogo}
              alt="Kinetick"
              className="h-24 w-auto object-contain bg-white rounded-lg p-2"
            />
          </div>

          <h2 className="text-3xl font-bold text-center">
            Recommended Market Data Feed
          </h2>

          <p className="mt-6 text-white/70 leading-relaxed">
            Kinetick® delivers reliable, fast and cost-effective market data to
            help level the playing field for active traders.
          </p>

          <p className="mt-6 text-white/70 leading-relaxed">
            Take advantage of unfiltered, real-time quotes for stocks, futures,
            and forex that exceed the expectations of the world's most demanding
            traders, like us!
          </p>

          <p className="mt-6 text-white/70 leading-relaxed">
            Get started with FREE end-of-day historical market data directly
            through the NinjaTrader platform and learn how you can significantly
            reduce CME Group Globex exchange fees on real-time market data with
            Kinetick.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="https://kinetick.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-dtb px-6 py-3 font-semibold hover:bg-dtb-hover"
            >
              Get Started with Free EOD Data
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* =======================
            DTB TRADERS
        ======================= */}
        <section className="mt-10 mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl font-bold text-center">
            Make Trading Simplified with DTB Traders
          </h2>

          <p className="mt-6 text-center text-white/70 leading-relaxed">
            DTB Traders is a complete trading ecosystem consisting of
            proprietary indicators, advanced bar types, automated strategies,
            trade management tools, and a structured execution framework
            designed to remove emotion and improve consistency.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              to="/jumpstart"
              className="inline-flex items-center gap-2 rounded-xl bg-dtb px-6 py-3 font-semibold hover:bg-dtb-hover"
            >
              View Our Products
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* =======================
            RISK DISCLOSURE
        ======================= */}
        <section className="mt-10 mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-300">
            <Shield size={18} /> Risk Disclosure
          </div>

          <p className="mt-4 text-sm text-white/60 leading-relaxed">
            Futures trading contains substantial risk and is not for every
            investor. An investor could potentially lose all or more than the
            initial investment. Risk capital is money that can be lost without
            jeopardizing one's financial security or lifestyle. Past
            performance is not necessarily indicative of future results.
          </p>
        </section>
      </div>
    </div>
  );
}
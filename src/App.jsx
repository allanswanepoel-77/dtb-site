import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Shield,
  Zap,
  MessageCircle,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
      >
        <span className="font-semibold">{q}</span>
        <span
          className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`}
          aria-hidden="true"
        >
          <ChevronDown size={18} />
        </span>
      </button>

      {open && (
        <div className="px-6 pb-5 text-sm text-white/70 leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* =======================
          TOP NAV
      ======================= */}
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="font-bold tracking-tight">DTB Traders</div>

          <nav className="text-sm text-white/70 hidden md:flex gap-6">
            <a className="hover:text-white" href="#system">System</a>
            <a className="hover:text-white" href="#components">Components</a>
            <a className="hover:text-white" href="#results">Results</a>
            <a className="hover:text-white" href="#pricing">Pricing</a>
            <a className="hover:text-white" href="#faq">FAQ</a>
          </nav>

          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-xl bg-dtb px-4 py-2 text-sm font-semibold hover:bg-dtb-hover"
          >
            Get Started <ArrowRight size={18} />
          </a>
        </div>
      </header>

      {/* =======================
          HERO
      ======================= */}
      <motion.main
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto max-w-6xl px-4 py-16"
      >
        <p className="text-sm text-white/60">Trade by Management Futures Trading System</p>

        <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight">
          A complete trading system — not just indicators.
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-white/70">
          DTB Traders delivers integrated strategies, indicators, and execution workflows engineered
          to work together as one system.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="#pricing"
            className="rounded-xl bg-dtb px-6 py-3 font-semibold hover:bg-dtb-hover inline-flex items-center justify-center gap-2"
          >
            Get access <ArrowRight size={18} />
          </a>

          <a
            href="#system"
            className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white/90 hover:bg-white/5 inline-flex items-center justify-center gap-2"
          >
            See how it works <ExternalLink size={18} />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { title: "Rules-based", text: "Designed to remove emotion." },
            { title: "Integrated", text: "Built as one coherent system." },
            { title: "Repeatable", text: "Consistency over hype." },
          ].map((x) => (
            <div
              key={x.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="text-sm font-semibold">{x.title}</div>
              <div className="mt-1 text-sm text-white/70">{x.text}</div>
            </div>
          ))}
        </div>
      </motion.main>

      {/* =======================
          WHY DTB IS DIFFERENT
      ======================= */}
      <section id="system" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Why DTB Traders is different
          </h2>

          <p className="mt-4 max-w-2xl text-white/70">
            Most trading systems are a pile of disconnected indicators.
            DTB Traders is a fully integrated, institutional-grade trading system
            engineered as one coherent machine.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Integrated System",
                text: "Strategies, indicators, and execution logic designed together as one unified system.",
              },
              {
                title: "Rules-Based Automation",
                text: "No discretion. No emotions. Pure rules-based execution.",
              },
              {
                title: "Built for Scale",
                text: "Designed to scale from small accounts to serious capital deployment.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =======================
          SYSTEM COMPONENTS
      ======================= */}
      <section id="components" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            System Components
          </h2>

          <p className="mt-4 max-w-3xl text-white/70">
            DTB Traders is built as a complete trading stack. Every component is engineered
            to work together — not bolted on from different vendors.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Automated Trading Strategies",
                text: "Rules-based strategies designed for consistency and repeatability.",
              },
              {
                title: "Advanced Bar Types",
                text: "Custom bar constructions engineered to reduce noise and reveal market structure.",
              },
              {
                title: "Proprietary Indicators",
                text: "Purpose-built indicators created specifically for DTB strategies.",
              },
              {
                title: "Execution Engine",
                text: "Precise, automated execution logic that removes emotion and human error.",
              },
              {
                title: "Risk & Trade Management",
                text: "Embedded risk controls, trade filters, and position management rules.",
              },
              {
                title: "System Updates & Evolution",
                text: "Ongoing system enhancements based on performance data and market behavior.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =======================
          RESULTS & PROOF
      ======================= */}
      <section id="results" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Results & Proof
              </h2>
              <p className="mt-4 max-w-3xl text-white/70">
                Proof matters — but it has to be the right kind of proof. DTB Traders focuses on
                transparent process, repeatable execution, and performance tracking you can verify.
              </p>
            </div>

            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-dtb px-5 py-3 font-semibold hover:bg-dtb-hover"
            >
              See membership options <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { kpi: "Win Rate", value: "—", note: "Replace with your tracked figure" },
              { kpi: "Avg. R / Trade", value: "—", note: "Risk-adjusted expectancy" },
              { kpi: "Max Drawdown", value: "—", note: "Define timeframe + method" },
              { kpi: "Trades Tracked", value: "—", note: "Live / sim / verified" },
            ].map((s) => (
              <div
                key={s.kpi}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-sm text-white/60">{s.kpi}</div>
                <div className="mt-2 text-3xl font-extrabold tracking-tight">{s.value}</div>
                <div className="mt-2 text-xs text-white/55">{s.note}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="inline-flex items-center gap-2 text-sm font-semibold">
              <Shield size={16} /> Risk Disclosure
            </div>
            <p className="mt-2 text-xs text-white/60 leading-relaxed">
              Futures trading involves substantial risk of loss and is not suitable for all investors.
              Past performance is not indicative of future results. Any performance metrics or examples
              shown on this site should be verified independently and may reflect simulated results,
              which have inherent limitations. This is not financial advice.
            </p>
          </div>
        </div>
      </section>

      {/* =======================
          PRICING
      ======================= */}
      <section id="pricing" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Pricing
              </h2>
              <p className="mt-4 max-w-3xl text-white/70">
                Choose the membership level that fits how you want to trade. Replace the prices and
                links with your real offer details when ready.
              </p>
            </div>

            <div className="text-sm text-white/60">
              <span className="inline-flex items-center gap-2">
                <Zap size={16} /> Instant access after signup
              </span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 flex flex-col">
              <div className="text-sm text-white/60">Starter</div>
              <div className="mt-2 text-2xl font-bold">$/mo</div>
              <div className="mt-1 text-sm text-white/60">
                Best for new members getting oriented.
              </div>

              <ul className="mt-6 space-y-3 text-sm text-white/75">
                {[
                  "Core indicators",
                  "Getting started guide",
                  "Community access",
                  "Basic templates",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <Check size={18} className="mt-0.5" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="mt-7 rounded-xl border border-white/15 px-5 py-3 font-semibold text-white/90 hover:bg-white/5 text-center"
              >
                Choose Starter
              </a>

              <div className="mt-3 text-xs text-white/50">
                Replace with your checkout link.
              </div>
            </div>

            {/* Pro (highlight) */}
            <div className="rounded-2xl border border-dtb/40 bg-gradient-to-b from-dtb/20 to-white/5 p-7 flex flex-col">
              <div className="flex items-center justify-between">
                <div className="text-sm text-white/60">Pro</div>
                <div className="text-xs font-semibold rounded-full bg-dtb px-3 py-1">
                  Most Popular
                </div>
              </div>

              <div className="mt-2 text-2xl font-bold">$/mo</div>
              <div className="mt-1 text-sm text-white/60">
                Best balance of tools + support.
              </div>

              <ul className="mt-6 space-y-3 text-sm text-white/75">
                {[
                  "Everything in Starter",
                  "Automated strategy templates",
                  "Advanced bar types",
                  "Weekly market game plan",
                  "Priority support / office hours",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <Check size={18} className="mt-0.5" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="mt-7 rounded-xl bg-dtb px-5 py-3 font-semibold hover:bg-dtb-hover text-center inline-flex items-center justify-center gap-2"
              >
                Choose Pro <ArrowRight size={18} />
              </a>

              <div className="mt-3 text-xs text-white/50">
                Replace with your checkout link.
              </div>
            </div>

            {/* Elite */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 flex flex-col">
              <div className="text-sm text-white/60">Elite</div>
              <div className="mt-2 text-2xl font-bold">$/mo</div>
              <div className="mt-1 text-sm text-white/60">
                For serious traders who want the full system.
              </div>

              <ul className="mt-6 space-y-3 text-sm text-white/75">
                {[
                  "Everything in Pro",
                  "Premium strategies / modules",
                  "1:1 onboarding call (optional)",
                  "Performance review workflows",
                  "Early access to updates",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <Check size={18} className="mt-0.5" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="mt-7 rounded-xl border border-white/15 px-5 py-3 font-semibold text-white/90 hover:bg-white/5 text-center"
              >
                Choose Elite
              </a>

              <div className="mt-3 text-xs text-white/50">
                Replace with your checkout link.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======================
          FAQ (SECTION)
      ======================= */}
      <section id="faq" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            FAQ
          </h2>
          <p className="mt-4 max-w-3xl text-white/70">
            Quick answers to common questions. (We can tailor these to your exact policies and platform.)
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "Is this financial advice?",
                a: "No. DTB Traders provides tools and education. You are responsible for your own trading decisions and risk management.",
              },
              {
                q: "Is performance guaranteed?",
                a: "No. Trading involves risk and markets change. Past performance is not indicative of future results. Always verify and trade responsibly.",
              },
              {
                q: "What platform is DTB Traders built for?",
                a: "Update this with your actual platform details (e.g., NinjaTrader), including version requirements and any data feed recommendations.",
              },
              {
                q: "Can I cancel anytime?",
                a: "If you offer monthly billing, yes. Update this answer to match your real billing and cancellation policy.",
              },
              {
                q: "Do you support prop firms / evaluation accounts?",
                a: "Update this based on your policy. Many members use systems in eval accounts, but rules vary by firm.",
              },
              {
                q: "What markets does the system trade?",
                a: "Update this with the futures products you target (e.g., ES, NQ, YM, CL, GC) and any session/time window assumptions.",
              },
            ].map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="inline-flex items-center gap-2 text-sm font-semibold">
              <MessageCircle size={16} /> Still have questions?
            </div>
            <p className="mt-2 text-sm text-white/70">
              Join the community or reach out and we’ll point you to the right plan and onboarding path.
            </p>

            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a
                href="#pricing"
                className="rounded-xl bg-dtb px-6 py-3 font-semibold hover:bg-dtb-hover inline-flex items-center justify-center gap-2"
              >
                See pricing <ArrowRight size={18} />
              </a>

              <a
                href="#"
                className="rounded-xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/5 inline-flex items-center justify-center gap-2"
              >
                Join community <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =======================
          STRONG CTA FOOTER
      ======================= */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                  Ready to trade with a real system?
                </h3>
                <p className="mt-3 max-w-2xl text-white/70">
                  Stop stitching together disconnected tools. Get a complete, integrated trading system
                  designed for repeatable execution.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#pricing"
                    className="rounded-xl bg-dtb px-6 py-3 font-semibold hover:bg-dtb-hover inline-flex items-center justify-center gap-2"
                  >
                    Choose a plan <ArrowRight size={18} />
                  </a>

                  <a
                    href="#"
                    className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white/90 hover:bg-white/5 inline-flex items-center justify-center gap-2"
                  >
                    Join the community <MessageCircle size={18} />
                  </a>
                </div>

                <div className="mt-5 text-xs text-white/55">
                  Replace CTA links with: Checkout URL • Discord invite • Contact page.
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6 md:w-[360px]">
                <div className="text-sm font-semibold">Quick Links</div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/70">
                  <a className="hover:text-white" href="#system">System</a>
                  <a className="hover:text-white" href="#components">Components</a>
                  <a className="hover:text-white" href="#results">Results</a>
                  <a className="hover:text-white" href="#pricing">Pricing</a>
                  <a className="hover:text-white" href="#faq">FAQ</a>
                  <a className="hover:text-white" href="#get-started">Get Started</a>
                </div>

                <div className="mt-6 text-xs text-white/55 leading-relaxed">
                  <span className="inline-flex items-center gap-2">
                    <Shield size={14} /> Trading involves risk.
                  </span>
                  <br />
                  Past performance is not indicative of future results.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-white/55">
            <div>© {year} DTB Traders. All rights reserved.</div>
            <div className="flex gap-6">
              <a className="hover:text-white" href="#">Privacy</a>
              <a className="hover:text-white" href="#">Terms</a>
              <a className="hover:text-white" href="#">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}



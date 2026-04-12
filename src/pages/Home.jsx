import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Shield,
  Zap,
  MessageCircle,
  ExternalLink,
  ChevronDown,
  BookOpen,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// ✅ Logo
import logo from "../assets/brand/dtb-logo.png";

const STRIPE_LINK = "https://buy.stripe.com/4gMeVe4qb1BQ6zH5ka1sQ0j";
const FORM_LINK = "https://forms.gle/95kqNiQ6q6CQ3Trg9";

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

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* =======================
          TOP NAV
      ======================= */}
      <header className="border-b border-white/10">
        {/* Row 1: Logo + Nav */}
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center">
            <img src={logo} alt="DTB Traders" className="h-24 w-auto" />
          </Link>

          <nav className="text-sm text-white/70 hidden md:flex gap-6">
            <a className="hover:text-white" href="#system">
              System
            </a>
            <Link className="hover:text-white" to="/ebook">
              Free eBook
            </Link>
            <a className="hover:text-white" href="#components">
              Components
            </a>
            <a className="hover:text-white" href="#results">
              Results
            </a>
            <a className="hover:text-white" href="#pricing">
              Pricing
            </a>
            <Link className="hover:text-white" to="/articles">
              Articles
            </Link>
            <a className="hover:text-white" href="#faq">
              FAQ
            </a>
          </nav>
        </div>

        {/* Row 2: Get Started (right aligned) */}
        <div className="mx-auto max-w-6xl px-4 pb-6 pt-2 flex justify-end border-t border-white/5">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/ebook"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold hover:bg-white/5"
            >
              Free eBook <BookOpen size={18} />
            </Link>

            <a
              href={STRIPE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-dtb px-6 py-3 text-sm font-semibold hover:bg-dtb-hover"
            >
              Get Started <ArrowRight size={18} />
            </a>
          </div>
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
        <p className="text-sm text-white/60">
          Trade by Management Futures Trading System
        </p>

        <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight">
          A complete trading system — not just indicators.
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-white/70">
          DTB Traders delivers integrated strategies, indicators, and execution
          workflows engineered to work together as one system.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href={STRIPE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-dtb px-6 py-3 font-semibold hover:bg-dtb-hover inline-flex items-center justify-center gap-2"
          >
            Get Instant Access <ArrowRight size={18} />
          </a>

          <Link
            to="/ebook"
            className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white/90 hover:bg-white/5 inline-flex items-center justify-center gap-2"
          >
            Get the Free eBook <BookOpen size={18} />
          </Link>

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
          EBOOK SECTION
      ======================= */}
      <section id="ebook" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
                <BookOpen size={16} />
                New Free eBook
              </div>

              <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight">
                If trading has ever felt harder the more effort you put in…
              </h2>

              <p className="mt-5 max-w-2xl text-lg text-white/75">
                This guide explains why.
              </p>

              <p className="mt-4 max-w-2xl text-white/70 leading-relaxed">
                Not more strategies. Not more indicators. Just a clear
                explanation of what’s actually going on — and why things haven’t
                worked the way you expected.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Why effort alone makes trading feel heavier",
                  "Why time-based charts create confusion and false signals",
                  "Why most trading education keeps you stuck in interpretation",
                  "What actually needs to change before results can stabilize",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <Check className="mt-0.5 shrink-0 text-yellow-400" size={18} />
                    <p className="text-sm text-white/80">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/ebook"
                  className="rounded-xl bg-dtb px-6 py-3 font-semibold hover:bg-dtb-hover inline-flex items-center justify-center gap-2"
                >
                  Get the Free eBook <ArrowRight size={18} />
                </Link>

                <Link
                  to="/ebook"
                  className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white/90 hover:bg-white/5 inline-flex items-center justify-center gap-2"
                >
                  Download the Free eBook <BookOpen size={18} />
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-2 rounded-[2.5rem] bg-yellow-400/10 blur-2xl opacity-80" />

                <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-900 via-black to-neutral-950 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
                  <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
                    <img
                      src="/ebook-cover.jpg"
                      alt="DTB Traders eBook cover"
                      className="h-full w-full object-cover contrast-110 brightness-105"
                    />
                  </div>

                  <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-black px-3 py-1 rounded-full shadow-lg">
                    FREE
                  </div>

                  <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/80 backdrop-blur-sm">
                    DTB Traders eBook
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======================
          WHY DTB IS DIFFERENT
      ======================= */}
      <section id="system" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Why DTB Traders is different
          </h2>

          <p className="mt-4 max-w-2xl text-white/70">
            Most trading systems are a pile of disconnected indicators. DTB
            Traders is a fully integrated, institutional-grade trading system
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
            DTB Traders is built as a complete trading stack. Every component is
            engineered to work together — not bolted on from different vendors.
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
                Real Activity. Real Outcomes.
              </h2>
              <p className="mt-4 max-w-3xl text-white/70">
                DTB Traders is built around transparency, repeatable process,
                and real-time visibility — not selective screenshots, hindsight,
                or backtest-style hype.
              </p>
            </div>

            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-dtb px-5 py-3 font-semibold hover:bg-dtb-hover"
            >
              See offer <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                kpi: "Result Updates",
                value: "5,000+",
                note: "Captured from live group activity",
              },
              {
                kpi: "Winning Outcomes",
                value: "1,500+",
                note: "Documented profit-based result posts",
              },
              {
                kpi: "Loss Transparency",
                value: "Fully Visible",
                note: "Both wins and losses are shared openly",
              },
              {
                kpi: "Environment",
                value: "Live + Real",
                note: "Not dependent on backtests alone",
              },
            ].map((s) => (
              <div
                key={s.kpi}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-sm text-white/60">{s.kpi}</div>
                <div className="mt-2 text-3xl font-extrabold tracking-tight">
                  {s.value}
                </div>
                <div className="mt-2 text-xs text-white/55">{s.note}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-3xl">
            <p className="text-white/75 leading-8">
              Unlike most trading systems that rely on selective screenshots or
              polished backtested performance, DTB Traders operates in a
              transparent, real-time environment where both winning and losing
              outcomes are visible.
            </p>

            <p className="mt-4 text-white/70 leading-8">
              The focus is not on pretending every day is perfect. It is on
              building a structured, repeatable process that can be observed,
              evaluated, and improved over time.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="inline-flex items-center gap-2 text-sm font-semibold">
              <Shield size={16} /> Risk Disclosure
            </div>
            <p className="mt-2 text-xs text-white/60 leading-relaxed">
              Futures trading involves substantial risk of loss and is not suitable
              for all investors. Past performance is not indicative of future
              results. Any performance metrics or examples shown on this site
              should be verified independently and may reflect simulated results,
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
                Jump Start Offer
              </h2>
              <p className="mt-4 max-w-3xl text-white/70">
                Get started with the DTB Traders system through one focused
                subscription designed to accelerate your onboarding, learning,
                and execution.
              </p>
            </div>

            <div className="text-sm text-white/60">
              <span className="inline-flex items-center gap-2">
                <Zap size={16} /> Instant access after signup
              </span>
            </div>
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <div className="rounded-2xl border border-dtb/40 bg-gradient-to-b from-dtb/20 to-white/5 p-7 flex flex-col">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="text-sm text-white/60">
                  JUMP START 6 Month Subscription
                </div>
                <div className="text-xs font-semibold rounded-full bg-dtb px-3 py-1">
                  Limited Offer
                </div>
              </div>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
                🎁 Get 1 Month FREE — 7 Months Total Access
              </div>

              <div className="mt-4 flex items-end gap-3">
                <div className="text-4xl font-bold">$399</div>
                <div className="pb-1 text-sm text-white/60">for 6 months</div>
              </div>

              <div className="mt-1 text-sm text-white/60">
                Pay for 6 months. Get 7 months of full access.
              </div>

              <ul className="mt-6 space-y-3 text-sm text-white/75">
                {[
                  "Guided onboarding program with structured training",
                  "60+ proprietary indicators and automated strategies",
                  "Advanced bar types to reduce noise and reveal structure",
                  "Rules-based execution — remove emotion from trading",
                  "Built-in risk management and trade filters",
                  "Continuous system updates based on performance data",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <Check size={18} className="mt-0.5 shrink-0" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <a
                href={STRIPE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 rounded-xl bg-dtb px-5 py-3 font-semibold hover:bg-dtb-hover text-center inline-flex items-center justify-center gap-2"
              >
                Start Now — Get 1 Month Free <ArrowRight size={18} />
              </a>

              <a
                href={FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm text-white/60 hover:text-white text-center"
              >
                Already purchased? Complete onboarding form →
              </a>

              <div className="mt-3 text-xs text-white/50 text-center">
                Instant access. First month included at no additional cost.
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">FAQ</h2>
          <p className="mt-4 max-w-3xl text-white/70">
            Quick answers to common questions. (We can tailor these to your exact
            policies and platform.)
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
                a: "Update this answer to match your real billing and cancellation policy for the 6-month subscription.",
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
              Join the community or reach out and we’ll point you to the right
              onboarding path.
            </p>

            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a
                href="#pricing"
                className="rounded-xl bg-dtb px-6 py-3 font-semibold hover:bg-dtb-hover inline-flex items-center justify-center gap-2"
              >
                See offer <ArrowRight size={18} />
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
                  Stop stitching together disconnected tools. Get a complete,
                  integrated trading system designed for repeatable execution.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href={STRIPE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-dtb px-6 py-3 font-semibold hover:bg-dtb-hover inline-flex items-center justify-center gap-2"
                  >
                    Join Now <ArrowRight size={18} />
                  </a>

                  <Link
                    to="/ebook"
                    className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white/90 hover:bg-white/5 inline-flex items-center justify-center gap-2"
                  >
                    Free eBook <BookOpen size={18} />
                  </Link>

                  <a
                    href={FORM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white/90 hover:bg-white/5 inline-flex items-center justify-center gap-2"
                  >
                    Onboarding Form <MessageCircle size={18} />
                  </a>
                </div>

                <div className="mt-5 text-xs text-white/55">
                  Primary CTA: Stripe checkout • Secondary CTA: Google onboarding form
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6 md:w-[360px]">
                <div className="text-sm font-semibold">Quick Links</div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/70">
                  <a className="hover:text-white" href="#system">
                    System
                  </a>
                  <a className="hover:text-white" href="#ebook">
                    Free eBook
                  </a>
                  <a className="hover:text-white" href="#components">
                    Components
                  </a>
                  <a className="hover:text-white" href="#results">
                    Results
                  </a>
                  <a className="hover:text-white" href="#pricing">
                    Pricing
                  </a>
                  <a className="hover:text-white" href="#faq">
                    FAQ
                  </a>
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
              <a className="hover:text-white" href="#">
                Privacy
              </a>
              <a className="hover:text-white" href="#">
                Terms
              </a>
              <a className="hover:text-white" href="#">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
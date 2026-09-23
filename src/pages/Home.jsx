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
const DISCORD_LINK = "https://discord.gg/kzYXadT7pA";

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

  const openMemberstackModal = async (modalType) => {
  if (window.$memberstackDom) {
    await window.$memberstackDom.openModal(modalType);

    const member = await window.$memberstackDom.getCurrentMember();

    if (member?.data) {
      window.location.href = "/member";
    }
  } else {
    console.error("Memberstack has not loaded yet.");
  }
};

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
            <Link className="hover:text-white" to="/strategy-lab">
              DTB Strategy Lab
            </Link>
            <a className="hover:text-white" href="#results">
              Results
            </a>
            <Link className="hover:text-white" to="/jumpstart">
              Jump Start
            </Link>
            <Link className="hover:text-white" to="/resources">
              Resources
            </Link>
            <a className="hover:text-white" href="#risk-disclosure">
              Risk Disclosure
            </a>
            <a className="hover:text-white" href="#faq">
              FAQ
            </a>
          </nav>
        </div>

        {/* Row 2: Member Actions */}
        <div className="mx-auto max-w-6xl px-4 pb-6 pt-2 flex justify-end border-t border-white/5">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => openMemberstackModal("LOGIN")}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold hover:bg-white/5"
            >
              Member Login
            </button>

            <Link
              to="/ebook"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold hover:bg-white/5"
            >
              Free eBook <BookOpen size={18} />
            </Link>

            <Link
              to="/jumpstart"
              className="inline-flex items-center gap-2 rounded-xl bg-dtb px-6 py-3 text-sm font-semibold hover:bg-dtb-hover"
            >
              Join Now <ArrowRight size={18} />
            </Link>
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
          A Different Operating Model for Retail Futures Trading
        </p>

        <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight">
          Retail trading puts the trader in the wrong role. DTB changes the structure.
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-white/70">
          DTB combines price structure, automation, risk management, and execution
          into one integrated trading environment - so technology handles repetitive
          work while you develop the judgement to manage the system.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            to="/jumpstart"
            className="rounded-xl bg-dtb px-6 py-3 font-semibold hover:bg-dtb-hover inline-flex items-center justify-center gap-2"
          >
            Explore Jump Start <ArrowRight size={18} />
          </Link>

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
            See How DTB Works <ExternalLink size={18} />
          </a>

          <a
            href={DISCORD_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white/90 hover:bg-white/5 inline-flex items-center justify-center gap-2"
          >
            Join Discord <MessageCircle size={18} />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              title: "Structured",
              text: "Price organized around participation and defined market structure.",
            },
            {
              title: "Automated",
              text: "Technology handles repetitive execution, monitoring, and calculation.",
            },
            {
              title: "Managed",
              text: "The trader develops from operator to manager, focusing on risk, oversight, and judgement.",
            },
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
                Retail Trading Is Broken - And Here's the Proof
              </p>

              <p className="mt-4 max-w-2xl text-white/70 leading-relaxed">
                A plain-English guide to why retail trading becomes unnecessarily
                difficult, why more indicators and more effort can make the problem
                worse, and what changes when price, automation, and the role of the
                trader are structured differently.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Why complexity often increases as traders add more tools and decisions",
                  "How time-based charts can increase interpretation and cognitive load",
                  "Why the trading environment can matter as much as trader discipline",
                  "How structure, automation, and management can change the trader's role",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <Check
                      className="mt-0.5 shrink-0 text-yellow-400"
                      size={18}
                    />
                    <p className="text-sm text-white/80">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/ebook"
                  className="rounded-xl bg-dtb px-6 py-3 font-semibold hover:bg-dtb-hover inline-flex items-center justify-center gap-2"
                >
                  Read the Free eBook <ArrowRight size={18} />
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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            Change the Trading Environment
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
            DTB is built around a different role for the trader.
          </h2>

          <p className="mt-5 max-w-3xl text-lg text-white/70 leading-relaxed">
            Traditional retail trading asks the trader to interpret, monitor, calculate,
            execute, and manage almost everything manually. DTB is designed to move
            repetitive work into technology and leave the trader focused on oversight,
            risk, and judgement.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-white/5">
              <div className="border-b border-white/10 p-5 md:border-b-0 md:border-r">
                <div className="text-sm font-semibold uppercase tracking-wide text-white/50">
                  Traditional Retail Approach
                </div>
              </div>
              <div className="p-5">
                <div className="text-sm font-semibold uppercase tracking-wide text-orange-300">
                  DTB Approach
                </div>
              </div>
            </div>

            {[
              ["Time organizes price", "Participation helps organize price"],
              ["Trader interprets everything", "Defined structure reduces unnecessary interpretation"],
              ["Trader performs repetitive tasks", "Automation handles repeatable work"],
              ["Trader operates the machinery", "Trader manages the system"],
            ].map(([traditional, dtb]) => (
              <div
                key={traditional}
                className="grid grid-cols-1 md:grid-cols-2 border-t border-white/10"
              >
                <div className="p-5 text-white/60 md:border-r md:border-white/10">
                  {traditional}
                </div>
                <div className="p-5 font-semibold text-white/90">{dtb}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Structured",
                text: "A coherent framework for organizing price, market information, and trading decisions.",
              },
              {
                title: "Automated",
                text: "Rules-based tools handle repetitive execution, monitoring, and calculation without pretending risk disappears.",
              },
              {
                title: "Built for Real Life",
                text: "Designed for people who want trading to coexist with a career, business, family, and life away from the screen.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="mt-2 text-white/70 text-sm leading-relaxed">{item.text}</p>
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
            The value is not the number of tools. It is that the strategies, bar
            types, indicators, execution logic, risk controls, and management tools
            are designed to operate together as one environment.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Automated Trading Strategies",
                text: "Rules-based strategies designed to automate repeatable trading logic and reduce manual execution workload.",
              },
              {
                title: "Advanced Bar Types",
                text: "Purpose-built bar constructions that organize price around defined participation and structural concepts.",
              },
              {
                title: "Proprietary Indicators",
                text: "Purpose-built tools designed around the same structural framework used by DTB strategies.",
              },
              {
                title: "Execution Engine",
                text: "Automated execution logic that handles repetitive actions consistently while the trader remains responsible for oversight and risk.",
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
          STRATEGY LAB
      ======================= */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-300">
                <Zap size={16} />
                Centralized Strategy Control
              </div>

              <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight">
                DTB Strategy Lab - your trading control center.
              </h2>

              <p className="mt-5 text-lg text-white/70 leading-relaxed">
                Launch, monitor, pause, resume, and manage multiple DTB strategies
                from one centralized interface instead of manually building and
                maintaining a screen full of separate strategy charts.
              </p>

              <p className="mt-4 text-white/65 leading-relaxed">
                Strategy Lab brings templates, accounts, live strategy status, PnL,
                direction controls, synchronization, and account-level controls into
                one operating layer. The machine handles repetition. You develop oversight.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/strategy-lab"
                  className="rounded-xl bg-dtb px-6 py-3 font-semibold hover:bg-dtb-hover inline-flex items-center justify-center gap-2"
                >
                  Explore DTB Strategy Lab <ArrowRight size={18} />
                </Link>
                <Link
                  to="/jumpstart"
                  className="rounded-xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/5 inline-flex items-center justify-center gap-2"
                >
                  Explore Jump Start
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-white/5 p-8 md:p-10">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
                One Interface. Multiple Strategies.
              </div>
              <div className="mt-6 text-4xl font-extrabold">Manage the system.</div>
              <p className="mt-4 text-white/70 leading-relaxed">
                Move beyond operating every strategy individually. Strategy Lab is
                designed to make a collection of automated strategies easier to
                supervise as one coordinated trading environment.
              </p>
            </div>
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
                Evaluate the Process - Not a Perfect Screenshot.
              </h2>
              <p className="mt-4 max-w-3xl text-white/70">
                DTB has been used in an active trading community where strategy
                activity, winning outcomes, losing outcomes, and the operating process
                can be observed. We believe a trading system should be evaluated as a
                process, not from a collection of perfect screenshots.
              </p>
            </div>

            <Link
              to="/jumpstart"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-dtb px-5 py-3 font-semibold hover:bg-dtb-hover"
            >
              See offer <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                kpi: "Result Updates",
                value: "5,000+",
                note: "Captured from live group activity",
              },
              {
                kpi: "Wins + Losses",
                value: "Visible",
                note: "Outcomes are not presented as if every trade wins",
              },
              {
                kpi: "Process Visibility",
                value: "Transparent",
                note: "Focus on the operating process, not isolated highlights",
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
              DTB is not presented as a promise that every strategy, trade, or day
              will be profitable. The objective is to make the operating process
              visible enough to be observed, questioned, and evaluated.
            </p>

            <p className="mt-4 text-white/70 leading-8">
              The focus is a structured, repeatable environment that can be
              understood and managed over time. Past activity does not guarantee
              future results, and trading risk remains with the trader.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="inline-flex items-center gap-2 text-sm font-semibold">
              <Shield size={16} /> Risk Disclosure
            </div>
            <p className="mt-2 text-xs text-white/60 leading-relaxed">
              Futures trading involves substantial risk of loss and is not
              suitable for all investors. Past performance is not indicative of
              future results. Any performance metrics or examples shown on this
              site should be verified independently and may reflect simulated
              results, which have inherent limitations. This is not financial
              advice.
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
                Experience the Complete DTB Trading Environment
              </h2>
              <p className="mt-4 max-w-3xl text-white/70">
                Your first month is designed as an evaluation. Get the environment
                operational, learn how DTB structures price, explore Strategy Lab,
                observe the automation, and decide whether this way of trading fits you.
              </p>
            </div>

            <div className="text-sm text-white/60">
              <span className="inline-flex items-center gap-2">
                <Zap size={16} /> Instant access after signup
              </span>
            </div>
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <div className="rounded-2xl border border-dtb/40 bg-gradient-to-b from-dtb/20 to-white/5 p-7 flex flex-col shadow-2xl">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="text-sm text-white/60">
                  JUMP START PROGRAM
                </div>

                <div className="text-xs font-semibold rounded-full bg-dtb px-3 py-1">
                  7 Months Total Access
                </div>
              </div>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
                30-Day Complimentary Evaluation
              </div>

              <h3 className="mt-6 text-2xl md:text-3xl font-extrabold tracking-tight">
                Get operational. Learn the environment. Then decide whether DTB fits you.
              </h3>

              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                Register today and unlock the DTB environment immediately. Use the
                first month to work through onboarding, run the provided strategies,
                learn the structural framework, explore Strategy Lab, and evaluate
                whether DTB fits the way you want to trade.
              </p>

              <div className="mt-6 flex items-end gap-3">
                <div className="text-4xl font-bold">$399</div>
                <div className="pb-1 text-sm text-white/60">
                  total for 7 months access
                </div>
              </div>

              <div className="mt-2 text-sm text-white/60">
                6 months billed. 7 months of total access included.
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                <div className="text-sm font-semibold text-white">
                  What’s included:
                </div>

                <ul className="mt-4 space-y-3 text-sm text-white/75">
                  {[
                    "Complete DTB environment - strategies, structural tools, execution logic, and Strategy Lab",
                    "Structured onboarding designed to help you become operational quickly",
                    "Purpose-built automated strategies, indicators, and bar types designed to work together",
                    "DTB Strategy Lab for centralized strategy launch, monitoring, and control",
                    "Rules-based automation designed to handle repetitive execution tasks",
                    "Built-in risk management, trade filtering, and account-level controls",
                    "Ongoing system updates and product improvements",
                    "Access to the DTB Traders community and active trading environment",
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <Check
                        size={18}
                        className="mt-0.5 shrink-0 text-yellow-400"
                      />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={STRIPE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 rounded-xl bg-dtb px-5 py-3 font-semibold hover:bg-dtb-hover text-center inline-flex items-center justify-center gap-2"
              >
                Start Your 30-Day Evaluation <ArrowRight size={18} />
              </a>

              <div className="mt-4 text-xs text-white/55 text-center leading-relaxed">
                Full system access starts immediately. Cancel anytime within the
                first 30 days if you decide it’s not for you.
              </div>

              <a
                href={FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm text-white/60 hover:text-white text-center"
              >
                Already purchased? Complete onboarding form →
              </a>

              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-white/55 leading-relaxed">
                DTB is not another indicator pack or disconnected strategy bundle.
                It is an integrated trading environment designed around structure,
                automation, and management. Automated trading does not eliminate
                market risk, and futures trading is not suitable for all investors.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======================
          RISK DISCLOSURE
      ======================= */}
      <section id="risk-disclosure" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-300">
              <Shield size={18} /> Risk Disclosure
            </div>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
              Futures Trading Risk Disclosure
            </h2>

            <div className="mt-6 space-y-4 text-sm md:text-base text-white/70 leading-8">
              <p>
                Futures trading contains substantial risk and is not for every
                investor. An investor could potentially lose all or more than the
                initial investment.
              </p>

              <p>
                Risk capital is money that can be lost without jeopardizing
                one’s financial security or lifestyle. Only risk capital should
                be used for trading and only those with sufficient risk capital
                should consider trading.
              </p>

              <p>
                Past performance is not necessarily indicative of future
                results. Results may be shared publicly; however, these are not
                guaranteed. All DTB Products are provided with no guarantee of
                returns, as no such guarantee can be made either lawfully or
                otherwise.
              </p>

              <p>
                Your degree of success is dependent on your risk management and
                thoughtful consideration when entering and exiting positions in
                the market.
              </p>

              <p>
                The tools DTB Traders provides are designed to help organize market
                information, identify defined structure, and support systematic
                participation. They do not predict future price movement or guarantee
                trading outcomes. You remain responsible for how you use the tools,
                position sizing, and risk management.
              </p>

              <p className="font-semibold text-white">
                Finally, DTB Traders ONLY recommends trading Futures on a
                regulated exchange. Forex trading is NOT endorsed and is NOT
                supported.
              </p>
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
            Straight answers about the DTB environment, platform, access, and risk.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "Is this financial advice?",
                a: "No. DTB Traders provides tools and education. You are responsible for your own trading decisions and risk management. Please see our Risk Disclosure.",
              },
              {
                q: "Is performance guaranteed?",
                a: "No. Trading involves risk and our Risk Disclosure should be reviewed before you work with us. Please see our Risk Disclosure.",
              },
              {
                q: "What platform is DTB Traders built for?",
                a: "The DTB System runs on NinjaTrader. If you already use NinjaTrader, the transition is straightforward. If you do not, getting started is still simple. NinjaTrader provides complimentary short-term access to the platform and real-time data, and many funded account programs include both platform access and data at very low cost.",
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes, the benefit of having the 1st month complimentary is that you have the option to cancel before your 1st payment is due, so if this is not a good fit for you then feel free to cancel your subscription on Stripe.  At any time within the 6 months after payment you can cancel and not be charged again.",
              },
              {
                q: "Do you support prop firms / evaluation accounts?",
                a: "Yes as long as they support NinjaTrader, however be careful with those who do not support automated trading unless you specifically wish to use the DTB System for manual trading.",
              },
              {
                q: "What markets does the system trade?",
                a: "Any instrument you have access to on NinjaTrader.  We do however focus on the MNQ and NQ in the Jump Start program and once you are familiar with the System, feel free to expand.",
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
              <Link
                to="/jumpstart"
                className="rounded-xl bg-dtb px-6 py-3 font-semibold hover:bg-dtb-hover inline-flex items-center justify-center gap-2"
              >
                See offer <ArrowRight size={18} />
              </Link>

              <a
                href={DISCORD_LINK}
                target="_blank"
                rel="noopener noreferrer"
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
                  Ready to experience a different trading environment?
                </h3>
                <p className="mt-3 max-w-2xl text-white/70">
                  Move from operating disconnected tools to managing one integrated
                  environment built around structure, automation, and oversight.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/jumpstart"
                    className="rounded-xl bg-dtb px-6 py-3 font-semibold hover:bg-dtb-hover inline-flex items-center justify-center gap-2"
                  >
                    Explore Jump Start <ArrowRight size={18} />
                  </Link>

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

                  <a
                    href={DISCORD_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white/90 hover:bg-white/5 inline-flex items-center justify-center gap-2"
                  >
                    Join Discord <MessageCircle size={18} />
                  </a>
                </div>

                <div className="mt-5 text-xs text-white/55">
                  Start with the free eBook, explore the system, or begin your Jump Start evaluation.
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
                  <Link className="hover:text-white" to="/strategy-lab">
                    DTB Strategy Lab
                  </Link>
                  <a className="hover:text-white" href="#results">
                    Results
                  </a>
                  <Link className="hover:text-white" to="/jumpstart">
                    Jump Start
                  </Link>
                  <Link className="hover:text-white" to="/resources">
                    Resources
                  </Link>
                  <a className="hover:text-white" href="#risk-disclosure">
                    Risk Disclosure
                  </a>
                  <a className="hover:text-white" href="#faq">
                    FAQ
                  </a>
                  <a
                    className="hover:text-white"
                    href={DISCORD_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discord
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
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Layers,
  Monitor,
  PauseCircle,
  Play,
  Shield,
  SlidersHorizontal,
  Target,
  Zap,
} from "lucide-react";

import strategyLabImage from "../assets/strategy-lab/DTB-Strategy-Lab.jpg";

const YOUTUBE_VIDEO = "https://www.youtube.com/watch?v=N0qH4GNbpGc";

export default function StrategyLab() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* =======================
          HERO
      ======================= */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-300">
                <Zap size={16} />
                Automation to the Next Level
              </div>

              <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight">
                Meet the DTB Strategy Lab
              </h1>

              <p className="mt-6 text-xl text-white/75 leading-relaxed">
                One centralized command center for launching, monitoring, and
                controlling multiple DTB trading strategies across instruments
                and accounts.
              </p>

              <p className="mt-5 text-white/65 leading-relaxed">
                Instead of managing strategy after strategy across separate
                charts and windows, DTB Strategy Lab brings the key controls,
                templates, accounts, status, and live performance information
                together in one purpose-built interface.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={YOUTUBE_VIDEO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-dtb px-6 py-3 font-semibold hover:bg-dtb-hover"
                >
                  <Play size={18} />
                  Watch Strategy Lab Demo
                </a>

                <Link
                  to="/jumpstart"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/5"
                >
                  Get DTB Traders
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl overflow-hidden">
                <img
                  src={strategyLabImage}
                  alt="DTB Strategy Lab trading strategy management interface"
                  className="w-full rounded-xl scale-105"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =======================
          POSITIONING
      ======================= */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            One interface. Multiple strategies.
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
            Stop managing automation one chart at a time.
          </h2>

          <p className="mt-6 mx-auto max-w-3xl text-lg text-white/70 leading-relaxed">
            DTB Strategy Lab gives you a single operating layer for the DTB
            Modena Wick Trader, Baseline Wick Trader, official DTB templates,
            and your own personal strategy templates.
          </p>
        </div>
      </section>

      {/* =======================
          CORE BENEFITS
      ======================= */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">

          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Built to Control the Entire DTB Trading Environment
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Layers className="text-orange-400" size={28} />

              <h3 className="mt-5 text-xl font-bold">
                Launch Multiple Strategies
              </h3>

              <p className="mt-3 text-white/65 leading-relaxed">
                Select multiple DTB templates, choose the trading account for
                each, and launch them together instead of manually building
                every strategy instance one by one.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Monitor className="text-orange-400" size={28} />

              <h3 className="mt-5 text-xl font-bold">
                Run Chartless
              </h3>

              <p className="mt-3 text-white/65 leading-relaxed">
                Launch strategies without opening visible charts, helping reduce
                NinjaTrader resource usage when operating multiple automated
                strategies.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <BarChart3 className="text-orange-400" size={28} />

              <h3 className="mt-5 text-xl font-bold">
                Monitor Live Results
              </h3>

              <p className="mt-3 text-white/65 leading-relaxed">
                See enabled status, position, quantity, unrealized PnL, realized
                PnL, and total PnL for your selected strategies from one live
                monitoring table.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <PauseCircle className="text-orange-400" size={28} />

              <h3 className="mt-5 text-xl font-bold">
                Pause & Resume Linked Strategies
              </h3>

              <p className="mt-3 text-white/65 leading-relaxed">
                Pause new entries across linked strategies from one control,
                then resume the entire group when you are ready.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <SlidersHorizontal className="text-orange-400" size={28} />

              <h3 className="mt-5 text-xl font-bold">
                Global Direction Control
              </h3>

              <p className="mt-3 text-white/65 leading-relaxed">
                Move linked strategies between Both, Long Only, and Short Only
                from the Strategy Lab rather than changing each strategy
                individually.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Target className="text-orange-400" size={28} />

              <h3 className="mt-5 text-xl font-bold">
                Account-Level Risk Controls
              </h3>

              <p className="mt-3 text-white/65 leading-relaxed">
                Configure account-level profit targets, stop-loss limits, and
                trading drawdown controls across strategies operating on the
                same account.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =======================
          GLOBAL CONTROLS
      ======================= */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                Linked Strategy Control
              </p>

              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
                Control many strategies like one system.
              </h2>

              <p className="mt-6 text-white/70 leading-relaxed">
                When strategies are linked to the Strategy Lab, the global
                controls can coordinate behavior across the entire group.
              </p>

              <div className="mt-8 space-y-5">

                <div className="flex gap-4">
                  <div className="mt-1 rounded-lg bg-orange-500/10 p-2 text-orange-400">
                    <PauseCircle size={20} />
                  </div>

                  <div>
                    <h3 className="font-bold">Running / Paused</h3>
                    <p className="mt-1 text-sm text-white/60">
                      Stop linked strategies from taking additional entries
                      without automatically closing existing positions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 rounded-lg bg-orange-500/10 p-2 text-orange-400">
                    <SlidersHorizontal size={20} />
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Both / Long Only / Short Only
                    </h3>
                    <p className="mt-1 text-sm text-white/60">
                      Apply a common directional bias across all linked DTB
                      strategies.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 rounded-lg bg-orange-500/10 p-2 text-orange-400">
                    <Layers size={20} />
                  </div>

                  <div>
                    <h3 className="font-bold">Position Sync</h3>
                    <p className="mt-1 text-sm text-white/60">
                      Synchronize linked strategies so the group respects a
                      common directional position state.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 rounded-lg bg-orange-500/10 p-2 text-orange-400">
                    <Shield size={20} />
                  </div>

                  <div>
                    <h3 className="font-bold">Exit All</h3>
                    <p className="mt-1 text-sm text-white/60">
                      Use the Strategy Lab's countdown control to exit positions
                      across all linked strategies.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="rounded-3xl border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-white/5 p-8 md:p-10">

              <div className="text-sm font-semibold text-orange-300">
                THE POWER OF CENTRALIZED CONTROL
              </div>

              <div className="mt-6 text-5xl font-extrabold">
                One Click
              </div>

              <p className="mt-4 text-lg text-white/70 leading-relaxed">
                Pause multiple strategies. Change their permitted direction.
                Resume them. Synchronize them. Or exit linked positions.
              </p>

              <p className="mt-5 text-white/60 leading-relaxed">
                The Strategy Lab turns a collection of automated strategies into
                a coordinated trading environment that can be managed from one
                place.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* =======================
          VIDEO
      ======================= */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-4 py-16">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              See It In Action
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              Watch the DTB Strategy Lab Walkthrough
            </h2>

            <p className="mt-4 mx-auto max-w-2xl text-white/65">
              See how templates are launched, linked strategies are controlled,
              positions are monitored, and global controls are applied.
            </p>
          </div>

          <div className="mt-10 aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/N0qH4GNbpGc"
              title="DTB Strategy Lab Walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

        </div>
      </section>

      {/* =======================
          WORKFLOW
      ======================= */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">

          <h2 className="text-center text-3xl md:text-4xl font-bold">
            From Template to Live Strategy
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-5">

            {[
              {
                step: "01",
                title: "Select",
                text: "Choose official DTB or personal strategy templates.",
              },
              {
                step: "02",
                title: "Configure",
                text: "Choose account, chart or chartless deployment, and linked controls.",
              },
              {
                step: "03",
                title: "Launch",
                text: "Batch launch the selected templates into NinjaTrader.",
              },
              {
                step: "04",
                title: "Manage",
                text: "Enable, monitor, pause, synchronize, direct, and manage the strategies.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-sm font-bold text-orange-400">
                  {item.step}
                </div>

                <h3 className="mt-3 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-white/60 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =======================
          BACKGROUND OPERATION
      ======================= */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-4 py-16">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 text-center">

            <h2 className="text-3xl md:text-4xl font-bold">
              Set It Up. Then Let It Run.
            </h2>

            <p className="mt-6 mx-auto max-w-3xl text-lg text-white/70 leading-relaxed">
              Once your strategies are configured and enabled, the Strategy Lab
              does not need to remain open. Your strategies can continue running
              in NinjaTrader — including chartless strategies — while the
              Strategy Lab can be reopened whenever you want centralized control
              and monitoring again.
            </p>

          </div>
        </div>
      </section>

      {/* =======================
          CTA
      ======================= */}
      <section>
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">

          <h2 className="text-4xl md:text-5xl font-extrabold">
            This is what an integrated trading system looks like.
          </h2>

          <p className="mt-6 mx-auto max-w-3xl text-lg text-white/70">
            DTB Strategy Lab connects the strategies, templates, accounts,
            controls, and live monitoring tools that make the DTB ecosystem
            operate as one coordinated system.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/jumpstart"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-dtb px-7 py-4 font-semibold hover:bg-dtb-hover"
            >
              Explore Jump Start
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 px-7 py-4 font-semibold hover:bg-white/5"
            >
              Back to DTB Traders
            </Link>
          </div>

          <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-5 text-left">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-300">
              <Shield size={16} />
              Risk Disclosure
            </div>

            <p className="mt-3 text-xs text-white/55 leading-relaxed">
              Futures trading involves substantial risk and is not suitable for
              every investor. Automated trading systems do not eliminate market
              risk. Past performance is not necessarily indicative of future
              results.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
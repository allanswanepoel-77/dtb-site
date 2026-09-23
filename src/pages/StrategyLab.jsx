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
  Check,
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
                From Operator to Manager
              </div>

              <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight">
                Meet the DTB Strategy Lab
              </h1>

              <p className="mt-6 text-xl text-white/75 leading-relaxed">
                One centralized environment for launching, monitoring, and managing
                multiple DTB trading strategies across instruments and accounts.
              </p>

              <p className="mt-5 text-white/65 leading-relaxed">
                DTB Strategy Lab is built around a simple idea: technology should
                handle repeatable operational work so the trader can spend more
                time on oversight, risk, and management.
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
                  Start the 30-Day Evaluation
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
            The trader should not have to do everything
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
            Move repetitive work into the system.
          </h2>

          <p className="mt-6 mx-auto max-w-3xl text-lg text-white/70 leading-relaxed">
            Traditional automated trading can still leave the trader managing
            strategy after strategy, chart after chart, and setting after setting.
            Strategy Lab creates a centralized operating layer for launching,
            observing, and coordinating the DTB environment.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {[
              {
                title: "Automate",
                text: "Reduce repetitive setup and operational work that can be defined and repeated.",
              },
              {
                title: "Centralize",
                text: "Bring templates, accounts, strategy status, controls, and monitoring into one interface.",
              },
              {
                title: "Manage",
                text: "Shift the trader's attention toward oversight, risk decisions, and system management.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="font-semibold">{item.title}</div>
                <p className="mt-2 text-sm text-white/65 leading-6">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =======================
          CORE BENEFITS
      ======================= */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            One Operating Layer for the DTB Trading Environment
          </h2>

          <p className="mt-4 mx-auto max-w-3xl text-center text-white/65 leading-7">
            Strategy Lab brings together the controls needed to operate multiple
            automated strategies without turning the trader into a full-time
            operator of individual charts and strategy instances.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Layers className="text-orange-400" size={28} />
              <h3 className="mt-5 text-xl font-bold">
                Launch Multiple Strategies
              </h3>
              <p className="mt-3 text-white/65 leading-relaxed">
                Select multiple DTB templates, choose the trading account for
                each, and launch them together instead of manually building every
                strategy instance one by one.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Monitor className="text-orange-400" size={28} />
              <h3 className="mt-5 text-xl font-bold">
                Run Chartless
              </h3>
              <p className="mt-3 text-white/65 leading-relaxed">
                Launch strategies without keeping visible charts open, helping
                reduce NinjaTrader resource usage when operating multiple
                automated strategies.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <BarChart3 className="text-orange-400" size={28} />
              <h3 className="mt-5 text-xl font-bold">
                Monitor Live Strategy Data
              </h3>
              <p className="mt-3 text-white/65 leading-relaxed">
                View enabled status, position, quantity, unrealized PnL, realized
                PnL, and total PnL for selected strategies from one monitoring
                table.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <PauseCircle className="text-orange-400" size={28} />
              <h3 className="mt-5 text-xl font-bold">
                Pause and Resume Linked Strategies
              </h3>
              <p className="mt-3 text-white/65 leading-relaxed">
                Pause new entries across linked strategies from one control, then
                resume the group when you are ready.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <SlidersHorizontal className="text-orange-400" size={28} />
              <h3 className="mt-5 text-xl font-bold">
                Global Direction Control
              </h3>
              <p className="mt-3 text-white/65 leading-relaxed">
                Move linked strategies between Both, Long Only, and Short Only
                from Strategy Lab rather than changing each strategy
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
                trading drawdown controls across strategies operating on the same
                account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =======================
          TEMPLATES + WORKLOAD
      ======================= */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                Prepared strategy templates
              </p>

              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
                Start from a prepared environment, not a blank screen.
              </h2>

              <p className="mt-6 text-white/70 leading-relaxed">
                Strategy Lab can work with official DTB templates as well as your
                own personal strategy templates. The goal is to reduce the amount
                of repetitive configuration required before strategies can be
                launched and managed.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Select prepared strategy templates",
                  "Assign the appropriate trading account",
                  "Launch multiple selected templates together",
                  "Reuse your operating environment when you return",
                  "Manage linked strategies from a common control layer",
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-white/80">
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-orange-400"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-white/5 p-8 md:p-10">
              <div className="text-sm font-semibold text-orange-300">
                THE DESIGN PRINCIPLE
              </div>

              <div className="mt-6 text-4xl md:text-5xl font-extrabold">
                Automate repetition.
              </div>

              <div className="mt-2 text-4xl md:text-5xl font-extrabold text-white/65">
                Keep human judgment.
              </div>

              <p className="mt-6 text-white/70 leading-relaxed">
                Strategy Lab does not remove the trader's responsibility. It moves
                repeatable operational tasks into technology so the trader can
                concentrate more deliberately on oversight, risk, participation,
                and how the system is used.
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
                Manage many strategies like one environment.
              </h2>

              <p className="mt-6 text-white/70 leading-relaxed">
                When strategies are linked to Strategy Lab, global controls can
                coordinate defined behavior across the group without requiring
                the trader to change each strategy individually.
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
                      Apply a common permitted direction across linked DTB
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
                      Synchronize linked strategies so the group respects a common
                      directional position state.
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
                      Use Strategy Lab's countdown control to exit positions across
                      linked strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-white/5 p-8 md:p-10">
              <div className="text-sm font-semibold text-orange-300">
                CENTRALIZED CONTROL
              </div>

              <div className="mt-6 text-5xl font-extrabold">
                One Interface
              </div>

              <p className="mt-4 text-lg text-white/70 leading-relaxed">
                Pause multiple strategies. Change their permitted direction.
                Resume them. Synchronize them. Monitor them. Or exit linked
                positions.
              </p>

              <p className="mt-5 text-white/60 leading-relaxed">
                Strategy Lab turns a collection of automated strategies into a
                coordinated environment that can be overseen from one place.
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

            <p className="mt-4 mx-auto max-w-2xl text-white/65 leading-7">
              See how templates are launched, linked strategies are controlled,
              strategy information is monitored, and global controls are applied
              from one interface.
            </p>
          </div>

          <div className="mt-10 aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/N0qH4GNbpGc"
              title="DTB Strategy Lab Walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs md:text-sm text-white/55 leading-6">
              Automated trading does not eliminate market risk. Strategy Lab is a
              management and control environment for DTB strategies and does not
              guarantee profitable trades or future trading performance.
            </p>
          </div>
        </div>
      </section>

      {/* =======================
          WORKFLOW
      ======================= */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            The operating workflow
          </p>

          <h2 className="mt-3 text-center text-3xl md:text-4xl font-bold">
            From Template to Managed Strategy
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
                text: "Choose the account, chart or chartless deployment, and linked controls.",
              },
              {
                step: "03",
                title: "Launch",
                text: "Batch launch selected templates into NinjaTrader.",
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
                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-7 md:p-8">
            <p className="text-center text-lg text-white/75 leading-8">
              The goal is not to remove the trader. It is to remove unnecessary
              operational burden so the trader can increasingly act as the manager
              of the environment rather than the machinery inside it.
            </p>
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
              Configure It. Launch It. Manage It When Needed.
            </h2>

            <p className="mt-6 mx-auto max-w-3xl text-lg text-white/70 leading-relaxed">
              Once strategies are configured and enabled, Strategy Lab does not
              need to remain open. Strategies can continue running in NinjaTrader,
              including chartless strategies, while Strategy Lab can be reopened
              whenever you want centralized control and monitoring again.
            </p>
          </div>
        </div>
      </section>

      {/* =======================
          PHILOSOPHY BRIDGE
      ======================= */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                Why Strategy Lab exists
              </p>

              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
                This is the DTB philosophy made operational.
              </h2>

              <p className="mt-6 text-white/70 leading-8">
                The DTB approach is not simply about adding automation to a
                conventional trading workflow. It is about deciding which work
                should belong to technology and which decisions should remain
                with the trader.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  label: "Structure",
                  text: "Organize market information around defined DTB structure rather than asking the trader to interpret everything from scratch.",
                },
                {
                  label: "Automation",
                  text: "Move repeatable setup, execution, and coordination tasks into technology where appropriate.",
                },
                {
                  label: "Management",
                  text: "Keep the trader focused on oversight, risk, participation, and how the environment is used.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="font-semibold text-orange-300">
                    {item.label}
                  </div>
                  <p className="mt-2 text-sm text-white/65 leading-6">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =======================
          CTA
      ======================= */}
      <section>
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            The machine handles repetition. You develop oversight.
          </h2>

          <p className="mt-6 mx-auto max-w-3xl text-lg text-white/70 leading-8">
            Strategy Lab brings DTB strategies, templates, accounts, controls, and
            monitoring together so you can experience trading as a managed
            environment rather than a collection of disconnected tasks.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/jumpstart"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-dtb px-7 py-4 font-semibold hover:bg-dtb-hover"
            >
              Start the 30-Day Evaluation
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/ebook"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 px-7 py-4 font-semibold hover:bg-white/5"
            >
              Read the Free eBook
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
              Futures trading involves substantial risk of loss and is not
              suitable for every investor. You may lose all or more than your
              initial investment. Automated trading systems and management tools
              do not eliminate market risk or guarantee outcomes. Only risk
              capital should be used for trading. Past performance is not
              necessarily indicative of future results.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

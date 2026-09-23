import { ArrowRight, Check, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const STRIPE_LINK = "https://buy.stripe.com/4gMeVe4qb1BQ6zH5ka1sQ0j";
const FORM_LINK = "https://forms.gle/95kqNiQ6q6CQ3Trg9";

export default function JumpStart() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* =======================
          HERO
      ======================= */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
              DTB JUMP START PROGRAM
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight">
              Experience the Complete
              <span className="block text-yellow-400">DTB Trading Environment</span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-white/75 leading-8">
              Your first 30 days are designed as an evaluation - not a promise of
              trading performance. Get the DTB environment operational, experience
              the automation, learn how the system structures price, and decide
              whether this approach to trading fits you and your life.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="#evaluation"
                className="rounded-xl bg-dtb px-6 py-3 font-semibold hover:bg-dtb-hover inline-flex items-center justify-center gap-2"
              >
                See How the Evaluation Works <ArrowRight size={18} />
              </a>

              <Link
                to="/ebook"
                className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white/90 hover:bg-white/5 inline-flex items-center justify-center"
              >
                Read the Free eBook First
              </Link>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "Structure",
                text: "Learn how DTB organizes price and reduces unnecessary interpretation.",
              },
              {
                title: "Automation",
                text: "Experience prepared strategies and technology handling repeatable work.",
              },
              {
                title: "Management",
                text: "Develop oversight, risk judgment, and a manager's view of the system.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="font-semibold">{item.title}</div>
                <div className="mt-2 text-sm text-white/70 leading-6">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =======================
          WHAT THE FIRST 30 DAYS ARE FOR
      ======================= */}
      <section id="evaluation" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
              Your first 30 days
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              Don't decide from a sales page. Experience the environment.
            </h2>

            <p className="mt-5 text-white/70 leading-8">
              The purpose of the first month is to give you enough time to become
              operational, understand the basic workflow, observe the system in
              real market conditions, and decide whether DTB represents a better
              way for you to approach trading.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: "1. Get operational",
                text: "Install the DTB environment, complete the core setup, and learn the simple checks and operating procedures required before using automated strategies.",
              },
              {
                title: "2. Start with prepared strategies",
                text: "Use prepared strategy templates rather than trying to build everything yourself on day one. This lets you experience the system while your understanding develops.",
              },
              {
                title: "3. Experience Strategy Lab",
                text: "Launch and oversee strategies from a centralized environment designed to reduce repetitive setup and operational workload.",
              },
              {
                title: "4. Learn the structure",
                text: "Understand how DTB organizes market information, why participation matters, and how the tools and strategies fit together as one environment.",
              },
              {
                title: "5. Observe, don't chase",
                text: "See how automated strategies behave across different market conditions without treating any single trade, strategy, or day as proof of future performance.",
              },
              {
                title: "6. Decide whether DTB fits you",
                text: "At the end of the evaluation, decide whether the workflow, structure, automation, and management approach fit the way you want trading to function in your life.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-6">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =======================
          WHAT YOU GET
      ======================= */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                One integrated environment
              </p>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
                The tools are not the product. How they work together is.
              </h2>

              <p className="mt-5 text-white/70 leading-8">
                DTB is not designed as a collection of disconnected indicators or
                strategy files. Price structure, tools, automation, execution,
                risk controls, Strategy Lab, and onboarding are designed to work
                together around the same operating philosophy.
              </p>

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Participation-based price structure",
                  "Purpose-built indicators and tools",
                  "Automated trading strategies",
                  "Prepared strategy templates",
                  "DTB Strategy Lab",
                  "Risk and trade management",
                  "Guided onboarding and training",
                  "Ongoing system updates",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-yellow-400"
                    />
                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-300">
                <Zap size={17} /> Designed to reduce unnecessary workload
              </div>

              <h3 className="mt-4 text-2xl font-bold">
                The trader should not have to do everything.
              </h3>

              <p className="mt-4 text-white/70 leading-7">
                DTB's approach is to automate work that can be defined and repeated,
                while keeping the trader responsible for oversight, risk decisions,
                account management, and how the system is ultimately used.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  "Less repetitive setup and manual execution",
                  "Less dependence on constant chart interpretation",
                  "Centralized strategy launching and oversight",
                  "More focus on risk, observation, and management",
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-white/80">
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-yellow-400"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/strategy-lab"
                className="mt-7 inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-semibold hover:bg-white/5"
              >
                Explore DTB Strategy Lab <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =======================
          OFFER
      ======================= */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
              The Jump Start Program
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              Start with a 30-Day Complimentary Evaluation
            </h2>

            <p className="mt-4 text-white/70 leading-7">
              Get full access immediately. Use the first month to get operational,
              learn the workflow, experience the DTB environment, and decide
              whether you want to continue.
            </p>
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

              <div className="mt-5 inline-flex self-start items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
                First 30 Days Complimentary
              </div>

              <h3 className="mt-6 text-2xl md:text-3xl font-extrabold tracking-tight">
                Experience DTB before deciding whether it is right for you.
              </h3>

              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                Register with your payment details and unlock the complete DTB
                environment immediately. Your first 30 days are complimentary. If
                you decide during that period that DTB is not the right fit, cancel
                before your first payment is due.
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
                  What's included:
                </div>

                <ul className="mt-4 space-y-3 text-sm text-white/75">
                  {[
                    "Complete DTB trading environment",
                    "Structured onboarding to help you get operational quickly",
                    "Purpose-built indicators, tools, and automated strategies",
                    "Participation-based bar types designed to reveal defined structure",
                    "Prepared strategy templates and DTB Strategy Lab",
                    "Integrated risk management and trade filtering",
                    "Training covering the core operating procedures",
                    "Ongoing system updates and strategy development",
                    "Access to the DTB Traders community and live trading environment",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check
                        size={18}
                        className="mt-0.5 shrink-0 text-yellow-400"
                      />
                      <span>{item}</span>
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
                Start My 30-Day Evaluation <ArrowRight size={18} />
              </a>

              <div className="mt-4 text-xs text-white/55 text-center leading-relaxed">
                Full system access starts immediately. Cancel during the
                complimentary 30-day period if you decide DTB is not for you.
              </div>

              <a
                href={FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm text-white/60 hover:text-white text-center"
              >
                Already registered? Complete the onboarding form <ArrowRight size={15} className="inline" />
              </a>

              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-white/55 leading-relaxed">
                The 30-day evaluation is an opportunity to experience the DTB
                environment and determine whether it fits your approach to trading.
                It is not a promise of profitability or trading performance.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======================
          RISK + FINAL CONTEXT
      ======================= */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-300">
              <Shield size={18} /> Before You Start
            </div>

            <h2 className="mt-4 text-2xl md:text-3xl font-bold">
              Evaluate the process, not a promise.
            </h2>

            <p className="mt-4 text-white/70 leading-7">
              DTB does not predict future price movement, eliminate trading risk,
              or guarantee outcomes. Automated strategies can produce both winning
              and losing trades. The purpose of the Jump Start Program is to give
              you a structured way to experience the environment, learn how it
              operates, and make your own decision about whether to continue.
            </p>

            <p className="mt-4 text-sm text-white/55 leading-7">
              Futures trading involves substantial risk of loss and is not suitable
              for all investors. You may lose all or more than your initial
              investment. Only risk capital should be used for trading. Past
              performance is not indicative of future results.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href={STRIPE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-dtb px-6 py-3 font-semibold hover:bg-dtb-hover inline-flex items-center justify-center gap-2"
              >
                Start My Evaluation <ArrowRight size={18} />
              </a>

              <Link
                to="/ebook"
                className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white/90 hover:bg-white/5 inline-flex items-center justify-center"
              >
                Read the Free eBook
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

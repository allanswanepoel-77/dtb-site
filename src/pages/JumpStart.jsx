import { ArrowRight, Check } from "lucide-react";

const STRIPE_LINK = "https://buy.stripe.com/4gMeVe4qb1BQ6zH5ka1sQ0j";
const FORM_LINK = "https://forms.gle/95kqNiQ6q6CQ3Trg9";

export default function JumpStart() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                Start Trading with a Structured, Fully Integrated System
              </h1>

              <p className="mt-4 max-w-3xl text-white/70">
                Get immediate access to the complete DTB Traders system —
                strategies, indicators, execution logic, onboarding, and ongoing
                updates — all designed to work together as one system.
              </p>
            </div>

            <div className="text-sm text-white/60">
              <span className="inline-flex items-center gap-2">
                Instant access after signup
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
                30-Day Risk-Free Start
              </div>

              <h2 className="mt-6 text-2xl md:text-3xl font-extrabold tracking-tight">
                Get full access immediately. Cancel within the first 30 days if
                it’s not right for you.
              </h2>

              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                Register with your payment details today and unlock the full DTB
                Traders system right away. If you decide within the first 30 days
                that it’s not the right fit, you can cancel during that period.
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
                    "Full DTB Trading System — strategies, indicators, and execution engine",
                    "Structured onboarding to help you get operational quickly",
                    "60+ proprietary indicators and automated strategies",
                    "Advanced bar types engineered to reduce noise and reveal structure",
                    "Rules-based execution framework designed to remove emotion",
                    "Built-in risk management and trade filtering",
                    "Ongoing system updates and performance-driven improvements",
                    "Access to the DTB Traders community and live trading environment",
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
                Start Now — 30-Day Risk-Free Access <ArrowRight size={18} />
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
                This is not another indicator pack or disconnected strategy
                bundle. DTB Traders is built as a complete trading system
                designed for structured, repeatable execution. Futures trading
                involves risk and is not suitable for all investors.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
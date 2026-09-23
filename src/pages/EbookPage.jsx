import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { useState } from "react";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSdn8nWUT_G9E6BVgcHHUt0i3Q64LWh78Kpk6bdRCgYHchvCeA/formResponse?embedded=true";

const FIRST_NAME_ENTRY = "2005620554";
const LAST_NAME_ENTRY = "763429133";
const EMAIL_ENTRY = "1357125662";

export default function EbookPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitting(true);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <iframe
        name="hiddenGoogleForm"
        title="hiddenGoogleForm"
        style={{ display: "none" }}
        onLoad={() => {
          if (submitted) {
            setTimeout(() => {
              window.location.href = "/ebook-dtb-traders.pdf";
            }, 2000);
          }
        }}
      />

      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
            Free DTB Traders eBook
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight">
            Retail Trading Is Broken
            <span className="block text-yellow-400">
              And Here&apos;s the Proof
            </span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-white/75 leading-8">
            Before you buy another strategy, indicator, or trading course,
            understand the environment you are actually trading in.
          </p>

          <p className="mt-4 max-w-3xl mx-auto text-white/70 leading-7">
            This free guide examines why retail trading becomes unnecessarily
            difficult, why more effort and more information often make the problem
            worse, and what changes when price, automation, and the role of the
            trader are structured differently.
          </p>
        </motion.div>

        {/* IMAGE + FORM */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* BOOK */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-2 rounded-[2.5rem] bg-yellow-400/10 blur-2xl opacity-80" />

              <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-900 via-black to-neutral-950 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
                  <img
                    src="/ebook-cover.jpg"
                    alt="DTB Traders eBook cover"
                    className="h-full w-full object-cover contrast-110 brightness-105"
                  />
                </div>

                <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-black px-3 py-1 rounded-full shadow-lg">
                  FREE
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
              <div className="flex items-center gap-2 text-sm text-yellow-300">
                <Mail size={16} /> Get instant access
              </div>

              <h2 className="mt-3 text-2xl font-bold">
                Read the argument before you judge the system
              </h2>

              <p className="mt-3 text-sm text-white/65 leading-6">
                Enter your details for immediate access to the complete free eBook.
                No strategy pitch first - start with the reasoning behind DTB.
              </p>

              <form
                action={GOOGLE_FORM_ACTION}
                method="POST"
                target="hiddenGoogleForm"
                onSubmit={handleSubmit}
                className="mt-6 space-y-4"
              >
                <input
                  type="text"
                  name={`entry.${FIRST_NAME_ENTRY}`}
                  placeholder="First Name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-900 border border-white/10"
                />

                <input
                  type="text"
                  name={`entry.${LAST_NAME_ENTRY}`}
                  placeholder="Last Name"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-900 border border-white/10"
                />

                <input
                  type="email"
                  name={`entry.${EMAIL_ENTRY}`}
                  placeholder="Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-900 border border-white/10"
                />

                <input type="hidden" name="fvv" value="1" />
                <input type="hidden" name="pageHistory" value="0" />
                <input
                  type="hidden"
                  name="fbzx"
                  value="-4501908059688706340"
                />

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-dtb py-3 rounded-xl font-semibold hover:bg-dtb-hover disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Get the Free eBook"}
                </button>
              </form>

              <p className="mt-4 text-xs text-white/45 leading-relaxed">
                Your information is used to provide access to the eBook and
                follow up with relevant DTB Traders updates.
              </p>
            </div>
          </div>
        </motion.div>

        {/* VALUE */}
        <div className="mt-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
            A different question
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            What if the problem is not the trader?
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-white/70 leading-7">
            Most retail trading education focuses on finding a better entry, a
            better indicator, or more discipline. This book steps back and asks a
            more fundamental question: what if the environment itself creates
            unnecessary complexity?
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4 text-left">
            {[
              "Why working harder can create more decisions instead of more clarity",
              "How the way price is represented can shape what the trader thinks they see",
              "Why pattern recognition and interpretation can become difficult to test objectively",
              "Why changing the trading environment can matter as much as changing trader behavior",
              "The structural difference between centralized futures markets and fragmented retail environments",
              "Why automation can move repetitive work from the trader to the technology",
              "How participation-based structure changes the way DTB organizes price",
              "Why the trader can evolve from operating the machinery to managing the system",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 p-4 border border-white/10 bg-white/[0.03] rounded-2xl"
              >
                <CheckCircle2 className="text-yellow-400 shrink-0 mt-0.5" />
                <span className="text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TRANSFORMATION */}
        <div className="mt-20">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
              The central idea
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Change the environment. Change the role of the trader.
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-white/70 leading-7">
              The book builds toward a different model of retail trading - one
              designed to reduce unnecessary interpretation, automate repeatable
              work, and make human judgment more deliberate rather than more
              frequent.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
              <div className="text-sm font-semibold uppercase tracking-wide text-white/50">
                Conventional retail approach
              </div>

              <div className="mt-6 space-y-4 text-white/70">
                {[
                  "Time organizes the view of price",
                  "The trader interprets patterns and signals",
                  "The trader repeatedly monitors and executes",
                  "More tools can create more decisions",
                  "The trader operates the machinery",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/35 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/[0.05] p-6 md:p-8">
              <div className="text-sm font-semibold uppercase tracking-wide text-yellow-300">
                The structural alternative
              </div>

              <div className="mt-6 space-y-4 text-white/85">
                {[
                  "Participation can organize the view of price",
                  "Defined structure reduces unnecessary interpretation",
                  "Technology can handle repeatable execution and monitoring",
                  "Integration can reduce operational complexity",
                  "The trader develops oversight, risk judgment, and management",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="text-yellow-400 shrink-0 mt-0.5" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* VIDEO - EBOOK TO STRATEGY LAB */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
              From the eBook to the system
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              See what the idea looks like in practice
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-white/70 leading-7">
              The eBook explains why DTB approaches retail trading differently.
              This walkthrough shows what happens when those ideas are engineered
              into an actual trading environment - from setup and synchronized
              strategy templates to launching and managing automated strategies
              through DTB Strategy Lab.
            </p>
          </div>

          <div className="mt-8 mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <div className="relative aspect-video">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/ZaI-WE5byS4"
                  title="Ebook video - Setup to Running Strategies"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs md:text-sm text-white/55 leading-6">
                Futures trading involves substantial risk of loss and is not
                suitable for all investors. "Earn as you learn" describes the
                ability to become operational while learning the DTB environment
                and is not a promise of profit or trading performance. Automated
                strategies can produce both winning and losing outcomes. Past
                performance is not indicative of future results.
              </p>
            </div>
          </div>
        </motion.div>

        {/* SOFT BRIDGE */}
        <div className="mt-20">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
              From argument to implementation
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              DTB is where those ideas become an operating environment.
            </h2>

            <p className="mt-4 max-w-4xl text-white/70 leading-7">
              The eBook does not ask you to believe in a strategy. It first builds
              the case for changing the structure around the trader. DTB is the
              practical implementation of that design - combining price structure,
              purpose-built tools, automated strategies, risk controls, Strategy
              Lab, and guided onboarding into one integrated environment.
            </p>

            <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Participation-based price structure",
                "Purpose-built indicators and tools",
                "Automated strategy execution",
                "Integrated risk and trade management",
                "DTB Strategy Lab for centralized oversight",
                "Guided onboarding and prepared strategies",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 p-4 border border-white/10 rounded-2xl"
                >
                  <CheckCircle2 className="text-yellow-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/50 p-5">
              <p className="text-white/80 leading-7">
                DTB does not predict future price movement, remove trading risk, or
                guarantee outcomes. The objective is to create a more structured
                environment in which repeatable work can be automated and the
                trader can focus more deliberately on oversight, risk, and judgment.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/#system"
                className="inline-flex items-center justify-center gap-2 bg-dtb px-6 py-3 rounded-xl font-semibold hover:bg-dtb-hover"
              >
                See How DTB Works <ArrowRight size={18} />
              </a>

              <a
                href="/strategy-lab"
                className="inline-flex items-center justify-center gap-2 border border-white/15 px-6 py-3 rounded-xl font-semibold text-white/90 hover:bg-white/5"
              >
                Explore Strategy Lab <ArrowRight size={18} />
              </a>

              <a
                href="/jumpstart"
                className="inline-flex items-center justify-center gap-2 border border-white/15 px-6 py-3 rounded-xl font-semibold text-white/90 hover:bg-white/5"
              >
                Explore the 30-Day Evaluation <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
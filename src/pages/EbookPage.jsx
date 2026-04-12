import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  CheckCircle2,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSdn8nWUT_G9E6BVgcHHUt0i3Q64LWh78Kpk6bdRCgYHchvCeA/formResponse";

const FIRST_NAME_ENTRY = "2005620554";
const LAST_NAME_ENTRY = "763429133";
const EMAIL_ENTRY = "1357125662";

export default function EbookPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append(`entry.${FIRST_NAME_ENTRY}`, firstName);
      formData.append(`entry.${LAST_NAME_ENTRY}`, lastName);
      formData.append(`entry.${EMAIL_ENTRY}`, email);

      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      window.location.href = "/ebook-dtb-traders.pdf";
    } catch (error) {
      console.error("Form submission failed:", error);
      alert("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
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
            If trading has ever felt
            <span className="block text-yellow-400">
              harder the more effort you put in…
            </span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/75 leading-8">
            This guide will show you why.
          </p>

          <p className="mt-4 max-w-2xl mx-auto text-white/70 leading-7">
            Not more strategies. Not more indicators. Just a clear explanation of
            what’s actually going on — and why things haven’t worked the way you
            expected.
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
                Enter your details and get the free eBook
              </h2>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-900 border border-white/10"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-900 border border-white/10"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-900 border border-white/10"
                />

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-dtb py-3 rounded-xl font-semibold hover:bg-dtb-hover"
                >
                  {submitting ? "Sending..." : "Get the Free eBook"}
                </button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* VALUE */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold">
            What you’ll get from this guide
          </h2>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              "Why effort alone makes trading harder",
              "Why charts create confusion",
              "Why most traders stay stuck",
              "What actually needs to change",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 p-4 border border-white/10 rounded-2xl"
              >
                <CheckCircle2 className="text-yellow-400" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* SOFT BRIDGE */}
        <div className="mt-20">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-bold">
              If this brought clarity, DTB shows you what comes next.
            </h2>

            <p className="mt-4 text-white/70">
              Understanding the problem is step one. The DTB system is where that
              understanding becomes practical.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                "Structure-first approach",
                "Integrated system",
                "Guided onboarding",
                "Clear execution framework",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 p-4 border border-white/10 rounded-2xl"
                >
                  <CheckCircle2 className="text-yellow-400" />
                  {item}
                </div>
              ))}
            </div>

            <a
              href="/#pricing"
              className="mt-8 inline-flex bg-dtb px-6 py-3 rounded-xl font-semibold"
            >
              Explore the DTB System <ArrowRight />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
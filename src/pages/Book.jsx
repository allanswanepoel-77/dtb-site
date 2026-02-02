import React from "react";

export default function OneScreenLandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-slate-100 blur-3xl" />
        <div className="absolute -bottom-40 left-[-10%] h-[520px] w-[520px] rounded-full bg-slate-100 blur-3xl" />
      </div>

      <main className="relative mx-auto flex min-h-screen max-w-5xl items-center px-6 py-14">
        <section className="w-full">
          {/* Eyebrow */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-slate-900" />
            <span>No hype • No pressure • Decide for yourself</span>
          </div>

          {/* Headline */}
          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Things I Know Now That I Wish I Knew 20 Years Ago
          </h1>

          {/* Subheadline */}
          <p className="mt-4 max-w-3xl text-pretty text-lg leading-relaxed text-slate-700 sm:text-xl">
            A no-nonsense guide for intelligent professionals who want control, clarity, and a realistic
            path to income independence — without hype, scams, or emotional trading.
          </p>

          {/* Content grid */}
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {/* For */}
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
              <h2 className="text-base font-semibold">Who This Is For</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                Professionals in their <span className="font-medium">40s and 50s</span> who are:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                  Tired of corporate politics and job insecurity
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                  Concerned about layoffs, replacement, or AI
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                  Looking for a second-income path that makes logical sense
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                  Done with flashy promises and trading noise
                </li>
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                If you want rules, structure, and understanding — not signals or gambling — you’re in the
                right place.
              </p>
            </div>

            {/* Not for */}
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
              <h2 className="text-base font-semibold">Who This Is Not For</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                This is <span className="font-medium">not</span> for:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                  Get-rich-quick seekers
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                  Signal chasers
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                  “$1,000 a day” believers
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                  Anyone unwilling to think critically
                </li>
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                If you want shortcuts or hype, this won’t be a good fit.
              </p>
            </div>

            {/* What you get + CTA */}
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
              <h2 className="text-base font-semibold">What You Get (Free)</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-0.5 text-slate-900">✔</span>
                  The full eBook
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 text-slate-900">✔</span>
                  A clear explanation of what trading really is (and isn’t)
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 text-slate-900">✔</span>
                  A logic-driven “Trade by Management” framework
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 text-slate-900">✔</span>
                  Complimentary access to the DTB System + Jump Start training
                </li>
              </ul>

              <div className="mt-6">
                {/* Replace href with your actual download/opt-in route */}
                <a
                  href="#download"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                >
                  Download the Book — Free
                </a>
                <p className="mt-3 text-center text-xs text-slate-600">
                  No cost • No upsell pressure • Decide for yourself
                </p>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-4">
                <p className="text-xs leading-relaxed text-slate-600">
                  <span className="font-medium text-slate-900">Optional:</span> Add an email field + delivery
                  automation on your “#download” section/page.
                </p>
              </div>
            </div>
          </div>

          {/* Micro-line */}
          <p className="mt-8 text-center text-sm text-slate-700">
            <span className="italic">This book assumes you are intelligent — and treats you accordingly.</span>
          </p>

          {/* Footer tiny note */}
          <p className="mt-3 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} DTB Traders. All rights reserved.
          </p>
        </section>
      </main>
    </div>
  );
}

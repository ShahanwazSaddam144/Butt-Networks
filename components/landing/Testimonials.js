import React from "react";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
      <div className="pointer-events-none absolute top-0 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 flex flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-600/40 bg-cyan-600/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-cyan-400">
            Testimonials
          </span>

          <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Trusted by founders who wanted
            <span className="text-cyan-400"> more than just a website.</span>
          </h2>

          <p className="max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            We build products that feel polished, perform well, and help teams
            move faster with confidence.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-800/40 p-8 shadow-xl shadow-cyan-600/10">
          <p className="text-lg leading-relaxed text-slate-300">
            “Dear Shahnawaz, Thank you so much for your excellent and quick work
            in developing our website and taking our business online. Really
            appreciate your dedication, professionalism, and support. Great job
            and looking forward to working with you again!”
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-600/20 text-sm font-semibold text-cyan-400">
              AI
            </div>
            <div>
              <p className="font-semibold text-white">Amir Islam</p>
              <p className="text-sm text-slate-400">
                Founder, ValueMax Cash & Carry
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

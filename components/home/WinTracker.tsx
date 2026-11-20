"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HOME } from "@/lib/content";
import Reveal from "@/components/Reveal";

const RADIUS = 52;
const CIRC = 2 * Math.PI * RADIUS;

export default function WinTracker() {
  const wins = HOME.smallWins;
  const [done, setDone] = useState<boolean[]>(() => wins.map(() => false));
  const count = done.filter(Boolean).length;
  const offset = CIRC * (1 - count / wins.length);

  const toggle = (i: number) => setDone((d) => d.map((v, idx) => (idx === i ? !v : v)));

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue to-brand-blue-ink py-20 text-white sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-brand-green/25 blur-3xl" />
      <div className="container-x relative">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Try it</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">One small win at a time</h2>
          <p className="mt-4 text-lg text-white/85">Progress is a series of steps you can actually keep. Tap a win to check it off.</p>
        </Reveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <ul className="space-y-3">
            {wins.map((w, i) => (
              <li key={w.title}>
                <Reveal delay={i * 0.07}>
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-pressed={done[i]}
                    className={`flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-copper ${
                      done[i] ? "border-brand-green bg-brand-green/30" : "border-white/20 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <span className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 transition ${done[i] ? "border-brand-green bg-brand-green" : "border-white/50"}`}>
                      <motion.svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        initial={false}
                        animate={{ opacity: done[i] ? 1 : 0, scale: done[i] ? 1 : 0.4 }}
                        transition={{ duration: 0.25 }}
                      >
                        <path d="M5 12.5l4.5 4.5L19 7.5" />
                      </motion.svg>
                    </span>
                    <span>
                      <span className="block font-semibold">{w.title}</span>
                      <span className="mt-1 block text-sm text-white/80">{w.text}</span>
                    </span>
                  </button>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal className="mx-auto w-full max-w-xs rounded-3xl bg-white/10 p-8 text-center backdrop-blur">
            <div className="relative mx-auto h-36 w-36">
              <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden="true">
                <circle cx="60" cy="60" r={RADIUS} fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="10" />
                <motion.circle
                  cx="60"
                  cy="60"
                  r={RADIUS}
                  fill="none"
                  stroke="#B87333"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={CIRC}
                  initial={false}
                  animate={{ strokeDashoffset: offset }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </svg>
              <div className="absolute inset-0 grid place-items-center text-3xl font-bold" aria-live="polite">
                {count}/{wins.length}
              </div>
            </div>
            <p className="mt-5 font-medium">{count === wins.length ? "That’s a win streak." : count === 0 ? "Start with just one." : "Keep building."}</p>
            <button type="button" onClick={() => setDone(wins.map(() => false))} className="mt-4 text-sm text-white/70 underline underline-offset-4 hover:text-white">
              Reset
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

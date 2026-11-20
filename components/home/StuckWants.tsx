"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { HOME, IMAGES } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function StuckWants() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div ref={ref} className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border-2 border-brand-copper shadow-lift">
          <motion.div className="absolute inset-x-0 -inset-y-[9%]" style={reduce ? undefined : { y }}>
            <Image
              src={IMAGES.paulSonOutdoors}
              alt="Paul smiling with his son on his shoulders outdoors"
              fill
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        <div>
          <Reveal>
            <p className="eyebrow">The real problem</p>
            <h2 className="mt-3 text-4xl font-bold text-brand-blue">What keeps good dads stuck</h2>
          </Reveal>
          <ul className="mt-8">
            {HOME.stuckPoints.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 0.08} className="border-t border-brand-copper py-5">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-1 text-brand-charcoal/75">{p.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal className="mt-10">
            <h2 className="text-4xl font-bold text-brand-blue">What you really want</h2>
            <p className="mt-3 text-brand-charcoal/75">You don’t need a new life. You want to show up as the dad you already know you can be.</p>
          </Reveal>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {HOME.wants.map((w, i) => (
              <li key={w.title}>
                <Reveal delay={i * 0.08} className="h-full rounded-2xl bg-brand-mist p-5">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-brand-green" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                  <h3 className="mt-3 text-sm font-semibold">{w.title}</h3>
                  <p className="mt-1 text-sm text-brand-charcoal/75">{w.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

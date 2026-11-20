"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { REBUILD } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Journey() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <ol ref={ref} className="relative mt-12 space-y-10 pl-14 sm:pl-20">
      <span aria-hidden="true" className="absolute bottom-2 left-[19px] top-2 w-0.5 rounded bg-white/20 sm:left-[27px]" />
      <motion.span
        aria-hidden="true"
        className="absolute bottom-2 left-[19px] top-2 w-0.5 origin-top rounded bg-brand-copper sm:left-[27px]"
        style={reduce ? undefined : { scaleY }}
      />
      {REBUILD.journey.steps.map((step, i) => (
        <li key={step.title} className="relative">
          <span className="absolute -left-14 top-0 grid h-10 w-10 place-items-center rounded-full border-2 border-brand-copper bg-brand-blue-ink text-sm font-bold sm:-left-20 sm:h-14 sm:w-14 sm:text-lg">
            {i + 1}
          </span>
          <Reveal delay={0.05}>
            <h3 className="text-xl font-semibold sm:text-2xl">{step.title}</h3>
            <p className="mt-2 max-w-2xl text-white/85">{step.text}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

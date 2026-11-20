"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CTA, HOME, IMAGES } from "@/lib/content";
import Button from "@/components/Button";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const words = HOME.hero.headline.split(" ");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue via-brand-blue-deep to-brand-blue-ink text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-0 h-96 w-96 animate-float rounded-full bg-brand-green/30 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-brand-copper/20 blur-3xl" />

      <div className="container-x relative grid items-center gap-14 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div>
          <h1 className="text-5xl font-bold leading-[1.05] sm:text-6xl xl:text-7xl">
            {words.map((word, i) => (
              <span key={i} className="mr-3 inline-block overflow-hidden align-bottom">
                <motion.span
                  className="inline-block"
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.09, ease: EASE }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-7 max-w-xl text-lg text-white/85"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
          >
            {HOME.hero.body}
          </motion.p>

          <motion.div
            className="mt-8"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: EASE }}
          >
            <p className="text-2xl font-medium">{HOME.hero.message}</p>
            <p className="mt-3 inline-block rounded-md bg-brand-green px-4 py-1.5 text-lg font-medium italic">
              {HOME.hero.philosophy}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" variant="white">{CTA.bookShort}</Button>
              <Button href="/rebuild" variant="ghost">See the ReHealth ReBuild</Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-3xl border-2 border-brand-copper shadow-lift">
            <Image
              src={IMAGES.paulSonShouldersA}
              alt="Paul with his son on his shoulders at home"
              fill
              priority
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="object-cover object-[38%_50%]"
            />
          </div>
          <Link
            href="/free-guide"
            className="absolute -bottom-6 -left-4 grid h-32 w-32 animate-float place-items-center rounded-full bg-brand-green text-center text-sm font-semibold leading-tight shadow-lift transition hover:scale-105 hover:bg-brand-green-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-copper sm:-left-10"
          >
            <span>Get the<br />Free Guide</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

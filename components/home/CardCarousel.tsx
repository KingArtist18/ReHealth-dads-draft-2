"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ABOUT, HOME, IMAGES } from "@/lib/content";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

const TONES: Record<string, string> = {
  blue: "from-brand-blue to-brand-blue-deep",
  charcoal: "from-[#333333] to-brand-charcoal",
  green: "from-brand-green to-brand-green-deep",
  copper: "from-brand-copper to-[#8f5624]",
};

function CardIcon({ kind }: { kind: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 3, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 120 120" className="h-28 w-28" aria-hidden="true" {...common}>
      {kind === "rings" && (<><circle cx="45" cy="60" r="28" /><circle cx="75" cy="60" r="28" /></>)}
      {kind === "dial" && (<><circle cx="60" cy="60" r="12" /><path d="M60 14v14M60 92v14M14 60h14M92 60h14M27 27l10 10M83 83l10 10M93 27L83 37M37 83L27 93" /></>)}
      {kind === "heart" && <path d="M60 100S16 72 16 42a24 24 0 0 1 44-13 24 24 0 0 1 44 13c0 30-44 58-44 58Z" />}
      {kind === "steps" && <path d="M14 98h26V72h26V46h26V20" />}
    </svg>
  );
}

function PaulModal({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[70] grid place-items-center bg-brand-blue-ink/75 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="paul-modal-title"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.35 }}
        className="grid max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-lift md:grid-cols-2"
      >
        <div className="relative min-h-60 md:min-h-full">
          <Image src={IMAGES.paulBabyPortrait} alt="Paul Sahota holding his son" fill sizes="(min-width: 768px) 28rem, 90vw" className="object-cover" />
        </div>
        <div className="overflow-y-auto p-7 sm:p-10">
          <div className="flex items-start justify-between gap-4">
            <h3 id="paul-modal-title" className="text-3xl font-bold text-brand-blue">{ABOUT.title}</h3>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-mist text-brand-charcoal transition hover:bg-brand-copper hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" /></svg>
            </button>
          </div>
          <p className="mt-5 text-lg font-medium text-brand-blue">{ABOUT.modal.lead}</p>
          {ABOUT.modal.paras.map((t) => (
            <p key={t} className="mt-4 text-brand-charcoal/85">{t}</p>
          ))}
          <p className="mt-4 font-semibold">{ABOUT.modal.strong}</p>
          <div className="mt-7">
            <Button href="/about" variant="blue">Read my full story</Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CardCarousel() {
  const cards = HOME.cards;
  const n = cards.length;
  const half = Math.floor(n / 2);

  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [modal, setModal] = useState(false);
  const [width, setWidth] = useState(900);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const update = () => setWidth(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const closeModal = useCallback(() => setModal(false), []);
  const go = useCallback(
    (dir: number) => {
      setExpanded(null);
      setActive((i) => (i + dir + n) % n);
    },
    [n]
  );

  const cardW = Math.min(width * 0.84, 440);
  const gap = 28;

  return (
    <section className="overflow-hidden bg-brand-paper py-20 sm:py-28" aria-labelledby="carousel-title">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Start here</p>
          <h2 id="carousel-title" className="mt-3 text-4xl font-bold text-brand-blue sm:text-5xl">{HOME.cardsIntro.title}</h2>
          <p className="mt-4 text-lg text-brand-charcoal/80">{HOME.cardsIntro.intro}</p>
        </Reveal>
      </div>

      <div
        ref={trackRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Get to know ReHealth Dads"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(1);
          if (e.key === "ArrowLeft") go(-1);
        }}
        className="relative mt-12 h-[540px] w-full outline-none focus-visible:ring-2 focus-visible:ring-brand-copper"
      >
        <motion.div
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) go(1);
            else if (info.offset.x > 60) go(-1);
          }}
        >
          {cards.map((card, i) => {
            const d = ((i - active + half + n * 2) % n) - half;
            const isActive = d === 0;
            const isOpen = expanded === card.id;
            const isPaul = card.id === "paul";
            const tone = TONES[card.tone] ?? TONES.blue;

            return (
              <motion.div
                key={card.id}
                aria-hidden={!isActive}
                onClick={() => {
                  if (!isActive) {
                    setExpanded(null);
                    setActive(i);
                  }
                }}
                initial={false}
                animate={{
                  x: d * (cardW + gap),
                  scale: isActive ? 1 : 0.86,
                  opacity: Math.abs(d) > 1 ? 0 : isActive ? 1 : 0.55,
                  height: isActive && isOpen ? 500 : 380,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 26 }}
                style={{
                  width: cardW,
                  marginLeft: -cardW / 2,
                  y: "-50%",
                  zIndex: isActive ? 10 : 5,
                  pointerEvents: Math.abs(d) > 1 ? "none" : "auto",
                }}
                className={`absolute left-1/2 top-1/2 flex flex-col justify-end overflow-hidden rounded-3xl bg-gradient-to-br p-7 text-white shadow-lift sm:p-9 ${tone}`}
              >
                <div className="pointer-events-none absolute right-6 top-6 text-white/25">
                  <CardIcon kind={card.icon} />
                </div>
                <h3 className="text-2xl font-bold sm:text-3xl">{card.title}</h3>
                <p className="mt-2 text-base text-white/90">{card.teaser}</p>

                <AnimatePresence initial={false}>
                  {isActive && isOpen && !isPaul && (
                    <motion.p
                      key="body"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 max-h-60 overflow-y-auto text-sm leading-relaxed text-white/90"
                    >
                      {card.body}
                    </motion.p>
                  )}
                </AnimatePresence>

                {isActive && (
                  <button
                    type="button"
                    onClick={() => (isPaul ? setModal(true) : setExpanded(isOpen ? null : card.id))}
                    aria-expanded={isPaul ? undefined : isOpen}
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/60 px-5 py-2.5 text-sm font-semibold transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {isPaul ? "Read more" : isOpen ? "Show less" : "Read more"}
                    <span aria-hidden="true">{isOpen && !isPaul ? "−" : "+"}</span>
                  </button>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous card"
          className="absolute left-3 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white text-brand-blue shadow-soft transition hover:scale-105 sm:left-8"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next card"
          className="absolute right-3 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white text-brand-blue shadow-soft transition hover:scale-105 sm:right-8"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      <div className="mt-2 flex justify-center gap-2" role="tablist" aria-label="Choose a card">
        {cards.map((c, i) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={c.title}
            onClick={() => {
              setExpanded(null);
              setActive(i);
            }}
            className={`h-2.5 rounded-full transition-all duration-300 ${i === active ? "w-9 bg-brand-blue" : "w-2.5 bg-brand-blue/30 hover:bg-brand-blue/60"}`}
          />
        ))}
      </div>

      <AnimatePresence>{modal && <PaulModal onClose={closeModal} />}</AnimatePresence>
    </section>
  );
}

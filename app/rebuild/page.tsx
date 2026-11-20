import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import BridgeExplorer from "@/components/rebuild/BridgeExplorer";
import Journey from "@/components/rebuild/Journey";
import { CTA, REBUILD } from "@/lib/content";

export const metadata: Metadata = {
  title: "The ReHealth ReBuild",
  description: REBUILD.heroTagline,
};

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

export default function RebuildPage() {
  const r = REBUILD;
  return (
    <>
      <PageHero eyebrow="Coaching for fathers" title={r.title} subtitle={r.heroTagline}>
        <div className="max-w-2xl space-y-4 text-white/85">
          {r.heroBody.map((t) => (
            <p key={t}>{t}</p>
          ))}
          <p className="font-semibold text-white">{r.heroStrong}</p>
        </div>
        <div className="mt-8">
          <Button href="/contact" variant="green">{CTA.book}</Button>
        </div>
      </PageHero>

      {/* Win Streak Strategy Call */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">The first step</p>
            <h2 className="mt-3 text-3xl font-bold text-brand-blue sm:text-4xl">{r.strategyCall.title}</h2>
            <p className="mt-5 text-lg">{r.strategyCall.intro}</p>
            {r.strategyCall.paras.map((t) => (
              <p key={t} className="mt-4 text-brand-charcoal/80">{t}</p>
            ))}
            <p className="mt-5 text-lg font-semibold text-brand-blue">{r.strategyCall.strong}</p>
            <div className="mt-7">
              <Button href="/contact" variant="blue">{CTA.book}</Button>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="font-semibold text-brand-charcoal">{r.strategyCall.exploreLead}</p>
            </Reveal>
            <ul className="mt-4 space-y-4">
              {r.strategyCall.explore.map((item, i) => (
                <li key={item}>
                  <Reveal delay={i * 0.1} className="flex items-start gap-4 rounded-2xl border border-brand-mist bg-brand-paper p-6 shadow-soft">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-blue text-sm font-bold text-white">{i + 1}</span>
                    <p className="pt-1.5 font-medium">{item}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Bridge */}
      <Section tone="paper">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Your whole life, connected</p>
          <h2 className="mt-3 text-3xl font-bold text-brand-blue sm:text-5xl">{r.bridge.title}</h2>
          <div className="mt-6 space-y-4 text-lg text-brand-charcoal/85">
            {r.bridge.paras.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
        </Reveal>
        <Reveal className="mt-12" delay={0.1}>
          <BridgeExplorer />
        </Reveal>
        <Reveal className="mt-10 max-w-3xl">
          <p className="text-xl font-semibold text-brand-blue">{r.bridge.strong}</p>
        </Reveal>
      </Section>

      {/* Right for you */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">Is this you?</p>
            <h2 className="mt-3 text-3xl font-bold text-brand-blue sm:text-4xl">{r.rightForYou.title}</h2>
            <p className="mt-5 text-lg">{r.rightForYou.intro}</p>
            <p className="mt-6 text-brand-charcoal/80">{r.rightForYou.closing}</p>
            <p className="mt-3 text-lg font-semibold text-brand-blue">{r.rightForYou.strong}</p>
          </Reveal>
          <div>
            <Reveal>
              <p className="font-semibold">{r.rightForYou.lead}</p>
            </Reveal>
            <ul className="mt-4 space-y-3">
              {r.rightForYou.items.map((item, i) => (
                <li key={item}>
                  <Reveal delay={i * 0.05} className="flex items-start gap-3 rounded-xl bg-brand-mist px-5 py-4">
                    <Check />
                    <span>{item}</span>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* What makes it different */}
      <Section tone="paper">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">A different approach</p>
          <h2 className="mt-3 text-3xl font-bold text-brand-blue sm:text-5xl">{r.different.title}</h2>
          <p className="mt-6 text-xl font-semibold">{r.different.lead}</p>
          {r.different.paras.map((t) => (
            <p key={t} className="mt-4 text-lg text-brand-charcoal/85">{t}</p>
          ))}
        </Reveal>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {r.different.points.map((pt, i) => (
            <li key={pt.title}>
              <Reveal delay={i * 0.1} className="h-full rounded-3xl border-t-4 border-brand-copper bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <h3 className="text-lg font-semibold text-brand-blue">{pt.title}</h3>
                <p className="mt-3 text-brand-charcoal/80">{pt.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal className="mt-10 max-w-3xl">
          <p className="text-xl font-semibold text-brand-blue">{r.different.strong}</p>
        </Reveal>
      </Section>

      {/* Working together */}
      <Section tone="white">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">How it works day to day</p>
          <h2 className="mt-3 text-3xl font-bold text-brand-blue sm:text-5xl">{r.together.title}</h2>
          <p className="mt-6 text-lg text-brand-charcoal/85">{r.together.intro}</p>
        </Reveal>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {r.together.points.map((pt, i) => (
            <li key={pt.title}>
              <Reveal delay={(i % 3) * 0.1} className="group h-full rounded-3xl bg-brand-paper p-7 transition duration-300 hover:bg-brand-blue hover:text-white">
                <span className="text-sm font-bold text-brand-copper">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-semibold text-brand-blue group-hover:text-white">{pt.title}</h3>
                <p className="mt-3 text-brand-charcoal/80 group-hover:text-white/90">{pt.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal className="mt-10 max-w-3xl">
          <p className="text-xl font-semibold text-brand-blue">{r.together.strong}</p>
        </Reveal>
      </Section>

      {/* Journey */}
      <Section tone="ink">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">The path</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-5xl">{r.journey.title}</h2>
          <p className="mt-6 text-lg text-white/85">{r.journey.intro}</p>
          <p className="mt-4 font-semibold">{r.journey.lead}</p>
        </Reveal>
        <Journey />
        <Reveal className="mt-12 max-w-3xl">
          <p className="text-xl font-semibold">{r.journey.strong}</p>
        </Reveal>
      </Section>

      {/* Ready */}
      <section className="relative overflow-hidden bg-brand-blue py-24 text-center text-white sm:py-32">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-brand-green/25 blur-3xl" />
        <div className="container-x relative">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-4xl font-bold sm:text-5xl">{r.ready.title}</h2>
            <div className="mx-auto mt-6 max-w-2xl space-y-4 text-lg text-white/85">
              {r.ready.paras.map((t) => (
                <p key={t}>{t}</p>
              ))}
              <p className="font-semibold text-white">{r.ready.strong}</p>
            </div>
            <div className="mt-9">
              <Button href="/contact" variant="white">{CTA.book}</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

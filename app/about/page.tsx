import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About & Meet Paul | ReHealth Dads",
  description:
    "The story behind ReHealth Dads, the talks Paul gives, and the credentials that back every recommendation.",
};

const talks = [
  {
    title: "The Dad Bod Myth",
    venue: "Corporate wellness series",
    year: "2024",
    summary:
      "Why the 'dad bod' is a symptom, not a standard — and the three biomarkers every father over 35 should track.",
  },
  {
    title: "Sleep Is a Parenting Skill",
    venue: "Parenting podcast guest",
    year: "2024",
    summary:
      "Practical sleep architecture for parents who haven't had a full night in years.",
  },
  {
    title: "Food Without Fear",
    venue: "Community health workshop",
    year: "2023",
    summary:
      "How to feed a family real food on a real budget, without orthorexia creeping in.",
  },
];

const credentials = [
  { label: "Certified Nutrition Specialist (CNS)", org: "CNS credentialing body" },
  { label: "Certified Strength & Conditioning Specialist (CSCS)", org: "NSCA" },
  { label: "Precision Nutrition L1 Coach", org: "Precision Nutrition" },
  { label: "Functional Movement Screen (FMS) Level 1", org: "FMS" },
  { label: "10+ years coaching fathers & families", org: "In practice" },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
          <Image
            src="/images/paul.jpg"
            alt="Paul, founder of ReHealth Dads"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
            Meet Paul
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            A dad who got tired of being tired.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
            I spent my thirties doing what most fathers do: work, kids, repeat.
            My own health came last, and the bill showed up in my forties.
            ReHealth Dads is the system I wish I&apos;d had — built for the guy
            who has twenty minutes a day, not two hours.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
            No biohacking gimmicks. No influencer diets. Just evidence-based
            nutrition, movement, and sleep — delivered in a way that fits a real
            family schedule.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/free-guide" className="btn-primary">
              Get the free guide
            </Link>
            <Link href="/contact" className="btn-secondary">
              Book Paul to speak
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-3xl font-bold">The story</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "The wake-up call",
              body: "A routine blood test at 41 turned into an uncomfortable conversation. Insulin resistance, poor sleep, and zero strength training.",
            },
            {
              step: "02",
              title: "The rebuild",
              body: "Eighteen months of slow, boring, repeatable changes — not a transformation photo, just a life that worked.",
            },
            {
              step: "03",
              title: "The handoff",
              body: "Friends started asking what I did. ReHealth Dads is that answer, packaged so any father can run it.",
            },
          ].map((item) => (
            <div key={item.step} className="card">
              <span className="text-sm font-bold text-[var(--accent)]">
                {item.step}
              </span>
              <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-[var(--muted)]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-3xl font-bold">The talks</h2>
        <div className="mt-8 space-y-4">
          {talks.map((talk) => (
            <div
              key={talk.title}
              className="flex flex-col gap-2 rounded-2xl border border-[var(--border)] p-6 transition hover:border-[var(--accent)] md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold">{talk.title}</h3>
                <p className="text-sm text-[var(--muted)]">
                  {talk.venue} · {talk.year}
                </p>
                <p className="mt-2 max-w-xl text-[var(--muted)]">{talk.summary}</p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 text-sm font-semibold text-[var(--accent)] hover:underline"
              >
                Request this talk →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-3xl font-bold">The credentials</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {credentials.map((c) => (
            <li
              key={c.label}
              className="flex items-start gap-3 rounded-xl border border-[var(--border)] p-4"
            >
              <span className="mt-1 text-[var(--accent)]">✓</span>
              <div>
                <p className="font-semibold">{c.label}</p>
                <p className="text-sm text-[var(--muted)]">{c.org}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
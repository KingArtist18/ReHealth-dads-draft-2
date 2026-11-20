import { REBUILD } from "@/lib/content";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

export default function RebuildTeaser() {
  return (
    <section className="bg-brand-paper py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="relative grid gap-10 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-green to-brand-green-deep p-8 text-white shadow-lift sm:p-14 lg:grid-cols-[1.2fr_1fr]">
            <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-copper/25 blur-3xl" />
            <div className="relative">
              <p className="eyebrow !text-white/80">Coaching</p>
              <h2 className="mt-3 text-4xl font-bold sm:text-5xl">{REBUILD.title}</h2>
              <p className="mt-4 text-lg text-white/90">{REBUILD.heroTagline}</p>
              <p className="mt-4 text-white/85">{REBUILD.heroBody[1]}</p>
              <div className="mt-8">
                <Button href="/rebuild" variant="white">Explore the ReBuild</Button>
              </div>
            </div>
            <ul className="relative grid grid-cols-2 gap-3 self-center" aria-label="The six pillars">
              {REBUILD.bridge.pillars.map((p, i) => (
                <li key={p.id} className="rounded-2xl bg-white/12 p-4 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/20">
                  <span className="text-xs font-semibold text-brand-copper">0{i + 1}</span>
                  <p className="mt-1 font-semibold">{p.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

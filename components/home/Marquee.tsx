import { REBUILD } from "@/lib/content";

/** Slow-scrolling strip of the six pillars of life that ReBuild covers. */
export default function Marquee() {
  const items = REBUILD.bridge.pillars;
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((p) => (
        <li key={p.id} className="flex items-center text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
          <span className="px-8">{p.label}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-brand-copper" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="overflow-hidden bg-brand-blue-ink py-4" role="presentation">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {row(false)}
        {row(true)}
        {row(true)}
        {row(true)}
      </div>
    </div>
  );
}

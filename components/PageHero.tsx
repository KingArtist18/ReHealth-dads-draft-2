import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

/** Blue gradient banner used at the top of inner pages. */
export default function PageHero({ eyebrow, title, subtitle, children }: Props) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-brand-blue to-brand-blue-ink text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-10 h-72 w-72 animate-float rounded-full bg-brand-green/30 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 -bottom-16 h-72 w-72 rounded-full bg-brand-copper/20 blur-3xl" />
      <div className="container-x relative py-20 sm:py-28">
        <Reveal>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">{title}</h1>
          {subtitle && <p className="mt-5 max-w-2xl text-lg text-white/85">{subtitle}</p>}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </div>
  );
}

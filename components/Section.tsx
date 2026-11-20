import type { ReactNode } from "react";

type Tone = "paper" | "white" | "blue" | "ink";

const TONES: Record<Tone, string> = {
  paper: "bg-brand-paper text-brand-charcoal",
  white: "bg-white text-brand-charcoal",
  blue: "bg-gradient-to-br from-brand-blue to-brand-blue-deep text-white",
  ink: "bg-brand-blue-ink text-white",
};

type Props = {
  children: ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
};

/** Standard page section with consistent spacing and width. */
export default function Section({ children, tone = "paper", id, className = "" }: Props) {
  return (
    <section id={id} className={`${TONES[tone]} py-20 sm:py-28 ${className}`.trim()}>
      <div className="container-x">{children}</div>
    </section>
  );
}

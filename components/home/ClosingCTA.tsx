import Link from "next/link";
import { CTA, HOME } from "@/lib/content";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

export default function ClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-blue py-24 text-center text-white sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-brand-green/25 blur-3xl" />
      <div className="container-x relative">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold sm:text-6xl">{HOME.closing.headline}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">{HOME.closing.text}</p>
          <div className="mt-9">
            <Button href="/contact" variant="white">{CTA.bookShort}</Button>
          </div>
          <Link href="/free-guide" className="mt-6 inline-block text-sm font-semibold underline decoration-brand-copper decoration-2 underline-offset-4 hover:text-white/80">
            {HOME.closing.guideLink}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

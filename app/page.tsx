import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { CTA, HOME } from "@/lib/content";

// Temporary page that proves the Step 2 components work. Replaced in Step 3.
export default function Home() {
  return (
    <>
      <PageHero eyebrow="Draft 2 · Step 2" title={HOME.hero.headline} subtitle={HOME.hero.body}>
        <Button href="/free-guide" variant="green">{CTA.guide}</Button>
      </PageHero>
      <Section tone="paper">
        <Reveal>
          <p className="eyebrow">Components check</p>
          <h2 className="mt-3 text-3xl font-bold text-brand-blue">Header, footer and animations are working.</h2>
          <p className="mt-4 max-w-xl text-brand-charcoal/80">Scroll up and down. The copper bar at the top should fill as you scroll.</p>
        </Reveal>
      </Section>
    </>
  );
}

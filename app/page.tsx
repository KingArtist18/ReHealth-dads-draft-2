import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import CardCarousel from "@/components/home/CardCarousel";
import StuckWants from "@/components/home/StuckWants";
import WinTracker from "@/components/home/WinTracker";
import RebuildTeaser from "@/components/home/RebuildTeaser";
import ClosingCTA from "@/components/home/ClosingCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <CardCarousel />
      <StuckWants />
      <WinTracker />
      <RebuildTeaser />
      <ClosingCTA />
    </>
  );
}

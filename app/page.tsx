import Hero from "@/components/Hero";
import MarqueeBar from "@/components/MarqueeBar";
import HowItWorks from "@/components/HowItWorks";
import WhyAires from "@/components/WhyAires";
import SkillGrid from "@/components/SkillGrid";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import { SectionReveal } from "@/components/SectionReveal";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <MarqueeBar />
      <div className="h-px bg-border max-w-[1024px] mx-auto" />
      <SectionReveal><SkillGrid /></SectionReveal>
      <div className="h-px bg-border max-w-[1024px] mx-auto" />
      <SectionReveal><HowItWorks /></SectionReveal>
      <div className="h-px bg-border max-w-[1024px] mx-auto" />
      <SectionReveal><WhyAires /></SectionReveal>
      <SectionReveal><CTABanner /></SectionReveal>
      <Footer />
    </main>
  );
}

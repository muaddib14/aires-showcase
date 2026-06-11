import Hero from "@/components/Hero";
import FeaturedSkills from "@/components/FeaturedSkills";
import HowItWorks from "@/components/HowItWorks";
import WhyAires from "@/components/WhyAires";
import SkillGrid from "@/components/SkillGrid";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedSkills />
      <HowItWorks />
      <WhyAires />
      <SkillGrid />
      <CTABanner />
      <Footer />
    </main>
  );
}

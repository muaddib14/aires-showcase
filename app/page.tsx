import Hero from "@/components/Hero";
import MarqueeBar from "@/components/MarqueeBar";
import HowItWorks from "@/components/HowItWorks";
import WhyAires from "@/components/WhyAires";
import SkillGrid from "@/components/SkillGrid";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import { SectionReveal } from "@/components/SectionReveal";

async function getGitHubStats() {
  try {
    const res = await fetch(
      "https://api.github.com/repos/Orchestra-Research/AI-Research-SKILLs",
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();
    return {
      stars: data.stargazers_count as number,
      forks: data.forks_count as number,
    };
  } catch {
    return { stars: 0, forks: 0 };
  }
}

export default async function HomePage() {
  const { stars, forks } = await getGitHubStats();

  return (
    <main className="min-h-screen">
      <Hero stars={stars} forks={forks} />
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

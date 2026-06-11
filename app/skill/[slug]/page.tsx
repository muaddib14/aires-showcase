import { SKILLS } from "@/lib/skills";
import SkillDetail from "@/components/SkillDetail";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return SKILLS.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const skill = SKILLS.find((s) => s.slug === params.slug);
  if (!skill) return { title: "Not Found" };
  return {
    title: `${skill.name} — Aires`,
    description: skill.description,
  };
}

export default function SkillPage({ params }: Props) {
  const skill = SKILLS.find((s) => s.slug === params.slug);
  if (!skill) notFound();
  return <SkillDetail skill={skill} />;
}

import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function githubSkillUrl(categorySlug: string, skillSlug: string): string {
  // categorySlug is the actual dir name e.g. "01-model-architecture"
  // For autoresearch (direct SKILL.md): githubPath = "0-autoresearch-skill/SKILL.md"
  return `https://github.com/Demerzels-lab/Aires-Research-Agent/blob/main/${categorySlug}/${skillSlug}/SKILL.md`;
}

export function githubPathUrl(githubPath: string): string {
  return `https://github.com/Demerzels-lab/Aires-Research-Agent/blob/main/${githubPath}`;
}

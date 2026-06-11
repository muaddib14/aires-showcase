import Link from "next/link";
import { type Skill } from "@/lib/skills";
import { CATEGORIES } from "@/lib/categories";

interface Props {
  skill: Skill;
}

export default function SkillCard({ skill }: Props) {
  const category = CATEGORIES.find((c) => c.code === skill.categoryCode);

  return (
    <Link href={`/skill/${skill.slug}`} className="group block h-full">
      <article className="relative flex h-full flex-col rounded-xl border border-border bg-surface p-5 transition-all duration-200 hover:border-accent-green/30 hover:bg-surface-raised hover:shadow-[0_0_20px_rgba(53,214,164,0.07)]">
        {/* Top-right corner tick */}
        <div className="pointer-events-none absolute right-0 top-0 h-8 w-8 overflow-hidden rounded-xl">
          <div className="absolute right-0 top-0 h-full w-full border-r-[2px] border-t-[2px] border-accent-green/15 transition-colors group-hover:border-accent-green/55" />
        </div>

        <div className="mb-3 flex items-center gap-2">
          <span className="font-mono text-xs text-accent-pink">
            {skill.categoryCode}
          </span>
          <span className="rounded-full border border-border px-2 py-0.5 font-mono text-xs text-muted">
            {category?.label ?? skill.categorySlug}
          </span>
        </div>

        <h3 className="mb-2 font-semibold text-text transition-colors group-hover:text-accent-green">
          {skill.name}
        </h3>

        <p className="flex-1 text-sm leading-relaxed text-muted line-clamp-2">
          {skill.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-mono text-xs text-muted/50">SKILL.md</span>
          <span className="font-mono text-xs text-accent-green opacity-0 transition-opacity group-hover:opacity-100">
            VIEW →
          </span>
        </div>
      </article>
    </Link>
  );
}

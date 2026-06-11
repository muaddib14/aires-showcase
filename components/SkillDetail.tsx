import Link from "next/link";
import { type Skill } from "@/lib/skills";
import { CATEGORIES } from "@/lib/categories";
import { githubPathUrl } from "@/lib/utils";

interface Props {
  skill: Skill;
}

export default function SkillDetail({ skill }: Props) {
  const category = CATEGORIES.find((c) => c.code === skill.categoryCode);
  const ghUrl = githubPathUrl(skill.githubPath);

  return (
    <div className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#catalog"
          className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent-green"
        >
          ← Back to catalog
        </Link>

        <div className="mb-8">
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-sm text-accent-pink">
              {skill.categoryCode}
            </span>
            <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
              {category?.label}
            </span>
          </div>
          <h1 className="text-4xl font-bold">{skill.name}</h1>
          <p className="mt-3 text-lg text-muted">{skill.description}</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href={ghUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-accent-green px-5 py-2.5 font-semibold text-bg transition-all hover:bg-accent-green/90 hover:shadow-[0_0_20px_rgba(53,214,164,0.35)]"
          >
            View SKILL.md on GitHub →
          </a>
          <a
            href="https://github.com/Orchestra-Research/AI-Research-SKILLs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-5 py-2.5 font-semibold text-muted transition-all hover:border-accent-pink/40 hover:text-accent-pink"
          >
            Install via npx →
          </a>
        </div>

        {category && (
          <div className="mt-10 rounded-xl border border-border bg-surface p-6">
            <h2 className="mb-2 font-mono text-sm text-accent-green">
              Category · {category.label}
            </h2>
            <p className="text-muted">{category.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

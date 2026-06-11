"use client";

import { CATEGORIES, TOTAL_SKILLS } from "@/lib/categories";

interface Props {
  active: string | null;
  onChange: (code: string | null) => void;
  counts: Record<string, number>;
}

export default function CategoryRail({ active, onChange, counts }: Props) {
  return (
    <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2">
      <button
        onClick={() => onChange(null)}
        className={`shrink-0 rounded-md px-3 py-1.5 font-mono text-xs transition-all ${
          active === null
            ? "bg-accent-green font-bold text-bg shadow-[0_0_12px_rgba(53,214,164,0.4)]"
            : "border border-border text-muted hover:border-accent-green/30 hover:text-accent-green"
        }`}
      >
        ALL · {TOTAL_SKILLS}
      </button>
      {CATEGORIES.map((cat) => (
        <button
          key={cat.code}
          onClick={() => onChange(cat.code)}
          className={`shrink-0 rounded-md px-3 py-1.5 font-mono text-xs transition-all ${
            active === cat.code
              ? "bg-accent-green font-bold text-bg shadow-[0_0_12px_rgba(53,214,164,0.4)]"
              : "border border-border text-muted hover:border-accent-green/30 hover:text-accent-green"
          }`}
        >
          <span className="text-accent-pink">{cat.code}</span>
          {" · "}
          {cat.label}
          {counts[cat.code] !== undefined && (
            <span className="ml-1 opacity-40">({counts[cat.code]})</span>
          )}
        </button>
      ))}
    </div>
  );
}

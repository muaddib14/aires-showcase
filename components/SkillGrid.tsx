"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS } from "@/lib/skills";
import CategoryRail from "./CategoryRail";
import SkillCard from "./SkillCard";

export default function SkillGrid() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const s of SKILLS) {
      map[s.categoryCode] = (map[s.categoryCode] ?? 0) + 1;
    }
    return map;
  }, []);

  const filtered = useMemo(() => {
    let list = SKILLS;
    if (activeCategory)
      list = list.filter((s) => s.categoryCode === activeCategory);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.slug.includes(q) ||
          s.categorySlug.includes(q)
      );
    }
    return list;
  }, [activeCategory, query]);

  return (
    <section id="catalog" className="px-6 pb-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Skill Catalog</h2>
            <p className="mt-1 text-sm text-muted">
              <span className="font-mono text-accent-green">
                {filtered.length}
              </span>{" "}
              of {SKILLS.length} skills
            </p>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search skills..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 pl-10 font-mono text-sm text-text placeholder-muted outline-none transition-all focus:border-accent-green/40 focus:ring-1 focus:ring-accent-green/20 md:w-64"
            />
            <svg
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Category rail */}
        <div className="mb-8">
          <CategoryRail
            active={activeCategory}
            onChange={setActiveCategory}
            counts={counts}
          />
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={`${activeCategory}-${query}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filtered.map((skill, i) => (
                <motion.div
                  key={skill.slug}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.25,
                    delay: Math.min(i * 0.02, 0.3),
                  }}
                >
                  <SkillCard skill={skill} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-24 text-center"
            >
              <div className="font-mono text-4xl text-border">[ ]</div>
              <p className="mt-4 text-muted">
                No skills match &ldquo;{query}&rdquo;
              </p>
              <button
                onClick={() => {
                  setQuery("");
                  setActiveCategory(null);
                }}
                className="mt-4 font-mono text-sm text-accent-green hover:underline"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Slugs must match generated lib/skills.ts (name field lowercased/slugified)
const FEATURED = [
  {
    slug: "autoresearch",
    name: "Autoresearch",
    category: "Autoresearch",
    tagline: "Hypothesis → paper, fully autonomous two-loop orchestration",
    accent: "green" as const,
  },
  {
    slug: "axolotl",
    name: "Axolotl",
    category: "Fine-Tuning",
    tagline: "Config-driven multi-GPU fine-tuning with FSDP support",
    accent: "pink" as const,
  },
  {
    slug: "vllm",
    name: "vLLM",
    category: "Inference Serving",
    tagline: "High-throughput PagedAttention-based LLM serving",
    accent: "green" as const,
  },
  {
    slug: "grpo-rl-training",
    name: "GRPO",
    category: "Post-Training",
    tagline: "Group relative policy optimization for LLM alignment",
    accent: "pink" as const,
  },
  {
    slug: "transformer-lens",
    name: "TransformerLens",
    category: "Mech Interp",
    tagline: "Mechanistic interpretability for transformer internals",
    accent: "green" as const,
  },
  {
    slug: "nanogpt",
    name: "NanoGPT",
    category: "Model Architecture",
    tagline: "Minimal GPT in ~300 lines for rapid experimentation",
    accent: "pink" as const,
  },
] as const;

export default function FeaturedSkills() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">Featured Skills</h2>
          <p className="mt-2 text-muted">
            Spotlight on the most powerful skills in the library
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((skill, i) => (
            <motion.div
              key={skill.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
            >
              <Link href={`/skill/${skill.slug}`} className="group block">
                <div
                  className={`relative overflow-hidden rounded-xl border bg-surface p-6 transition-all duration-200 hover:bg-surface-raised ${
                    skill.accent === "green"
                      ? "border-accent-green/20 hover:border-accent-green/50 hover:shadow-[0_0_24px_rgba(53,214,164,0.12)]"
                      : "border-accent-pink/20 hover:border-accent-pink/50 hover:shadow-[0_0_24px_rgba(255,93,158,0.12)]"
                  }`}
                >
                  {/* Glow orb top-right */}
                  <div
                    className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl ${
                      skill.accent === "green"
                        ? "bg-accent-green/15"
                        : "bg-accent-pink/15"
                    }`}
                  />

                  <div className="relative">
                    <span
                      className={`mb-3 inline-block rounded-full px-2.5 py-0.5 font-mono text-xs ${
                        skill.accent === "green"
                          ? "bg-accent-green/10 text-accent-green"
                          : "bg-accent-pink/10 text-accent-pink"
                      }`}
                    >
                      {skill.category}
                    </span>
                    <h3 className="mb-1 text-lg font-bold text-text group-hover:text-white transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-muted">{skill.tagline}</p>
                    <div
                      className={`mt-4 font-mono text-xs opacity-0 transition-opacity group-hover:opacity-100 ${
                        skill.accent === "green"
                          ? "text-accent-green"
                          : "text-accent-pink"
                      }`}
                    >
                      VIEW SKILL.md →
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

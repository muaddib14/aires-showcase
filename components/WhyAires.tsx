"use client";

import { motion } from "framer-motion";

const PROPS = [
  {
    icon: "⬡",
    title: "98 Skills",
    description:
      "Full AI research stack — architecture, training, inference, interpretability, RAG, multimodal, and paper writing.",
    accent: "green" as const,
  },
  {
    icon: "⚡",
    title: "Zero setup",
    description:
      "One npx command installs any skill into Claude Code, Codex, or Gemini CLI instantly. No config files.",
    accent: "pink" as const,
  },
  {
    icon: "◎",
    title: "MIT License",
    description:
      "Fully open source. Use commercially, fork it, extend it — no restrictions, no lock-in.",
    accent: "green" as const,
  },
  {
    icon: "◈",
    title: "Agent-native",
    description:
      "Skills follow Anthropic's official format — tight SKILL.md with progressive-disclosure reference docs.",
    accent: "pink" as const,
  },
] as const;

export default function WhyAires() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Why Aires</h2>
          <p className="mt-2 text-muted">
            Purpose-built for serious AI research workflows.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {PROPS.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-surface p-6 transition-colors hover:bg-surface-raised"
            >
              <div
                className={`mb-3 text-2xl ${
                  prop.accent === "green"
                    ? "text-accent-green"
                    : "text-accent-pink"
                }`}
              >
                {prop.icon}
              </div>
              <h3 className="mb-2 font-semibold text-text">{prop.title}</h3>
              <p className="text-sm leading-relaxed text-muted">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

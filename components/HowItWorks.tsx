"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Choose a category",
    description:
      "Browse 23 research categories — from fine-tuning to mech interp, distributed training to paper writing.",
    code: null,
  },
  {
    number: "02",
    title: "Pick your skills",
    description:
      "Each skill is a focused SKILL.md with expert patterns, quick recipes, and deep reference docs.",
    code: null,
  },
  {
    number: "03",
    title: "Install to your agent",
    description:
      "One command. Works with Claude Code, Codex, Gemini CLI, and Cursor out of the box.",
    code: "npx @orchestra-research/ai-research-skills",
  },
] as const;

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Three steps. No setup.</h2>
          <p className="mt-2 text-muted">
            From zero to expert AI research agent in minutes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative rounded-xl border border-border bg-surface p-6"
            >
              <div className="mb-4 font-mono text-4xl font-bold text-accent-green/20">
                {step.number}
              </div>

              {/* Connector arrow (not on last) */}
              {i < STEPS.length - 1 && (
                <div className="absolute -right-3.5 top-8 hidden h-px w-7 bg-gradient-to-r from-accent-green/30 to-transparent md:block" />
              )}

              <h3 className="mb-2 font-semibold text-text">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">
                {step.description}
              </p>

              {step.code && (
                <div className="mt-4 rounded-lg border border-border bg-bg px-3 py-2.5">
                  <code className="font-mono text-xs text-accent-green">
                    {step.code}
                  </code>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

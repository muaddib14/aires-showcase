"use client";

import { motion } from "framer-motion";
import { TOTAL_SKILLS, TOTAL_CATEGORIES } from "@/lib/categories";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-20 text-center">
      {/* Dual glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-1/3 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-green/6 blur-[140px]" />
        <div className="absolute right-1/4 top-1/2 h-[350px] w-[500px] rounded-full bg-accent-pink/6 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="relative mx-auto max-w-5xl"
      >
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-green/25 bg-accent-green/10 px-4 py-1.5">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent-green" />
          <span className="font-mono text-xs text-accent-green">
            Orchestra Research · Open Source · MIT License
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          The AI research
          <br />
          <span className="bg-gradient-to-r from-accent-green via-accent-green to-accent-pink bg-clip-text text-transparent">
            skill layer
          </span>
        </h1>

        {/* Subhead */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          {TOTAL_SKILLS} production-ready skills across {TOTAL_CATEGORIES}{" "}
          categories. From model architecture to paper writing — full research
          lifecycle for any AI agent.
        </p>

        {/* Stats */}
        <div className="mt-10 flex flex-wrap justify-center gap-10">
          {[
            { value: String(TOTAL_SKILLS), label: "Production-ready skills" },
            { value: String(TOTAL_CATEGORIES), label: "Research categories" },
            { value: "9.4k+", label: "GitHub stars" },
            { value: "0", label: "Lines of code to install" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-mono text-3xl font-bold text-accent-green">
                {value}
              </div>
              <div className="mt-1 text-sm text-muted">{label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#catalog"
            className="rounded-lg bg-accent-green px-7 py-3.5 font-semibold text-bg transition-all hover:bg-accent-green/90 hover:shadow-[0_0_28px_rgba(53,214,164,0.4)]"
          >
            Browse Skills
          </a>
          <a
            href="https://github.com/Orchestra-Research/AI-Research-SKILLs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-7 py-3.5 font-semibold text-muted transition-all hover:border-accent-pink/40 hover:text-accent-pink"
          >
            GitHub →
          </a>
        </div>
      </motion.div>
    </section>
  );
}

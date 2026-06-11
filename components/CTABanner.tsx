export default function CTABanner() {
  return (
    <section className="px-6 py-20">
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-accent-green/20 bg-surface p-10 text-center">
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-64 w-96 rounded-full bg-accent-green/8 blur-[80px]" />
        </div>

        <div className="relative">
          <h2 className="text-3xl font-bold">
            Start with{" "}
            <span className="bg-gradient-to-r from-accent-green to-accent-pink bg-clip-text text-transparent">
              Autoresearch
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted">
            The orchestrator skill that coordinates all others — from literature
            survey to paper submission. Requires Claude Code or compatible
            agent.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/Orchestra-Research/AI-Research-SKILLs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-accent-green px-6 py-3 font-semibold text-bg transition-all hover:bg-accent-green/90 hover:shadow-[0_0_28px_rgba(53,214,164,0.4)]"
            >
              Install Skills →
            </a>
            <a
              href="/skill/autoresearch"
              className="rounded-lg border border-border px-6 py-3 font-semibold text-muted transition-all hover:border-accent-pink/40 hover:text-accent-pink"
            >
              View Autoresearch Skill
            </a>
          </div>

          <p className="mt-4 font-mono text-xs text-muted/50">
            npx @orchestra-research/ai-research-skills
          </p>
        </div>
      </div>
    </section>
  );
}

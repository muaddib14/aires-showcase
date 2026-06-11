"use client";

const ITEMS = [
  "Anthropic",
  "HuggingFace",
  "DeepMind",
  "Meta AI",
  "EleutherAI",
  "Together AI",
  "Mistral AI",
  "Cohere",
  "Allen Institute",
  "Stanford HAI",
  "MIT CSAIL",
  "Berkeley AI",
  "MosaicML",
  "Stability AI",
  "OpenAI",
  "Nvidia",
  "Microsoft",
];

export default function MarqueeBar() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="border-y border-border bg-text py-3 overflow-hidden select-none">
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-content {
          display: flex;
          gap: 1.5rem;
          white-space: nowrap;
          animation: scroll-left 40s linear infinite;
        }
      `}</style>
      <div className="marquee-content">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 px-3 font-mono text-xs font-medium tracking-wider uppercase flex-shrink-0">
            <span className="text-green text-sm">•</span>
            <span className="text-text-muted">{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

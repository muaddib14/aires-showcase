"use client";

const PROPS = [
  {
    title: "98 Skills",
    description:
      "Full AI research stack — architecture, training, inference, interpretability, RAG, multimodal, paper writing.",
    accent: "green" as const,
    rotate: "-4deg",
    // Erlenmeyer flask with bubbles — research lab
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path
          d="M9.5 3h5M10 3v5.2L4.8 17.5a2 2 0 001.74 3h10.92a2 2 0 001.74-3L14 8.2V3"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M7.2 14.5h9.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="10.5" cy="17.3" r="0.9" fill="currentColor" />
        <circle cx="13.8" cy="18.2" r="0.6" fill="currentColor" />
        <circle cx="12.3" cy="11.5" r="0.7" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Zero setup",
    description:
      "One command installs any skill into Claude Code, Codex, or Gemini CLI. No configuration files needed.",
    accent: "pink" as const,
    rotate: "3deg",
    // Power plug with spark — plug & play
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path
          d="M9 2v5M15 2v5M7 7h10v4a5 5 0 01-5 5v0a5 5 0 01-5-5V7z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12 16v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M10 22l2-3 2 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "MIT License",
    description:
      "Fully open source. Use commercially, fork it, extend it. No restrictions, no lock-in.",
    accent: "green" as const,
    rotate: "-3deg",
    // Open padlock — unlocked, free
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <rect x="4.5" y="10.5" width="13" height="9.5" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M8 10.5V7a4 4 0 017.83-1.2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <circle cx="11" cy="14.5" r="1.3" fill="currentColor" />
        <path d="M11 15.5v2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Agent-native",
    description:
      "Follows Anthropic's official skill format — tight SKILL.md with progressive-disclosure reference docs.",
    accent: "pink" as const,
    rotate: "4deg",
    // Branching orchestration nodes
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="5" r="2.2" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="5.5" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="18.5" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M11 7l-4.2 9M13 7l4.2 9M7.7 18h8.6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeDasharray="2.5 3"
        />
      </svg>
    ),
  },
] as const;

export default function WhyAires() {
  return (
    <section style={{ maxWidth: "1120px", margin: "0 auto", padding: "56px 48px" }}>
      <div
        style={{
          fontFamily: "var(--font-mono, 'DM Mono'), monospace",
          fontSize: "10px",
          fontWeight: 500,
          color: "#7A9B8A",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          marginBottom: "6px",
        }}
      >
        Why Aires
      </div>
      <div
        style={{
          fontFamily: "var(--font-display, 'Bricolage Grotesque'), sans-serif",
          fontSize: "28px",
          fontWeight: 800,
          letterSpacing: "-0.5px",
          color: "#0D1F18",
          marginBottom: "4px",
        }}
      >
        Built for serious research.
      </div>
      <div style={{ fontSize: "14px", color: "#4A6558", marginBottom: "28px" }}>
        Purpose-designed for production AI research workflows.
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "12px",
        }}
      >
        {PROPS.map((prop) => (
          <div
            key={prop.title}
            style={{
              background: "#FFFFFF",
              border: "1.5px solid #C8DDD4",
              borderRadius: "12px",
              padding: "22px",
              transition: "border-color 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "#A8C8B8";
              const blob = e.currentTarget.querySelector(".why-icon-blob") as HTMLElement;
              if (blob) blob.style.transform = "rotate(0deg) scale(1.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "#C8DDD4";
              const blob = e.currentTarget.querySelector(".why-icon-blob") as HTMLElement;
              if (blob) blob.style.transform = `rotate(${prop.rotate})`;
            }}
          >
            <div
              style={{
                width: "46px",
                height: "46px",
                // organic blob shape, not a square
                borderRadius: "61% 39% 52% 48% / 44% 59% 41% 56%",
                background: prop.accent === "green" ? "#E0F7EE" : "#FFF0F6",
                border: `1.5px solid ${prop.accent === "green" ? "#007A52" : "#FF3D8A"}`,
                boxShadow: `3px 3px 0 0 ${prop.accent === "green" ? "rgba(0,122,82,0.25)" : "rgba(255,61,138,0.25)"}`,
                transform: `rotate(${prop.rotate})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
                color: prop.accent === "green" ? "#007A52" : "#FF3D8A",
                transition: "transform 0.2s ease",
              }}
              className="why-icon-blob"
            >
              {prop.icon}
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display, 'Bricolage Grotesque'), sans-serif",
                fontSize: "15px",
                fontWeight: 700,
                color: "#0D1F18",
                letterSpacing: "-0.3px",
                marginBottom: "6px",
              }}
            >
              {prop.title}
            </h3>
            <p style={{ fontSize: "12px", color: "#4A6558", lineHeight: 1.6 }}>
              {prop.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

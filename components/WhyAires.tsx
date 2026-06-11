"use client";

const PROPS = [
  {
    title: "98 Skills",
    description:
      "Full AI research stack — architecture, training, inference, interpretability, RAG, multimodal, paper writing.",
    accent: "green" as const,
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <path
          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Zero setup",
    description:
      "One command installs any skill into Claude Code, Codex, or Gemini CLI. No configuration files needed.",
    accent: "pink" as const,
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <path
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "MIT License",
    description:
      "Fully open source. Use commercially, fork it, extend it. No restrictions, no lock-in.",
    accent: "green" as const,
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path
          d="M8 12l3 3 5-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Agent-native",
    description:
      "Follows Anthropic's official skill format — tight SKILL.md with progressive-disclosure reference docs.",
    accent: "pink" as const,
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
        <path
          d="M14 17.5h7M17.5 14v7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
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
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "#C8DDD4";
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: prop.accent === "green" ? "#E0F7EE" : "#FFF0F6",
                border: `1.5px solid ${prop.accent === "green" ? "rgba(0,184,122,0.2)" : "rgba(255,61,138,0.15)"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "14px",
                color: prop.accent === "green" ? "#007A52" : "#FF3D8A",
              }}
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

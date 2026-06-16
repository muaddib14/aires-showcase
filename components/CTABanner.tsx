import Image from "next/image";

export default function CTABanner() {
  return (
    <section style={{ padding: "0 48px 64px", maxWidth: "1120px", margin: "0 auto" }}>
      <div
        style={{
          background: "#0D1F18",
          borderRadius: "20px",
          padding: "60px 56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial green glow top-right */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-60px",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,184,122,0.2) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Left content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              overflow: "hidden",
              position: "relative",
              border: "2px solid rgba(255,61,138,0.5)",
              marginBottom: "16px",
            }}
          >
            <Image
              src="/Logo.webp"
              alt="Aires mascot"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono, 'DM Mono'), monospace",
              fontSize: "10px",
              fontWeight: 500,
              color: "#00B87A",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "10px",
            }}
          >
            Get started now
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display, 'Bricolage Grotesque'), sans-serif",
              fontSize: "36px",
              fontWeight: 800,
              color: "white",
              letterSpacing: "-1px",
              marginBottom: "10px",
            }}
          >
            Start with{" "}
            <span style={{ color: "#FF3D8A" }}>Autoresearch</span>
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.55)", maxWidth: "400px" }}>
            The orchestrator skill that coordinates all others — from literature survey to paper submission.
          </p>
        </div>

        {/* Right content */}
        <div style={{ position: "relative", zIndex: 1, flexShrink: 0, textAlign: "right" }}>
          <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end", marginBottom: "14px" }}>
            <a
              href="https://github.com/Demerzels-lab/Aires-Research-Agent"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                background: "#FF3D8A",
                color: "white",
                fontSize: "14px",
                fontWeight: 600,
                padding: "11px 22px",
                borderRadius: "10px",
                border: "none",
                textDecoration: "none",
                transition: "all 0.15s",
              }}
            >
              Install Skills{" "}
              <svg width="13" height="13" fill="none" viewBox="0 0 16 16">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="/skill/autoresearch"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                background: "transparent",
                color: "rgba(255,255,255,0.7)",
                fontSize: "14px",
                fontWeight: 600,
                padding: "11px 22px",
                borderRadius: "10px",
                border: "1.5px solid rgba(255,255,255,0.2)",
                textDecoration: "none",
                transition: "all 0.15s",
              }}
            >
              View Skill
            </a>
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono, 'DM Mono'), monospace",
              fontSize: "11px",
              color: "rgba(255,255,255,0.25)",
            }}
          >
            npx ai-research-skills install autoresearch
          </div>
        </div>
      </div>
    </section>
  );
}

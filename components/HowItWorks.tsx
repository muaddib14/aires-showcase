"use client";

import { useState } from "react";

const STEPS = [
  {
    number: "01",
    title: "Choose a category",
    description:
      "Browse 23 research categories — fine-tuning, mech interp, distributed training, paper writing, and more.",
    code: null,
  },
  {
    number: "02",
    title: "Pick your skills",
    description:
      "Each skill is a focused SKILL.md with expert patterns, quick recipes, and progressive reference docs.",
    code: null,
  },
  {
    number: "03",
    title: "Install to your agent",
    description:
      "Works with Claude Code, Codex, Gemini CLI, and Cursor out of the box.",
    code: "npx aires install autoresearch",
  },
] as const;

export default function HowItWorks() {
  const [copied, setCopied] = useState(false);

  function handleCopy(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <section
      id="how-it-works"
      style={{ maxWidth: "1120px", margin: "0 auto", padding: "56px 48px" }}
    >
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
        How It Works
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
        Three steps. No setup.
      </div>
      <div style={{ fontSize: "14px", color: "#4A6558", marginBottom: "28px" }}>
        From zero to expert AI research agent in minutes.
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}
      >
        {STEPS.map((step) => (
          <div
            key={step.number}
            style={{
              background: "#FFFFFF",
              border: "1.5px solid #C8DDD4",
              borderRadius: "12px",
              padding: "28px",
            }}
          >
            {/* Step badge */}
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "#F4FAF7",
                border: "1.5px solid #C8DDD4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-mono, 'DM Mono'), monospace",
                fontSize: "11px",
                fontWeight: 500,
                color: "#4A6558",
                marginBottom: "16px",
              }}
            >
              {step.number}
            </div>

            <h3
              style={{
                fontFamily: "var(--font-display, 'Bricolage Grotesque'), sans-serif",
                fontSize: "17px",
                fontWeight: 700,
                color: "#0D1F18",
                letterSpacing: "-0.3px",
                marginBottom: "8px",
              }}
            >
              {step.title}
            </h3>
            <p style={{ fontSize: "13px", color: "#4A6558", lineHeight: 1.6 }}>
              {step.description}
            </p>

            {step.code && (
              <div
                style={{
                  marginTop: "16px",
                  background: "#0D1F18",
                  borderRadius: "8px",
                  padding: "11px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <code
                  style={{
                    fontFamily: "var(--font-mono, 'DM Mono'), monospace",
                    fontSize: "11px",
                    color: "#7EE8BE",
                    flex: 1,
                  }}
                >
                  {step.code}
                </code>
                <button
                  onClick={() => handleCopy(step.code!)}
                  style={{
                    fontFamily: "var(--font-sans, 'Plus Jakarta Sans'), sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.5)",
                    background: "rgba(255,255,255,0.1)",
                    border: "none",
                    borderRadius: "5px",
                    padding: "4px 8px",
                    cursor: "pointer",
                    transition: "all 0.15s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

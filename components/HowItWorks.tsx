"use client";

import { Fragment, useState } from "react";

/*
 * Three-step flow with hand-drawn-feel SVG icons, dashed connectors
 * between cards, and a terminal-style install block on step 3.
 */

const ICONS = {
  // Compass / map — exploring categories
  explore: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
      <path
        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  // Hand picking a card from stack
  pick: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
      <path
        d="M8 7h12M8 12h12M8 17h12M4 7h.01M4 12h.01M4 17h.01"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="4" cy="7" r="1.4" fill="currentColor" />
    </svg>
  ),
  // Terminal prompt
  terminal: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
      <rect x="2.5" y="4" width="19" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M7 9.5l3 2.5-3 2.5M12.5 15H17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
} as const;

const STEPS = [
  {
    number: "01",
    icon: ICONS.explore,
    iconBg: "#E0F7EE",
    iconColor: "#007A52",
    title: "Choose a category",
    description:
      "Browse 23 research categories — fine-tuning, mech interp, distributed training, paper writing, and more.",
    code: null,
  },
  {
    number: "02",
    icon: ICONS.pick,
    iconBg: "#FFF0F6",
    iconColor: "#D42870",
    title: "Pick your skills",
    description:
      "Each skill is a focused SKILL.md with expert patterns, quick recipes, and progressive reference docs.",
    code: null,
  },
  {
    number: "03",
    icon: ICONS.terminal,
    iconBg: "#0D1F18",
    iconColor: "#7EE8BE",
    title: "Install to your agent",
    description:
      "Works with Claude Code, Codex, Gemini CLI, and Cursor out of the box.",
    code: "npx ai-research-skills install",
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
      <div style={{ fontSize: "14px", color: "#4A6558", marginBottom: "32px" }}>
        From zero to expert AI research agent in minutes.
      </div>

      {/* Steps row with connectors */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr auto 1fr",
          gap: "0",
          alignItems: "stretch",
        }}
      >
        {STEPS.map((step, i) => (
          <Fragment key={step.number}>
            <div
              style={{
                background: "#FFFFFF",
                border: "1.5px solid #C8DDD4",
                borderRadius: "14px",
                padding: "26px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                transition: "all 0.18s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#A8C8B8";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#C8DDD4";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Icon + number row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "18px",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: step.iconBg,
                    color: step.iconColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {step.icon}
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-display, 'Bricolage Grotesque'), sans-serif",
                    fontSize: "32px",
                    fontWeight: 800,
                    color: "#E8F2ED",
                    WebkitTextStroke: "1.2px #A8C8B8",
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  {step.number}
                </span>
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
              <p
                style={{
                  fontSize: "13px",
                  color: "#4A6558",
                  lineHeight: 1.6,
                  flex: 1,
                }}
              >
                {step.description}
              </p>

              {step.code && (
                <div
                  style={{
                    marginTop: "16px",
                    background: "#0D1F18",
                    borderRadius: "9px",
                    padding: "11px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "9px",
                  }}
                >
                  <span
                    style={{
                      color: "#7A9B8A",
                      fontFamily: "var(--font-mono, 'DM Mono'), monospace",
                      fontSize: "11px",
                    }}
                  >
                    $
                  </span>
                  <code
                    style={{
                      fontFamily: "var(--font-mono, 'DM Mono'), monospace",
                      fontSize: "11px",
                      color: "#7EE8BE",
                      flex: 1,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
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
                      color: copied ? "#7EE8BE" : "rgba(255,255,255,0.55)",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.14)",
                      borderRadius: "5px",
                      padding: "4px 9px",
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

            {/* Dashed connector arrow (between cards only) */}
            {i < STEPS.length - 1 && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 6px",
                }}
              >
                <svg width="34" height="14" fill="none" viewBox="0 0 34 14">
                  <path
                    d="M1 7h26"
                    stroke="#A8C8B8"
                    strokeWidth="1.6"
                    strokeDasharray="3 4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M27 2.5L32 7l-5 4.5"
                    stroke="#A8C8B8"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { SKILLS, type Skill } from "@/lib/skills";
import { CATEGORIES } from "@/lib/categories";
import { githubPathUrl } from "@/lib/utils";

interface Props {
  skill: Skill;
}

export default function SkillDetail({ skill }: Props) {
  const category = CATEGORIES.find((c) => c.code === skill.categoryCode);
  const ghUrl = githubPathUrl(skill.githubPath);
  const installCmd = `npx ai-research-skills install ${skill.slug}`;
  const [copied, setCopied] = useState(false);

  const related = SKILLS.filter(
    (s) => s.categoryCode === skill.categoryCode && s.slug !== skill.slug
  ).slice(0, 4);

  const copy = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "48px 32px 80px" }}>
        {/* Back to catalog */}
        <Link
          href="/#catalog"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            fontFamily: "var(--font-mono, 'DM Mono'), monospace",
            fontSize: "12px",
            color: "#4A6558",
            textDecoration: "none",
            marginBottom: "20px",
            padding: "6px 12px",
            borderRadius: "8px",
            border: "1.5px solid #C8DDD4",
            background: "#FFFFFF",
            transition: "all 0.15s",
          }}
        >
          <svg width="12" height="12" fill="none" viewBox="0 0 16 16">
            <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to catalog
        </Link>

        {/* Breadcrumb */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "var(--font-mono, 'DM Mono'), monospace",
            fontSize: "12px",
            color: "#7A9B8A",
            marginBottom: "28px",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" style={{ color: "#4A6558", textDecoration: "none" }}>
            Home
          </Link>
          <span>/</span>
          <Link href="/#catalog" style={{ color: "#4A6558", textDecoration: "none" }}>
            Skills
          </Link>
          {category && (
            <>
              <span>/</span>
              <span style={{ color: "#4A6558" }}>{category.label}</span>
            </>
          )}
          <span>/</span>
          <span style={{ color: "#0D1F18", fontWeight: 600 }}>{skill.name}</span>
        </div>

        {/* Two-column: main content + sticky sidebar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 320px",
            gap: "24px",
            alignItems: "start",
          }}
          className="skill-detail-grid"
        >
        <div style={{ minWidth: 0 }}>
        {/* Header card */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1.5px solid #C8DDD4",
            borderRadius: "16px",
            padding: "40px",
            position: "relative",
            overflow: "hidden",
            marginBottom: "16px",
          }}
        >
          {/* top gradient strip */}
          <span
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              background: "linear-gradient(90deg, #FF3D8A, #00B87A)",
              display: "block",
            }}
          />

          {/* Meta */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <span
              style={{
                fontFamily: "var(--font-mono, 'DM Mono'), monospace",
                fontSize: "11px",
                color: "#7A9B8A",
              }}
            >
              SKILL {skill.categoryCode}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono, 'DM Mono'), monospace",
                fontSize: "11px",
                fontWeight: 500,
                color: "#007A52",
                background: "#E0F7EE",
                borderRadius: "100px",
                padding: "3px 10px",
              }}
            >
              {category?.label}
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-display, 'Bricolage Grotesque'), sans-serif",
              fontSize: "clamp(28px, 4.5vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-1px",
              color: "#0D1F18",
              lineHeight: 1.08,
              marginBottom: "14px",
            }}
          >
            {skill.name}
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: "15.5px",
              color: "#4A6558",
              lineHeight: 1.7,
              maxWidth: "640px",
              marginBottom: "32px",
            }}
          >
            {skill.description}
          </p>

        </div>

        {/* Works-with section */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1.5px solid #C8DDD4",
            borderRadius: "14px",
            padding: "24px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono, 'DM Mono'), monospace",
              fontSize: "10px",
              fontWeight: 500,
              color: "#7A9B8A",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "10px",
            }}
          >
            ◆ Works with
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {["Claude Code", "Codex", "Gemini CLI", "Cursor"].map((agent) => (
              <span
                key={agent}
                style={{
                  fontFamily: "var(--font-sans, 'Plus Jakarta Sans'), sans-serif",
                  fontSize: "12.5px",
                  fontWeight: 600,
                  color: "#2A4035",
                  background: "#F4FAF7",
                  border: "1.5px solid #C8DDD4",
                  borderRadius: "8px",
                  padding: "6px 12px",
                }}
              >
                {agent}
              </span>
            ))}
          </div>
          <p style={{ fontSize: "12.5px", color: "#7A9B8A", marginTop: "12px", lineHeight: 1.6 }}>
            One command install — skill auto-loads when your agent needs it.
          </p>
        </div>

        {/* OUTPUT section */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1.5px solid #C8DDD4",
            borderRadius: "14px",
            padding: "28px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono, 'DM Mono'), monospace",
              fontSize: "9.5px",
              fontWeight: 600,
              color: "#7A9B8A",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "12px",
            }}
          >
            ◆ Output
          </div>
          <h3
            style={{
              fontFamily: "var(--font-display, 'Bricolage Grotesque'), sans-serif",
              fontSize: "20px",
              fontWeight: 700,
              color: "#0D1F18",
              marginBottom: "12px",
              letterSpacing: "-0.3px",
            }}
          >
            What it produces
          </h3>
          <p style={{ fontSize: "14px", color: "#4A6558", lineHeight: 1.7 }}>
            Coming soon — check SKILL.md for detailed output specification.
          </p>
        </div>

        {/* AUDIENCE section */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1.5px solid #C8DDD4",
            borderRadius: "14px",
            padding: "28px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono, 'DM Mono'), monospace",
              fontSize: "9.5px",
              fontWeight: 600,
              color: "#7A9B8A",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "12px",
            }}
          >
            ◆ Audience
          </div>
          <h3
            style={{
              fontFamily: "var(--font-display, 'Bricolage Grotesque'), sans-serif",
              fontSize: "20px",
              fontWeight: 700,
              color: "#0D1F18",
              marginBottom: "14px",
              letterSpacing: "-0.3px",
            }}
          >
            Best for
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <span
              style={{
                fontFamily: "var(--font-sans, 'Plus Jakarta Sans'), sans-serif",
                fontSize: "12.5px",
                fontWeight: 500,
                color: "#007A52",
                background: "#E0F7EE",
                border: "1.5px solid rgba(0,122,82,0.2)",
                borderRadius: "8px",
                padding: "6px 14px",
              }}
            >
              Coming soon
            </span>
          </div>
        </div>

        {/* EXAMPLE PROMPTS section */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1.5px solid #C8DDD4",
            borderRadius: "14px",
            padding: "28px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono, 'DM Mono'), monospace",
              fontSize: "9.5px",
              fontWeight: 600,
              color: "#7A9B8A",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "12px",
            }}
          >
            ◆ Example Prompts
          </div>
          <h3
            style={{
              fontFamily: "var(--font-display, 'Bricolage Grotesque'), sans-serif",
              fontSize: "20px",
              fontWeight: 700,
              color: "#0D1F18",
              marginBottom: "16px",
              letterSpacing: "-0.3px",
            }}
          >
            Use it like this
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div
              style={{
                background: "#0D1F18",
                borderRadius: "10px",
                padding: "14px 16px",
                fontFamily: "var(--font-mono, 'DM Mono'), monospace",
                fontSize: "12.5px",
                color: "#7EE8BE",
                lineHeight: 1.6,
              }}
            >
              Coming soon — check SKILL.md for example prompts
            </div>
          </div>
        </div>

        {/* INSTALLATION section */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1.5px solid #C8DDD4",
            borderRadius: "14px",
            padding: "28px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono, 'DM Mono'), monospace",
              fontSize: "9.5px",
              fontWeight: 600,
              color: "#7A9B8A",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "12px",
            }}
          >
            ◆ Installation
          </div>
          <h3
            style={{
              fontFamily: "var(--font-display, 'Bricolage Grotesque'), sans-serif",
              fontSize: "20px",
              fontWeight: 700,
              color: "#0D1F18",
              marginBottom: "18px",
              letterSpacing: "-0.3px",
            }}
          >
            How to use this skill
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {/* Path A Card */}
            <div
              style={{
                background: "#F9FFFE",
                border: "1.5px solid #E0EBE5",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "#E0F7EE",
                    color: "#007A52",
                    fontFamily: "var(--font-display, 'Bricolage Grotesque'), sans-serif",
                    fontWeight: 700,
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  A
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: "#0D1F18", marginBottom: "8px", fontSize: "14.5px" }}>Path A: CLI</div>
                  <p style={{ fontSize: "12.5px", color: "#4A6558", marginBottom: "10px", lineHeight: 1.6 }}>
                    For developers & coding agents
                  </p>
                  <code
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      background: "#0D1F18",
                      color: "#7EE8BE",
                      padding: "10px 12px",
                      borderRadius: "8px",
                      fontSize: "12px",
                      overflow: "auto",
                    }}
                  >
                    npx ai-research-skills install {skill.slug}
                  </code>
                </div>
              </div>
            </div>

            {/* Path B Card */}
            <div
              style={{
                background: "#F9FFFE",
                border: "1.5px solid #E0EBE5",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "#FFF0F6",
                    color: "#DB2777",
                    fontFamily: "var(--font-display, 'Bricolage Grotesque'), sans-serif",
                    fontWeight: 700,
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  B
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: "#0D1F18", marginBottom: "8px", fontSize: "14.5px" }}>Path B: Upload to Claude</div>
                  <p style={{ fontSize: "12.5px", color: "#4A6558", marginBottom: "12px", lineHeight: 1.6 }}>
                    For Claude chat users (no coding required)
                  </p>
                  <ol style={{ fontSize: "12.5px", color: "#4A6558", lineHeight: 1.8, margin: 0, paddingLeft: "20px" }}>
                    <li style={{ marginBottom: "6px" }}>
                      Download SKILL.md from{" "}
                      <a
                        href={ghUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#007A52", fontWeight: 600, textDecoration: "none" }}
                      >
                        GitHub
                      </a>
                    </li>
                    <li style={{ marginBottom: "6px" }}>
                      Upload to{" "}
                      <a
                        href="https://claude.ai/customize/skills"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#007A52", fontWeight: 600, textDecoration: "none" }}
                      >
                        claude.ai/customize/skills
                      </a>
                    </li>
                    <li>
                      Use in chat: <code style={{ fontFamily: "var(--font-mono)", background: "rgba(0,122,82,0.1)", padding: "2px 6px", borderRadius: "4px" }}>/{skill.slug}</code>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related skills */}
        {related.length > 0 && (
          <div>
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
              More in {category?.label}
            </div>
            <div
              style={{
                fontFamily: "var(--font-display, 'Bricolage Grotesque'), sans-serif",
                fontSize: "22px",
                fontWeight: 800,
                letterSpacing: "-0.5px",
                color: "#0D1F18",
                marginBottom: "18px",
              }}
            >
              Related skills
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "10px",
              }}
            >
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/skill/${rel.slug}`}
                  style={{
                    background: "#FFFFFF",
                    border: "1.5px solid #C8DDD4",
                    borderRadius: "12px",
                    padding: "18px 20px",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "all 0.18s cubic-bezier(0.4,0,0.2,1)",
                    display: "block",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.transform = "translateY(-2px)";
                    el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.07)";
                    el.style.borderColor = "#A8C8B8";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                    el.style.borderColor = "#C8DDD4";
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display, 'Bricolage Grotesque'), sans-serif",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#0D1F18",
                      marginBottom: "4px",
                    }}
                  >
                    {rel.name}
                  </div>
                  <p
                    style={{
                      fontSize: "12.5px",
                      color: "#4A6558",
                      lineHeight: 1.55,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {rel.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
        </div>

        {/* Sidebar — sticky */}
        <div style={{ position: "sticky", top: "76px" }} className="skill-detail-sidebar">
          <div
            style={{
              background: "#0D1F18",
              borderRadius: "16px",
              padding: "24px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono, 'DM Mono'), monospace",
                fontSize: "10px",
                fontWeight: 500,
                color: "#00B87A",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: "12px",
              }}
            >
              ◆ Get this skill
            </div>
            <div
              style={{
                fontFamily: "var(--font-display, 'Bricolage Grotesque'), sans-serif",
                fontSize: "17px",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "16px",
              }}
            >
              {skill.name}
            </div>

            {/* Install command */}
            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "10px",
                padding: "12px 14px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "14px",
              }}
            >
              <span style={{ color: "#7A9B8A", fontFamily: "var(--font-mono, 'DM Mono'), monospace", fontSize: "12px" }}>$</span>
              <code
                style={{
                  fontFamily: "var(--font-mono, 'DM Mono'), monospace",
                  fontSize: "12px",
                  color: "#7EE8BE",
                  flex: 1,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {installCmd}
              </code>
              <button
                onClick={copy}
                style={{
                  fontFamily: "var(--font-sans, 'Plus Jakarta Sans'), sans-serif",
                  fontSize: "10.5px",
                  fontWeight: 600,
                  color: copied ? "#7EE8BE" : "rgba(255,255,255,0.6)",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "6px",
                  padding: "4px 10px",
                  cursor: "pointer",
                  transition: "all 0.15s",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {copied ? "✓" : "Copy"}
              </button>
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <a
                href={ghUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "7px",
                  background: "#FF3D8A",
                  color: "white",
                  fontSize: "13px",
                  fontWeight: 600,
                  padding: "10px 16px",
                  borderRadius: "9px",
                  textDecoration: "none",
                  transition: "all 0.15s",
                }}
              >
                View SKILL.md
              </a>
              <a
                href="https://github.com/Demerzels-lab/Aires-Research-Agent"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "7px",
                  background: "transparent",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "13px",
                  fontWeight: 600,
                  padding: "10px 16px",
                  borderRadius: "9px",
                  border: "1.5px solid rgba(255,255,255,0.15)",
                  textDecoration: "none",
                  transition: "all 0.15s",
                }}
              >
                Full repository
              </a>
            </div>
          </div>

          {/* Part of category */}
          {category && (
            <div
              style={{
                background: "#FFFFFF",
                border: "1.5px solid #C8DDD4",
                borderRadius: "14px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono, 'DM Mono'), monospace",
                  fontSize: "10px",
                  fontWeight: 500,
                  color: "#7A9B8A",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  marginBottom: "10px",
                }}
              >
                ◆ Part of category
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display, 'Bricolage Grotesque'), sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#0D1F18",
                  marginBottom: "6px",
                }}
              >
                {category.label}
              </div>
              <p style={{ fontSize: "12.5px", color: "#4A6558", lineHeight: 1.6, marginBottom: "10px" }}>
                {category.description}
              </p>
              <Link
                href="/#catalog"
                style={{
                  fontFamily: "var(--font-mono, 'DM Mono'), monospace",
                  fontSize: "11.5px",
                  color: "#DB2777",
                  textDecoration: "none",
                }}
              >
                Browse all skills →
              </Link>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}

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
      <div style={{ maxWidth: "880px", margin: "0 auto", padding: "48px 32px 80px" }}>
        {/* Breadcrumb */}
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
            marginBottom: "36px",
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
              marginBottom: "28px",
            }}
          >
            {skill.description}
          </p>

          {/* Install command */}
          <div
            style={{
              background: "#0D1F18",
              borderRadius: "10px",
              padding: "14px 18px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "20px",
              maxWidth: "560px",
            }}
          >
            <span style={{ color: "#7A9B8A", fontFamily: "var(--font-mono, 'DM Mono'), monospace", fontSize: "13px" }}>$</span>
            <code
              style={{
                fontFamily: "var(--font-mono, 'DM Mono'), monospace",
                fontSize: "13px",
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
                fontSize: "11px",
                fontWeight: 600,
                color: copied ? "#7EE8BE" : "rgba(255,255,255,0.6)",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "6px",
                padding: "5px 12px",
                cursor: "pointer",
                transition: "all 0.15s",
                whiteSpace: "nowrap",
              }}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <a
              href={ghUrl}
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
                padding: "10px 20px",
                borderRadius: "10px",
                textDecoration: "none",
                transition: "all 0.15s",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.509 11.509 0 016.002 0c2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              View SKILL.md
            </a>
            <a
              href="https://github.com/Orchestra-Research/AI-Research-SKILLs"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                background: "transparent",
                color: "#0D1F18",
                fontSize: "14px",
                fontWeight: 600,
                padding: "10px 20px",
                borderRadius: "10px",
                border: "1.5px solid #A8C8B8",
                textDecoration: "none",
                transition: "all 0.15s",
              }}
            >
              Full repository
              <svg width="13" height="13" fill="none" viewBox="0 0 16 16">
                <path d="M2 14L14 2M14 2H6M14 2V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Two-column info */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          {/* Category card */}
          {category && (
            <div
              style={{
                background: "#FFFFFF",
                border: "1.5px solid #C8DDD4",
                borderRadius: "14px",
                padding: "24px",
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
                About this category
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display, 'Bricolage Grotesque'), sans-serif",
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#0D1F18",
                  marginBottom: "8px",
                }}
              >
                {category.label}
              </div>
              <p style={{ fontSize: "13px", color: "#4A6558", lineHeight: 1.65 }}>
                {category.description}
              </p>
            </div>
          )}

          {/* Works-with card */}
          <div
            style={{
              background: "#FFFFFF",
              border: "1.5px solid #C8DDD4",
              borderRadius: "14px",
              padding: "24px",
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
              Works with
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
    </div>
  );
}

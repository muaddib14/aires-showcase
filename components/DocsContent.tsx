"use client";

import Link from "next/link";
import { useState } from "react";
import { TOTAL_SKILLS, TOTAL_CATEGORIES, CATEGORIES } from "@/lib/categories";
import { SKILLS } from "@/lib/skills";

const MONO = "var(--font-mono, 'DM Mono'), monospace";
const DISPLAY = "var(--font-display, 'Bricolage Grotesque'), sans-serif";

const TOC = [
  { id: "what-you-need", label: "What you need" },
  { id: "install", label: "Install a skill" },
  { id: "recommended", label: "Recommended order" },
  { id: "faq", label: "FAQ" },
];

const FAQS = [
  {
    q: "Do I need an API key?",
    a: "No. Skills are plain SKILL.md instruction files — your agent reads them directly. There is nothing to authenticate.",
  },
  {
    q: "Which agents are supported?",
    a: "Claude Code, Codex, Gemini CLI, and Cursor work out of the box. Any agent that supports the Anthropic skill format can load them.",
  },
  {
    q: "Can I use this commercially?",
    a: "Yes. Everything is MIT licensed — use it at work, fork it, modify it, redistribute it. No restrictions.",
  },
  {
    q: "How do I update skills?",
    a: "Re-run the install command. It pulls the latest SKILL.md from the repository and replaces your local copy.",
  },
  {
    q: "Can I write my own skills?",
    a: "Yes. Copy the structure of any existing skill — a SKILL.md with YAML frontmatter (name + description) plus optional reference docs — and drop it into your agent's skills directory.",
  },
];

function CodeBlock({ cmd }: { cmd: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div
      style={{
        background: "#0D1F18",
        borderRadius: "10px",
        padding: "13px 16px",
        display: "flex",
        alignItems: "center",
        gap: "11px",
        margin: "14px 0",
      }}
    >
      <span style={{ color: "#7A9B8A", fontFamily: MONO, fontSize: "12.5px" }}>$</span>
      <code
        style={{
          fontFamily: MONO,
          fontSize: "12.5px",
          color: "#7EE8BE",
          flex: 1,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {cmd}
      </code>
      <button
        onClick={() => {
          navigator.clipboard.writeText(cmd);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        style={{
          fontFamily: "var(--font-sans, 'Plus Jakarta Sans'), sans-serif",
          fontSize: "10.5px",
          fontWeight: 600,
          color: copied ? "#7EE8BE" : "rgba(255,255,255,0.55)",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.14)",
          borderRadius: "6px",
          padding: "4px 10px",
          cursor: "pointer",
          whiteSpace: "nowrap",
          transition: "all 0.15s",
        }}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

export default function DocsContent() {
  const categoryCounts = CATEGORIES.map((c) => ({
    label: c.label,
    count: SKILLS.filter((s) => s.categoryCode === c.code).length,
  })).filter((c) => c.count > 0);

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* ── Hero strip ── */}
      <div
        style={{
          borderBottom: "1.5px solid #C8DDD4",
          background:
            "linear-gradient(180deg, #DFF0E8 0%, #E8F2ED 100%)",
          padding: "64px 48px 56px",
        }}
      >
        <div style={{ maxWidth: "1060px", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: MONO,
              fontSize: "11px",
              fontWeight: 500,
              color: "#007A52",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Quick Start · No code required
          </div>
          <h1
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-1.2px",
              lineHeight: 1.05,
              color: "#0D1F18",
              marginBottom: "14px",
            }}
          >
            Getting Started{" "}
            <span style={{ color: "#7A9B8A", fontWeight: 700 }}>
              in under 5 minutes
            </span>
          </h1>
          <p style={{ fontSize: "16px", color: "#4A6558", maxWidth: "520px", lineHeight: 1.65 }}>
            How to install a skill and add it to your agent. No API keys. No
            code. No setup.
          </p>
        </div>
      </div>

      {/* ── Body: sidebar + content ── */}
      <div
        style={{
          maxWidth: "1060px",
          margin: "0 auto",
          padding: "48px 48px 96px",
          display: "grid",
          gridTemplateColumns: "200px 1fr",
          gap: "48px",
          alignItems: "start",
        }}
      >
        {/* Sidebar */}
        <aside style={{ position: "sticky", top: "84px" }}>
          <div
            style={{
              fontFamily: MONO,
              fontSize: "10px",
              fontWeight: 500,
              color: "#7A9B8A",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "12px",
            }}
          >
            On this page
          </div>
          <nav style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "28px" }}>
            {TOC.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#4A6558",
                  textDecoration: "none",
                  padding: "6px 10px",
                  borderRadius: "7px",
                  borderLeft: "2px solid #C8DDD4",
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#007A52";
                  e.currentTarget.style.borderLeftColor = "#00B87A";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#4A6558";
                  e.currentTarget.style.borderLeftColor = "#C8DDD4";
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div
            style={{
              height: "1px",
              background: "#C8DDD4",
              marginBottom: "24px",
            }}
          />

          <div
            style={{
              fontFamily: MONO,
              fontSize: "10px",
              fontWeight: 500,
              color: "#7A9B8A",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "12px",
            }}
          >
            Resources
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <a
              href="https://github.com/Demerzels-lab/Aires-Research-Agent"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", fontWeight: 500, color: "#4A6558", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              GitHub
              <svg width="11" height="11" fill="none" viewBox="0 0 16 16">
                <path d="M2 14L14 2M14 2H6M14 2V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <Link
              href="/#catalog"
              style={{ fontSize: "13px", fontWeight: 500, color: "#4A6558", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              Skill catalog
              <svg width="11" height="11" fill="none" viewBox="0 0 16 16">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </aside>

        {/* Content */}
        <main style={{ minWidth: 0 }}>
          {/* What you need */}
          <section id="what-you-need" style={{ scrollMarginTop: "84px" }}>
            <div
              style={{
                background: "#E0F7EE",
                border: "1.5px solid rgba(0,184,122,0.3)",
                borderRadius: "14px",
                padding: "26px 30px",
                marginBottom: "48px",
              }}
            >
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#0D1F18",
                  marginBottom: "14px",
                }}
              >
                What you need
              </h2>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  <>An AI coding agent — <strong>Claude Code</strong>, Codex, Gemini CLI, or Cursor</>,
                  <>Node.js 18+ (for the <code style={{ fontFamily: MONO, fontSize: "12.5px", background: "rgba(0,122,82,0.1)", padding: "1px 6px", borderRadius: "4px" }}>npx</code> installer)</>,
                  <>5 minutes — that&apos;s it. No account, no API key, no config files</>,
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "10px", fontSize: "14px", color: "#2A4035", lineHeight: 1.6 }}>
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: "3px", color: "#007A52" }}>
                      <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Install */}
          <section id="install" style={{ scrollMarginTop: "84px", marginBottom: "56px" }}>
            <h2
              style={{
                fontFamily: DISPLAY,
                fontSize: "26px",
                fontWeight: 800,
                letterSpacing: "-0.5px",
                color: "#0D1F18",
                marginBottom: "26px",
              }}
            >
              Install a skill{" "}
              <span style={{ color: "#7A9B8A", fontWeight: 700 }}>— step by step</span>
            </h2>

            {/* Step 1 */}
            <div style={{ display: "flex", gap: "18px", marginBottom: "8px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    background: "#00B87A",
                    color: "white",
                    fontFamily: MONO,
                    fontSize: "13px",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  1
                </div>
                <div style={{ width: "2px", flex: 1, background: "#C8DDD4", marginTop: "6px" }} />
              </div>
              <div style={{ paddingBottom: "32px", minWidth: 0, flex: 1 }}>
                <h3 style={{ fontFamily: DISPLAY, fontSize: "17px", fontWeight: 700, color: "#0D1F18", marginBottom: "6px" }}>
                  Find the skill you want
                </h3>
                <p style={{ fontSize: "14px", color: "#4A6558", lineHeight: 1.65, marginBottom: "14px" }}>
                  Browse the{" "}
                  <Link href="/#catalog" style={{ color: "#007A52", fontWeight: 600 }}>
                    skill catalog
                  </Link>{" "}
                  to find what matches your workflow. Each skill has a description and a link to its SKILL.md source.
                </p>
                {/* Category table */}
                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1.5px solid #C8DDD4",
                    borderRadius: "12px",
                    padding: "20px 24px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: MONO,
                      fontSize: "10px",
                      fontWeight: 500,
                      color: "#7A9B8A",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      marginBottom: "12px",
                    }}
                  >
                    {TOTAL_CATEGORIES} categories · {TOTAL_SKILLS} skills
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      columnGap: "32px",
                      rowGap: "7px",
                    }}
                  >
                    {categoryCounts.map((c) => (
                      <div
                        key={c.label}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "baseline",
                          fontSize: "13px",
                          borderBottom: "1px dashed #E0EBE5",
                          paddingBottom: "5px",
                        }}
                      >
                        <span style={{ color: "#2A4035", fontWeight: 500 }}>{c.label}</span>
                        <span style={{ fontFamily: MONO, fontSize: "11px", color: "#7A9B8A" }}>
                          {c.count} {c.count === 1 ? "skill" : "skills"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div style={{ display: "flex", gap: "18px", marginBottom: "8px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    background: "#00B87A",
                    color: "white",
                    fontFamily: MONO,
                    fontSize: "13px",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  2
                </div>
                <div style={{ width: "2px", flex: 1, background: "#C8DDD4", marginTop: "6px" }} />
              </div>
              <div style={{ paddingBottom: "32px", minWidth: 0, flex: 1 }}>
                <h3 style={{ fontFamily: DISPLAY, fontSize: "17px", fontWeight: 700, color: "#0D1F18", marginBottom: "6px" }}>
                  Run the install command
                </h3>
                <p style={{ fontSize: "14px", color: "#4A6558", lineHeight: 1.65 }}>
                  From your project directory, install any skill by its slug:
                </p>
                <CodeBlock cmd="npx ai-research-skills install autoresearch" />
                <p style={{ fontSize: "14px", color: "#4A6558", lineHeight: 1.65 }}>
                  Or install everything at once:
                </p>
                <CodeBlock cmd="npx ai-research-skills install --all" />
              </div>
            </div>

            {/* Step 3 */}
            <div style={{ display: "flex", gap: "18px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    background: "#00B87A",
                    color: "white",
                    fontFamily: MONO,
                    fontSize: "13px",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  3
                </div>
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <h3 style={{ fontFamily: DISPLAY, fontSize: "17px", fontWeight: 700, color: "#0D1F18", marginBottom: "6px" }}>
                  Start working — skills auto-load
                </h3>
                <p style={{ fontSize: "14px", color: "#4A6558", lineHeight: 1.65 }}>
                  That&apos;s it. Your agent detects the right skill from context — ask it
                  to fine-tune a model and the fine-tuning skill loads itself. No
                  imports, no manual activation.
                </p>
              </div>
            </div>
          </section>

          {/* Recommended order */}
          <section id="recommended" style={{ scrollMarginTop: "84px", marginBottom: "56px" }}>
            <h2
              style={{
                fontFamily: DISPLAY,
                fontSize: "26px",
                fontWeight: 800,
                letterSpacing: "-0.5px",
                color: "#0D1F18",
                marginBottom: "16px",
              }}
            >
              Recommended order
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                {
                  n: "01",
                  title: "Start with Autoresearch",
                  desc: "The orchestrator skill. It routes to every other skill in the library and manages the full research loop — hypothesis to paper.",
                  pink: true,
                },
                {
                  n: "02",
                  title: "Add your domain skills",
                  desc: "Working on fine-tuning? Grab Axolotl and Unsloth. Interpretability? TransformerLens and SAE Lens. Pick the categories that match your project.",
                },
                {
                  n: "03",
                  title: "Finish with paper writing",
                  desc: "The ML Paper Writing skills handle LaTeX structure, figures, citations, and conference formatting when results are ready.",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  style={{
                    display: "flex",
                    gap: "16px",
                    background: "#FFFFFF",
                    border: "1.5px solid #C8DDD4",
                    borderLeft: `3px solid ${item.pink ? "#FF3D8A" : "#00B87A"}`,
                    borderRadius: "12px",
                    padding: "18px 22px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: "12px",
                      color: item.pink ? "#FF3D8A" : "#007A52",
                      fontWeight: 500,
                      marginTop: "2px",
                    }}
                  >
                    {item.n}
                  </span>
                  <div>
                    <h3 style={{ fontFamily: DISPLAY, fontSize: "15.5px", fontWeight: 700, color: "#0D1F18", marginBottom: "4px" }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: "13.5px", color: "#4A6558", lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" style={{ scrollMarginTop: "84px" }}>
            <h2
              style={{
                fontFamily: DISPLAY,
                fontSize: "26px",
                fontWeight: 800,
                letterSpacing: "-0.5px",
                color: "#0D1F18",
                marginBottom: "16px",
              }}
            >
              FAQ
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  style={{
                    background: "#FFFFFF",
                    border: "1.5px solid #C8DDD4",
                    borderRadius: "12px",
                    padding: "0",
                    overflow: "hidden",
                  }}
                >
                  <summary
                    style={{
                      fontFamily: "var(--font-sans, 'Plus Jakarta Sans'), sans-serif",
                      fontSize: "14.5px",
                      fontWeight: 600,
                      color: "#0D1F18",
                      padding: "16px 22px",
                      cursor: "pointer",
                      listStyle: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {faq.q}
                    <svg width="14" height="14" fill="none" viewBox="0 0 16 16" style={{ color: "#7A9B8A", flexShrink: 0 }}>
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <p
                    style={{
                      fontSize: "13.5px",
                      color: "#4A6558",
                      lineHeight: 1.65,
                      padding: "0 22px 18px",
                    }}
                  >
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

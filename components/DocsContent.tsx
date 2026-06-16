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
    q: "What's the difference between Path A and Path B?",
    a: "Path A (CLI) is for developers — installs skills to your project directory and auto-loads them. Path B (Upload) is for Claude chat users — manually upload SKILL.md to claude.ai/customize/skills and call via slash commands. Both are fully supported.",
  },
  {
    q: "Do I need an API key?",
    a: "No. Skills are plain SKILL.md instruction files — your agent reads them directly. There is nothing to authenticate.",
  },
  {
    q: "Which agents are supported?",
    a: "Claude Code, Codex, Gemini CLI, and Cursor work out of the box (Path A). Claude chat (Path B) works anywhere. Any agent that supports the Anthropic skill format can load them.",
  },
  {
    q: "Can I use this commercially?",
    a: "Yes. Everything is MIT licensed — use it at work, fork it, modify it, redistribute it. No restrictions.",
  },
  {
    q: "How do I update skills?",
    a: "Path A: Re-run the install command. Path B: Download the latest SKILL.md from GitHub and re-upload to your skill manager.",
  },
  {
    q: "Can I write my own skills?",
    a: "Yes. Copy the structure of any existing skill — a SKILL.md with YAML frontmatter (name + description) plus optional reference docs. Upload it via Path B or add to your project for Path A.",
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
          background: "linear-gradient(135deg, #FFFFFF 0%, #F4FAF7 50%, #E8F2ED 100%)",
          padding: "72px 48px 64px",
        }}
      >
        <div style={{ maxWidth: "1060px", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: MONO,
              fontSize: "10px",
              fontWeight: 600,
              color: "#00B87A",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "18px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ width: "4px", height: "4px", background: "#FF3D8A", borderRadius: "50%" }} />
            Getting Started
          </div>
          <h1
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(36px, 5.5vw, 56px)",
              fontWeight: 800,
              letterSpacing: "-1.5px",
              lineHeight: 1.08,
              color: "#0D1F18",
              marginBottom: "18px",
              maxWidth: "650px",
            }}
          >
            Two ways to install skills{" "}
            <span style={{ color: "#FF3D8A", fontStyle: "italic", fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, letterSpacing: 0 }}>
              in 5 minutes
            </span>
          </h1>
          <p style={{ fontSize: "17px", color: "#4A6558", maxWidth: "600px", lineHeight: 1.7 }}>
            Choose Path A (command line for developers) or Path B (upload SKILL.md to Claude chat). No API keys. No code. No setup.
          </p>
        </div>
      </div>

      {/* ── Body: sidebar + content ── */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "56px 48px 96px",
          display: "grid",
          gridTemplateColumns: "220px 1fr",
          gap: "56px",
          alignItems: "start",
        }}
      >
        {/* Sidebar */}
        <aside style={{ position: "sticky", top: "84px" }}>
          <div
            style={{
              fontFamily: MONO,
              fontSize: "9.5px",
              fontWeight: 700,
              color: "#7A9B8A",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "16px",
            }}
          >
            On this page
          </div>
          <nav style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "32px" }}>
            {TOC.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                style={{
                  fontSize: "13.5px",
                  fontWeight: 500,
                  color: "#4A6558",
                  textDecoration: "none",
                  padding: "7px 12px",
                  borderRadius: "8px",
                  borderLeft: "2.5px solid #C8DDD4",
                  transition: "all 0.15s",
                  display: "block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#007A52";
                  e.currentTarget.style.borderLeftColor = "#FF3D8A";
                  e.currentTarget.style.background = "rgba(0,184,122,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#4A6558";
                  e.currentTarget.style.borderLeftColor = "#C8DDD4";
                  e.currentTarget.style.background = "transparent";
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
                  <>Choose Path A (CLI) or Path B (Upload) — both work</>,
                  <>Path A: Node.js 18+ + your AI coding agent</>,
                  <>Path B: Claude for Work account + browser</>,
                  <>5 minutes either way. No API key, no config files</>,
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
          <section id="install" style={{ scrollMarginTop: "84px", marginBottom: "64px" }}>
            <div style={{ marginBottom: "32px" }}>
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "clamp(26px, 4vw, 32px)",
                  fontWeight: 800,
                  letterSpacing: "-1px",
                  color: "#0D1F18",
                  marginBottom: "8px",
                }}
              >
                Install a skill
              </h2>
              <p style={{ fontSize: "15px", color: "#7A9B8A", lineHeight: 1.6 }}>
                Pick your path below. Both work equally well.
              </p>
            </div>

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

            {/* Two ways */}
            <div style={{ marginTop: "32px", marginBottom: "32px" }}>
              <p style={{ fontSize: "14px", color: "#4A6558", lineHeight: 1.65, marginBottom: "18px" }}>
                Choose your installation path:
              </p>

              {/* Path A: CLI */}
              <div style={{ display: "flex", gap: "18px", marginBottom: "32px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: "#FF3D8A",
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
                    A
                  </div>
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <h4 style={{ fontFamily: DISPLAY, fontSize: "16px", fontWeight: 700, color: "#0D1F18", marginBottom: "6px" }}>
                    CLI — for developers
                  </h4>
                  <p style={{ fontSize: "14px", color: "#4A6558", lineHeight: 1.65, marginBottom: "12px" }}>
                    Install skills to your project directory via command line:
                  </p>
                  <CodeBlock cmd="npx ai-research-skills install autoresearch" />
                  <p style={{ fontSize: "14px", color: "#4A6558", lineHeight: 1.65, marginBottom: "8px" }}>
                    Or all at once:
                  </p>
                  <CodeBlock cmd="npx ai-research-skills install --all" />
                  <p style={{ fontSize: "13px", color: "#7A9B8A", lineHeight: 1.6, marginTop: "12px" }}>
                    Skills auto-load when your agent needs them. No imports, no manual activation.
                  </p>
                </div>
              </div>

              {/* Path B: Upload */}
              <div style={{ display: "flex", gap: "18px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: "#007A52",
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
                    B
                  </div>
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <h4 style={{ fontFamily: DISPLAY, fontSize: "16px", fontWeight: 700, color: "#0D1F18", marginBottom: "6px" }}>
                    Upload — for Claude chat
                  </h4>
                  <p style={{ fontSize: "14px", color: "#4A6558", lineHeight: 1.65, marginBottom: "14px" }}>
                    Download any skill&apos;s SKILL.md file and upload to Claude&apos;s skill manager:
                  </p>
                  <div style={{ background: "#E0F7EE", border: "1.5px solid rgba(0,184,122,0.2)", borderRadius: "12px", padding: "14px 16px", marginBottom: "14px" }}>
                    <ol style={{ fontSize: "13.5px", color: "#2A4035", lineHeight: 1.7, margin: 0, paddingLeft: "18px" }}>
                      <li>Go to <a href="https://github.com/Demerzels-lab/Aires-Research-Agent/tree/main" target="_blank" rel="noopener noreferrer" style={{ color: "#007A52", fontWeight: 600, textDecoration: "none" }}>Aires GitHub</a> → choose a skill folder</li>
                      <li>Download the <code style={{ fontFamily: MONO, fontSize: "12px", background: "rgba(0,122,82,0.1)", padding: "1px 6px", borderRadius: "4px" }}>SKILL.md</code> file</li>
                      <li>Open <a href="https://claude.ai/customize/skills" target="_blank" rel="noopener noreferrer" style={{ color: "#007A52", fontWeight: 600, textDecoration: "none" }}>claude.ai/customize/skills</a></li>
                      <li>Click <strong>Add skill</strong> → upload your SKILL.md</li>
                      <li>Use the skill in chat via <code style={{ fontFamily: MONO, fontSize: "12px", background: "rgba(0,122,82,0.1)", padding: "1px 6px", borderRadius: "4px" }}>/skill-name</code></li>
                    </ol>
                  </div>
                  <p style={{ fontSize: "13px", color: "#7A9B8A", lineHeight: 1.6 }}>
                    Works in any Claude conversation. No setup required.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Recommended order */}
          <section id="recommended" style={{ scrollMarginTop: "84px", marginBottom: "64px" }}>
            <div style={{ marginBottom: "28px" }}>
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "clamp(26px, 4vw, 32px)",
                  fontWeight: 800,
                  letterSpacing: "-1px",
                  color: "#0D1F18",
                  marginBottom: "8px",
                }}
              >
                Recommended order
              </h2>
              <p style={{ fontSize: "15px", color: "#7A9B8A", lineHeight: 1.6 }}>
                Start with orchestration, add domain skills, finish with paper writing.
              </p>
            </div>
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
            <div style={{ marginBottom: "28px" }}>
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "clamp(26px, 4vw, 32px)",
                  fontWeight: 800,
                  letterSpacing: "-1px",
                  color: "#0D1F18",
                  marginBottom: "8px",
                }}
              >
                FAQ
              </h2>
              <p style={{ fontSize: "15px", color: "#7A9B8A", lineHeight: 1.6 }}>
                Everything else you need to know.
              </p>
            </div>
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

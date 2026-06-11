"use client";
import { motion } from "framer-motion";
import { TOTAL_SKILLS, TOTAL_CATEGORIES } from "@/lib/categories";
import { HeroVisual } from "@/components/HeroVisual";

interface Props {
  stars: number;
  forks: number;
}

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export default function Hero(_props: Props) {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "calc(100vh - 60px)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <HeroVisual />
      <div style={{
        position: "relative",
        zIndex: 1,
        maxWidth: "1120px",
        margin: "0 auto",
        padding: "72px 48px 60px",
        width: "100%",
      }}>
      <motion.div initial="hidden" animate="visible" variants={stagger}>
        {/* Kicker */}
        <motion.div variants={fadeUp}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "22px",
            fontFamily: "var(--font-mono, 'DM Mono'), monospace",
            fontSize: "11px",
            fontWeight: 500,
            color: "#4A6558",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: "5px",
              height: "5px",
              background: "#FF3D8A",
              borderRadius: "50%",
              display: "inline-block",
            }}
          />
          Orchestra Research · Open Source · MIT
        </motion.div>

        {/* Headline */}
        <motion.h1 variants={fadeUp}
          style={{
            fontFamily: "var(--font-display, 'Bricolage Grotesque'), sans-serif",
            fontSize: "clamp(40px, 5.5vw, 64px)",
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: "-1.5px",
            color: "#0D1F18",
            marginBottom: "20px",
            maxWidth: "720px",
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          The AI research{" "}
          <em
            style={{
              fontStyle: "italic",
              color: "#FF3D8A",
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              letterSpacing: 0,
            }}
          >
            skill layer
          </em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={fadeUp}
          style={{
            fontSize: "17px",
            color: "#4A6558",
            maxWidth: "480px",
            lineHeight: 1.65,
            marginBottom: "36px",
          }}
        >
          {TOTAL_SKILLS} production-ready skills across {TOTAL_CATEGORIES}{" "}
          categories — from model architecture to paper writing, for any AI agent.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "52px",
          }}
        >
          <a
            href="#catalog"
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
            className="btn-pink-hover"
          >
            Browse skills
            <svg width="14" height="14" fill="none" viewBox="0 0 16 16">
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
              padding: "11px 22px",
              borderRadius: "10px",
              border: "1.5px solid #A8C8B8",
              textDecoration: "none",
              transition: "all 0.15s",
            }}
            className="btn-outline-hover"
          >
            GitHub
            <svg width="14" height="14" fill="none" viewBox="0 0 16 16">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div variants={fadeUp} style={{ display: "flex", gap: "40px" }}>
          <div>
            <div
              style={{
                fontFamily: "var(--font-display, 'Bricolage Grotesque'), sans-serif",
                fontSize: "36px",
                fontWeight: 800,
                color: "#007A52",
                letterSpacing: "-1.5px",
                lineHeight: 1,
              }}
            >
              {TOTAL_SKILLS}
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono, 'DM Mono'), monospace",
                fontSize: "10px",
                fontWeight: 500,
                color: "#7A9B8A",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginTop: "3px",
              }}
            >
              Skills
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-display, 'Bricolage Grotesque'), sans-serif",
                fontSize: "36px",
                fontWeight: 800,
                color: "#007A52",
                letterSpacing: "-1.5px",
                lineHeight: 1,
              }}
            >
              {TOTAL_CATEGORIES}
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono, 'DM Mono'), monospace",
                fontSize: "10px",
                fontWeight: 500,
                color: "#7A9B8A",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginTop: "3px",
              }}
            >
              Categories
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-display, 'Bricolage Grotesque'), sans-serif",
                fontSize: "36px",
                fontWeight: 800,
                color: "#FF3D8A",
                letterSpacing: "-1.5px",
                lineHeight: 1,
              }}
            >
              4
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono, 'DM Mono'), monospace",
                fontSize: "10px",
                fontWeight: 500,
                color: "#7A9B8A",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginTop: "3px",
              }}
            >
              Agents Supported
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-display, 'Bricolage Grotesque'), sans-serif",
                fontSize: "36px",
                fontWeight: 800,
                color: "#FF3D8A",
                letterSpacing: "-1.5px",
                lineHeight: 1,
              }}
            >
              MIT
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono, 'DM Mono'), monospace",
                fontSize: "10px",
                fontWeight: 500,
                color: "#7A9B8A",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginTop: "3px",
              }}
            >
              License
            </div>
          </div>
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
}

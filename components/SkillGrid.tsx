"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { SKILLS } from "@/lib/skills";
import { CATEGORIES } from "@/lib/categories";
import CategoryRail from "./CategoryRail";

export default function SkillGrid() {
  const [activeCodes, setActiveCodes] = useState<string[] | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const s of SKILLS) {
      map[s.categoryCode] = (map[s.categoryCode] ?? 0) + 1;
    }
    return map;
  }, []);

  const filtered = useMemo(() => {
    let list = SKILLS;
    if (activeCodes && activeCodes.length > 0)
      list = list.filter((s) => activeCodes.includes(s.categoryCode));
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.slug.includes(q) ||
          s.categorySlug.includes(q)
      );
    }
    return list;
  }, [activeCodes, query]);

  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section
      id="catalog"
      style={{ maxWidth: "1120px", margin: "0 auto", padding: "56px 48px" }}
    >
      {/* Header */}
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
        Skill Catalog
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "24px",
        }}
      >
        <div>
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
            Browse all skills
          </div>
          <div style={{ fontSize: "14px", color: "#4A6558" }}>
            Filter by category or search by name
          </div>
        </div>
        {/* Search */}
        <div style={{ position: "relative" }}>
          <svg
            style={{
              position: "absolute",
              left: "11px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#7A9B8A",
            }}
            width="14"
            height="14"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <input
            type="text"
            placeholder="Search skills..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: "210px",
              padding: "8px 12px 8px 32px",
              border: "1.5px solid #C8DDD4",
              borderRadius: "9px",
              fontSize: "13px",
              fontFamily: "var(--font-sans, 'Plus Jakarta Sans'), sans-serif",
              background: "#FFFFFF",
              color: "#0D1F18",
              outline: "none",
              transition: "border-color 0.15s",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#FF3D8A")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#C8DDD4")}
          />
        </div>
      </div>

      {/* Category Rail */}
      <CategoryRail
        active={activeCategory}
        onChange={(codes, activeCode) => {
          setActiveCodes(codes);
          setActiveCategory(activeCode);
          setShowAll(false);
        }}
        counts={counts}
      />

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "12px",
        }}
      >
        {displayed.map((skill) => {
          const category = CATEGORIES.find((c) => c.code === skill.categoryCode);
          return (
            <Link
              key={skill.slug}
              href={`/skill/${skill.slug}`}
              className="skill-card-link"
              style={{
                background: "#FFFFFF",
                border: "1.5px solid #C8DDD4",
                borderRadius: "12px",
                padding: "24px",
                textDecoration: "none",
                color: "inherit",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.18s cubic-bezier(0.4,0,0.2,1)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.transform = "translateY(-3px)";
                el.style.boxShadow = "0 12px 32px rgba(0,0,0,0.08)";
                el.style.borderColor = "#A8C8B8";
                const bar = el.querySelector(".skill-card-bar") as HTMLElement;
                if (bar) bar.style.transform = "scaleX(1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                el.style.borderColor = "#C8DDD4";
                const bar = el.querySelector(".skill-card-bar") as HTMLElement;
                if (bar) bar.style.transform = "scaleX(0)";
              }}
            >
              {/* Bottom gradient bar */}
              <span
                className="skill-card-bar"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "linear-gradient(90deg, #FF3D8A, #00B87A)",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.25s ease",
                  display: "block",
                }}
              />

              {/* Meta */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono, 'DM Mono'), monospace",
                    fontSize: "10px",
                    color: "#7A9B8A",
                  }}
                >
                  {skill.categoryCode}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono, 'DM Mono'), monospace",
                    fontSize: "9px",
                    fontWeight: 400,
                    color: "#7A9B8A",
                    background: "#F5F5F5",
                    borderRadius: "4px",
                    padding: "2px 6px",
                  }}
                >
                  {category?.label ?? skill.categorySlug}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-display, 'Bricolage Grotesque'), sans-serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#0D1F18",
                  letterSpacing: "-0.4px",
                  marginBottom: "6px",
                }}
              >
                {skill.name}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "13px",
                  color: "#28332C",
                  lineHeight: 1.6,
                  flex: 1,
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {skill.description}
              </p>

              {/* Footer */}
              <div
                style={{
                  marginTop: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontFamily: "var(--font-mono, 'DM Mono'), monospace",
                  fontSize: "12px",
                  color: "#FF3D8A",
                  fontWeight: 500,
                }}
              >
                <svg width="13" height="13" fill="none" viewBox="0 0 16 16">
                  <path
                    d="M2 14L14 2M14 2H6M14 2V10"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                View skill.md{" "}
                <svg width="12" height="12" fill="none" viewBox="0 0 16 16">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Show all button */}
      {!showAll && filtered.length > 6 && (
        <div style={{ textAlign: "center", marginTop: "28px" }}>
          <button
            onClick={() => setShowAll(true)}
            style={{
              fontFamily: "var(--font-sans, 'Plus Jakarta Sans'), sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              color: "#4A6558",
              background: "#FFFFFF",
              border: "1.5px solid #C8DDD4",
              borderRadius: "9px",
              padding: "9px 24px",
              cursor: "pointer",
            }}
          >
            Show all {filtered.length} skills
          </button>
        </div>
      )}

      {filtered.length === 0 && (
        <div
          style={{
            textAlign: "center",
            padding: "48px 24px",
            background: "#FFFFFF",
            border: "1px dashed #CFE0D4",
            borderRadius: "12px",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              overflow: "hidden",
              margin: "0 auto",
              position: "relative",
            }}
          >
            <Image
              src="/Logo.webp"
              alt="Aires mascot"
              fill
              loading="lazy"
              style={{ objectFit: "cover" }}
            />
          </div>
          <h3
            style={{
              fontFamily: "var(--font-display, 'Bricolage Grotesque'), sans-serif",
              fontSize: "20px",
              fontWeight: 700,
              color: "#102018",
              marginTop: "20px",
              marginBottom: "8px",
            }}
          >
            Hmm, no skills match that
          </h3>
          <p
            style={{
              fontSize: "14px",
              color: "#5B6E63",
              maxWidth: "360px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            {query.trim()
              ? <>Nothing in the library lines up with &ldquo;{query}&rdquo; yet. Try a different keyword, or browse a category.</>
              : "No skills here yet — try another category."}
          </p>
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <button
              onClick={() => setQuery("")}
              style={{
                fontFamily: "var(--font-sans, 'Plus Jakarta Sans'), sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                color: "#FFFFFF",
                background: "#DB2777",
                border: "none",
                borderRadius: "9px",
                padding: "9px 18px",
                cursor: "pointer",
              }}
            >
              Clear search
            </button>
            <button
              onClick={() => {
                setQuery("");
                setActiveCodes(null);
                setActiveCategory(null);
              }}
              style={{
                fontFamily: "var(--font-sans, 'Plus Jakarta Sans'), sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                color: "#4A6558",
                background: "#FFFFFF",
                border: "1.5px solid #C8DDD4",
                borderRadius: "9px",
                padding: "9px 18px",
                cursor: "pointer",
              }}
            >
              Browse all {SKILLS.length}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

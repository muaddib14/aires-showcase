"use client";

import { useState } from "react";
import { CATEGORIES } from "@/lib/categories";

/*
 * Two-tier category filter.
 * Tier 1 — 6 lifecycle groups (always visible, no horizontal scroll).
 * Tier 2 — category pills of the selected group (appears below).
 */

const GROUPS: { label: string; codes: string[] }[] = [
  { label: "Build",    codes: ["01", "02", "10", "19"] },
  { label: "Train",    codes: ["03", "05", "06", "08"] },
  { label: "Deploy",   codes: ["09", "12", "13", "17"] },
  { label: "Evaluate", codes: ["04", "07", "11"] },
  { label: "Apply",    codes: ["14", "15", "16", "18"] },
  { label: "Research", codes: ["00", "20", "21", "22"] },
];

interface Props {
  active: string | null; // active category code
  onChange: (codes: string[] | null, activeCode: string | null) => void;
  counts?: Record<string, number>;
}

export default function CategoryRail({ active, onChange, counts }: Props) {
  const [activeGroup, setActiveGroup] = useState<number | null>(null);

  const groupCount = (codes: string[]) =>
    codes.reduce((sum, c) => sum + (counts?.[c] ?? 0), 0);

  const selectGroup = (idx: number | null) => {
    setActiveGroup(idx);
    if (idx === null) onChange(null, null);
    else onChange(GROUPS[idx].codes, null);
  };

  const selectCategory = (code: string) => {
    if (active === code && activeGroup !== null) {
      // toggle off → back to whole group
      onChange(GROUPS[activeGroup].codes, null);
    } else {
      onChange([code], code);
    }
  };

  const tabBase: React.CSSProperties = {
    fontFamily: "var(--font-sans, 'Plus Jakarta Sans'), sans-serif",
    fontSize: "14px",
    fontWeight: 600,
    padding: "9px 18px",
    borderRadius: "100px",
    cursor: "pointer",
    transition: "all 0.18s",
    display: "inline-flex",
    alignItems: "center",
    gap: "7px",
    whiteSpace: "nowrap",
  };

  return (
    <div style={{ marginBottom: "24px" }}>
      {/* Tier 1 — lifecycle groups */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        <button
          onClick={() => selectGroup(null)}
          style={{
            ...tabBase,
            border: `1.5px solid ${activeGroup === null ? "#0D1F18" : "#C8DDD4"}`,
            background: activeGroup === null ? "#0D1F18" : "#FFFFFF",
            color: activeGroup === null ? "#FFFFFF" : "#2A4035",
          }}
        >
          All
          <span
            style={{
              fontFamily: "var(--font-mono, 'DM Mono'), monospace",
              fontSize: "11px",
              opacity: 0.6,
            }}
          >
            {Object.values(counts ?? {}).reduce((a, b) => a + b, 0)}
          </span>
        </button>

        {GROUPS.map((g, idx) => {
          const isActive = activeGroup === idx;
          return (
            <button
              key={g.label}
              onClick={() => selectGroup(idx)}
              style={{
                ...tabBase,
                border: `1.5px solid ${isActive ? "#FF3D8A" : "#C8DDD4"}`,
                background: isActive ? "#FF3D8A" : "#FFFFFF",
                color: isActive ? "#FFFFFF" : "#2A4035",
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.borderColor = "#A8C8B8";
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.borderColor = "#C8DDD4";
              }}
            >
              {g.label}
              <span
                style={{
                  fontFamily: "var(--font-mono, 'DM Mono'), monospace",
                  fontSize: "11px",
                  opacity: 0.6,
                }}
              >
                {groupCount(g.codes)}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tier 2 — categories of selected group */}
      {activeGroup !== null && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            marginTop: "12px",
            paddingTop: "12px",
            borderTop: "1px dashed #C8DDD4",
          }}
        >
          {GROUPS[activeGroup].codes.map((code) => {
            const cat = CATEGORIES.find((c) => c.code === code);
            if (!cat) return null;
            const isActive = active === code;
            return (
              <button
                key={code}
                onClick={() => selectCategory(code)}
                style={{
                  fontFamily: "var(--font-sans, 'Plus Jakarta Sans'), sans-serif",
                  fontSize: "12.5px",
                  fontWeight: 600,
                  padding: "6px 13px",
                  borderRadius: "8px",
                  border: `1.5px solid ${isActive ? "#007A52" : "#C8DDD4"}`,
                  background: isActive ? "#E0F7EE" : "#FFFFFF",
                  color: isActive ? "#007A52" : "#4A6558",
                  cursor: "pointer",
                  transition: "all 0.15s",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono, 'DM Mono'), monospace",
                    fontSize: "10px",
                    color: isActive ? "#00B87A" : "#7A9B8A",
                  }}
                >
                  {code}
                </span>
                {cat.label}
                <span
                  style={{
                    fontFamily: "var(--font-mono, 'DM Mono'), monospace",
                    fontSize: "10px",
                    opacity: 0.55,
                  }}
                >
                  {counts?.[code] ?? 0}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

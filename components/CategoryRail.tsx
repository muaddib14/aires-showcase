"use client";

import { CATEGORIES } from "@/lib/categories";

interface Props {
  active: string | null;
  onChange: (codes: string[] | null, activeCode: string | null) => void;
  counts?: Record<string, number>;
}

export default function CategoryRail({ active, onChange, counts }: Props) {
  const selectCategory = (code: string) => {
    if (active === code) {
      onChange(null, null);
    } else {
      onChange([code], code);
    }
  };

  const pillBase: React.CSSProperties = {
    fontFamily: "var(--font-sans, 'Plus Jakarta Sans'), sans-serif",
    fontSize: "12.5px",
    fontWeight: 600,
    padding: "6px 13px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.15s",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
  };

  return (
    <div style={{ marginBottom: "24px" }}>
      {/* All + 23 Categories */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        <button
          onClick={() => onChange(null, null)}
          style={{
            ...pillBase,
            fontSize: "12.5px",
            fontWeight: 600,
            padding: "6px 13px",
            borderRadius: "8px",
            border: `1.5px solid ${active === null ? "#DB2777" : "#C8DDD4"}`,
            background: active === null ? "#DB2777" : "#FFFFFF",
            color: active === null ? "#FFFFFF" : "#4A6558",
          }}
          onMouseEnter={(e) => {
            if (active !== null) e.currentTarget.style.borderColor = "#A8C8B8";
          }}
          onMouseLeave={(e) => {
            if (active !== null) e.currentTarget.style.borderColor = "#C8DDD4";
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
        {CATEGORIES.map((cat) => {
          const isActive = active === cat.code;
          return (
            <button
              key={cat.code}
              onClick={() => selectCategory(cat.code)}
              style={{
                ...pillBase,
                border: `1.5px solid ${isActive ? "#DB2777" : "#C8DDD4"}`,
                background: isActive ? "#FFE8F5" : "#FFFFFF",
                color: isActive ? "#DB2777" : "#4A6558",
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.borderColor = "#A8C8B8";
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.borderColor = "#C8DDD4";
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono, 'DM Mono'), monospace",
                  fontSize: "10px",
                  color: isActive ? "#DB2777" : "#7A9B8A",
                }}
              >
                {cat.code}
              </span>
              {cat.label}
              <span
                style={{
                  fontFamily: "var(--font-mono, 'DM Mono'), monospace",
                  fontSize: "10px",
                  opacity: 0.55,
                }}
              >
                {counts?.[cat.code] ?? 0}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

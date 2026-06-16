const ITEMS = [
  {
    title: "SKILL.md",
    body: "A tight playbook: when to use it, the core patterns, the pitfalls.",
  },
  {
    title: "Reference docs",
    body: "Deeper material your agent pulls in progressively, only as needed.",
  },
  {
    title: "One command",
    body: "Install into your agent; it auto-loads when the task calls for it.",
  },
];

export default function WhatsASkill() {
  return (
    <section
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
          marginBottom: "10px",
        }}
      >
        The basics
      </div>
      <h2
        style={{
          fontFamily: "var(--font-display, 'Bricolage Grotesque'), sans-serif",
          fontSize: "28px",
          fontWeight: 800,
          letterSpacing: "-0.5px",
          color: "#0D1F18",
          marginBottom: "12px",
        }}
      >
        What&rsquo;s a skill?
      </h2>
      <p
        style={{
          fontSize: "15px",
          color: "#28332C",
          lineHeight: 1.7,
          maxWidth: "680px",
          marginBottom: "32px",
        }}
      >
        A skill is a focused <code style={{ fontFamily: "var(--font-mono, 'DM Mono'), monospace", fontSize: "14px", background: "#E0F7EE", padding: "2px 6px", borderRadius: "4px" }}>SKILL.md</code> — expert
        patterns, quick recipes, and reference docs your agent loads only when
        it needs them. Install one, and your agent knows a framework cold: the
        right commands, the common gotchas, working config — no pasting
        documentation into the chat.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}
      >
        {ITEMS.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#FFFFFF",
              border: "1.5px solid #C8DDD4",
              borderRadius: "12px",
              padding: "20px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono, 'DM Mono'), monospace",
                fontSize: "13px",
                fontWeight: 600,
                color: "#DB2777",
                marginBottom: "8px",
              }}
            >
              {item.title}
            </div>
            <div style={{ fontSize: "13px", color: "#4A6558", lineHeight: 1.6 }}>
              {item.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

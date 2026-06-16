import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #C8DDD4",
        maxWidth: "1120px",
        margin: "0 auto",
        padding: "28px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-display, 'Bricolage Grotesque'), sans-serif",
          fontWeight: 800,
          fontSize: "15px",
          color: "#0D1F18",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <span
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            overflow: "hidden",
            position: "relative",
            flexShrink: 0,
          }}
        >
          <Image
            src="/Logo.webp"
            alt="Aires mascot"
            fill
            sizes="20px"
            style={{ objectFit: "cover" }}
          />
        </span>
        Aires
        <span
          style={{
            color: "#4A6558",
            fontWeight: 500,
            fontSize: "14px",
          }}
        >
          .skills
        </span>
      </Link>

      {/* Links */}
      <div style={{ display: "flex", gap: "20px" }}>
        {[
          { href: "/#catalog", label: "catalog" },
          { href: "/#how-it-works", label: "how-it-works" },
          { href: "https://github.com/Demerzels-lab/Aires-Research-Agent", label: "github", external: true },
        ].map((link) => (
          link.external ? (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono, 'DM Mono'), monospace",
                fontSize: "11px",
                color: "#4A6558",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "var(--font-mono, 'DM Mono'), monospace",
                fontSize: "11px",
                color: "#4A6558",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
            >
              {link.label}
            </Link>
          )
        ))}
      </div>

      {/* Copyright */}
      <span
        style={{
          fontFamily: "var(--font-mono, 'DM Mono'), monospace",
          fontSize: "11px",
          color: "#7A9B8A",
        }}
      >
        Built on the open AI-Research-SKILLs library · MIT license
      </span>
    </footer>
  );
}

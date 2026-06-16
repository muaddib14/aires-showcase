import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(232,242,237,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #C8DDD4",
        padding: "0 48px",
        height: "60px",
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
          fontSize: "19px",
          color: "#0D1F18",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          letterSpacing: "-0.5px",
        }}
      >
        <span
          style={{
            width: "28px",
            height: "28px",
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
            sizes="28px"
            style={{ objectFit: "cover" }}
          />
        </span>
        Aires
        <span style={{ color: "#4A6558", fontWeight: 500, fontSize: "17px" }}>
          .skills
        </span>
      </Link>

      {/* Right side */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <Link
          href="/#catalog"
          style={{
            fontSize: "14px",
            fontWeight: 500,
            color: "#4A6558",
            textDecoration: "none",
            padding: "7px 14px",
            borderRadius: "8px",
            transition: "all 0.15s",
          }}
          className="nav-link-hover"
        >
          Catalog
        </Link>
        <Link
          href="/#how-it-works"
          style={{
            fontSize: "14px",
            fontWeight: 500,
            color: "#4A6558",
            textDecoration: "none",
            padding: "7px 14px",
            borderRadius: "8px",
            transition: "all 0.15s",
          }}
          className="nav-link-hover"
        >
          How it works
        </Link>
        <Link
          href="/docs"
          style={{
            fontSize: "14px",
            fontWeight: 500,
            color: "#4A6558",
            textDecoration: "none",
            padding: "7px 14px",
            borderRadius: "8px",
            transition: "all 0.15s",
          }}
          className="nav-link-hover"
        >
          Docs
        </Link>
        <a
          href="https://github.com/Demerzels-lab/Aires-Research-Agent"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "13px",
            fontWeight: 600,
            color: "white",
            background: "#FF3D8A",
            border: "none",
            borderRadius: "8px",
            padding: "7px 14px",
            textDecoration: "none",
            transition: "all 0.15s",
          }}
          className="nav-gh-hover"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>
      </div>
    </nav>
  );
}

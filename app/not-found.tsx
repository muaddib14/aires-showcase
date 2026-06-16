import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "calc(100vh - 60px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "48px 24px",
      }}
    >
      <div
        style={{
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Image
          src="/Logo.webp"
          alt="Aires mascot"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div
        style={{
          fontFamily: "var(--font-mono, 'DM Mono'), monospace",
          fontSize: "13px",
          fontWeight: 500,
          color: "#7A9B8A",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          marginTop: "28px",
        }}
      >
        404
      </div>

      <h1
        style={{
          fontFamily: "var(--font-display, 'Bricolage Grotesque'), sans-serif",
          fontSize: "32px",
          fontWeight: 800,
          color: "#102018",
          letterSpacing: "-0.8px",
          marginTop: "8px",
        }}
      >
        This page wandered off
      </h1>

      <p
        style={{
          fontSize: "15px",
          color: "#5B6E63",
          maxWidth: "380px",
          lineHeight: 1.6,
          marginTop: "12px",
        }}
      >
        The page you&rsquo;re looking for doesn&rsquo;t exist — but the skill
        library is right where you left it.
      </p>

      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "7px",
          background: "#DB2777",
          color: "#FFFFFF",
          fontFamily: "var(--font-sans, 'Plus Jakarta Sans'), sans-serif",
          fontSize: "14px",
          fontWeight: 600,
          padding: "11px 24px",
          borderRadius: "10px",
          textDecoration: "none",
          marginTop: "28px",
        }}
      >
        Back home
        <svg width="14" height="14" fill="none" viewBox="0 0 16 16">
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </main>
  );
}

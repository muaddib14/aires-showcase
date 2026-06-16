interface DemoVideoProps {
  videoId?: string;
  title?: string;
}

export default function DemoVideo({ videoId = "FeZ8DwScwbk", title = "Live demo" }: DemoVideoProps) {
  return (
    <div style={{ marginBottom: "40px" }}>
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
        ◆ Demo
      </div>

      {/* Responsive YouTube embed */}
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          overflow: "hidden",
          borderRadius: "16px",
          border: "1.5px solid #C8DDD4",
          marginBottom: "8px",
          background: "#000",
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "16px",
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <p
        style={{
          fontSize: "12.5px",
          color: "#7A9B8A",
          lineHeight: 1.6,
        }}
      >
        {title}
      </p>
    </div>
  );
}

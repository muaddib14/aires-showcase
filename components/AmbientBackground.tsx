/*
 * Ambient background — isometric grid + soft green/pink glow blobs + dot accents.
 * Matches the hero visual language; sits behind all page content.
 */
export default function AmbientBackground() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* Isometric grid */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          backgroundImage: [
            "linear-gradient(to right, rgba(0,122,82,0.10) 1px, transparent 1px)",
            "linear-gradient(to bottom, rgba(0,122,82,0.10) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "48px 48px",
          transform: "rotateX(58deg) rotateZ(45deg)",
          opacity: 0.8,
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 80%)",
        }}
      />

      {/* Fine dot grid layer for texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(0,122,82,0.12) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.4,
        }}
      />

      {/* Green glow blob — top right */}
      <div
        style={{
          position: "absolute",
          top: "2%",
          right: "6%",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(53,214,164,0.18) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Pink glow blob — bottom left */}
      <div
        style={{
          position: "absolute",
          bottom: "6%",
          left: "4%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,61,138,0.14) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Soft center wash to keep content area readable */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 50% at 50% 45%, rgba(233,243,235,0.55) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

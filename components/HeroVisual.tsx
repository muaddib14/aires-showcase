"use client";
import { motion } from "framer-motion";
import { HeroCubes3D } from "@/components/HeroCubes3D";

const bgFloat = {
  animate: {
    y: [0, -18, 0],
    transition: { duration: 7, repeat: Infinity, type: "tween" as const },
  },
};

const bgFloatAlt = {
  animate: {
    y: [0, 22, 0],
    transition: { duration: 8.5, repeat: Infinity, type: "tween" as const, delay: 1 },
  },
};

export function HeroVisual() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* Isometric grid background */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          backgroundImage: [
            "linear-gradient(to right, rgba(0,122,82,0.08) 1px, transparent 1px)",
            "linear-gradient(to bottom, rgba(0,122,82,0.08) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "52px 52px",
          transform: "rotateX(58deg) rotateZ(45deg)",
          pointerEvents: "none",
          opacity: 0.7,
        }}
      />

      {/* Soft glow blobs */}
      <motion.div
        variants={bgFloat}
        animate="animate"
        style={{
          position: "absolute",
          top: "5%",
          right: "8%",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(53,214,164,0.13) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      <motion.div
        variants={bgFloatAlt}
        animate="animate"
        style={{
          position: "absolute",
          bottom: "10%",
          right: "25%",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,61,138,0.10) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Three.js cubes */}
      <HeroCubes3D />
    </div>
  );
}

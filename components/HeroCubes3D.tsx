"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

/*
 * True-isometric cube cluster — claudefinance style.
 * Orthographic camera (no perspective distortion), uniform grid-snapped
 * cubes, soft matte mint faces with per-face shading, gentle staggered
 * wave, soft blob shadows, slow mouse parallax.
 */

const CUBE = 2; // cube edge length
const GAP = 2.6; // grid spacing

// Grid-snapped cluster layout [col, row, lift, pink?]
// col → +x, row → +z. Arranged as a loose diagonal flow, denser middle.
const LAYOUT: [number, number, number, boolean?][] = [
  [0, 0, 0],
  [1, 0, 0.0],
  [0, 1, 0],
  [1, 1, 0, true],
  [2, 1, 0],
  [1, 2, 0],
  [2, 2, 0],
  [3, 0, 0.0],
  [3, 2, 0, true],
  [4, 1, 0],
  [2, -1, 0],
  [4, -1, 0],
];

// Small flat tiles scattered for depth (like claudefinance's faint diamonds)
const TILES: [number, number][] = [
  [-1, 2], [0, -2], [2, 4], [5, 0], [5, 3], [-1, -1], [3, 4], [6, 1],
];

export function HeroCubes3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();

    // ── Orthographic camera, classic 2:1 isometric angle ──────────────────
    const frustum = 16;
    let aspect = container.clientWidth / container.clientHeight;
    const camera = new THREE.OrthographicCamera(
      (-frustum * aspect) / 2, (frustum * aspect) / 2,
      frustum / 2, -frustum / 2, 0.1, 200
    );
    camera.position.set(20, 20, 20);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // ── Flat-shaded materials: explicit color per face (top/left/right) ────
    // Mint family — matches bg #E8F2ED, reads as frosted glass blocks
    const mint = {
      top: 0xd7efe3, left: 0x9ccdb6, right: 0xb8e0cc,
      topHi: 0xe6f7ed,
    };
    const pink = {
      top: 0xffd9e8, left: 0xf0a0c0, right: 0xffc0d8,
      topHi: 0xffe6f0,
    };

    function makeCubeMats(c: typeof mint) {
      // BoxGeometry face order: +x, -x, +y, -y, +z, -z
      const m = (color: number) =>
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.96 });
      return [
        m(c.right), // +x (right face, camera-facing)
        m(c.left),  // -x hidden
        m(c.top),   // +y top
        m(c.left),  // -y hidden
        m(c.right), // +z — actually shows as right; use right tone
        m(c.left),  // -z hidden
      ];
    }

    // Edge highlight — subtle white, gives the "glass block" definition
    const edgeMat = new THREE.LineBasicMaterial({
      color: 0xffffff, transparent: true, opacity: 0.55,
    });

    const group = new THREE.Group();
    scene.add(group);

    // ── Cubes ──────────────────────────────────────────────────────────────
    const geo = new THREE.BoxGeometry(CUBE, CUBE, CUBE);
    const edgeGeo = new THREE.EdgesGeometry(geo);

    interface Animated {
      mesh: THREE.Mesh;
      shadow: THREE.Mesh;
      baseY: number;
      phase: number;
      amp: number;
    }
    const animated: Animated[] = [];

    // Soft round blob shadow under each cube
    const shadowTex = (() => {
      const c = document.createElement("canvas");
      c.width = c.height = 128;
      const ctx = c.getContext("2d")!;
      const g = ctx.createRadialGradient(64, 64, 8, 64, 64, 60);
      g.addColorStop(0, "rgba(13,31,24,0.22)");
      g.addColorStop(1, "rgba(13,31,24,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 128, 128);
      return new THREE.CanvasTexture(c);
    })();
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex, transparent: true, depthWrite: false,
    });
    const shadowGeo = new THREE.PlaneGeometry(CUBE * 1.7, CUBE * 1.7);

    for (const [col, row, lift, isPink] of LAYOUT) {
      const mats = makeCubeMats(isPink ? pink : mint);
      const mesh = new THREE.Mesh(geo, mats);
      const baseY = (lift ?? 0) + CUBE / 2;
      mesh.position.set(col * GAP, baseY, row * GAP);

      const outline = new THREE.LineSegments(edgeGeo, edgeMat);
      mesh.add(outline);
      group.add(mesh);

      const shadow = new THREE.Mesh(shadowGeo, shadowMat);
      shadow.rotation.x = -Math.PI / 2;
      shadow.position.set(col * GAP, 0.01, row * GAP);
      group.add(shadow);

      animated.push({
        mesh, shadow, baseY,
        phase: (col + row) * 0.9,
        amp: 0.32 + ((col * 7 + row * 3) % 4) * 0.05,
      });
    }

    // ── Flat ground tiles (faint diamonds) ─────────────────────────────────
    const tileGeo = new THREE.PlaneGeometry(CUBE * 0.85, CUBE * 0.85);
    TILES.forEach(([col, row], i) => {
      const tileMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0xbfe2d0 : 0xf3c6da,
        transparent: true, opacity: 0.35,
      });
      const tile = new THREE.Mesh(tileGeo, tileMat);
      tile.rotation.x = -Math.PI / 2;
      tile.position.set(col * GAP, 0.005, row * GAP);
      group.add(tile);
    });

    // Center the cluster: pull group so layout midpoint sits at origin,
    // then nudge right+down to fill hero's right side
    group.position.set(-4.5, -2.4, -1.5);

    // ── Parallax (rotate the whole group very subtly) ──────────────────────
    let tx = 0, ty = 0;
    const onMove = (e: MouseEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 0.16;
      ty = (e.clientY / window.innerHeight - 0.5) * 0.10;
    };
    window.addEventListener("mousemove", onMove);

    // ── Loop ───────────────────────────────────────────────────────────────
    const clock = new THREE.Clock();
    let raf: number;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      for (const a of animated) {
        const wave = Math.sin(t * 1.1 + a.phase) * a.amp;
        a.mesh.position.y = a.baseY + Math.max(wave, -0.05) + 0.35;
        // shadow shrinks + fades as cube rises
        const lift = a.mesh.position.y - a.baseY;
        const k = 1 - lift * 0.18;
        a.shadow.scale.setScalar(Math.max(k, 0.6));
        (a.shadow.material as THREE.MeshBasicMaterial).opacity = Math.max(0.9 - lift * 0.25, 0.4);
      }

      group.rotation.y += (tx - group.rotation.y) * 0.04;
      group.rotation.x += (ty - group.rotation.x) * 0.04;

      renderer.render(scene, camera);
    };
    animate();

    // ── Resize ─────────────────────────────────────────────────────────────
    const onResize = () => {
      aspect = container.clientWidth / container.clientHeight;
      camera.left = (-frustum * aspect) / 2;
      camera.right = (frustum * aspect) / 2;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(container);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
      renderer.dispose();
      if (container.contains(renderer.domElement))
        container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        width: "62%",
        pointerEvents: "none",
      }}
    />
  );
}

"use client";

import React, { useEffect, useRef } from "react";

export const HeroVisualCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let time = 0;

    // Mouse coordinates with smoothing
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      // Normalized coordinates from center (-1 to 1)
      mouse.targetX = ((e.clientX - rect.left) / width) * 2 - 1;
      mouse.targetY = ((e.clientY - rect.top) / height) * 2 - 1;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const numLines = 28;
    const segments = 60;

    const render = () => {
      time += prefersReducedMotion ? 0.002 : 0.006;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle topological parametric wireframe waves
      const centerY = height * 0.52;
      const centerX = width * 0.5;

      for (let i = 0; i < numLines; i++) {
        const lineProgress = i / numLines;
        // Muted burgundy to neutral gradient interpolations
        const isBurgundyAccent = i % 4 === 0;
        const opacity = Math.sin(lineProgress * Math.PI) * 0.35 + 0.08;

        ctx.beginPath();

        if (isBurgundyAccent) {
          ctx.strokeStyle = `rgba(142, 45, 63, ${opacity * 1.3})`;
          ctx.lineWidth = 1.25;
        } else {
          ctx.strokeStyle = `rgba(214, 210, 203, ${opacity * 0.45})`;
          ctx.lineWidth = 0.85;
        }

        const zOffset = (i - numLines / 2) * 12;
        const yBase = centerY + zOffset * 1.8 + mouse.y * 25;

        for (let j = 0; j <= segments; j++) {
          const t = j / segments;
          const x = t * width;

          // Normalized distance from center
          const distFromCenter = Math.abs(t - 0.5) * 2;
          const dampening = Math.cos(distFromCenter * (Math.PI / 2));

          // Multi-frequency harmonic wave
          const wave1 = Math.sin(t * 5.2 + time + i * 0.18) * 38;
          const wave2 = Math.cos(t * 8.4 - time * 0.8 + i * 0.12) * 22;
          const mouseInfluence = Math.sin(t * Math.PI + mouse.x * 2) * (mouse.y * 30);

          const y = yBase + (wave1 + wave2 + mouseInfluence) * dampening;

          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      }

      // Draw subtle radial glow vignette around center
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        10,
        centerX,
        centerY,
        Math.max(width, height) * 0.6
      );
      gradient.addColorStop(0, "rgba(128, 41, 56, 0.06)");
      gradient.addColorStop(0.5, "rgba(44, 44, 44, 0)");
      gradient.addColorStop(1, "rgba(44, 44, 44, 0.6)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none opacity-85">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

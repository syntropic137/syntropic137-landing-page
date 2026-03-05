"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  startX: number;
  startY: number;
}

export default function EntropyAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];
    const gridSize = 40;
    const dotRadius = 1;

    const resize = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      canvas.width = rect.width * devicePixelRatio;
      canvas.height = rect.height * devicePixelRatio;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      ctx.scale(devicePixelRatio, devicePixelRatio);
      initParticles(rect.width, rect.height);
    };

    const initParticles = (w: number, h: number) => {
      particles = [];
      for (let x = gridSize; x < w; x += gridSize) {
        for (let y = gridSize; y < h; y += gridSize) {
          particles.push({
            startX: Math.random() * w,
            startY: Math.random() * h,
            targetX: x,
            targetY: y,
            x: Math.random() * w,
            y: Math.random() * h,
          });
        }
      }
    };

    const duration = 4000;
    let startTime: number | null = null;

    const ease = (t: number) => {
      // ease-in-out cubic
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const draw = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = ease(progress);

      const w = canvas.width / devicePixelRatio;
      const h = canvas.height / devicePixelRatio;
      ctx.clearRect(0, 0, w, h);

      // Draw lines that fade in as particles settle
      if (eased > 0.5) {
        const lineAlpha = (eased - 0.5) * 2 * 0.06;
        ctx.strokeStyle = `rgba(77, 128, 255, ${lineAlpha})`;
        ctx.lineWidth = 0.5;
        for (let x = gridSize; x < w; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
          ctx.stroke();
        }
        for (let y = gridSize; y < h; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
          ctx.stroke();
        }
      }

      // Draw particles
      for (const p of particles) {
        p.x = p.startX + (p.targetX - p.startX) * eased;
        p.y = p.startY + (p.targetY - p.startY) * eased;

        const alpha = 0.15 + eased * 0.35;
        ctx.fillStyle = `rgba(77, 128, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, dotRadius + (1 - eased) * 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      if (progress < 1) {
        animId = requestAnimationFrame(draw);
      }
    };

    resize();

    // Start animation when footer scrolls into view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startTime = null;
          animId = requestAnimationFrame(draw);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="entropy-canvas"
      aria-hidden="true"
    />
  );
}

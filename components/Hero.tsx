"use client";

import { useEffect, useRef, useState } from "react";
import InstallCmd from "./InstallCmd";
import TextShimmer from "./TextShimmer";
import { ArrowRight, Github } from "lucide-react";

function useStaggerReveal(count: number, baseDelay = 0, stagger = 150) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getDelay = (index: number) => baseDelay + index * stagger;
  const getStyle = (index: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${getDelay(index)}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${getDelay(index)}ms`,
  });

  return { ref, getStyle, visible };
}

function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span className="typing-text">
      {displayed}
      <span className="typing-cursor" aria-hidden="true">|</span>
    </span>
  );
}

export default function Hero() {
  const hero = useStaggerReveal(7, 100, 150);
  const defs = useStaggerReveal(3, 200, 200);

  return (
    <section className="hero-section" ref={hero.ref}>
      {/* Ambient glow orbs */}
      <div className="hero-glow hero-glow--primary" aria-hidden="true" />
      <div className="hero-glow hero-glow--secondary" aria-hidden="true" />

      <div className="container hero">
        <div className="hero-text">
          <div style={hero.getStyle(0)}>
            <span className="hero-eyebrow">Open Source Agentic Engineering</span>
          </div>

          <h1 style={hero.getStyle(1)}>
            IDEs are <span className="accent">dead.</span>
          </h1>

          <p className="hero-subtitle" style={hero.getStyle(2)}>
            Get out of the loop.{" "}
            <TextShimmer shimmerWidth={140}>
              Get into orchestration.
            </TextShimmer>
          </p>

          <div style={hero.getStyle(3)}>
            <InstallCmd />
          </div>

          <div className="hero-ctas" style={hero.getStyle(4)}>
            <a href="#create-agent" className="btn-primary">
              <span>Get Started</span>
              <ArrowRight size={16} strokeWidth={2} />
            </a>
            <a
              href="https://github.com/Syntropic137"
              className="btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} strokeWidth={2} />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>

        <div className="hero-visual" style={hero.getStyle(2)}>
          <div className="hero-visual-frame">
            <video
              className="hero-video"
              autoPlay
              muted
              playsInline
              aria-label="Syntropic137 IDE demo"
            >
              <source src="/assets/hero_syntropic137.webm" type="video/webm" />
              <source src="/assets/hero_syntropic137.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="container hero-definitions" ref={defs.ref}>
        <div className="syntropic-pair">
          <div className="syntropic-block" style={defs.getStyle(0)}>
            <p className="syntropic-label">Syntropic</p>
            <p className="syntropic-one-liner">Structure from entropy.</p>
            <p className="syntropic-note">
              From <em>syntropy</em> — the tendency toward order and
              complexity along energy gradients.
            </p>
          </div>
          <div className="syntropic-divider" style={defs.getStyle(1)} />
          <div className="syntropic-block" style={defs.getStyle(2)}>
            <p className="syntropic-label">137</p>
            <p className="syntropic-one-liner">The constant that makes it possible.</p>
            <p className="syntropic-note">
              The fine-structure constant (~1/137) — governs how matter
              and light interact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

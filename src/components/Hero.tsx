import { useCallback, useEffect, useRef, useState } from "react";
import TextShimmer from "./TextShimmer";
import { ArrowRight, Github, Clipboard, Check, Scale } from "lucide-react";

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

function useVideoToStill() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [posterSrc, setPosterSrc] = useState<string | null>(null);

  const handleEnded = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(video, 0, 0);
    canvas.toBlob((blob) => {
      if (blob) setPosterSrc(URL.createObjectURL(blob));
    }, "image/webp");
  }, []);

  return { videoRef, posterSrc, handleEnded };
}

function CopyableLine({ line }: { line: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(line);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="terminal-line" onClick={handleCopy} role="button" tabIndex={0}>
      <code className="terminal-line-text">
        <span className="syn-punctuation">$ </span>
        <span className="syn-function">{line}</span>
      </code>
      {copied ? (
        <span className="terminal-copied-tooltip">Copied!</span>
      ) : (
        <Clipboard size={12} className="terminal-line-icon" />
      )}
    </div>
  );
}

const installLines = [
  "claude plugin marketplace add syntropic137/syntropic137-claude-plugin",
  "claude plugin install syntropic137",
  "/syn-setup",
];

export default function Hero() {
  const hero = useStaggerReveal(7, 100, 150);
  const defs = useStaggerReveal(3, 200, 200);
  const { videoRef, posterSrc, handleEnded } = useVideoToStill();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installLines.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="hero-section" ref={hero.ref}>
      {/* Ambient glow orbs */}
      <div className="hero-glow hero-glow--primary" aria-hidden="true" />
      <div className="hero-glow hero-glow--secondary" aria-hidden="true" />

      <div className="container hero">
        <div className="hero-text">
          <div style={hero.getStyle(0)}>
            <span className="hero-eyebrow">
              <Scale size={12} />
              <span>MIT</span>
              <span className="eyebrow-sep" aria-hidden="true" />
              <span>Agentic Engineering Platform</span>
            </span>
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

          <p className="hero-description" style={hero.getStyle(2)}>
            Event-sourced <strong>agentic engineering platform</strong> using{" "}
            <span className="claude">Claude Code</span> as a primitive. Through{" "}
            <strong>repeatable workflows</strong>, every tool call, token, cost,
            conversation, and artifact is captured for analytics and learning.
          </p>

          <div className="hero-install glass" style={hero.getStyle(3)}>
            <div className="hero-install-header">
              <span className="code-filename">terminal</span>
              <button
                className="install-copy"
                onClick={handleCopy}
                aria-label="Copy install commands"
              >
                {copied ? <Check size={14} /> : <Clipboard size={14} />}
              </button>
            </div>
            <div className="hero-install-code">
              {installLines.map((line, i) => (
                <CopyableLine key={i} line={line} />
              ))}
            </div>
          </div>

          <div className="hero-ctas" style={hero.getStyle(4)}>
            <a
              href="https://github.com/syntropic137/syntropic137"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} strokeWidth={2} />
              <span>View on GitHub</span>
            </a>
            <a href="#features" className="btn-ghost">
              <span>Learn More</span>
              <ArrowRight size={16} strokeWidth={2} />
            </a>
          </div>
        </div>

        <div className="hero-visual" style={hero.getStyle(2)}>
          <div className="hero-visual-glow">
            <div className="hero-visual-frame">
              {posterSrc ? (
                <img
                  className="hero-video"
                  src={posterSrc}
                  alt="Syntropic137 logo"
                />
              ) : (
                <video
                  ref={videoRef}
                  className="hero-video"
                  autoPlay
                  muted
                  playsInline
                  aria-label="Syntropic137 logo"
                  src="/assets/hero_syntropic137.webm"
                  onEnded={handleEnded}
                />
              )}
            </div>
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

import { useState } from "react";
import { ArrowRight, Clipboard, Check } from "lucide-react";

const GitHubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);
import FadeIn from "./FadeIn";

const installLines = [
  "claude plugin marketplace add syntropic137/syntropic137-claude-plugin",
  "claude plugin install syntropic137",
  "/syn-setup",
];

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

export default function GetStarted() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installLines.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="get-started" className="section section-alt">
      <div className="container get-started-container">
        <FadeIn>
          <h2 className="section-heading">
            Get <span className="accent">Started</span>
          </h2>
          <p className="section-subtitle">Up and running in minutes</p>

          <div className="get-started-install glass">
            <div className="get-started-install-header">
              <span className="code-filename">terminal</span>
              <button
                className="install-copy"
                onClick={handleCopy}
                aria-label="Copy all install commands"
              >
                {copied ? <Check size={14} /> : <Clipboard size={14} />}
              </button>
            </div>
            <div className="get-started-code">
              {installLines.map((line, i) => (
                <CopyableLine key={i} line={line} />
              ))}
            </div>
          </div>

          <div className="hero-ctas" style={{ justifyContent: "center", marginTop: "var(--space-xl)" }}>
            <a
              href="https://github.com/syntropic137/syntropic137"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon size={16} />
              <span>View on GitHub</span>
            </a>
            <a href="#" className="btn-ghost">
              <span>Read the Docs</span>
              <ArrowRight size={16} strokeWidth={2} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

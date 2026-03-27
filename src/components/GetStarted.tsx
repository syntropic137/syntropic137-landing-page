import { useState } from "react";
import { ArrowRight, Github, Clipboard, Check } from "lucide-react";
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
              <Github size={16} strokeWidth={2} />
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

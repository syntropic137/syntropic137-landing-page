import InstallCmd from "./InstallCmd";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero">
        <div className="hero-text">
          <h1>
            IDEs are <span className="accent">dead.</span>
          </h1>
          <p className="hero-subtitle">
            Get out of the loop. Get into orchestration.
          </p>
          <p className="hero-longline">
            The future isn&apos;t human-in-the-loop agentic coding.<br />
            It&apos;s <span className="gradient-text">orchestrated agentic engineering.</span>
          </p>
          <InstallCmd />
          <div className="hero-ctas">
            <a href="#create-agent" className="btn-primary">Get Started</a>
            <a
              href="https://github.com/Syntropic137"
              className="btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <video
            className="hero-video"
            autoPlay
            muted
            playsInline
          >
            <source src="/assets/hero_syntropic137.webm" type="video/webm" />
            <source src="/assets/hero_syntropic137.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="container hero-definitions">
        <div className="syntropic-pair">
          <div className="syntropic-block">
            <p className="syntropic-label">Syntropic</p>
            <p className="syntropic-one-liner">Structure from entropy.</p>
            <p className="syntropic-note">
              From <em>syntropy</em> — the tendency toward order and
              complexity along energy gradients.
            </p>
          </div>
          <div className="syntropic-divider" />
          <div className="syntropic-block">
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

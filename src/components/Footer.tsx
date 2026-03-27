import { Scale, Github, Link } from "lucide-react";
import EntropyAnimation from "./EntropyAnimation";

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ verticalAlign: '-2px', marginRight: '6px' }}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const iconStyle = { verticalAlign: '-2px' as const, marginRight: '6px' };

export default function Footer() {
  return (
    <footer className="footer">
      <EntropyAnimation />
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="footer-name">Syntropic137</span>
          <p className="footer-tagline">Structure from entropy</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4 className="footer-col-title">Product</h4>
            <a href="#get-started" className="footer-link">Get Started</a>
            <a href="#features" className="footer-link">Features</a>
            <a href="#how-it-works" className="footer-link">How It Works</a>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Community</h4>
            <a href="https://github.com/syntropic137/syntropic137" className="footer-link" target="_blank" rel="noopener noreferrer">
              <Github size={14} style={iconStyle} /> GitHub
            </a>
            <a href="https://x.com/syntropic137" className="footer-link" target="_blank" rel="noopener noreferrer">
              <XIcon /> @syntropic137
            </a>
            <a href="/links" className="footer-link">
              <Link size={14} style={iconStyle} /> All Links
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>&copy; {new Date().getFullYear()} Syntropic137</span>
        <span className="hero-eyebrow"><Scale size={12} /> MIT <span className="eyebrow-sep" aria-hidden="true" /> Agentic Engineering Platform</span>
      </div>
    </footer>
  );
}

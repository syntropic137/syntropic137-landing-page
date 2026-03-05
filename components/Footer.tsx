import { Scale } from "lucide-react";
import EntropyAnimation from "./EntropyAnimation";

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
            <a href="#create-agent" className="footer-link">Get Started</a>
            <a href="#why" className="footer-link">Why Syntropic?</a>
            <a href="#architecture" className="footer-link">Architecture</a>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Community</h4>
            <a href="https://github.com/Syntropic137" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="#" className="footer-link">Discord</a>
            <a href="#" className="footer-link">Twitter</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>&copy; 2026 Syntropic137</span>
        <span className="badge"><Scale size={12} /> MIT License</span>
      </div>
    </footer>
  );
}

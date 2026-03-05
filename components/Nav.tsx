import { Scale } from "lucide-react";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="nav-left">
          <span className="nav-brand">Syntropic137</span>
          <span className="nav-tagline">Agentic Engineering</span>
        </div>
        <div className="nav-right">
          <a href="#why" className="nav-link">Docs</a>
          <a href="#architecture" className="nav-link">Architecture</a>
          <a href="https://github.com/Syntropic137" className="nav-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span className="badge"><Scale size={12} /> MIT</span>
        </div>
      </div>
    </nav>
  );
}

import { useState } from "react";
import { Menu, X, Github } from "lucide-react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="container nav-inner">
        <div className="nav-left">
          <span className="nav-brand">Syntropic137</span>
          <span className="nav-tagline">Agentic Engineering</span>
        </div>
        <div className="nav-right">
          <a href="#features" className="nav-link">Features</a>
          <a href="#how-it-works" className="nav-link">Workflows</a>
          <a href="#observability" className="nav-link">Observability</a>
          <a href="https://github.com/syntropic137/syntropic137" className="nav-github-btn" target="_blank" rel="noopener noreferrer">
            <Github size={16} strokeWidth={2} />
            <span>GitHub</span>
          </a>
        </div>
        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className={`nav-drawer${open ? " open" : ""}`}>
          <a href="#features" className="nav-link" onClick={() => setOpen(false)}>Features</a>
          <a href="#how-it-works" className="nav-link" onClick={() => setOpen(false)}>Workflows</a>
          <a href="#observability" className="nav-link" onClick={() => setOpen(false)}>Observability</a>
          <a href="https://github.com/syntropic137/syntropic137" className="nav-github-btn" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            <Github size={16} strokeWidth={2} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

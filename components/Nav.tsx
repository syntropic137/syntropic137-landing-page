"use client";

import { useState } from "react";
import { Scale, Menu, X } from "lucide-react";

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
          <a href="#why" className="nav-link">Docs</a>
          <a href="#architecture" className="nav-link">Architecture</a>
          <a href="https://github.com/Syntropic137" className="nav-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span className="badge"><Scale size={12} /> MIT</span>
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
          <a href="#why" className="nav-link" onClick={() => setOpen(false)}>Docs</a>
          <a href="#architecture" className="nav-link" onClick={() => setOpen(false)}>Architecture</a>
          <a href="https://github.com/Syntropic137" className="nav-link" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>GitHub</a>
          <span className="badge"><Scale size={12} /> MIT</span>
        </div>
      </div>
    </nav>
  );
}

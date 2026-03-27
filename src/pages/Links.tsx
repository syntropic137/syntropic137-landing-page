import { Github, MessageSquare, Lightbulb, BookOpen, Link as LinkIcon, Scale } from "lucide-react";

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const links = [
  {
    icon: Github,
    title: "GitHub",
    desc: "Source code & releases",
    href: "https://github.com/syntropic137/syntropic137",
  },
  {
    icon: XIcon,
    title: "@syntropic137",
    desc: "Updates & announcements",
    href: "https://x.com/syntropic137",
  },
  {
    icon: MessageSquare,
    title: "GitHub Discussions",
    desc: "Questions & community help",
    href: "https://github.com/syntropic137/syntropic137/discussions",
  },
  {
    icon: Lightbulb,
    title: "Request a Feature",
    desc: "Vote & suggest on Canny",
    href: "#",
  },
  {
    icon: BookOpen,
    title: "Documentation",
    desc: "Guides, references & API docs",
    href: "#",
  },
  {
    icon: LinkIcon,
    title: "Syntropic137 Landing Page",
    desc: "syntropic137.com",
    href: "/",
  },
];

export default function Links() {
  return (
    <div className="links-page">
      <div className="links-container">
        <div className="links-header">
          <span className="links-brand">Syntropic137</span>
          <div style={{ marginTop: '12px' }}>
            <span className="hero-eyebrow">
              <Scale size={12} /> MIT <span className="eyebrow-sep" aria-hidden="true" /> Agentic Engineering Platform
            </span>
          </div>
        </div>
        <div className="links-list">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="links-item glass"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <link.icon size={20} className="links-item-icon" />
              <div className="links-item-text">
                <span className="links-item-title">{link.title}</span>
                <span className="links-item-desc">{link.desc}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

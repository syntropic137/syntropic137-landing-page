import { PenLine, Play, BarChart2 } from "lucide-react";
import FadeIn from "./FadeIn";

const capabilities = [
  {
    icon: PenLine,
    num: "01",
    accent: "#DA7756",
    title: "Design Workflows",
    desc: (
      <>
        Describe what you want to automate. Claude Code uses its built-in
        workflow knowledge to create phase definitions, prompt templates, and
        YAML config, then registers them with the platform.
      </>
    ),
    commands: [],
  },
  {
    icon: Play,
    num: "02",
    accent: "#4D80FF",
    title: "Run and Control",
    desc: (
      <>
        Kick off workflows, track execution status, and manage running agents.
        Pause, resume, or cancel from inside Claude Code without touching
        the dashboard.
      </>
    ),
    commands: ["/syn-status"],
  },
  {
    icon: BarChart2,
    num: "03",
    accent: "#34d399",
    title: "Review Outputs",
    desc: (
      <>
        Query execution data, inspect token costs and tool traces, and surface
        insights. Feed them back into the next workflow iteration.
      </>
    ),
    commands: ["/syn-observe <session-id>", "/syn-costs"],
  },
];

export default function ClaudeCodeOrchestrator() {
  return (
    <section id="orchestrator" className="section">
      <div className="container">
        <h2 className="section-heading">
          <span className="claude">Claude Code</span> as the Control Plane
        </h2>
        <p className="section-subtitle">
          The{" "}
          <a
            href="https://github.com/syntropic137/syntropic137-claude-plugin"
            target="_blank"
            rel="noopener noreferrer"
            className="subtitle-link"
          >
            Syntropic137 plugin
          </a>{" "}
          gives Claude Code native knowledge of the platform. Design workflows,
          run agents, and review outputs without leaving your terminal.
        </p>
        <div className="cards-grid">
          {capabilities.map((cap) => (
            <FadeIn key={cap.title}>
              <div
                className="card glass card-accented"
                style={{ "--card-accent": cap.accent } as React.CSSProperties}
              >
                <span className="card-num">{cap.num}</span>
                <cap.icon className="card-icon" size={40} strokeWidth={1.5} />
                <h3 className="card-title">{cap.title}</h3>
                <p className="card-desc">{cap.desc}</p>
                <div className="orc-commands">
                  {cap.commands.map((cmd) => (
                    <code key={cmd} className="phase-cmd orc-cmd">{cmd}</code>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

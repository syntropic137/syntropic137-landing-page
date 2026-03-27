import { Search, FileText, Code2, MessageSquareText, ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

const phases = [
  { icon: Search, title: "Research", subtitle: "/research $ARGUMENTS" },
  { icon: FileText, title: "Plan", subtitle: "/plan $ARGUMENTS" },
  { icon: Code2, title: "Implement", subtitle: "/implement $ARGUMENTS" },
  { icon: MessageSquareText, title: "Review", subtitle: "/review $ARGUMENTS" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section section-alt">
      <div className="container">
        <h2 className="section-heading">
          Workflow Phases as{" "}
          <span className="accent">Commands</span>
        </h2>
        <p className="section-subtitle">
          Built on the <strong>Claude Code</strong> <a href="https://docs.anthropic.com/en/docs/claude-code/slash-commands" target="_blank" rel="noopener noreferrer" className="subtitle-link">standards</a> you already know. Scale to <span className="text-green">100+ agents with Syntropic137</span>, <em>versus &lt;10 human-in-the-loop agentic IDEs.</em>
        </p>
        <FadeIn>
          <div className="arch-flow">
            {phases.map((phase, i) => (
              <div key={phase.title} className="arch-step">
                <div className="arch-node glass">
                  <phase.icon className="arch-icon" size={32} strokeWidth={1.5} />
                  <div className="arch-title">{phase.title}</div>
                  <div className="arch-subtitle">
                    <code className="phase-cmd">{phase.subtitle}</code>
                  </div>
                </div>
                {i < phases.length - 1 && (
                  <div className="arch-arrow">
                    <ArrowRight size={24} strokeWidth={2} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="how-it-works-caption">
            Each phase runs in an isolated Docker workspace. Output artifacts flow forward — research informs the plan, the plan drives implementation, implementation feeds review. The same workflow that runs once runs a thousand times.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

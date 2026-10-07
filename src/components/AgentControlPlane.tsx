import { PenLine, Play, BarChart2 } from "lucide-react";
import FadeIn from "./FadeIn";
import { HARNESSES } from "../data/harnesses";

/*
 * Commands copied verbatim from the syntropic137-skills README. The `skills`
 * CLI selects skills with --skill; an owner/repo/<skill> path does not work.
 */
const SKILLS_REPO = "https://github.com/syntropic137/syntropic137-skills";
const SKILLS_LIST = "npx skills add syntropic137/syntropic137-skills -l";
const SKILLS_INSTALL =
  "npx skills add syntropic137/syntropic137-skills --skill '*' -a claude-code -a codex -y";

const capabilities = [
  {
    icon: PenLine,
    num: "01",
    accent: "#E08A5F",
    title: "Design Workflows",
    desc: (
      <>
        Find the workflows a deployment can run and the inputs each one
        takes. Validate your own YAML, then register it with the platform.
        Each phase picks the harness that suits it.
      </>
    ),
    skills: ["syn-workflow"],
  },
  {
    icon: Play,
    num: "02",
    accent: "#4D80FF",
    title: "Run and Control",
    desc: (
      <>
        Start runs, follow them live, and find out why one failed. Cancel or
        resume from your terminal, or let GitHub events trigger workflows,
        without touching the dashboard.
      </>
    ),
    skills: ["execution-control", "github-triggers"],
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
    skills: ["observing-sessions", "mining-session-logs"],
  },
];

export default function AgentControlPlane() {
  return (
    <section id="orchestrator" className="section">
      <div className="container">
        <h2 className="section-heading">
          Your Terminal as the <span className="accent">Control Plane</span>
        </h2>
        <p className="section-subtitle">
          The{" "}
          <a
            href={SKILLS_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="syntropic-brand syntropic-brand--link"
          >
            Syntropic137 skills
          </a>{" "}
          teach your coding agent the platform, whichever harness it runs on.
          Design workflows, run agents, and review outputs without leaving your
          terminal. Phases execute on{" "}
          {HARNESSES.map((h, i) => (
            <span key={h.id}>
              {i > 0 && (i === HARNESSES.length - 1 ? " or " : ", ")}
              <strong>{h.name}</strong>
            </span>
          ))}
          , chosen per phase.
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
                  {cap.skills.map((skill) => (
                    <code key={skill} className="phase-cmd orc-cmd">{skill}</code>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn>
          <div className="get-started-install glass">
            <div className="get-started-install-header">
              <span className="code-filename">install the skills</span>
            </div>
            <pre className="get-started-code orc-skills-code">
              <code>
                <span className="syn-comment"># list what the repo offers</span>
                {"\n"}
                <span className="syn-punctuation">$ </span>
                <span className="syn-function">{SKILLS_LIST}</span>
                {"\n\n"}
                <span className="syn-comment"># install every skill for Claude Code and Codex</span>
                {"\n"}
                <span className="syn-punctuation">$ </span>
                <span className="syn-function">{SKILLS_INSTALL}</span>
              </code>
            </pre>
          </div>
          <p className="orc-skills-note">
            <code className="inline-code">-a</code> also takes{" "}
            <code className="inline-code">gemini-cli</code> and around 70 other
            agents. Add <code className="inline-code">-g</code> to install for
            your user instead of the current project.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

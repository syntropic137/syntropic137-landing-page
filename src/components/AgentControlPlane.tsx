import { PenLine, Play, BarChart2 } from "lucide-react";
import FadeIn from "./FadeIn";
import { HARNESSES } from "../data/harnesses";

const capabilities = [
  {
    icon: PenLine,
    num: "01",
    accent: "#E08A5F",
    title: "Design Workflows",
    desc: (
      <>
        Describe what you want to automate. Your agent turns it into phase
        definitions, prompt templates, and YAML config, then registers them
        with the platform. Each phase picks the harness that suits it.
      </>
    ),
    skills: ["authoring-workflows", "workflow-marketplace"],
  },
  {
    icon: Play,
    num: "02",
    accent: "#4D80FF",
    title: "Run and Control",
    desc: (
      <>
        Kick off workflows, follow executions live, and wire them to GitHub
        events. Cancel a run or resume a failed one from your terminal without
        touching the dashboard.
      </>
    ),
    skills: ["syn-workflow", "execution-control", "github-triggers"],
  },
  {
    icon: BarChart2,
    num: "03",
    accent: "#34d399",
    title: "Review Outputs",
    desc: (
      <>
        Inspect what each session did, its token costs and tool traces, and mine
        finished runs for lessons. Feed them back into the next workflow
        iteration.
      </>
    ),
    skills: ["observing-sessions", "mining-session-logs"],
  },
];

/** Harnesses the agent skills install into, so they can drive the platform. */
const CONTROL_PLANE = HARNESSES.filter((h) => h.controlPlane);

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
            href="https://github.com/syntropic137/syntropic137-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="syntropic-brand syntropic-brand--link"
          >
            Syntropic137 agent skills
          </a>{" "}
          give{" "}
          {CONTROL_PLANE.map((h, i) => (
            <span key={h.id}>
              {i > 0 && (i === CONTROL_PLANE.length - 1 ? " and " : ", ")}
              <strong>{h.name}</strong>
            </span>
          ))}{" "}
          native knowledge of the platform, installed for you by{" "}
          <code>npx @syntropic137/setup</code>. Design workflows, run agents,
          and review outputs without leaving your terminal. Phases execute on{" "}
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
                {cap.skills.length > 0 && (
                  <div className="orc-commands" aria-label="Agent skills">
                    {cap.skills.map((skill) => (
                      <code key={skill} className="phase-cmd orc-cmd">{skill}</code>
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

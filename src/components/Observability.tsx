import { Database, Activity, GitCommit, MessageCircle } from "lucide-react";
import FadeIn from "./FadeIn";

const channels = [
  {
    icon: Database,
    title: "Event-Sourced Domain Events",
    desc: "Immutable log of every domain state change — workflows, artifacts, organizations. An immutable history of what was kicked off, what completed, and what failed.",
  },
  {
    icon: Activity,
    title: "Observability Events",
    desc: <>Token usage, tool traces, costs, and errors captured in real-time via <strong>Claude Code hooks</strong> and <strong>git hooks</strong>. See exactly what the agent did and why.</>,
  },
  {
    icon: MessageCircle,
    title: "Conversation Logs",
    desc: "Every conversation is automatically persisted to S3-compatible storage. Never lose track of agent reasoning, decisions, or context again — review any session from any workflow, anytime.",
  },
  {
    icon: GitCommit,
    title: "Git Hooks",
    desc: "Every commit, push, branch, and merge captured as events. Correlate code changes with the agent sessions that produced them.",
  },
];

export default function Observability() {
  return (
    <section id="observability" className="section section-alt">
      <div className="container">
        <h2 className="section-heading">
          Immutable <span className="accent">Event Store</span>
        </h2>
        <p className="section-subtitle">
          Multiple observability channels — all data is interactive, all data compounds
        </p>
        <div className="cards-grid cards-grid--two">
          {channels.map((channel) => (
            <FadeIn key={channel.title}>
              <div className="card glass">
                <channel.icon className="card-icon" size={40} strokeWidth={1.5} />
                <h3 className="card-title">{channel.title}</h3>
                <p className="card-desc">{channel.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn>
          <p className="how-it-works-caption">
            Analyze what agents do across sessions, workflows, repos, systems, and organizations. Data compounds — every run makes the next one smarter.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

import { Shield, Server, Globe } from "lucide-react";
import FadeIn from "./FadeIn";

const cards = [
  {
    icon: Shield,
    title: "Isolated by Default",
    desc: "Every agent runs in an ephemeral Docker container. API keys are never exposed to workspaces. Egress proxies control outbound traffic. Read-only filesystems. No new privileges. Supply chain signed with cosign.",
  },
  {
    icon: Server,
    title: "Built to Recover",
    desc: "Event-sourced state survives crashes. Idempotent handlers replay safely. Single-machine Docker Compose deployment — no Kubernetes required.",
  },
  {
    icon: Globe,
    title: "Accessible from Anywhere",
    desc: "Built-in Cloudflare Tunnel support — easily receive GitHub webhooks and access your system from anywhere without exposing ports or managing DNS.",
  },
];

export default function Security() {
  return (
    <section id="security" className="section">
      <div className="container">
        <h2 className="section-heading">
          Production <span className="accent">Ready</span>
        </h2>
        <p className="section-subtitle">
          Security as a first-class citizen
        </p>
        <div className="cards-grid">
          {cards.map((card) => (
            <FadeIn key={card.title}>
              <div className="card glass">
                <card.icon className="card-icon" size={40} strokeWidth={1.5} />
                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

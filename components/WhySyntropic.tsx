import { Brain, RefreshCw, Plug } from "lucide-react";
import FadeIn from "./FadeIn";

const cards = [
  {
    icon: Brain,
    title: "Persistent Memory",
    desc: "Agents that remember context across sessions — no more cold starts.",
  },
  {
    icon: RefreshCw,
    title: "Self-Improving Loops",
    desc: "Built-in feedback cycles let agents refine their own behavior over time.",
  },
  {
    icon: Plug,
    title: "Plugin Ecosystem",
    desc: "Connect any tool, API, or integration through a standard plugin interface.",
  },
];

export default function WhySyntropic() {
  return (
    <section id="why" className="section container">
      <h2 className="section-heading">
        Why <span className="accent">Syntropic137?</span>
      </h2>
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
    </section>
  );
}

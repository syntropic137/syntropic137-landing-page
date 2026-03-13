import { Bot, Globe, Plug2, ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

const nodes = [
  { icon: Bot, title: "Agent", subtitle: "Claude / GPT / Local" },
  { icon: Globe, title: "Environment", subtitle: "Runtime sandbox" },
  { icon: Plug2, title: "Plugin", subtitle: "Tools & integrations" },
];

export default function Architecture() {
  return (
    <section id="architecture" className="section section-alt">
      <div className="container">
        <h2 className="section-heading">
          <span className="accent">Architecture</span>
        </h2>
        <p className="section-subtitle">How it all connects</p>
        <FadeIn>
          <div className="arch-flow">
            {nodes.map((node, i) => (
              <div key={node.title} className="arch-step">
                <div className="arch-node glass">
                  <node.icon className="arch-icon" size={32} strokeWidth={1.5} />
                  <div className="arch-title">{node.title}</div>
                  <div className="arch-subtitle">{node.subtitle}</div>
                </div>
                {i < nodes.length - 1 && (
                  <div className="arch-arrow">
                    <ArrowRight size={24} strokeWidth={2} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

import FadeIn from "./FadeIn";
import CodeEditor from "./CodeEditor";

export default function CreateAgent() {
  return (
    <section id="create-agent" className="section container">
      <h2 className="section-heading">
        Create an <span className="accent">Agent</span>
      </h2>
      <FadeIn>
        <CodeEditor />
      </FadeIn>
    </section>
  );
}

const lines = [
  { num: 1, content: <><span className="syn-keyword">import</span>{" "}<span className="syn-punctuation">{"{ "}</span><span className="syn-function">Agent</span><span className="syn-punctuation">{", "}</span><span className="syn-function">Memory</span><span className="syn-punctuation">{" }"}</span>{" "}<span className="syn-keyword">from</span>{" "}<span className="syn-string">&quot;syntropic137&quot;</span><span className="syn-punctuation">;</span></> },
  { num: 2, content: null },
  { num: 3, content: <span className="syn-comment">{"// Create an agent with persistent memory"}</span> },
  { num: 4, content: <><span className="syn-keyword">const</span>{" "}<span className="syn-function">agent</span>{" "}<span className="syn-punctuation">=</span>{" "}<span className="syn-keyword">new</span>{" "}<span className="syn-function">Agent</span><span className="syn-punctuation">{"({"}</span></> },
  { num: 5, content: <>{" "}{" "}<span className="syn-property">name</span><span className="syn-punctuation">:</span>{" "}<span className="syn-string">&quot;researcher&quot;</span><span className="syn-punctuation">,</span></> },
  { num: 6, content: <>{" "}{" "}<span className="syn-property">memory</span><span className="syn-punctuation">:</span>{" "}<span className="syn-keyword">new</span>{" "}<span className="syn-function">Memory</span><span className="syn-punctuation">({"{"}</span>{" "}<span className="syn-property">persist</span><span className="syn-punctuation">:</span>{" "}<span className="syn-keyword">true</span>{" "}<span className="syn-punctuation">{"})"}</span><span className="syn-punctuation">,</span></> },
  { num: 7, content: <>{" "}{" "}<span className="syn-property">plugins</span><span className="syn-punctuation">:</span>{" "}<span className="syn-punctuation">[</span><span className="syn-string">&quot;web-search&quot;</span><span className="syn-punctuation">,</span>{" "}<span className="syn-string">&quot;file-system&quot;</span><span className="syn-punctuation">]</span><span className="syn-punctuation">,</span></> },
  { num: 8, content: <span className="syn-punctuation">{"});"}</span> },
  { num: 9, content: null },
  { num: 10, content: <><span className="syn-keyword">await</span>{" "}<span className="syn-function">agent</span><span className="syn-punctuation">.</span><span className="syn-function">run</span><span className="syn-punctuation">(</span><span className="syn-string">&quot;Summarize today&apos;s AI news&quot;</span><span className="syn-punctuation">);</span></> },
];

export default function CodeEditor() {
  return (
    <div className="code-editor glass">
      <div className="code-titlebar">
        <div className="code-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="code-filename">agent.ts</span>
      </div>
      <div className="code-body">
        <div className="code-line-numbers" aria-hidden="true">
          {lines.map((l) => (
            <span key={l.num}>{l.num}</span>
          ))}
        </div>
        <pre style={{ margin: 0 }}><code>{lines.map((l, i) => (
          <span key={l.num}>{i > 0 && "\n"}{l.content ?? ""}</span>
        ))}</code></pre>
      </div>
    </div>
  );
}

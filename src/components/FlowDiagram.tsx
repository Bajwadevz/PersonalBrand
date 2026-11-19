/** Small animated workflow strip: nodes connected by a line that draws in when revealed. */
export default function FlowDiagram({ steps, label }: { steps: string[]; label: string }) {
  return (
    <ol className="flow-diagram" aria-label={label} data-reveal style={{ ["--n" as string]: steps.length }}>
      {steps.map((step, i) => (
        <li key={step} style={{ ["--i" as string]: i }}>
          <span className="flow-dot" aria-hidden="true" />
          <span className="flow-label">{step}</span>
        </li>
      ))}
    </ol>
  );
}

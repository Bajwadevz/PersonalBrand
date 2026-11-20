/**
 * Hero visual for /ai-implementation: business systems arranged around one
 * central workflow, joined by connectors with data pulses flowing along them.
 * Pulses only animate under .motion-ok and pause off screen (data-ambient).
 */
const nodes = [
  { label: "Shared inbox", x: 70, y: 70 },
  { label: "Web forms", x: 70, y: 210 },
  { label: "Documents", x: 70, y: 350 },
  { label: "CRM", x: 410, y: 70 },
  { label: "Accounting", x: 410, y: 210 },
  { label: "Team chat", x: 410, y: 350 },
] as const;
const CX = 240;
const CY = 210;

export default function IntegrationMap() {
  return (
    <figure className="impl-map glass" aria-label="Illustration: six business systems — shared inbox, web forms, documents, CRM, accounting and team chat — connected to one central workflow with a human review step.">
      <figcaption className="impl-map-cap"><span>Integration map</span><span className="impl-tag">Illustrative</span></figcaption>
      <svg viewBox="0 0 480 420" className="impl-map-svg" aria-hidden="true" data-ambient>
        <defs>
          <linearGradient id="impl-line" x1="0" x2="1">
            <stop offset="0" style={{ stopColor: "var(--ocean)" }} />
            <stop offset="1" style={{ stopColor: "var(--cyan)" }} />
          </linearGradient>
        </defs>
        {nodes.map((n, i) => {
          const left = n.x < CX;
          const sx = left ? n.x + 58 : n.x - 58;
          const ex = left ? CX - 78 : CX + 78;
          const mid = (sx + ex) / 2;
          const d = `M${sx} ${n.y} C ${mid} ${n.y}, ${mid} ${CY}, ${ex} ${CY}`;
          return (
            <g key={n.label} style={{ ["--i" as string]: i }}>
              <path d={d} className="impl-link" />
              <path d={d} className="impl-pulse" pathLength={100} />
            </g>
          );
        })}
        <g className="impl-hub">
          <rect x={CX - 78} y={CY - 46} width="156" height="92" rx="16" />
          <text x={CX} y={CY - 14} textAnchor="middle" className="impl-hub-k">WORKFLOW</text>
          <text x={CX} y={CY + 8} textAnchor="middle" className="impl-hub-t">Route · Check · Record</text>
          <g className="impl-hub-review">
            <rect x={CX - 48} y={CY + 18} width="96" height="18" rx="9" />
            <text x={CX} y={CY + 31} textAnchor="middle">human review</text>
          </g>
        </g>
        {nodes.map((n, i) => (
          <g key={n.label} className="impl-node" style={{ ["--i" as string]: i }}>
            <rect x={n.x - 58} y={n.y - 20} width="116" height="40" rx="10" />
            <circle cx={n.x < CX ? n.x + 58 : n.x - 58} cy={n.y} r="3.5" />
            <text x={n.x} y={n.y + 5} textAnchor="middle">{n.label}</text>
          </g>
        ))}
      </svg>
    </figure>
  );
}

/**
 * Hero visual for /how-it-works: an indicative engagement plan drawn as a
 * small Gantt chart. Bars grow in on load under .motion-ok only.
 * Week positions are illustrative ranges, not a commitment.
 */
const rows = [
  { n: "01", label: "Discover", note: "20 min", start: 0, span: 0.6, kind: "dot" },
  { n: "02", label: "Audit", note: "~1–2 wks", start: 0.6, span: 1.6, kind: "bar" },
  { n: "03", label: "Implement", note: "~2–6 wks", start: 2.4, span: 4.4, kind: "bar" },
  { n: "04", label: "Support", note: "monthly", start: 6.8, span: 1.2, kind: "open" },
] as const;
const WEEKS = 8;

export default function EngagementGantt() {
  return (
    <figure className="hiw-gantt glass" aria-label="Indicative engagement timeline: a 20-minute discovery call, an audit of about one to two weeks, implementation of about two to six weeks, then optional monthly support.">
      <figcaption className="hiw-gantt-cap">
        <span>Typical engagement</span>
        <span className="hiw-tag">Indicative</span>
      </figcaption>
      <div className="hiw-gantt-axis" aria-hidden="true">
        {Array.from({ length: WEEKS }, (_, i) => <span key={i}>W{i + 1}</span>)}
      </div>
      <ol className="hiw-gantt-rows" aria-hidden="true">
        {rows.map((r, i) => (
          <li key={r.label} style={{ ["--i" as string]: i }}>
            <span className="hiw-gantt-n">{r.n}</span>
            <span className="hiw-gantt-label">{r.label}</span>
            <span className="hiw-gantt-lane">
              <span
                className={`hiw-gantt-bar is-${r.kind}${r.span > 3 ? " is-wide" : ""}`}
                style={{ left: `${(r.start / WEEKS) * 100}%`, width: `${(r.span / WEEKS) * 100}%` }}
              >
                <em>{r.note}</em>
              </span>
            </span>
          </li>
        ))}
      </ol>
      <p className="hiw-gantt-foot">Ranges depend on your systems, access and how quickly your team can test.</p>
    </figure>
  );
}

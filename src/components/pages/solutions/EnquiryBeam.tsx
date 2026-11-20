/**
 * Enquiry → CRM flow drawn as connected nodes with light "beams" travelling
 * along the lines (only under html.motion-ok). Geometry is percentage based so
 * it scales with the grid: column edges match the grid-template-columns.
 */
const sources = ["Website form", "Shared inbox", "Missed call"];
const outputs = ["CRM record + owner", "Dated follow-up task"];

// Columns: 1fr .6fr 1fr .6fr 1fr → 4.2 units.
const X = { srcR: (1 / 4.2) * 100, hubL: (1.6 / 4.2) * 100, hubR: (2.6 / 4.2) * 100, outL: (3.2 / 4.2) * 100 };

function curve(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  return `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
}

export default function EnquiryBeam() {
  const paths = [
    ...sources.map((_, i) => curve(X.srcR, ((i + 0.5) / sources.length) * 100, X.hubL, 50)),
    ...outputs.map((_, i) => curve(X.hubR, 50, X.outL, ((i + 0.5) / outputs.length) * 100)),
  ];
  return (
    <figure className="sol-beam" role="img" aria-label="Illustrative flow: enquiries from a website form, shared inbox and missed calls are matched, de-duplicated and assigned, then become a CRM record with an owner and a dated follow-up task.">
      <svg className="sol-beam-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {paths.map((d, i) => <path key={`l${i}`} d={d} className="sol-beam-line" />)}
        {paths.map((d, i) => <path key={`b${i}`} d={d} pathLength={100} className="sol-beam-pulse" style={{ ["--i" as string]: i }} />)}
      </svg>
      <ul className="sol-beam-col" aria-hidden="true">
        {sources.map(s => <li key={s} className="sol-beam-node">{s}</li>)}
      </ul>
      <span />
      <div className="sol-beam-col" aria-hidden="true">
        <div className="sol-beam-node sol-beam-hub"><strong>Match · de-dupe · assign</strong><small>Unclear match → reviewer</small></div>
      </div>
      <span />
      <ul className="sol-beam-col" aria-hidden="true">
        {outputs.map(s => <li key={s} className="sol-beam-node sol-beam-out">{s}</li>)}
      </ul>
    </figure>
  );
}

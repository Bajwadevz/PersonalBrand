/**
 * Hero visual for /ai-operations-audit: three stylised report pages fanned
 * out — workflow map, bottleneck register, 30/60/90 roadmap. Fictional data,
 * labelled as such. Pages fan out on load under .motion-ok only.
 */
const register = [
  ["Re-keying invoices", 82, "High"],
  ["Chasing approvals", 64, "Med"],
  ["Duplicate CRM entries", 41, "Med"],
  ["Weekly report prep", 28, "Low"],
] as const;

export default function SampleReport() {
  return (
    <figure className="audit-sample" aria-label="Sample report layout with fictional data: a workflow map with one bottleneck highlighted, a bottleneck register ranking four tasks, and a 30/60/90-day roadmap.">
      <figcaption className="audit-sample-cap"><span className="audit-tag">Sample layout · fictional data</span></figcaption>
      <div className="audit-pages" aria-hidden="true">
        <div className="audit-page audit-page-map" style={{ ["--p" as string]: 0 }}>
          <p className="audit-page-k">02 · Workflow map</p>
          <p className="audit-page-t">Supplier invoices — current</p>
          <div className="audit-map">
            <span>Inbox</span><i /><span>Manual entry</span><i /><span className="is-hot">Approval</span><i /><span>Accounting</span>
          </div>
          <div className="audit-lines"><b /><b /><b style={{ width: "60%" }} /></div>
        </div>
        <div className="audit-page audit-page-register" style={{ ["--p" as string]: 1 }}>
          <p className="audit-page-k">03 · Bottleneck register</p>
          <p className="audit-page-t">Ranked by measured effort</p>
          <ul className="audit-reg">
            {register.map(([task, w, level]) => (
              <li key={task}><span>{task}</span><em style={{ ["--w" as string]: `${w}%` }} /><small>{level}</small></li>
            ))}
          </ul>
        </div>
        <div className="audit-page audit-page-roadmap" style={{ ["--p" as string]: 2 }}>
          <p className="audit-page-k">07 · Roadmap</p>
          <p className="audit-page-t">Recommended sequence</p>
          <div className="audit-road">
            <div><small>30 days</small><b /><b style={{ width: "70%" }} /></div>
            <div><small>60 days</small><b style={{ width: "80%" }} /><b /></div>
            <div><small>90 days</small><b style={{ width: "55%" }} /></div>
          </div>
          <p className="audit-page-foot">First build: invoice intake → draft bill</p>
        </div>
      </div>
    </figure>
  );
}

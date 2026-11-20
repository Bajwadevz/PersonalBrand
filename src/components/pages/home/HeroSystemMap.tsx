/**
 * Hero illustration: one enquiry moving from the inbox, through a checked
 * and logged workflow, into the CRM, accounts and reporting. Pure SVG + CSS.
 * The static map is always visible; the travelling pulses only run under
 * `.motion-ok` (see home.css), and pause while off screen via data-ambient.
 */
type MapNode = { id: string; x: number; y: number; w: number; h: number; title: string; lines: string[]; kind?: "hub" | "dest" | "source" };

const desktop = {
  viewBox: "0 0 960 250",
  nodes: [
    { id: "inbox", x: 30, y: 97, w: 170, h: 56, title: "Inbox", lines: ["New enquiry arrives"], kind: "source" },
    { id: "hub", x: 385, y: 80, w: 190, h: 90, title: "Your workflow", lines: ["Check · route · log", "Unclear? A person decides"], kind: "hub" },
    { id: "crm", x: 760, y: 17, w: 170, h: 56, title: "CRM", lines: ["Contact + deal created"], kind: "dest" },
    { id: "accounts", x: 760, y: 97, w: 170, h: 56, title: "Accounts", lines: ["Invoice draft queued"], kind: "dest" },
    { id: "reports", x: 760, y: 177, w: 170, h: 56, title: "Reports", lines: ["Weekly summary updated"], kind: "dest" },
  ] as MapNode[],
  inbound: "M200 125 H385",
  outbound: ["M575 125 C 668 125 668 45 760 45", "M575 125 H760", "M575 125 C 668 125 668 205 760 205"],
};

const mobile = {
  viewBox: "0 0 340 384",
  nodes: [
    { id: "inbox", x: 85, y: 6, w: 170, h: 56, title: "Inbox", lines: ["New enquiry arrives"], kind: "source" },
    { id: "hub", x: 65, y: 128, w: 210, h: 90, title: "Your workflow", lines: ["Check · route · log", "Unclear? A person decides"], kind: "hub" },
    { id: "crm", x: 4, y: 300, w: 104, h: 64, title: "CRM", lines: ["Contact + deal"], kind: "dest" },
    { id: "accounts", x: 118, y: 300, w: 104, h: 64, title: "Accounts", lines: ["Invoice draft"], kind: "dest" },
    { id: "reports", x: 232, y: 300, w: 104, h: 64, title: "Reports", lines: ["Summary built"], kind: "dest" },
  ] as MapNode[],
  inbound: "M170 62 V128",
  outbound: ["M170 218 C 170 260 56 258 56 300", "M170 218 V300", "M170 218 C 170 260 284 258 284 300"],
};

function MapSvg({ layout, className }: { layout: typeof desktop; className: string }) {
  let dest = 0;
  return (
    <svg className={className} viewBox={layout.viewBox} aria-hidden="true" focusable="false" data-ambient>
      <path className="home-map-wire" d={layout.inbound} pathLength={100} />
      {layout.outbound.map(d => <path key={d} className="home-map-wire" d={d} pathLength={100} />)}
      <path className="home-map-beam home-map-beam-in" d={layout.inbound} pathLength={100} />
      {layout.outbound.map((d, i) => <path key={`b${d}`} className="home-map-beam home-map-beam-out" style={{ ["--i" as string]: i }} d={d} pathLength={100} />)}
      {layout.nodes.map(n => {
        const i = n.kind === "dest" ? dest++ : 0;
        return (
          <g key={n.id} className={`home-map-node home-map-${n.kind}`} style={{ ["--i" as string]: i }} transform={`translate(${n.x} ${n.y})`}>
            <rect width={n.w} height={n.h} rx={14} />
            <circle className="home-map-dot" cx={n.w - 16} cy={16} r={3.5} />
            <text className="home-map-title" x={14} y={24}>{n.title}</text>
            {n.lines.map((l, li) => <text key={l} className="home-map-sub" x={14} y={43 + li * 18}>{l}</text>)}
          </g>
        );
      })}
    </svg>
  );
}

export default function HeroSystemMap() {
  return (
    <figure className="agency-wrap home-map">
      <MapSvg layout={desktop} className="home-map-wide" />
      <MapSvg layout={mobile} className="home-map-narrow" />
      <figcaption>Illustration: one enquiry moving through connected systems, with a person deciding the unclear cases.</figcaption>
    </figure>
  );
}

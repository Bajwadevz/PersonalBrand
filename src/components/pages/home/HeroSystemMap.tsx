/**
 * Hero illustration: AI implementation in a business, generically — inputs
 * (email, documents, calls) flow through AI + rules with human approval into
 * business systems, and the team is trained to own it. Pure SVG + CSS.
 * The static map is always visible; the travelling pulses only run under
 * `.motion-ok` (see home.css), and pause while off screen via data-ambient.
 */
type MapNode = { id: string; x: number; y: number; w: number; h: number; title: string; lines: string[]; kind?: "hub" | "dest" | "source" | "team" };
type Layout = { viewBox: string; nodes: MapNode[]; inbound: string[]; outbound: string[]; support?: string };

const desktop: Layout = {
  viewBox: "0 0 960 300",
  nodes: [
    { id: "email", x: 30, y: 17, w: 180, h: 56, title: "Emails & forms", lines: ["Enquiries, requests"], kind: "source" },
    { id: "docs", x: 30, y: 97, w: 180, h: 56, title: "Documents", lines: ["Quotes, invoices, PDFs"], kind: "source" },
    { id: "calls", x: 30, y: 177, w: 180, h: 56, title: "Calls & notes", lines: ["Meetings, voicemail"], kind: "source" },
    { id: "hub", x: 375, y: 72, w: 210, h: 106, title: "AI + your rules", lines: ["Understand · decide · draft", "People approve what matters", "Every step logged"], kind: "hub" },
    { id: "crm", x: 750, y: 17, w: 180, h: 56, title: "CRM & sales", lines: ["Records kept current"], kind: "dest" },
    { id: "ops", x: 750, y: 97, w: 180, h: 56, title: "Finance & ops", lines: ["Jobs, invoices, orders"], kind: "dest" },
    { id: "reports", x: 750, y: 177, w: 180, h: 56, title: "Reports", lines: ["Answers, not spreadsheets"], kind: "dest" },
    { id: "team", x: 375, y: 226, w: 210, h: 56, title: "Your team", lines: ["Trained to run and extend it"], kind: "team" },
  ],
  inbound: ["M210 45 C 292 45 292 125 375 125", "M210 125 H375", "M210 205 C 292 205 292 125 375 125"],
  outbound: ["M585 125 C 668 125 668 45 750 45", "M585 125 H750", "M585 125 C 668 125 668 205 750 205"],
  support: "M480 178 V226",
};

const mobile: Layout = {
  viewBox: "0 0 340 470",
  nodes: [
    { id: "email", x: 4, y: 6, w: 104, h: 64, title: "Emails", lines: ["& forms"], kind: "source" },
    { id: "docs", x: 118, y: 6, w: 104, h: 64, title: "Documents", lines: ["Quotes, PDFs"], kind: "source" },
    { id: "calls", x: 232, y: 6, w: 104, h: 64, title: "Calls", lines: ["& notes"], kind: "source" },
    { id: "hub", x: 55, y: 128, w: 230, h: 100, title: "AI + your rules", lines: ["Understand · decide · draft", "People approve what matters"], kind: "hub" },
    { id: "crm", x: 4, y: 300, w: 104, h: 64, title: "CRM", lines: ["Kept current"], kind: "dest" },
    { id: "ops", x: 118, y: 300, w: 104, h: 64, title: "Finance/ops", lines: ["Jobs, invoices"], kind: "dest" },
    { id: "reports", x: 232, y: 300, w: 104, h: 64, title: "Reports", lines: ["Built for you"], kind: "dest" },
    { id: "team", x: 55, y: 400, w: 230, h: 56, title: "Your team", lines: ["Trained to run and extend it"], kind: "team" },
  ],
  inbound: ["M56 70 C 56 100 170 98 170 128", "M170 70 V128", "M284 70 C 284 100 170 98 170 128"],
  outbound: ["M170 228 C 170 264 56 262 56 300", "M170 228 V300", "M170 228 C 170 264 284 262 284 300"],
};

function MapSvg({ layout, className }: { layout: Layout; className: string }) {
  let dest = 0;
  return (
    <svg className={className} viewBox={layout.viewBox} aria-hidden="true" focusable="false" data-ambient>
      {layout.inbound.map(d => <path key={d} className="home-map-wire" d={d} pathLength={100} />)}
      {layout.support && <path className="home-map-wire home-map-support" d={layout.support} pathLength={100} />}
      {layout.outbound.map(d => <path key={d} className="home-map-wire" d={d} pathLength={100} />)}
      {layout.inbound.map((d, i) => <path key={`in${d}`} className="home-map-beam home-map-beam-in" style={{ ["--i" as string]: i }} d={d} pathLength={100} />)}
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
      <figcaption>Illustration: how AI implementation fits a business — everyday inputs go through AI and your rules, people approve what matters, systems stay updated, and your team is trained to run it.</figcaption>
    </figure>
  );
}

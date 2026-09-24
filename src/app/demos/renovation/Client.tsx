"use client";

import { useState } from "react";
import { DemoRoot, DemoImage, Line, DemoSuccessNote, type DemoTheme } from "../_shared/DemoKit";

const theme: DemoTheme = {
  bg: "#e7e3dc",
  surface: "#dcd7ce",
  text: "#121212",
  accent: "#8a6a3b",
  accent600: "#75592f",
  accent700: "#75592f",
  onAccent: "#f3efe8",
  divider: "color-mix(in srgb, #121212 22%, transparent)",
  head: "var(--f-syne), system-ui, sans-serif",
  body: "var(--f-dm), system-ui, sans-serif",
  headWeight: 700,
};

const mono = "var(--font-jetbrains-mono), ui-monospace, monospace";

const PROJECTS = [
  { no: "014", t: "Coastal house", loc: "Malibu, CA", scope: "Full renovation · 4,200 sf", yr: "2026", before: "Dated 1980s living room, low ceiling", after: "Opened vault, oak and plaster, ocean light" },
  { no: "011", t: "Warehouse loft", loc: "Chicago, IL", scope: "Structural + interiors · 2,800 sf", yr: "2025", before: "Raw warehouse floor, exposed services", after: "Steel-framed mezzanine and kitchen" },
  { no: "009", t: "Hillside family home", loc: "Austin, TX", scope: "Ground-up architecture · 6,100 sf", yr: "2025", before: "Sloped empty lot with live oaks", after: "Limestone house stepped into the slope" },
  { no: "006", t: "Townhouse kitchen", loc: "Brooklyn, NY", scope: "Kitchen + dining · 640 sf", yr: "2024", before: "Galley kitchen, no natural light", after: "Travertine island, skylight, garden doors" },
];
const MATERIALS = [
  { n: "White oak", d: "Rift-sawn, oiled", c: "#b9986a" },
  { n: "Travertine", d: "Honed, unfilled", c: "#d8cbb4" },
  { n: "Lime plaster", d: "Hand-troweled", c: "#e9e4da" },
  { n: "Blackened steel", d: "Waxed", c: "#2b2a28" },
  { n: "Aged brass", d: "Unlacquered", c: "#8a6a3b" },
];
const PROCESS = [
  { n: "01", t: "Walk the site", c: "Measured survey, photos and a conversation about how you actually live.", d: "Week 1" },
  { n: "02", t: "Design & materials", c: "Plans, elevations and a physical material board you can hold.", d: "8–14 weeks" },
  { n: "03", t: "Price locked", c: "A fixed construction price from full drawings — not from a sketch.", d: "2 weeks" },
  { n: "04", t: "Build & style", c: "One project lead, weekly site walks, and final styling included.", d: "Per scope" },
];
const TYPES = ["Whole-home renovation", "Kitchen or bath", "Ground-up architecture", "Interior design only"];
const BUDGETS = ["Under $250K", "$250K – $750K", "$750K – $2M", "$2M+"];

const h2 = { fontSize: "clamp(38px,5.4vw,76px)", lineHeight: 0.98, letterSpacing: "-.035em" } as const;
const label = { fontFamily: mono, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase" } as const;

export default function FosterStone() {
  const [p, setP] = useState(0);
  const [split, setSplit] = useState(50);
  const [type, setType] = useState(TYPES[0]);
  const [budget, setBudget] = useState(BUDGETS[1]);
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const P = PROJECTS[p];

  return (
    <DemoRoot theme={theme}>
      <div className="wrap">
        <nav className="nav" style={{ paddingBlock: 22 }}>
          <a href="#top" className="nav-brand" style={{ fontSize: 18, letterSpacing: "-.01em" }}>
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
              <rect x="1" y="1" width="20" height="20" fill="none" stroke="var(--d-text)" strokeWidth="1.5" />
              <path d="M1 21 L21 1" stroke="var(--d-accent)" strokeWidth="1.5" />
            </svg>
            Foster &amp; Stone
          </a>
          <a className="nav-link" href="#index">Projects</a>
          <a className="nav-link" href="#materials">Materials</a>
          <a className="nav-link" href="#process">Process</a>
          <a href="#inquire" className="btn btn-primary" style={{ fontFamily: "var(--d-body)", fontWeight: 500 }}>Start a project</a>
        </nav>
      </div>

      {/* Hero */}
      <section id="top" className="wrap" style={{ paddingBlock: "clamp(48px,7vw,96px) clamp(32px,4vw,56px)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 24, flexWrap: "wrap", ...label }} data-reveal="">
          <span>Architecture · Renovation · Interiors</span>
          <span className="faint">Est. 2011 · Los Angeles &amp; New York</span>
        </div>
        <h1 style={{ fontSize: "clamp(64px,13vw,210px)", lineHeight: 0.86, letterSpacing: "-.055em", marginTop: 28, fontWeight: 800 }}>
          <Line>Rooms,</Line>
          <Line delay={130} style={{ color: "var(--d-accent)" }}>redrawn.</Line>
        </h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: 32, marginTop: "clamp(32px,4vw,56px)", alignItems: "end" }}>
          <p className="muted" data-reveal="" style={{ fontSize: 18, lineHeight: 1.6, maxWidth: "44ch", ["--d" as string]: "260ms" }}>
            One studio carries your project from first sketch to final styling — architecture, interiors and construction under a single fixed price.
          </p>
          <div data-reveal="" style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "flex-end", ["--d" as string]: "340ms" }}>
            <a href="#inquire" className="btn btn-primary" style={{ padding: "16px 22px", fontFamily: "var(--d-body)", fontWeight: 500 }}>Start a project <span className="arr">→</span></a>
            <a href="#index" className="btn btn-secondary" style={{ padding: "16px 22px", fontFamily: "var(--d-body)", fontWeight: 500 }}>See the work</a>
          </div>
        </div>
      </section>
      <DemoImage brief="Full-bleed interior: oak, plaster and long afternoon light" slow priority style={{ aspectRatio: "21/9", minHeight: 320 }} />

      {/* Project index + before/after */}
      <section id="index" className="wrap sec">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 24, flexWrap: "wrap", marginBottom: 40 }}>
          <h2 data-reveal="" style={h2}>Index</h2>
          <span className="faint" style={label}>Select a project · drag to compare</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "clamp(24px,4vw,56px)", alignItems: "start" }}>
          <div style={{ borderTop: "2px solid var(--d-text)" }}>
            {PROJECTS.map((x, i) => (
              <button
                key={x.no}
                type="button"
                aria-pressed={p === i}
                onClick={() => { setP(i); setSplit(50); }}
                className="rowbtn hover-accent"
                style={{ display: "grid", gridTemplateColumns: "48px minmax(0,1fr) auto", gap: 16, alignItems: "baseline", padding: "20px 0", borderBottom: "1px solid var(--d-divider)", color: p === i ? "var(--d-accent)" : undefined }}
              >
                <span style={{ ...label, color: "var(--d-accent)" }}>{x.no}</span>
                <span>
                  <span style={{ display: "block", fontFamily: "var(--d-head)", fontWeight: 700, fontSize: "clamp(22px,2.4vw,30px)", letterSpacing: "-.02em" }}>{x.t}</span>
                  <span className="muted" style={{ fontSize: 14 }}>{x.loc} · {x.scope}</span>
                </span>
                <span style={label}>{x.yr}</span>
              </button>
            ))}
          </div>

          <div data-reveal="">
            <div key={p} className="step-in" style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", border: "1px solid var(--d-text)" }}>
              <DemoImage brief={`After — ${P.after}`} style={{ position: "absolute", inset: 0 }} />
              <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - split}% 0 0)` }}>
                <DemoImage brief={`Before — ${P.before}`} gray style={{ position: "absolute", inset: 0, background: "#cfc9bf" }} />
              </div>
              <div aria-hidden style={{ position: "absolute", top: 0, bottom: 0, left: `${split}%`, width: 2, background: "var(--d-accent)", transform: "translateX(-1px)" }}>
                <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 36, height: 36, background: "var(--d-accent)", color: "var(--d-on-accent)", display: "grid", placeItems: "center", fontSize: 14 }}>↔</span>
              </div>
              <span style={{ position: "absolute", top: 12, left: 12, ...label, background: "var(--d-bg)", padding: "4px 8px" }}>Before</span>
              <span style={{ position: "absolute", top: 12, right: 12, ...label, background: "var(--d-accent)", color: "var(--d-on-accent)", padding: "4px 8px" }}>After</span>
              <label htmlFor="fs-split" className="sr-only">Compare before and after</label>
              <input id="fs-split" type="range" min={0} max={100} value={split} onChange={(e) => setSplit(+e.target.value)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0, cursor: "ew-resize", margin: 0 }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 16, marginTop: 16, fontSize: 14 }}>
              <strong style={{ fontFamily: "var(--d-head)", fontSize: 20 }}>{P.t}</strong>
              <span className="muted">{P.scope}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section id="materials" style={{ background: "var(--d-text)", color: "var(--d-bg)" }}>
        <div className="wrap sec">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 24, flexWrap: "wrap", marginBottom: 48 }}>
            <h2 data-reveal="" style={{ ...h2, maxWidth: "12ch" }}>A short list of honest materials.</h2>
            <p data-reveal="" style={{ maxWidth: "40ch", fontSize: 16, lineHeight: 1.6, opacity: 0.75 }}>Every project starts from the same library, so finishes age well together and nothing is chosen from a screen.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,180px),1fr))", gap: 2 }}>
            {MATERIALS.map((m, i) => (
              <div key={m.n} data-reveal="" style={{ ["--d" as string]: `${i * 90}ms` }}>
                <div className="swatch" style={{ aspectRatio: "3/4", background: m.c, border: "1px solid rgba(231,227,220,.18)" }} />
                <div style={{ paddingTop: 14 }}>
                  <strong style={{ display: "block", fontFamily: "var(--d-head)", fontSize: 18 }}>{m.n}</strong>
                  <span style={{ ...label, opacity: 0.6 }}>{m.d}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="wrap sec">
        <h2 data-reveal="" style={{ ...h2, marginBottom: 48, maxWidth: "14ch" }}>Price locked before a wall comes down.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))" }}>
          {PROCESS.map((s, i) => (
            <div key={s.n} data-reveal="" style={{ borderTop: `4px solid ${i === 2 ? "var(--d-accent)" : "var(--d-text)"}`, padding: "20px 24px 0 0", ["--d" as string]: `${i * 100}ms` }}>
              <span style={{ ...label, color: "var(--d-accent)" }}>{s.n} · {s.d}</span>
              <strong style={{ display: "block", fontFamily: "var(--d-head)", fontSize: 26, letterSpacing: "-.02em", margin: "14px 0 8px" }}>{s.t}</strong>
              <p className="muted" style={{ fontSize: 15, lineHeight: 1.6 }}>{s.c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section style={{ borderTop: "1px solid var(--d-text)", borderBottom: "1px solid var(--d-text)" }}>
        <div className="wrap sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "clamp(32px,5vw,72px)", alignItems: "center" }}>
          <blockquote data-reveal="" style={{ margin: 0, fontFamily: "var(--d-head)", fontWeight: 600, fontSize: "clamp(28px,3.2vw,44px)", lineHeight: 1.12, letterSpacing: "-.02em" }}>
            “The price we agreed at drawings was the price we paid at handover. The house feels like it was always meant to be this way.”
          </blockquote>
          <div>
            <DemoImage brief="Finished kitchen: travertine island, skylight" style={{ aspectRatio: "4/3" }} />
            <p className="faint" style={{ ...label, marginTop: 12 }}>Homeowners · Townhouse kitchen, Brooklyn</p>
          </div>
        </div>
      </section>

      {/* Inquiry */}
      <section id="inquire" className="wrap sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,400px),1fr))", gap: "clamp(48px,7vw,112px)", alignItems: "start" }}>
        <div>
          <h2 data-reveal="" style={h2}>Tell us about the space.</h2>
          <p className="muted" style={{ fontSize: 17, lineHeight: 1.6, marginTop: 24, maxWidth: "38ch" }}>A principal reads every inquiry and replies within two business days, usually with questions and a proposed site-walk date.</p>
          <dl style={{ marginTop: 40, borderTop: "1px solid var(--d-text)" }}>
            {[["Typical design phase", "8–14 weeks"], ["Projects per year", "Eight, by design"], ["Service area", "LA, NYC & by arrangement"]].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "12px 0", borderBottom: "1px solid var(--d-divider)", fontSize: 14 }}>
                <dt className="muted">{k}</dt>
                <dd style={{ margin: 0, fontWeight: 500 }}>{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div data-reveal="" style={{ border: "2px solid var(--d-text)", background: "#f1eee8" }}>
          {!sent ? (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ padding: "28px 24px 32px", display: "grid", gap: 20 }}>
              <div>
                <span className="label">Project type</span>
                <div className="seg" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                  {TYPES.map((t) => (
                    <button key={t} type="button" aria-pressed={type === t} onClick={() => setType(t)} style={{ textAlign: "left", borderTop: "1px solid var(--d-divider)", borderLeft: "1px solid var(--d-divider)" }}>{t}</button>
                  ))}
                </div>
              </div>
              <div>
                <span className="label">Budget range</span>
                <div className="seg" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
                  {BUDGETS.map((b) => (
                    <button key={b} type="button" className="num" aria-pressed={budget === b} onClick={() => setBudget(b)} style={{ textAlign: "left", borderTop: "1px solid var(--d-divider)", borderLeft: "1px solid var(--d-divider)" }}>{b}</button>
                  ))}
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div className="field">
                  <label htmlFor="fs-name">Name</label>
                  <input id="fs-name" className="input" required value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="field">
                  <label htmlFor="fs-email">Email</label>
                  <input id="fs-email" className="input" required type="email" />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div className="field">
                  <label htmlFor="fs-phone">Phone</label>
                  <input id="fs-phone" className="input" type="tel" />
                </div>
                <div className="field">
                  <label htmlFor="fs-when">Ideal start</label>
                  <select id="fs-when" className="input">
                    <option>Within 6 months</option>
                    <option>6–12 months</option>
                    <option>12 months +</option>
                    <option>Still exploring</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="fs-goals">What should the space do that it doesn’t today?</label>
                <textarea id="fs-goals" className="input" required placeholder="Light, flow, storage, how you host…" />
              </div>
              <button type="submit" className="btn btn-primary btn-row" style={{ padding: 16, fontFamily: "var(--d-body)", fontWeight: 500 }}>
                <span>Send project inquiry</span>
                <span className="arr">→</span>
              </button>
            </form>
          ) : (
            <div className="step-in" style={{ padding: "28px 24px 32px" }}>
              <span style={{ display: "block", width: 32, height: 32, background: "var(--d-accent)", marginBottom: 16 }} />
              <p style={{ fontFamily: "var(--d-head)", fontWeight: 700, fontSize: 32, letterSpacing: "-.02em", lineHeight: 1.05 }}>Thank you, {(name || "there").split(" ")[0]}.</p>
              <p style={{ fontSize: 16, lineHeight: 1.6, marginTop: 12 }}>
                {type} · {budget}. A principal will reply within two business days with a few questions and a proposed site-walk date.
              </p>
              <DemoSuccessNote demo="renovation">In a live build, this qualifies the inquiry by budget and scope and books the site walk straight into the principal’s calendar.</DemoSuccessNote>
            </div>
          )}
        </div>
      </section>

      <footer className="wrap faint" style={{ padding: "32px var(--d-pad)", borderTop: "1px solid var(--d-text)", display: "flex", gap: 24, justifyContent: "space-between", flexWrap: "wrap", fontSize: 13 }}>
        <span>Foster &amp; Stone Studio · Architecture &amp; Interiors · Los Angeles · New York</span>
        <span>Fictional studio — design by bajwaa.dev</span>
      </footer>
    </DemoRoot>
  );
}

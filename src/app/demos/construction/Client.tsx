"use client";

import { useState } from "react";
import { DemoRoot, DemoImage, CountUp, Line, DemoSuccessNote, type DemoTheme } from "../_shared/DemoKit";

const theme: DemoTheme = {
  bg: "#161614",
  surface: "#22211e",
  text: "#efece4",
  accent: "#f5c400",
  accent600: "#ffd633",
  accent700: "#f5c400",
  onAccent: "#161614",
  divider: "color-mix(in srgb, #efece4 32%, transparent)",
  head: "var(--f-barlow-c), system-ui, sans-serif",
  body: "var(--f-barlow), system-ui, sans-serif",
};

const TYPES = [
  { label: "Custom home", min: 1500, max: 6000, rate: 410, wk: 0.012, def: 2800 },
  { label: "Addition", min: 200, max: 1500, rate: 390, wk: 0.03, def: 600 },
  { label: "Renovation", min: 300, max: 4000, rate: 210, wk: 0.008, def: 1500 },
  { label: "Commercial", min: 1000, max: 15000, rate: 175, wk: 0.0022, def: 4000 },
];
const FINISH: [string, number][] = [
  ["Standard", 1],
  ["Premium", 1.3],
  ["Luxury", 1.7],
];
const PROJECTS = [
  { cat: "Residential", type: "Custom home", status: "Completed 2026", t: "Lookout Mountain residence", ph: "Modern mountain home exterior", facts: [["Size", "4,200 sf"], ["Build", "11 mo"], ["Budget", "On target"]] },
  { cat: "Commercial", type: "Tenant fit-out", status: "Completed 2026", t: "Larimer St. office floor", ph: "Open-plan office with exposed ceiling", facts: [["Size", "12,000 sf"], ["Build", "14 wk"], ["Budget", "−2%"]] },
  { cat: "Residential", type: "Addition", status: "Completed 2025", t: "Wash Park second story", ph: "Bungalow with new second-floor addition", facts: [["Size", "900 sf"], ["Build", "5 mo"], ["Budget", "On target"]] },
  { cat: "Renovation", type: "Whole-home remodel", status: "In progress", t: "Boulder mid-century restore", ph: "Gutted interior with new framing", facts: [["Size", "2,600 sf"], ["Build", "7 mo"], ["Status", "Week 18"]] },
];
const STATS = [
  { n: "212", l: "Projects delivered since 2019" },
  { n: "94%", l: "Handed over on or before date" },
  { n: "±3%", l: "Average final vs. contract" },
  { n: "10 yr", l: "Structural warranty" },
];
const SERVICES = [
  { n: "01", t: "Custom homes", c: "Design-build from lot survey to keys, with architects and engineers under our contract." },
  { n: "02", t: "Additions", c: "Second stories, primary suites and ADUs, framed to match the existing house." },
  { n: "03", t: "Renovations", c: "Whole-home remodels, kitchens and structural changes, with families living on site." },
  { n: "04", t: "Commercial fit-out", c: "Office, retail and restaurant build-outs scheduled around your lease date." },
  { n: "05", t: "Pre-construction", c: "Feasibility, budgeting and permitting before you commit to a design." },
  { n: "06", t: "Site & foundations", c: "Excavation, grading, utilities and foundations with our own crews." },
];
const PHASES = [
  { n: "01", t: "Site walk", c: "We measure, photograph and talk budget.", d: "Week 0", hi: true },
  { n: "02", t: "Design", c: "Plans, selections and engineering.", d: "4–10 weeks", hi: false },
  { n: "03", t: "Fixed price", c: "Line-item contract. The number does not move.", d: "1 week", hi: false },
  { n: "04", t: "Build", c: "Dedicated site lead, weekly photo reports.", d: "Per schedule", hi: false },
  { n: "05", t: "Handover", c: "Walkthrough, punch list closed, warranty file.", d: "On the date", hi: true },
];

const fmt = (v: number) => (v >= 1e6 ? "$" + (v / 1e6).toFixed(2).replace(/0$/, "") + "M" : "$" + Math.round(v / 1000) + "K");
const upper = { textTransform: "uppercase" } as const;
const h2 = { fontSize: "clamp(44px,5.6vw,80px)", lineHeight: 0.95, ...upper } as const;

function Pick({ label, on, onClick }: { label: string; on: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className="btn"
      style={{ justifyContent: "flex-start", padding: 14, fontSize: 17, border: "2px solid var(--d-text)", background: on ? "var(--d-accent)" : "transparent", color: on ? "var(--d-bg)" : "var(--d-text)" }}
    >
      {label}
    </button>
  );
}

export default function Ridgeform() {
  const [filter, setFilter] = useState("All");
  const [type, setType] = useState(0);
  const [sqft, setSqft] = useState(2800);
  const [finish, setFinish] = useState(1);
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");

  const T = TYPES[type];
  const [finishLabel, fm] = FINISH[finish];
  const mid = sqft * T.rate * fm;
  const range = `${fmt(mid * 0.88)} – ${fmt(mid * 1.12)}`;
  const weeks = Math.max(6, Math.round(8 + sqft * T.wk * fm));
  const projects = PROJECTS.filter((p) => filter === "All" || p.cat === filter);

  return (
    <DemoRoot theme={theme} className="has-mbar">
      <div style={{ background: "var(--d-accent)", color: "var(--d-bg)", fontFamily: "var(--d-head)", fontWeight: 700, fontSize: 14, letterSpacing: ".12em", ...upper }}>
        <div className="wrap" style={{ padding: "8px var(--d-pad)", display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "space-between" }}>
          <span>Now booking spring 2027 starts · 4 slots left</span>
          <span>Licensed · Bonded · Insured</span>
        </div>
      </div>

      <div className="wrap">
        <nav className="nav" style={{ borderBottom: "2px solid var(--d-text)" }}>
          <a href="#top" className="nav-brand" style={{ fontSize: 24, letterSpacing: ".02em", ...upper }}>
            <span style={{ width: 0, height: 0, borderLeft: "10px solid transparent", borderRight: "10px solid transparent", borderBottom: "18px solid var(--d-accent)" }} />
            Ridgeform Builders
          </a>
          <a className="nav-link" href="#work">Projects</a>
          <a className="nav-link" href="#services">Services</a>
          <a className="nav-link" href="#process">Process</a>
          <a href="#estimate" className="btn btn-primary" style={{ letterSpacing: ".06em", ...upper }}>Estimate my project</a>
        </nav>
      </div>

      {/* Hero */}
      <section id="top" className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", borderBottom: "2px solid var(--d-text)" }}>
          <div style={{ padding: "clamp(48px,7vw,104px) clamp(0px,3vw,48px) clamp(40px,5vw,72px) 0", display: "flex", flexDirection: "column", gap: 28 }}>
            <span className="eyebrow" data-reveal="" style={{ letterSpacing: ".12em", color: "var(--d-accent)" }}>General contractor · Design-build · Denver Front Range</span>
            <h1 style={{ fontSize: "clamp(60px,8.6vw,136px)", lineHeight: 0.9, letterSpacing: "-.01em", ...upper }}>
              <Line>Built on budget.</Line>
              <Line delay={110}>Handed over</Line>
              <Line delay={220} style={{ color: "var(--d-accent)" }}>on the date.</Line>
            </h1>
            <p className="muted" data-reveal="" style={{ fontSize: 18, lineHeight: 1.6, maxWidth: "46ch", ["--d" as string]: "320ms" }}>
              Custom homes, additions and commercial build-outs delivered under one fixed-price contract. Get a budget range in 60 seconds, then a site walk with a project manager.
            </p>
            <div data-reveal="" style={{ display: "flex", gap: 12, flexWrap: "wrap", ["--d" as string]: "420ms" }}>
              <a href="#estimate" className="btn btn-primary" style={{ padding: "16px 22px", fontSize: 18, letterSpacing: ".06em", ...upper }}>
                Get a budget range <span className="arr">→</span>
              </a>
              <a href="#work" className="btn btn-secondary" style={{ padding: "16px 22px", fontSize: 18, letterSpacing: ".06em", ...upper }}>See finished work</a>
            </div>
          </div>
          <DemoImage src="/demos/ridgeform-hero.jpg" brief="Timber and steel frame mid-build, low angle" gray slow priority style={{ minHeight: 460, borderLeft: "2px solid var(--d-text)" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", borderBottom: "2px solid var(--d-text)" }}>
          {STATS.map((s, i) => (
            <div key={s.l} data-reveal="" style={{ padding: "32px 24px 32px 0", ["--d" as string]: `${i * 90}ms` }}>
              <CountUp value={s.n} style={{ display: "block", fontFamily: "var(--d-head)", fontWeight: 800, fontSize: "clamp(48px,5vw,72px)", lineHeight: 1, color: "var(--d-accent)" }} />
              <p className="muted" style={{ fontSize: 13, letterSpacing: ".1em", marginTop: 10, ...upper }}>{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="wrap sec">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 24, flexWrap: "wrap", marginBottom: 32 }}>
          <h2 data-reveal="" style={h2}>Recent projects</h2>
          <div className="seg">
            {["All", "Residential", "Commercial", "Renovation"].map((f) => (
              <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,380px),1fr))", gap: 24 }}>
          {projects.map((p) => (
            <article key={p.t} className="step-in" style={{ borderTop: "2px solid var(--d-text)", paddingTop: 16, display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 13, letterSpacing: ".1em", ...upper }}>
                <span>{p.type}</span>
                <span style={{ color: "var(--d-accent)" }}>{p.status}</span>
              </div>
              <DemoImage brief={p.ph} gray style={{ aspectRatio: "4/3" }} />
              <strong style={{ fontFamily: "var(--d-head)", fontWeight: 700, fontSize: 30, lineHeight: 1.05, ...upper }}>{p.t}</strong>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderTop: "1px solid var(--d-divider)" }}>
                {p.facts.map(([k, v]) => (
                  <div key={k} style={{ padding: "12px 12px 0 0" }}>
                    <span className="muted" style={{ display: "block", fontSize: 12, letterSpacing: ".08em", ...upper }}>{k}</span>
                    <strong className="num" style={{ fontSize: 17 }}>{v}</strong>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Estimator */}
      <section id="estimate" style={{ background: "var(--d-surface)", borderTop: "2px solid var(--d-text)", borderBottom: "2px solid var(--d-text)" }}>
        <div className="wrap sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "clamp(32px,5vw,80px)", alignItems: "start" }}>
          <div>
            <span className="eyebrow" style={{ marginBottom: 16, letterSpacing: ".12em", color: "var(--d-accent)" }}>Budget estimator</span>
            <h2 data-reveal="" style={{ ...h2, marginBottom: 20 }}>What will it cost to build?</h2>
            <p className="muted" style={{ fontSize: 17, lineHeight: 1.6, marginBottom: 32, maxWidth: "44ch" }}>
              Ranges come from 212 Ridgeform projects completed since 2019, adjusted for current material pricing on the Front Range.
            </p>
            <div style={{ display: "grid", gap: 28 }}>
              <div>
                <span className="label" style={{ letterSpacing: ".1em", ...upper }}>Project type</span>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 6 }}>
                  {TYPES.map((t, i) => (
                    <Pick
                      key={t.label}
                      label={t.label}
                      on={i === type}
                      onClick={() => {
                        setType(i);
                        setSqft(t.def);
                      }}
                    />
                  ))}
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, letterSpacing: ".1em", marginBottom: 10, ...upper }}>
                  <label htmlFor="rf-size">Size</label>
                  <strong className="num" style={{ fontSize: 16, letterSpacing: 0 }}>{sqft.toLocaleString()} sq ft</strong>
                </div>
                <input id="rf-size" type="range" min={T.min} max={T.max} step={50} value={sqft} onChange={(e) => setSqft(+e.target.value)} />
              </div>
              <div>
                <span className="label" style={{ letterSpacing: ".1em", ...upper }}>Finish level</span>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }}>
                  {FINISH.map(([label], i) => (
                    <Pick key={label} label={label} on={i === finish} onClick={() => setFinish(i)} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div data-reveal="" style={{ background: "var(--d-bg)", border: "2px solid var(--d-accent)" }}>
            <div style={{ padding: 28, borderBottom: "2px solid var(--d-accent)" }}>
              <span style={{ fontSize: 13, letterSpacing: ".12em", color: "var(--d-accent)", ...upper }}>Estimated budget</span>
              <p key={range} className="num step-in" style={{ fontFamily: "var(--d-head)", fontWeight: 800, fontSize: "clamp(52px,5.6vw,80px)", lineHeight: 1, margin: "12px 0 8px" }}>{range}</p>
              <p className="muted" style={{ fontSize: 15 }}>
                {T.label} · {sqft.toLocaleString()} sq ft · {finishLabel} finish · about {weeks} weeks on site
              </p>
            </div>
            {!sent ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                style={{ padding: 28, display: "grid", gap: 12 }}
              >
                <strong style={{ fontFamily: "var(--d-head)", fontSize: 26, ...upper }}>Book a free site walk</strong>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  <div className="field">
                    <label htmlFor="rf-name">Name</label>
                    <input id="rf-name" className="input" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" />
                  </div>
                  <div className="field">
                    <label htmlFor="rf-phone">Phone</label>
                    <input id="rf-phone" className="input" required type="tel" placeholder="(555) 000-0000" />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="rf-addr">Project address or lot</label>
                  <input id="rf-addr" className="input" placeholder="Street, city" />
                </div>
                <div className="field">
                  <label htmlFor="rf-start">Target start</label>
                  <select id="rf-start" className="input">
                    <option>Within 3 months</option>
                    <option>3–6 months</option>
                    <option>6–12 months</option>
                    <option>Still exploring</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary btn-row" style={{ padding: 16, fontSize: 18, marginTop: 4, letterSpacing: ".05em", ...upper }}>
                  <span>Send estimate + book walk</span>
                  <span className="arr">→</span>
                </button>
                <p className="muted" style={{ fontSize: 13 }}>A project manager replies within one business day.</p>
              </form>
            ) : (
              <div className="step-in" style={{ padding: 28, display: "grid", gap: 12 }}>
                <span style={{ width: 32, height: 32, background: "var(--d-accent)" }} />
                <strong style={{ fontFamily: "var(--d-head)", fontSize: 34, ...upper }}>Thanks, {(name || "there").split(" ")[0]}.</strong>
                <p style={{ fontSize: 16, lineHeight: 1.6 }}>Your estimate is on its way. A project manager will call to schedule a site walk, usually within the week.</p>
                <button type="button" className="btn btn-ghost" onClick={() => setSent(false)} style={{ justifySelf: "start" }}>Run another estimate</button>
                <DemoSuccessNote demo="construction" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="wrap sec">
        <h2 data-reveal="" style={{ ...h2, marginBottom: 40, maxWidth: "14ch" }}>Ground-up to fit-out</h2>
        <div className="cells" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", borderTopColor: "var(--d-text)" }}>
          {SERVICES.map((s, i) => (
            <div key={s.t} className="cell" data-reveal="" style={{ padding: 28, display: "flex", flexDirection: "column", gap: 12, minHeight: 220, ["--d" as string]: `${(i % 3) * 80}ms` }}>
              <span style={{ fontFamily: "var(--d-head)", fontWeight: 700, fontSize: 16, color: "var(--d-accent)" }}>{s.n}</span>
              <strong style={{ fontFamily: "var(--d-head)", fontWeight: 700, fontSize: 28, lineHeight: 1, ...upper }}>{s.t}</strong>
              <span className="muted" style={{ fontSize: 15, lineHeight: 1.6 }}>{s.c}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="wrap" style={{ paddingBottom: "var(--d-sec)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 24, flexWrap: "wrap", marginBottom: 40 }}>
          <h2 data-reveal="" style={h2}>Five phases. One fixed price.</h2>
          <p className="muted" style={{ fontSize: 16, lineHeight: 1.6, maxWidth: "40ch" }}>You get a live schedule and weekly photo report from day one.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))" }}>
          {PHASES.map((p, i) => {
            const bar = p.hi ? "var(--d-accent)" : "var(--d-text)";
            return (
              <div key={p.n} data-reveal="" style={{ borderTop: `6px solid ${bar}`, padding: "20px 20px 0 0", display: "flex", flexDirection: "column", gap: 10, ["--d" as string]: `${i * 90}ms` }}>
                <span style={{ fontFamily: "var(--d-head)", fontWeight: 800, fontSize: 44, lineHeight: 1, color: bar }}>{p.n}</span>
                <strong style={{ fontFamily: "var(--d-head)", fontWeight: 700, fontSize: 24, ...upper }}>{p.t}</strong>
                <span className="muted" style={{ fontSize: 14, lineHeight: 1.6 }}>{p.c}</span>
                <span style={{ fontSize: 12, letterSpacing: ".1em", color: "var(--d-accent)", ...upper }}>{p.d}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ borderTop: "2px solid var(--d-text)" }}>
        <div className="wrap sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "clamp(32px,5vw,72px)", alignItems: "center" }}>
          <DemoImage brief="Finished home exterior at dusk" gray style={{ aspectRatio: "4/3" }} />
          <figure data-reveal="" style={{ margin: 0 }}>
            <blockquote style={{ margin: 0, fontFamily: "var(--d-head)", fontWeight: 700, fontSize: "clamp(30px,3.4vw,46px)", lineHeight: 1.1, ...upper }}>
              “Final invoice matched the contract to the dollar. We moved in two days early.”
            </blockquote>
            <figcaption className="muted" style={{ marginTop: 24, fontSize: 15 }}>— The Alvarez family, custom home in Golden</figcaption>
          </figure>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--d-accent)", color: "var(--d-bg)" }}>
        <div className="wrap sec" style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 32, flexWrap: "wrap" }}>
          <h3 style={{ fontSize: "clamp(56px,7.6vw,120px)", lineHeight: 0.9, ...upper }}>
            <Line>Have a lot?</Line>
            <Line delay={120}>Have a plan?</Line>
          </h3>
          <a href="#estimate" className="btn" style={{ color: "var(--d-accent)", background: "var(--d-bg)", padding: "18px 22px", fontSize: 20, letterSpacing: ".05em", ...upper }}>
            Start my estimate <span className="arr">→</span>
          </a>
        </div>
      </section>

      <footer className="wrap faint" style={{ padding: "32px var(--d-pad)", display: "flex", gap: 24, justifyContent: "space-between", flexWrap: "wrap", fontSize: 14 }}>
        <span>Ridgeform Builders · Licensed general contractor · Denver, Boulder, Golden, Castle Rock</span>
        <span>(555) 012-7700 · Fictional business — design by bajwaa.dev</span>
      </footer>

      <div className="mbar">
        <a href="tel:5550127700">Call</a>
        <a href="#estimate">Get estimate</a>
      </div>
    </DemoRoot>
  );
}

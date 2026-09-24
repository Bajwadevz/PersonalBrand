"use client";

import { useState } from "react";
import { DemoRoot, DemoImage, CountUp, Line, DemoSuccessNote, type DemoTheme } from "../_shared/DemoKit";

const theme: DemoTheme = {
  bg: "#f3f2f2",
  surface: "#eae9e9",
  text: "#201e1d",
  accent: "#ec3013",
  accent600: "#dd2b0f",
  accent700: "#ae1800",
  head: "var(--f-archivo), system-ui, sans-serif",
  body: "var(--f-archivo), system-ui, sans-serif",
};

const ISSUES = ["Not cooling", "Not heating", "Strange noise or smell", "Tune-up / maintenance", "Replace my system"];
const SYSTEMS = ["Central AC", "Furnace", "Heat pump", "Not sure"];
const URGENCY = ["Today — it is urgent", "This week", "Just planning ahead"];

const PROMISES = ["Arrival window texted to you", "Flat-rate, approved before work", "2-year repair guarantee", "NATE-certified technicians"];
const STATS = [
  { n: "90 min", l: "Average emergency arrival" },
  { n: "4.9★", l: "2,318 verified reviews" },
  { n: "38 yrs", l: "Family owned and local" },
  { n: "$0", l: "Overtime on nights and weekends" },
];
const SERVICES = [
  { num: "01", t: "AC repair", c: "Warm air, short-cycling, frozen coils, leaks. Most repairs finished on the first visit.", p: "From $149" },
  { num: "02", t: "Furnace repair", c: "Ignition, blower and pilot failures. Carbon monoxide safety check on every call.", p: "From $149" },
  { num: "03", t: "Heat pumps", c: "Installs and repairs for cold-climate heat pumps, including rebate paperwork.", p: "Free quote" },
  { num: "04", t: "System replacement", c: "Right-sized equipment from a load calculation, installed in one day.", p: "From $89/mo" },
  { num: "05", t: "Indoor air quality", c: "Filtration, humidifiers and UV purification for allergy and wildfire season.", p: "From $249" },
  { num: "06", t: "Ductwork", c: "Sealing, cleaning and redesign for rooms that never get comfortable.", p: "Free inspection" },
];
const PROCESS = [
  { n: "01", t: "Book in two minutes", c: "Pick a window online or by phone. We text the technician’s name and photo." },
  { n: "02", t: "Diagnose and price", c: "You get a written flat-rate price with options before any work begins." },
  { n: "03", t: "Fixed and guaranteed", c: "We clean up, walk you through the fix, and back it for two years." },
];
const PLANS = [
  { name: "Essential", badge: "", price: "$19", dark: false, items: ["1 tune-up per year", "10% off repairs", "Priority scheduling"] },
  { name: "Comfort", badge: "Most chosen", price: "$29", dark: true, items: ["2 tune-ups (heat + cool)", "15% off repairs", "No diagnostic fees", "Front-of-line service"] },
  { name: "Total", badge: "", price: "$49", dark: false, items: ["Everything in Comfort", "Parts covered up to $1,500", "Filters delivered quarterly"] },
];
const REVIEWS = [
  { q: "Furnace quit at 11pm in January. Tech was here by 12:30 and the heat was back by 1.", a: "Dana R., Edina" },
  { q: "They quoted before touching anything and the bill matched to the dollar.", a: "Marcus T., St. Paul" },
  { q: "Replaced our whole system in one day. The house has never been this even.", a: "Priya S., Plymouth" },
];

function Options({ list, value, onPick, cols = 1 }: { list: string[]; value: string | null; onPick: (v: string) => void; cols?: number }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols},1fr)`, gap: 8 }}>
      {list.map((label) => (
        <button key={label} type="button" className="opt" aria-pressed={value === label} onClick={() => onPick(label)}>
          <span>{label}</span>
          {cols === 1 && <span>→</span>}
        </button>
      ))}
    </div>
  );
}

const h2 = { fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.05, maxWidth: "16ch" } as const;

export default function NorthlineAir() {
  const [step, setStep] = useState(0);
  const [issue, setIssue] = useState<string | null>(null);
  const [system, setSystem] = useState<string | null>(null);
  const [urgency, setUrgency] = useState<string | null>(null);
  const [name, setName] = useState("");

  const pick = (set: (v: string) => void) => (v: string) => {
    set(v);
    setStep((s) => s + 1);
  };
  const reset = () => {
    setStep(0);
    setIssue(null);
    setSystem(null);
    setUrgency(null);
  };
  const summary = [issue, system, urgency].filter(Boolean).join(" · ");
  const firstName = (name || "neighbor").split(" ")[0];

  return (
    <DemoRoot theme={theme} className="has-mbar">
      {/* Emergency strip */}
      <div style={{ background: "var(--d-accent)", color: "var(--d-bg)", fontSize: 14, fontWeight: 700 }}>
        <div className="wrap" style={{ padding: "10px var(--d-pad)", display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "space-between" }}>
          <span>
            <span className="pulse-dot" style={{ display: "inline-block", width: 8, height: 8, background: "var(--d-bg)", marginRight: 10 }} />
            No heat? No cool? A technician can be at your door in 90 minutes, 24/7.
          </span>
          <a href="tel:5550102400" style={{ color: "var(--d-bg)", textDecoration: "none" }}>
            Call (555) 010-2400 →
          </a>
        </div>
      </div>

      <div className="wrap">
        <nav className="nav" style={{ borderBottom: "2px solid var(--d-divider)" }}>
          <a href="#top" className="nav-brand">
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
              <rect width="22" height="22" fill="var(--d-accent)" />
              <path d="M5 16 L11 6 L17 16" stroke="var(--d-bg)" strokeWidth="2.4" fill="none" />
            </svg>
            Northline Air
          </a>
          <a className="nav-link" href="#services">Services</a>
          <a className="nav-link" href="#plans">Comfort plans</a>
          <a className="nav-link" href="#reviews">Reviews</a>
          <a href="#book" className="btn btn-primary">Book a visit</a>
        </nav>
      </div>

      {/* Hero + booking */}
      <section id="book" className="wrap sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "clamp(32px,5vw,72px)", alignItems: "start" }}>
        <div id="top">
          <span className="eyebrow" data-reveal="" style={{ marginBottom: 20 }}>Heating &amp; cooling · Greater Minneapolis</span>
          <h1 style={{ fontSize: "clamp(44px,6.4vw,88px)", letterSpacing: "-.025em" }}>
            <Line>Cold air by tonight.</Line>
            <Line delay={120} style={{ color: "var(--d-accent)" }}>Or the visit is free.</Line>
          </h1>
          <p className="muted" data-reveal="" style={{ fontSize: 18, lineHeight: 1.6, maxWidth: "52ch", marginTop: 28, ["--d" as string]: "240ms" }}>
            Licensed technicians, flat-rate pricing you approve before we start, and a 2-year guarantee on every repair. Answer four questions and we will hold a same-day slot for you.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", marginTop: 40, borderTop: "2px solid var(--d-divider)" }}>
            {PROMISES.map((p, i) => (
              <div key={p} data-reveal="" style={{ display: "flex", gap: 12, alignItems: "baseline", padding: "16px 0", borderBottom: "1px solid var(--d-divider)", ["--d" as string]: `${300 + i * 70}ms` }}>
                <span style={{ width: 8, height: 8, background: "var(--d-accent)", flex: "none" }} />
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal="" style={{ background: "#fff", border: "2px solid var(--d-text)", boxShadow: "0 12px 32px rgba(45,43,43,.22)", ["--d" as string]: "180ms" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 24px", borderBottom: "2px solid var(--d-text)" }}>
            <strong style={{ fontFamily: "var(--d-head)", fontSize: 18 }}>Get a same-day slot</strong>
            <span className="num" style={{ fontSize: 13 }}>Step {Math.min(step + 1, 4)} of 4</span>
          </div>
          <div style={{ height: 4, background: "var(--d-surface)" }}>
            <div style={{ height: 4, background: "var(--d-accent)", width: `${(Math.min(step, 4) / 4) * 100}%`, transition: "width .35s ease" }} />
          </div>
          <div key={step} className="step-in" style={{ padding: "28px 24px 32px" }}>
            {step === 0 && (
              <>
                <p style={{ fontFamily: "var(--d-head)", fontWeight: 700, fontSize: 22, marginBottom: 20 }}>What is going on?</p>
                <Options list={ISSUES} value={issue} onPick={pick(setIssue)} />
              </>
            )}
            {step === 1 && (
              <>
                <p style={{ fontFamily: "var(--d-head)", fontWeight: 700, fontSize: 22, marginBottom: 20 }}>Which system?</p>
                <Options list={SYSTEMS} value={system} onPick={pick(setSystem)} cols={2} />
              </>
            )}
            {step === 2 && (
              <>
                <p style={{ fontFamily: "var(--d-head)", fontWeight: 700, fontSize: 22, marginBottom: 20 }}>How soon do you need us?</p>
                <Options list={URGENCY} value={urgency} onPick={pick(setUrgency)} />
              </>
            )}
            {step === 3 && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep(4);
                }}
              >
                <p style={{ fontFamily: "var(--d-head)", fontWeight: 700, fontSize: 22, marginBottom: 6 }}>Where should we send the tech?</p>
                <p className="muted" style={{ fontSize: 14, marginBottom: 20 }}>{summary}</p>
                <div style={{ display: "grid", gap: 12 }}>
                  <div className="field">
                    <label htmlFor="nl-name">Full name</label>
                    <input id="nl-name" className="input" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Jordan Lee" />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div className="field">
                      <label htmlFor="nl-phone">Phone</label>
                      <input id="nl-phone" className="input" required type="tel" placeholder="(555) 000-0000" />
                    </div>
                    <div className="field">
                      <label htmlFor="nl-zip">ZIP code</label>
                      <input id="nl-zip" className="input" required inputMode="numeric" placeholder="55401" />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary btn-row" style={{ padding: 16, fontSize: 16, marginTop: 8 }}>
                    <span>Hold my slot</span>
                    <span className="arr">→</span>
                  </button>
                </div>
              </form>
            )}
            {step === 4 && (
              <>
                <p style={{ fontFamily: "var(--d-head)", fontWeight: 800, fontSize: 28, marginBottom: 12 }}>Slot held, {firstName}.</p>
                <p style={{ fontSize: 15, lineHeight: 1.6, marginBottom: 12 }}>
                  A dispatcher will call within 10 minutes to confirm your arrival window. Diagnostic fee of $89 is waived if you approve the repair.
                </p>
                <button type="button" className="btn btn-ghost" onClick={reset}>Start over</button>
                <DemoSuccessNote demo="hvac" />
              </>
            )}
            {step > 0 && step < 4 && (
              <button type="button" className="btn btn-ghost" onClick={() => setStep((s) => s - 1)} style={{ marginTop: 16, paddingLeft: 0 }}>
                ← Back
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ borderTop: "2px solid var(--d-divider)", borderBottom: "2px solid var(--d-divider)" }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))" }}>
          {STATS.map((s, i) => (
            <div key={s.l} data-reveal="" style={{ padding: "36px 24px 36px 0", borderRight: i < STATS.length - 1 ? "1px solid var(--d-divider)" : 0, ["--d" as string]: `${i * 90}ms` }}>
              <CountUp value={s.n} style={{ display: "block", fontFamily: "var(--d-head)", fontWeight: 800, fontSize: "clamp(36px,4vw,52px)", lineHeight: 1, color: "var(--d-accent)" }} />
              <p className="muted" style={{ fontSize: 13, letterSpacing: ".08em", textTransform: "uppercase", marginTop: 12 }}>{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="wrap sec">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 24, flexWrap: "wrap", marginBottom: 40 }}>
          <h2 data-reveal="" style={h2}>Every system in the house, one crew.</h2>
          <p data-reveal="" style={{ maxWidth: "40ch", fontSize: 16, lineHeight: 1.6 }}>Upfront prices. No overtime charges on nights or weekends.</p>
        </div>
        <div className="cells" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))" }}>
          {SERVICES.map((s, i) => (
            <a key={s.t} href="#book" className="cell" data-reveal="" style={{ display: "flex", flexDirection: "column", gap: 14, padding: 28, minHeight: 220, ["--d" as string]: `${(i % 3) * 80}ms` }}>
              <span className="num" style={{ fontSize: 13, color: "var(--d-accent-700)" }}>{s.num}</span>
              <strong style={{ fontFamily: "var(--d-head)", fontSize: 24, letterSpacing: "-.01em" }}>{s.t}</strong>
              <span className="muted" style={{ fontSize: 15, lineHeight: 1.6 }}>{s.c}</span>
              <span style={{ marginTop: "auto", fontSize: 14, fontWeight: 700 }}>{s.p} →</span>
            </a>
          ))}
        </div>
      </section>

      {/* Visit process with photo */}
      <section className="wrap" style={{ paddingBottom: "var(--d-sec)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "clamp(32px,5vw,72px)", alignItems: "center" }}>
        <DemoImage src="/demos/northline-tech.jpg" brief="Technician servicing an outdoor condenser unit" gray style={{ aspectRatio: "4/3" }} />
        <div>
          <span className="eyebrow" style={{ marginBottom: 16 }}>How a visit works</span>
          {PROCESS.map((p, i) => (
            <div key={p.n} data-reveal="" style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: 16, padding: "22px 0", borderTop: "2px solid var(--d-divider)", ["--d" as string]: `${i * 110}ms` }}>
              <span style={{ fontFamily: "var(--d-head)", fontWeight: 800, fontSize: 28, color: "var(--d-accent)" }}>{p.n}</span>
              <div>
                <strong style={{ fontFamily: "var(--d-head)", fontSize: 20 }}>{p.t}</strong>
                <p className="muted" style={{ marginTop: 8, fontSize: 15, lineHeight: 1.6 }}>{p.c}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section id="plans" style={{ background: "var(--d-surface)", borderTop: "2px solid var(--d-divider)" }}>
        <div className="wrap sec">
          <h2 data-reveal="" style={{ ...h2, marginBottom: 12 }}>Comfort plans</h2>
          <p data-reveal="" style={{ marginBottom: 40, fontSize: 16, maxWidth: "52ch", lineHeight: 1.6 }}>Two tune-ups a year, priority booking, and member pricing. Cancel any month.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: 16 }}>
            {PLANS.map((p, i) => (
              <div
                key={p.name}
                data-reveal=""
                style={{
                  background: p.dark ? "var(--d-text)" : "#fff",
                  color: p.dark ? "var(--d-bg)" : "var(--d-text)",
                  border: "2px solid var(--d-text)",
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  ["--d" as string]: `${i * 100}ms`,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong style={{ fontFamily: "var(--d-head)", fontSize: 22 }}>{p.name}</strong>
                  <span style={{ fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase" }}>{p.badge}</span>
                </div>
                <p style={{ fontFamily: "var(--d-head)", fontWeight: 800, fontSize: 52, lineHeight: 1 }}>
                  {p.price}
                  <span style={{ fontSize: 16, fontWeight: 400 }}>/mo</span>
                </p>
                <div style={{ display: "grid", gap: 10, borderTop: "1px solid currentColor", paddingTop: 16 }}>
                  {p.items.map((it) => (
                    <span key={it} style={{ fontSize: 15 }}>— {it}</span>
                  ))}
                </div>
                <a href="#book" className={`btn ${p.dark ? "btn-primary" : "btn-secondary"} btn-row`} style={{ marginTop: "auto", padding: "14px 16px", color: p.dark ? "var(--d-bg)" : undefined }}>
                  <span>Choose {p.name}</span>
                  <span className="arr">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="wrap sec">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 24, flexWrap: "wrap", marginBottom: 32 }}>
          <h2 data-reveal="" style={{ ...h2, maxWidth: "none" }}>4.9 from 2,318 neighbors</h2>
          <span className="tag-outline">Google · Yelp · Angi</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", borderTop: "2px solid var(--d-text)" }}>
          {REVIEWS.map((r, i) => (
            <figure key={r.a} data-reveal="" style={{ margin: 0, padding: "28px 28px 28px 0", borderBottom: "1px solid var(--d-divider)", ["--d" as string]: `${i * 100}ms` }}>
              <span style={{ color: "var(--d-accent)", letterSpacing: 4 }}>★★★★★</span>
              <blockquote style={{ margin: "16px 0 0", fontFamily: "var(--d-head)", fontWeight: 700, fontSize: 20, lineHeight: 1.4 }}>“{r.q}”</blockquote>
              <figcaption className="muted" style={{ marginTop: 16, fontSize: 14 }}>{r.a}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Financing CTA */}
      <section style={{ background: "var(--d-accent)", color: "var(--d-bg)" }}>
        <div className="wrap sec" style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 32, flexWrap: "wrap" }}>
          <h3 style={{ fontSize: "clamp(40px,5.5vw,76px)" }}>
            <Line>New system?</Line>
            <Line delay={120}>$0 down, 0% for 18 months.</Line>
          </h3>
          <a href="#book" className="btn" style={{ color: "var(--d-bg)", border: "1px solid var(--d-bg)", padding: "16px 20px", fontSize: 16 }}>
            Get a free replacement quote <span className="arr">→</span>
          </a>
        </div>
      </section>

      <footer className="wrap faint" style={{ padding: "40px var(--d-pad)", display: "flex", gap: 24, justifyContent: "space-between", flexWrap: "wrap", fontSize: 14 }}>
        <span>Northline Air · Licensed &amp; insured in Minnesota · Minneapolis, St. Paul, Edina, Bloomington, Plymouth</span>
        <span>(555) 010-2400 · Fictional business — design by bajwaa.dev</span>
      </footer>

      <div className="mbar">
        <a href="tel:5550102400">Call now</a>
        <a href="#book">Book a visit</a>
      </div>
    </DemoRoot>
  );
}

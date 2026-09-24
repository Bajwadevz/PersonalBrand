"use client";

import { useState } from "react";
import { DemoRoot, DemoImage, CountUp, Line, DemoSuccessNote, type DemoTheme } from "../_shared/DemoKit";

const theme: DemoTheme = {
  bg: "#eef1f2",
  surface: "#e1e6e8",
  text: "#0f1a20",
  accent: "#0a5bd8",
  accent600: "#084bb4",
  accent700: "#0848a8",
  head: "var(--f-grotesk), system-ui, sans-serif",
  body: "var(--f-grotesk), system-ui, sans-serif",
  headWeight: 700,
};

const EMERGENCIES = ["Burst or leaking pipe", "Water heater leaking", "Sewer backing up", "No water at all", "Something else urgent"];
const SHUTOFF = ["Yes, water is off", "No — I can’t find it", "Not sure"];
const JOBS = [
  { job: "Drain clearing & hydro-jetting", range: "$149 – $299", time: "1–2 hrs", note: "Camera check included if the clog returns within 90 days." },
  { job: "Active pipe leak repair", range: "$189 – $380", time: "1–3 hrs", note: "Includes drywall access cut; patching quoted separately." },
  { job: "Water heater diagnostic & flush", range: "$129 – $249", time: "1 hr", note: "Tank or tankless. Replacement quoted on the spot if needed." },
  { job: "Faucet, toilet or fixture install", range: "$159 – $310", time: "1–2 hrs", note: "You can supply the fixture or choose from ours." },
  { job: "Main sewer line camera inspection", range: "$199 – $349", time: "1–2 hrs", note: "You keep the video and a written condition report." },
];
const ZONES = [
  { name: "Core", miles: "0–10 mi", arrive: "45–60 min", areas: "Downtown · Harbor District · Westside" },
  { name: "Metro", miles: "10–20 mi", arrive: "60–90 min", areas: "North Suburbs · Metro South · East County" },
  { name: "Outer", miles: "20–30 mi", arrive: "Same day, booked window", areas: "Lakeview · Pine Ridge · Crestwood" },
];
const STATS = [
  { n: "34 min", l: "Average emergency arrival" },
  { n: "24/7", l: "Real dispatcher, never a voicemail" },
  { n: "1 yr", l: "Labor warranty on every repair" },
  { n: "$0", l: "Trip fee when you approve the work" },
];
const PROCESS = [
  { n: "01", t: "Tell us what’s wrong", c: "Online or by phone. We text back within 60 seconds with your plumber’s name and arrival window." },
  { n: "02", t: "Price before tools", c: "A written, flat price from our book. Approve it or don’t — no pressure, no hourly meter." },
  { n: "03", t: "Fixed, floors protected", c: "Boot covers, drop cloths, and a photo of the finished work sent to your phone." },
];
const FAQS = [
  ["Do you charge extra at night or on weekends?", "No. The price book is the same at 3pm Tuesday and 3am Sunday."],
  ["What if the repair costs more than the range?", "You get a new written price before we go further. If you say no, you only pay the diagnostic — waived if you approve the original repair."],
  ["Are your plumbers employees or subcontractors?", "Employees. Background-checked, drug-tested, and trained on our price book."],
];

const h2 = { fontSize: "clamp(32px,4.4vw,56px)", lineHeight: 1.02 } as const;

function zoneFor(zip: string) {
  return Number(zip.slice(-1)) % 3;
}

export default function ClearFlow() {
  const [mode, setMode] = useState<"emergency" | "routine">("emergency");
  const [step, setStep] = useState(0);
  const [issue, setIssue] = useState("");
  const [shutoff, setShutoff] = useState("");
  const [job, setJob] = useState(0);
  const [name, setName] = useState("");
  const [zip, setZip] = useState("");
  const [zone, setZone] = useState<number | null>(null);
  const [faq, setFaq] = useState<number | null>(0);

  const switchMode = (m: "emergency" | "routine") => {
    setMode(m);
    setStep(0);
  };
  const done = step === 3;

  return (
    <DemoRoot theme={theme} className="has-mbar">
      {/* Emergency strip */}
      <div style={{ background: "var(--d-text)", color: "var(--d-bg)", fontSize: 14, fontWeight: 500 }}>
        <div className="wrap" style={{ padding: "10px var(--d-pad)", display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "space-between" }}>
          <span>
            <span className="pulse-dot" style={{ display: "inline-block", width: 8, height: 8, background: "#4f8dff", marginRight: 10 }} />
            3 plumbers on duty right now · average arrival 34 minutes
          </span>
          <a href="tel:5550192834" style={{ color: "var(--d-bg)", textDecoration: "none", fontWeight: 700 }}>(555) 019-2834 →</a>
        </div>
      </div>

      <div className="wrap">
        <nav className="nav" style={{ borderBottom: "2px solid var(--d-text)" }}>
          <a href="#top" className="nav-brand">
            <svg width="22" height="24" viewBox="0 0 22 24" aria-hidden>
              <path d="M11 1 C11 1 3 10 3 15 a8 8 0 0 0 16 0 C19 10 11 1 11 1 Z" fill="var(--d-accent)" />
              <path d="M7 15 h8" stroke="var(--d-bg)" strokeWidth="2" />
            </svg>
            ClearFlow Plumbing
          </a>
          <a className="nav-link" href="#prices">Prices</a>
          <a className="nav-link" href="#area">Service area</a>
          <a className="nav-link" href="#faq">Questions</a>
          <a href="#dispatch" className="btn btn-primary">Get a plumber</a>
        </nav>
      </div>

      {/* Hero + dispatch */}
      <section id="dispatch" className="wrap sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "clamp(32px,5vw,72px)", alignItems: "start" }}>
        <div id="top">
          <span className="eyebrow" data-reveal="">Residential plumbing · Metro City &amp; suburbs</span>
          <h1 style={{ fontSize: "clamp(46px,6.6vw,92px)", marginTop: 20, letterSpacing: "-.03em" }}>
            <Line>Leak stopped today.</Line>
            <Line delay={120} style={{ color: "var(--d-accent)" }}>Price agreed first.</Line>
          </h1>
          <p className="muted" data-reveal="" style={{ fontSize: 18, lineHeight: 1.6, maxWidth: "50ch", marginTop: 28, ["--d" as string]: "240ms" }}>
            Licensed plumbers with a published price book. You see the number before anyone opens a toolbox — and it doesn’t change at midnight.
          </p>
          <DemoImage brief="Plumber repairing copper pipe under a kitchen sink" gray style={{ aspectRatio: "16/9", marginTop: 40 }} />
        </div>

        <div data-reveal="" style={{ background: "#fff", border: "2px solid var(--d-text)", boxShadow: "0 12px 32px rgba(15,26,32,.18)", ["--d" as string]: "160ms" }}>
          <div className="seg" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", border: 0, borderBottom: "2px solid var(--d-text)" }}>
            <button type="button" aria-pressed={mode === "emergency"} onClick={() => switchMode("emergency")} style={{ padding: 16, fontWeight: 700 }}>
              Emergency — now
            </button>
            <button type="button" aria-pressed={mode === "routine"} onClick={() => switchMode("routine")} style={{ padding: 16, fontWeight: 700 }}>
              Routine — book a time
            </button>
          </div>
          <div style={{ height: 4, background: "var(--d-surface)" }}>
            <div style={{ height: 4, background: "var(--d-accent)", width: `${(step / 3) * 100}%`, transition: "width .35s ease" }} />
          </div>

          <div key={`${mode}-${step}`} className="step-in" style={{ padding: "28px 24px 32px" }}>
            {mode === "emergency" && step === 0 && (
              <>
                <p style={{ fontFamily: "var(--d-head)", fontWeight: 700, fontSize: 22, marginBottom: 20 }}>What’s happening?</p>
                <div style={{ display: "grid", gap: 8 }}>
                  {EMERGENCIES.map((e) => (
                    <button key={e} type="button" className="opt" aria-pressed={issue === e} onClick={() => { setIssue(e); setStep(1); }}>
                      <span>{e}</span><span>→</span>
                    </button>
                  ))}
                </div>
              </>
            )}
            {mode === "emergency" && step === 1 && (
              <>
                <p style={{ fontFamily: "var(--d-head)", fontWeight: 700, fontSize: 22, marginBottom: 8 }}>Is the main water shut off?</p>
                <p className="muted" style={{ fontSize: 14, marginBottom: 20 }}>Usually a round valve where the main line enters — basement, garage or near the water heater.</p>
                <div style={{ display: "grid", gap: 8 }}>
                  {SHUTOFF.map((s) => (
                    <button key={s} type="button" className="opt" aria-pressed={shutoff === s} onClick={() => { setShutoff(s); setStep(2); }}>
                      <span>{s}</span><span>→</span>
                    </button>
                  ))}
                </div>
              </>
            )}
            {mode === "routine" && step < 2 && (
              <>
                <p style={{ fontFamily: "var(--d-head)", fontWeight: 700, fontSize: 22, marginBottom: 20 }}>Which job?</p>
                <div style={{ display: "grid", gap: 8 }}>
                  {JOBS.map((j, i) => (
                    <button key={j.job} type="button" className="opt" aria-pressed={job === i} onClick={() => { setJob(i); setStep(2); }}>
                      <span>{j.job}</span><span className="num" style={{ fontSize: 13, whiteSpace: "nowrap" }}>{j.range}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
            {step === 2 && (
              <form onSubmit={(e) => { e.preventDefault(); setStep(3); }}>
                <p style={{ fontFamily: "var(--d-head)", fontWeight: 700, fontSize: 22, marginBottom: 6 }}>
                  {mode === "emergency" ? "Where do we send the plumber?" : "When suits you?"}
                </p>
                <p className="muted" style={{ fontSize: 14, marginBottom: 20 }}>
                  {mode === "emergency" ? [issue, shutoff].join(" · ") : `${JOBS[job].job} · ${JOBS[job].range}`}
                </p>
                <div style={{ display: "grid", gap: 12 }}>
                  <div className="field">
                    <label htmlFor="cf-name">Full name</label>
                    <input id="cf-name" className="input" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Smith" />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div className="field">
                      <label htmlFor="cf-phone">Mobile (for the text-back)</label>
                      <input id="cf-phone" className="input" required type="tel" placeholder="(555) 000-0000" />
                    </div>
                    {mode === "emergency" ? (
                      <div className="field">
                        <label htmlFor="cf-zip">ZIP code</label>
                        <input id="cf-zip" className="input" required inputMode="numeric" placeholder="90210" />
                      </div>
                    ) : (
                      <div className="field">
                        <label htmlFor="cf-day">Preferred day</label>
                        <select id="cf-day" className="input">
                          <option>Tomorrow — first slot</option>
                          <option>Later this week</option>
                          <option>Weekend</option>
                        </select>
                      </div>
                    )}
                  </div>
                  <button type="submit" className="btn btn-primary btn-row" style={{ padding: 16, fontSize: 16, marginTop: 8 }}>
                    <span>{mode === "emergency" ? "Dispatch a plumber" : "Book this job"}</span>
                    <span className="arr">→</span>
                  </button>
                </div>
              </form>
            )}
            {done && (
              <>
                <p style={{ fontFamily: "var(--d-head)", fontWeight: 700, fontSize: 28, marginBottom: 12 }}>
                  {mode === "emergency" ? `On the way, ${(name || "neighbor").split(" ")[0]}.` : `Booked, ${(name || "neighbor").split(" ")[0]}.`}
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.6 }}>
                  {mode === "emergency"
                    ? "Check your phone — your plumber’s name, photo and live arrival window are in a text now. Keep the water off if you can."
                    : "Confirmation is in your texts. We’ll message the evening before with a 2-hour arrival window."}
                </p>
                <DemoSuccessNote demo="plumbing" />
              </>
            )}
            {step > 0 && !done && (
              <button type="button" className="btn btn-ghost" onClick={() => setStep((s) => (mode === "routine" && s === 2 ? 0 : s - 1))} style={{ marginTop: 16, paddingLeft: 0 }}>
                ← Back
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ borderTop: "2px solid var(--d-text)", borderBottom: "2px solid var(--d-text)", background: "var(--d-surface)" }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))" }}>
          {STATS.map((s, i) => (
            <div key={s.l} data-reveal="" style={{ padding: "36px 24px 36px 0", ["--d" as string]: `${i * 90}ms` }}>
              <CountUp value={s.n} style={{ display: "block", fontFamily: "var(--d-head)", fontWeight: 700, fontSize: "clamp(36px,4vw,54px)", lineHeight: 1, color: "var(--d-accent)" }} />
              <p className="muted" style={{ fontSize: 13, letterSpacing: ".08em", textTransform: "uppercase", marginTop: 12 }}>{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Price book */}
      <section id="prices" className="wrap sec">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 24, flexWrap: "wrap", marginBottom: 40 }}>
          <h2 data-reveal="" style={{ ...h2, maxWidth: "14ch" }}>The price book, in public.</h2>
          <p className="muted" data-reveal="" style={{ maxWidth: "42ch", fontSize: 16, lineHeight: 1.6 }}>Flat ranges for our most common jobs. Your exact price is confirmed in writing on site, before work starts.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "clamp(24px,4vw,56px)", alignItems: "start" }}>
          <div style={{ borderTop: "2px solid var(--d-text)" }}>
            {JOBS.map((j, i) => (
              <button
                key={j.job}
                type="button"
                onClick={() => setJob(i)}
                className="rowbtn cell"
                data-reveal=""
                style={{ display: "grid", gridTemplateColumns: "32px 1fr auto", gap: 12, alignItems: "baseline", padding: "18px 12px", borderBottom: "1px solid var(--d-divider)", background: job === i ? "var(--d-surface)" : undefined, ["--d" as string]: `${i * 60}ms` }}
              >
                <span className="num" style={{ fontSize: 13, color: "var(--d-accent-700)" }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ fontSize: 17, fontWeight: job === i ? 700 : 500 }}>{j.job}</span>
                <span className="num" style={{ fontSize: 15, fontWeight: 700 }}>{j.range}</span>
              </button>
            ))}
          </div>
          <div data-reveal="" style={{ border: "2px solid var(--d-accent)", padding: 28, position: "sticky", top: 48 }}>
            <span className="eyebrow">Selected job</span>
            <div key={job} className="step-in">
              <p style={{ fontFamily: "var(--d-head)", fontWeight: 700, fontSize: 24, margin: "12px 0 16px" }}>{JOBS[job].job}</p>
              <p className="num" style={{ fontFamily: "var(--d-head)", fontWeight: 700, fontSize: "clamp(40px,4.4vw,60px)", lineHeight: 1, color: "var(--d-accent)" }}>{JOBS[job].range}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "1px solid var(--d-divider)", marginTop: 24 }}>
                <div style={{ paddingTop: 12 }}>
                  <span className="label">Typical time</span>
                  <strong>{JOBS[job].time}</strong>
                </div>
                <div style={{ paddingTop: 12 }}>
                  <span className="label">Warranty</span>
                  <strong>1 year labor</strong>
                </div>
              </div>
              <p className="muted" style={{ fontSize: 14, lineHeight: 1.6, marginTop: 16 }}>{JOBS[job].note}</p>
            </div>
            <a href="#dispatch" onClick={() => switchMode("routine")} className="btn btn-primary btn-row" style={{ marginTop: 24, padding: 14 }}>
              <span>Book this job</span>
              <span className="arr">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Service area radius */}
      <section id="area" style={{ background: "var(--d-text)", color: "var(--d-bg)" }}>
        <div className="wrap sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,400px),1fr))", gap: "clamp(32px,5vw,80px)", alignItems: "center" }}>
          <div>
            <span className="eyebrow" style={{ color: "#7fb0ff" }}>Service area</span>
            <h2 data-reveal="" style={{ ...h2, margin: "16px 0 20px" }}>How fast can we get to you?</h2>
            <p data-reveal="" style={{ fontSize: 16, lineHeight: 1.6, maxWidth: "44ch", opacity: 0.8 }}>Three dispatch rings around our two depots. Enter your ZIP to see your ring and arrival window.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (/^\d{5}$/.test(zip)) setZone(zoneFor(zip));
              }}
              style={{ display: "flex", marginTop: 28, maxWidth: 420 }}
            >
              <label htmlFor="cf-area" className="sr-only">ZIP code</label>
              <input
                id="cf-area"
                className="input num"
                inputMode="numeric"
                maxLength={5}
                value={zip}
                onChange={(e) => { setZip(e.target.value.replace(/\D/g, "")); setZone(null); }}
                placeholder="5-digit ZIP"
                style={{ background: "transparent", color: "var(--d-bg)", borderColor: "rgba(238,241,242,.4)" }}
              />
              <button type="submit" className="btn btn-primary" style={{ whiteSpace: "nowrap" }}>Check</button>
            </form>
            <div style={{ marginTop: 32, borderTop: "1px solid rgba(238,241,242,.3)" }}>
              {ZONES.map((z, i) => (
                <div key={z.name} style={{ display: "grid", gridTemplateColumns: "88px 1fr auto", gap: 16, padding: "16px 0", borderBottom: "1px solid rgba(238,241,242,.3)", opacity: zone === null || zone === i ? 1 : 0.4, transition: "opacity .3s" }}>
                  <strong style={{ color: zone === i ? "#7fb0ff" : undefined }}>{z.name}</strong>
                  <span style={{ fontSize: 14, opacity: 0.8 }}>{z.areas}</span>
                  <span className="num" style={{ fontSize: 14, fontWeight: 700 }}>{z.arrive}</span>
                </div>
              ))}
            </div>
            {zone !== null && (
              <p className="step-in" style={{ marginTop: 20, fontSize: 16 }}>
                <strong style={{ color: "#7fb0ff" }}>{zip}</strong> is in our {ZONES[zone].name} ring ({ZONES[zone].miles}) — arrival {ZONES[zone].arrive.toLowerCase()}.
              </p>
            )}
          </div>
          <div data-reveal="" style={{ aspectRatio: "1", maxWidth: 520, width: "100%", justifySelf: "center" }}>
            <svg viewBox="0 0 400 400" width="100%" height="100%" role="img" aria-label="Dispatch rings around the depot">
              {[180, 120, 60].map((r, i) => {
                const ringIndex = 2 - i;
                const on = zone === ringIndex;
                return (
                  <circle key={r} cx="200" cy="200" r={r} fill={on ? "rgba(10,91,216,.35)" : "none"} stroke={on ? "#7fb0ff" : "rgba(238,241,242,.35)"} strokeWidth={on ? 2 : 1} strokeDasharray={ringIndex === 2 ? "4 6" : undefined} style={{ transition: "all .4s" }} />
                );
              })}
              <line x1="20" y1="200" x2="380" y2="200" stroke="rgba(238,241,242,.15)" />
              <line x1="200" y1="20" x2="200" y2="380" stroke="rgba(238,241,242,.15)" />
              <rect x="192" y="192" width="16" height="16" fill="var(--d-accent)" />
              {["10 mi", "20 mi", "30 mi"].map((t, i) => (
                <text key={t} x={200 + 60 * (i + 1) - 4} y="192" fill="rgba(238,241,242,.6)" fontSize="11" textAnchor="end" fontFamily="inherit">{t}</text>
              ))}
              <text x="214" y="222" fill="rgba(238,241,242,.8)" fontSize="11" fontFamily="inherit">Depot</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="wrap sec">
        <span className="eyebrow">How a call works</span>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", marginTop: 24 }}>
          {PROCESS.map((p, i) => (
            <div key={p.n} data-reveal="" style={{ borderTop: "2px solid var(--d-text)", padding: "22px 24px 0 0", ["--d" as string]: `${i * 110}ms` }}>
              <span style={{ fontFamily: "var(--d-head)", fontWeight: 700, fontSize: 40, color: "var(--d-accent)" }}>{p.n}</span>
              <strong style={{ display: "block", fontFamily: "var(--d-head)", fontSize: 22, margin: "12px 0 8px" }}>{p.t}</strong>
              <p className="muted" style={{ fontSize: 15, lineHeight: 1.6 }}>{p.c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="wrap" style={{ paddingBottom: "var(--d-sec)", maxWidth: 920 }}>
        <h2 data-reveal="" style={{ ...h2, marginBottom: 32 }}>Straight answers.</h2>
        <div style={{ borderTop: "2px solid var(--d-text)" }}>
          {FAQS.map(([q, a], i) => (
            <div key={q} style={{ borderBottom: "1px solid var(--d-divider)" }}>
              <button type="button" aria-expanded={faq === i} onClick={() => setFaq(faq === i ? null : i)} className="hover-accent" style={{ all: "unset", cursor: "pointer", width: "100%", display: "flex", justifyContent: "space-between", gap: 16, padding: "20px 0", fontSize: 18, fontWeight: 500 }}>
                <span>{q}</span>
                <span style={{ fontFamily: "var(--d-head)", color: "var(--d-accent)" }}>{faq === i ? "−" : "+"}</span>
              </button>
              {faq === i && <p className="muted step-in" style={{ paddingBottom: 20, fontSize: 16, lineHeight: 1.6, maxWidth: "64ch" }}>{a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--d-accent)", color: "#fff" }}>
        <div className="wrap sec" style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 32, flexWrap: "wrap" }}>
          <h3 style={{ fontSize: "clamp(40px,5.6vw,80px)" }}>
            <Line>Water where it</Line>
            <Line delay={120}>shouldn’t be?</Line>
          </h3>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="tel:5550192834" className="btn" style={{ background: "#fff", color: "var(--d-accent)", padding: "16px 20px", fontSize: 16 }}>Call (555) 019-2834</a>
            <a href="#dispatch" onClick={() => switchMode("emergency")} className="btn" style={{ color: "#fff", border: "1px solid #fff", padding: "16px 20px", fontSize: 16 }}>
              Dispatch online <span className="arr">→</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="wrap faint" style={{ padding: "40px var(--d-pad)", display: "flex", gap: 24, justifyContent: "space-between", flexWrap: "wrap", fontSize: 14 }}>
        <span>ClearFlow Plumbing Co. · Licensed &amp; insured · Metro City and surrounding suburbs</span>
        <span>(555) 019-2834 · Fictional business — design by bajwaa.dev</span>
      </footer>

      <div className="mbar">
        <a href="tel:5550192834">Call now</a>
        <a href="#dispatch">Get a plumber</a>
      </div>
    </DemoRoot>
  );
}

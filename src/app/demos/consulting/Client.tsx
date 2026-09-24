"use client";

import { useState } from "react";
import { DemoRoot, DemoImage, Line, DemoSuccessNote, type DemoTheme } from "../_shared/DemoKit";

const theme: DemoTheme = {
  bg: "#f7f6f2",
  surface: "#efede6",
  text: "#141413",
  accent: "#1f4d3a",
  accent600: "#173d2e",
  accent700: "#1f4d3a",
  divider: "color-mix(in srgb, #141413 18%, transparent)",
  head: "var(--f-inst-sans), system-ui, sans-serif",
  body: "var(--f-inst-sans), system-ui, sans-serif",
  headWeight: 500,
};

const serif = "var(--f-inst-serif), Georgia, serif";

const CLIENTS = ["Northwind", "Orla Health", "Brightline", "Kestrel Capital", "Maison Fera"];
const APPROACH = [
  { n: "01", t: "Diagnose", c: "Two weeks of interviews and data to find the few constraints that actually limit the business." },
  { n: "02", t: "Decide", c: "We bring the team to a short list of priorities, owners and measures. Everything else waits." },
  { n: "03", t: "Deliver", c: "A partner stays in the room through execution, meeting weekly until the result shows up in the numbers." },
];
const CASES = [
  { sector: "Series C fintech", metric: "3→1", label: "Three competing roadmaps merged into one plan the board signed.", c: "Eight weeks with the executive team, ending in a single set of company goals and a quarterly review cadence still in use." },
  { sector: "Family-owned manufacturer", metric: "+11%", label: "Operating margin in the first full year.", c: "We cut the product line by a third and redesigned pricing for the remaining range." },
  { sector: "Healthcare network", metric: "9 wk", label: "From board mandate to a live reorganisation.", c: "New regional structure, decision rights and leadership appointments, rolled out without service disruption." },
];
const TOPICS = ["Strategy and priorities", "Growth is stalling", "Margin and cost", "Organisation design", "Something else"];
const TIMES = [
  ["9:30", "11:00", "15:30"],
  ["10:00", "14:00"],
  ["9:00", "12:30", "16:00"],
];

const small = { fontSize: 13, color: "var(--d-faint)" } as const;
const plain = { all: "unset", cursor: "pointer" } as const;

/** Next three days — only rendered after a click, so server/client dates never need to match. */
function Slots({ onPick }: { onPick: (slot: string) => void }) {
  const now = new Date();
  const days = [1, 2, 3].map((k) => {
    const d = new Date(now);
    d.setDate(now.getDate() + k);
    return d;
  });
  return (
    <div style={{ display: "grid", gap: 28 }}>
      {days.map((d, i) => {
        const weekday = d.toLocaleDateString("en-US", { weekday: "long" });
        return (
          <div key={i}>
            <p style={{ fontSize: 15, fontWeight: 500, marginBottom: 10 }}>{d.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })}</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {TIMES[i].map((t) => (
                <button key={t} type="button" className="btn btn-secondary num" style={{ fontFamily: "var(--d-body)", fontWeight: 500, padding: "10px 16px" }} onClick={() => onPick(`${weekday} at ${t}`)}>
                  {t}
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Halden() {
  const [step, setStep] = useState(0);
  const [topic, setTopic] = useState("");
  const [slot, setSlot] = useState("");
  const [name, setName] = useState("");
  const [ci, setCi] = useState(0);
  const c = CASES[ci];

  return (
    <DemoRoot theme={theme}>
      <div className="wrap" style={{ maxWidth: 1200 }}>
        <nav className="nav" style={{ paddingBlock: 28, gap: 32 }}>
          <a href="#top" className="nav-brand" style={{ fontWeight: 600, fontSize: 17, letterSpacing: "-.01em" }}>
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
              <circle cx="9" cy="9" r="8" fill="none" stroke="var(--d-accent)" strokeWidth="1.5" />
              <path d="M9 1 V17" stroke="var(--d-accent)" strokeWidth="1.5" />
            </svg>
            Halden
          </a>
          <a className="nav-link" href="#approach">Approach</a>
          <a className="nav-link" href="#work">Work</a>
          <a href="#talk" className="btn btn-primary" style={{ fontWeight: 500, padding: "10px 16px" }}>Start a conversation</a>
        </nav>
      </div>

      {/* Hero */}
      <section id="top" className="wrap" style={{ maxWidth: 1200, padding: "clamp(80px,14vw,200px) var(--d-pad) clamp(80px,10vw,140px)" }}>
        <h1 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(52px,8.4vw,128px)", lineHeight: 0.98, letterSpacing: "-.025em", maxWidth: "13ch" }}>
          <Line>Fewer priorities.</Line>
          <Line delay={140} style={{ fontStyle: "italic", color: "var(--d-accent)" }}>Better outcomes.</Line>
        </h1>
        <div data-reveal="" style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 40, flexWrap: "wrap", marginTop: "clamp(48px,6vw,80px)", ["--d" as string]: "320ms" }}>
          <p className="muted" style={{ fontSize: 19, lineHeight: 1.55, maxWidth: "40ch" }}>
            Halden is a small advisory firm for founders and executive teams. We help you decide what matters, then stay until it is done.
          </p>
          <a href="#talk" style={{ fontSize: 16, fontWeight: 500, textDecoration: "none", borderBottom: "1px solid currentColor", paddingBottom: 4 }}>Book a 20-minute call →</a>
        </div>
      </section>

      {/* Clients */}
      <section className="wrap" style={{ maxWidth: 1200 }}>
        <div className="hair" style={{ padding: "28px 0", display: "flex", gap: "clamp(24px,5vw,64px)", flexWrap: "wrap", alignItems: "center" }}>
          <span style={small}>Trusted by</span>
          {CLIENTS.map((cl, i) => (
            <span key={cl} data-reveal="" style={{ fontSize: 16, fontWeight: 500, color: "color-mix(in srgb,var(--d-text) 62%,transparent)", ["--d" as string]: `${i * 80}ms` }}>{cl}</span>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="wrap" style={{ maxWidth: 1200, paddingBlock: "clamp(96px,12vw,176px)" }}>
        <p style={{ ...small, marginBottom: 48 }}>Approach</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "56px 48px" }}>
          {APPROACH.map((a, i) => (
            <div key={a.n} data-reveal="" style={{ display: "flex", flexDirection: "column", gap: 16, ["--d" as string]: `${i * 120}ms` }}>
              <span style={{ fontFamily: serif, fontSize: 40, lineHeight: 1, color: "var(--d-accent)" }}>{a.n}</span>
              <strong style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-.01em" }}>{a.t}</strong>
              <span className="muted" style={{ fontSize: 16, lineHeight: 1.65 }}>{a.c}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="wrap" style={{ maxWidth: 1200, paddingBottom: "clamp(96px,12vw,176px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", gap: "clamp(40px,6vw,96px)", alignItems: "center" }}>
          <DemoImage src="/demos/halden-work.jpg" brief="Quiet working session, natural light" gray slow style={{ aspectRatio: "4/5" }} />
          <div>
            <div key={ci} className="step-in">
              <p style={{ ...small, marginBottom: 24 }}>{c.sector}</p>
              <p style={{ fontFamily: serif, fontSize: "clamp(88px,11vw,160px)", lineHeight: 0.9, letterSpacing: "-.03em", color: "var(--d-accent)" }}>{c.metric}</p>
              <p style={{ fontSize: 20, lineHeight: 1.5, marginTop: 24, maxWidth: "30ch" }}>{c.label}</p>
              <p className="muted" style={{ fontSize: 16, lineHeight: 1.65, marginTop: 16, maxWidth: "42ch" }}>{c.c}</p>
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 40, alignItems: "center" }}>
              {CASES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Case ${i + 1}`}
                  onClick={() => setCi(i)}
                  style={{ ...plain, width: i === ci ? 48 : 16, height: 2, background: i === ci ? "var(--d-accent)" : "var(--d-divider)", transition: "width .3s" }}
                />
              ))}
              <button type="button" onClick={() => setCi((x) => (x + 1) % CASES.length)} style={{ ...plain, marginLeft: 16, fontSize: 14, fontWeight: 500 }}>
                Next case →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="talk" style={{ background: "var(--d-surface)" }}>
        <div className="wrap" style={{ maxWidth: 1200, paddingBlock: "clamp(96px,12vw,160px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,400px),1fr))", gap: "clamp(48px,7vw,112px)", alignItems: "start" }}>
          <div>
            <h2 data-reveal="" style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(44px,5.6vw,80px)", lineHeight: 1 }}>
              Start with <span style={{ fontStyle: "italic" }}>one</span> question.
            </h2>
            <p className="muted" data-reveal="" style={{ fontSize: 17, lineHeight: 1.6, marginTop: 28, maxWidth: "36ch", ["--d" as string]: "120ms" }}>
              Twenty minutes with a partner. No deck, no pitch. You leave with a clearer view of the problem either way.
            </p>
          </div>
          <div key={step} className="step-in">
            {step === 0 && (
              <>
                <p style={{ ...small, marginBottom: 20 }}>1 of 3 · What are you working on?</p>
                <div className="hair" style={{ display: "grid" }}>
                  {TOPICS.map((t) => (
                    <button
                      key={t}
                      type="button"
                      className="hover-accent"
                      onClick={() => {
                        setTopic(t);
                        setStep(1);
                      }}
                      style={{ ...plain, display: "flex", justifyContent: "space-between", padding: "20px 0", borderBottom: "1px solid var(--d-divider)", fontSize: 19 }}
                    >
                      <span>{t}</span>
                      <span>→</span>
                    </button>
                  ))}
                </div>
              </>
            )}
            {step === 1 && (
              <>
                <p style={{ ...small, marginBottom: 20 }}>
                  2 of 3 · Pick a time <span style={{ color: "var(--d-text)" }}>· {topic}</span>
                </p>
                <Slots
                  onPick={(s) => {
                    setSlot(s);
                    setStep(2);
                  }}
                />
              </>
            )}
            {step === 2 && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep(3);
                }}
              >
                <p style={{ ...small, marginBottom: 20 }}>3 of 3 · {topic} · {slot}</p>
                <div style={{ display: "grid", gap: 16 }}>
                  <div className="field">
                    <label htmlFor="hd-name">Name</label>
                    <input id="hd-name" required className="input input-line" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="field">
                    <label htmlFor="hd-email">Work email</label>
                    <input id="hd-email" required type="email" className="input input-line" />
                  </div>
                  <div className="field">
                    <label htmlFor="hd-co">Company</label>
                    <input id="hd-co" className="input input-line" />
                  </div>
                  <button type="submit" className="btn btn-primary btn-row" style={{ padding: "16px 18px", fontFamily: "var(--d-body)", fontWeight: 500, fontSize: 16, marginTop: 16 }}>
                    <span>Confirm call</span>
                    <span className="arr">→</span>
                  </button>
                </div>
              </form>
            )}
            {step === 3 && (
              <>
                <p style={{ fontFamily: serif, fontSize: 48, lineHeight: 1.05 }}>See you {slot}, {(name || "then").split(" ")[0]}.</p>
                <p className="muted" style={{ fontSize: 16, lineHeight: 1.6, margin: "20px 0 28px", maxWidth: "38ch" }}>
                  A calendar invite is on its way. If it helps, reply with one paragraph on the situation and we will come prepared.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStep(0);
                    setTopic("");
                    setSlot("");
                  }}
                  style={{ ...plain, fontSize: 14, fontWeight: 500, borderBottom: "1px solid currentColor" }}
                >
                  Book another time
                </button>
                <DemoSuccessNote demo="consulting">In a live build, this books the call on the partner&apos;s calendar and sends the invite automatically.</DemoSuccessNote>
              </>
            )}
            {(step === 1 || step === 2) && (
              <button type="button" onClick={() => setStep((s) => s - 1)} style={{ ...plain, marginTop: 28, fontSize: 14, color: "var(--d-muted)" }}>
                ← Back
              </button>
            )}
          </div>
        </div>
      </section>

      <footer className="wrap faint" style={{ maxWidth: 1200, padding: "48px var(--d-pad)", display: "flex", gap: 24, justifyContent: "space-between", flexWrap: "wrap", fontSize: 14 }}>
        <span>Halden Advisory · London · New York</span>
        <span>hello@halden.example · Fictional business — design by bajwaa.dev</span>
      </footer>
    </DemoRoot>
  );
}

"use client";

import { useState } from "react";
import { DemoRoot, DemoImage, Line, DemoSuccessNote, type DemoTheme } from "../_shared/DemoKit";

const theme: DemoTheme = {
  bg: "#f5efe8",
  surface: "#ece3d8",
  text: "#2a2420",
  accent: "#9a5b45",
  accent600: "#874d39",
  accent700: "#9a5b45",
  onAccent: "#f5efe8",
  divider: "color-mix(in srgb, #2a2420 20%, transparent)",
  head: "var(--f-bodoni), Georgia, serif",
  body: "var(--f-jost), system-ui, sans-serif",
  headWeight: 400,
};

const TREATMENTS = [
  {
    t: "Injectables & contouring",
    time: "30–45 min",
    down: "None to 2 days",
    from: "$450",
    stages: ["Mild redness at injection points, gone within hours.", "Early softening; any swelling settles.", "Full, natural result is visible.", "Result holds; review visit booked.", "Gradual return; top-up at 4–6 months."],
  },
  {
    t: "Skin resurfacing course",
    time: "45–60 min",
    down: "2–4 days per session",
    from: "$380",
    stages: ["Warmth and tightness, like mild sunburn.", "Fine flaking as new skin surfaces.", "Brighter tone; session two booked.", "Texture visibly refined after the course.", "Maintained with one session a season."],
  },
  {
    t: "Laser & light therapy",
    time: "20–40 min",
    down: "Minimal",
    from: "$290",
    stages: ["Slight flush for an hour or two.", "Pigment darkens before it lifts.", "Redness and spots noticeably reduced.", "Even tone across the treated area.", "Annual refresh keeps it there."],
  },
  {
    t: "Facial wellness program",
    time: "Monthly",
    down: "None",
    from: "$220/mo",
    stages: ["A calm, hydrated finish the same day.", "Plan adjusted to how your skin responded.", "Consistent clarity month to month.", "Early concerns caught and treated.", "A maintained result — no big resets."],
  },
];
const WEEKS = [0, 1, 3, 6, 12];
const PRACTITIONERS = [
  { n: "Dr. Elena Varga", r: "Medical director · Dermatology", y: "18 years practising" },
  { n: "Maya Chen, NP", r: "Lead injector", y: "11 years practising" },
  { n: "Sofia Laurent", r: "Clinical aesthetician", y: "9 years practising" },
];
const PROCESS = [
  ["Consult", "A private, unhurried assessment with a senior practitioner. No sales script, no package pressure."],
  ["Plan", "A written plan mapped to your goals, timeline and budget — before anything is booked."],
  ["Treat", "Performed by the practitioner you met, in a private suite, to medical-grade protocols."],
  ["Maintain", "A simple rhythm so results hold, reviewed at every visit."],
];
const FAQS = [
  ["Who performs the treatment?", "Always a senior, credentialed practitioner — and you meet them at your consultation, not on the day."],
  ["Will it look natural?", "Our approach is restraint-first. We will tell you plainly if a request risks looking overdone."],
  ["Is the consultation really free?", "Yes. It is complimentary, carries no obligation, and you leave with a written plan either way."],
];
const CONCERNS = ["Lines & volume", "Texture & tone", "Redness & pigment", "Overall maintenance", "I’d like guidance"];

const h2 = { fontSize: "clamp(38px,5vw,68px)", lineHeight: 1.02, letterSpacing: "-.02em" } as const;
const kicker = { fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--d-accent)" } as const;

export default function Lumiere() {
  const [tx, setTx] = useState(0);
  const [wk, setWk] = useState(2);
  const [faq, setFaq] = useState<number | null>(0);
  const [step, setStep] = useState(0);
  const [concern, setConcern] = useState("");
  const [who, setWho] = useState("");
  const [name, setName] = useState("");
  const T = TREATMENTS[tx];

  return (
    <DemoRoot theme={theme}>
      <div className="wrap">
        <nav className="nav" style={{ paddingBlock: 24, borderBottom: "1px solid var(--d-divider)" }}>
          <a href="#top" className="nav-brand" style={{ fontSize: 24, fontWeight: 400, letterSpacing: ".02em" }}>
            <span>
              Lumi<span style={{ fontStyle: "italic", color: "var(--d-accent)" }}>è</span>re
            </span>
          </a>
          <a className="nav-link" href="#treatments">Treatments</a>
          <a className="nav-link" href="#timeline">Recovery</a>
          <a className="nav-link" href="#team">Practitioners</a>
          <a href="#consult" className="btn btn-primary" style={{ fontFamily: "var(--d-body)", fontWeight: 400, letterSpacing: ".06em", textTransform: "uppercase", fontSize: 13 }}>Book consultation</a>
        </nav>
      </div>

      {/* Hero */}
      <section id="top" className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "clamp(32px,5vw,80px)", alignItems: "end", paddingBlock: "clamp(56px,8vw,112px)" }}>
        <div>
          <span data-reveal="" style={kicker}>Medical aesthetics · Upper East Side</span>
          <h1 style={{ fontSize: "clamp(56px,8.2vw,124px)", lineHeight: 0.94, letterSpacing: "-.03em", margin: "28px 0 32px" }}>
            <Line>Look rested.</Line>
            <Line delay={140} style={{ fontStyle: "italic", color: "var(--d-accent)" }}>Not done.</Line>
          </h1>
          <p className="muted" data-reveal="" style={{ fontSize: 18, lineHeight: 1.65, maxWidth: "44ch", fontWeight: 300, ["--d" as string]: "280ms" }}>
            Senior practitioners, medical-grade protocols, and a plan built around how you want to look in a year — not just this weekend.
          </p>
          <div data-reveal="" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 36, ["--d" as string]: "380ms" }}>
            <a href="#consult" className="btn btn-primary" style={{ padding: "16px 22px", fontFamily: "var(--d-body)", fontWeight: 400, letterSpacing: ".06em", textTransform: "uppercase", fontSize: 13 }}>
              Complimentary consultation <span className="arr">→</span>
            </a>
            <a href="#treatments" className="btn btn-secondary" style={{ padding: "16px 22px", fontFamily: "var(--d-body)", fontWeight: 400, letterSpacing: ".06em", textTransform: "uppercase", fontSize: 13 }}>Treatment menu</a>
          </div>
        </div>
        <DemoImage brief="Calm treatment suite, linen and warm daylight" slow style={{ aspectRatio: "4/5" }} />
      </section>

      {/* Trust line */}
      <section style={{ borderTop: "1px solid var(--d-divider)", borderBottom: "1px solid var(--d-divider)" }}>
        <div className="wrap" style={{ display: "flex", justifyContent: "space-between", gap: 24, flexWrap: "wrap", paddingBlock: 22, fontSize: 14, letterSpacing: ".04em" }}>
          {["Physician-led since 2016", "Every treatment by a senior practitioner", "Written plan before anything is booked", "Complimentary consultation"].map((t, i) => (
            <span key={t} data-reveal="" style={{ ["--d" as string]: `${i * 80}ms` }}>
              <span style={{ color: "var(--d-accent)", marginRight: 10 }}>—</span>
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Treatment menu */}
      <section id="treatments" className="wrap sec">
        <span style={kicker}>The menu</span>
        <h2 data-reveal="" style={{ ...h2, margin: "18px 0 48px", maxWidth: "16ch" }}>Chosen for the result, not the trend.</h2>
        <div style={{ borderTop: "1px solid var(--d-text)" }}>
          <div className="faint menu-row" style={{ padding: "10px 0", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", borderBottom: "1px solid var(--d-divider)" }}>
            <span>Treatment</span>
            <span className="lm-hide">Time</span>
            <span className="lm-hide">Downtime</span>
            <span style={{ textAlign: "right" }}>From</span>
          </div>
          {TREATMENTS.map((t, i) => (
            <button
              key={t.t}
              type="button"
              aria-pressed={tx === i}
              onClick={() => setTx(i)}
              className="rowbtn menu-row hover-accent"
              style={{ alignItems: "baseline", padding: "26px 0", borderBottom: "1px solid var(--d-divider)", color: tx === i ? "var(--d-accent)" : undefined }}
            >
              <span style={{ fontFamily: "var(--d-head)", fontSize: "clamp(24px,2.8vw,36px)", fontStyle: tx === i ? "italic" : "normal" }}>{t.t}</span>
              <span className="lm-hide" style={{ fontSize: 15 }}>{t.time}</span>
              <span className="lm-hide" style={{ fontSize: 15 }}>{t.down}</span>
              <span className="num" style={{ fontSize: 16, textAlign: "right" }}>{t.from}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Recovery timeline */}
      <section id="timeline" style={{ background: "var(--d-surface)" }}>
        <div className="wrap sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,400px),1fr))", gap: "clamp(40px,6vw,96px)", alignItems: "center" }}>
          <div>
            <span style={kicker}>What to expect</span>
            <h2 data-reveal="" style={{ ...h2, margin: "18px 0 20px" }}>
              Your recovery, <span style={{ fontStyle: "italic" }}>week by week.</span>
            </h2>
            <p className="muted" style={{ fontSize: 16, lineHeight: 1.65, maxWidth: "40ch", fontWeight: 300 }}>
              Pick a treatment above, then drag through the weeks. This is the same timeline you receive in writing at consultation.
            </p>
          </div>
          <div data-reveal="" style={{ borderTop: "1px solid var(--d-text)", paddingTop: 28 }}>
            <p style={{ ...kicker, marginBottom: 8 }}>{T.t}</p>
            <p key={`${tx}-${wk}`} className="step-in" style={{ fontFamily: "var(--d-head)", fontSize: "clamp(26px,3vw,40px)", lineHeight: 1.2, minHeight: "3.6em" }}>{T.stages[wk]}</p>
            <label htmlFor="lm-week" className="sr-only">Week after treatment</label>
            <input id="lm-week" type="range" min={0} max={WEEKS.length - 1} step={1} value={wk} onChange={(e) => setWk(+e.target.value)} style={{ marginTop: 32 }} />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginTop: 8 }}>
              {WEEKS.map((w, i) => (
                <button key={w} type="button" onClick={() => setWk(i)} style={{ all: "unset", cursor: "pointer", color: i === wk ? "var(--d-accent)" : "var(--d-faint)", fontWeight: i === wk ? 500 : 400 }}>
                  {w === 0 ? "Day 0" : `Wk ${w}`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practitioners */}
      <section id="team" className="wrap sec">
        <span style={kicker}>Practitioners</span>
        <h2 data-reveal="" style={{ ...h2, margin: "18px 0 48px" }}>You meet who treats you.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: 24 }}>
          {PRACTITIONERS.map((p, i) => (
            <figure key={p.n} data-reveal="" style={{ margin: 0, ["--d" as string]: `${i * 110}ms` }}>
              <DemoImage brief={`Portrait — ${p.r.split(" · ")[0].toLowerCase()}`} style={{ aspectRatio: "3/4" }} />
              <figcaption style={{ borderTop: "1px solid var(--d-text)", marginTop: 16, paddingTop: 12 }}>
                <strong style={{ display: "block", fontFamily: "var(--d-head)", fontSize: 24, fontWeight: 400 }}>{p.n}</strong>
                <span className="muted" style={{ fontSize: 14 }}>{p.r} · {p.y}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Process */}
      <section style={{ borderTop: "1px solid var(--d-divider)" }}>
        <div className="wrap sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,230px),1fr))", gap: 32 }}>
          {PROCESS.map(([t, c], i) => (
            <div key={t} data-reveal="" style={{ ["--d" as string]: `${i * 100}ms` }}>
              <span style={{ fontFamily: "var(--d-head)", fontStyle: "italic", fontSize: 48, lineHeight: 1, color: "var(--d-accent)" }}>{String(i + 1).padStart(2, "0")}</span>
              <strong style={{ display: "block", fontFamily: "var(--d-head)", fontSize: 28, fontWeight: 400, margin: "16px 0 8px" }}>{t}</strong>
              <p className="muted" style={{ fontSize: 15, lineHeight: 1.65, fontWeight: 300 }}>{c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section style={{ background: "var(--d-text)", color: "var(--d-bg)" }}>
        <div className="wrap sec" style={{ maxWidth: 1000, textAlign: "center" }}>
          <blockquote data-reveal="" style={{ margin: 0, fontFamily: "var(--d-head)", fontStyle: "italic", fontSize: "clamp(30px,3.6vw,50px)", lineHeight: 1.2 }}>
            “I told them exactly what I didn’t want — to look done. The result is subtle enough that only I notice.”
          </blockquote>
          <p style={{ fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", marginTop: 28, opacity: 0.7 }}>Client · skin resurfacing course</p>
        </div>
      </section>

      {/* FAQ + booking */}
      <section id="consult" className="wrap sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,400px),1fr))", gap: "clamp(48px,7vw,112px)", alignItems: "start" }}>
        <div>
          <span style={kicker}>Before you book</span>
          <h2 data-reveal="" style={{ ...h2, margin: "18px 0 32px" }}>Honest answers.</h2>
          <div style={{ borderTop: "1px solid var(--d-text)" }}>
            {FAQS.map(([q, a], i) => (
              <div key={q} style={{ borderBottom: "1px solid var(--d-divider)" }}>
                <button type="button" aria-expanded={faq === i} onClick={() => setFaq(faq === i ? null : i)} className="hover-accent" style={{ all: "unset", cursor: "pointer", width: "100%", display: "flex", justifyContent: "space-between", gap: 16, padding: "20px 0", fontFamily: "var(--d-head)", fontSize: 22 }}>
                  <span>{q}</span>
                  <span style={{ color: "var(--d-accent)" }}>{faq === i ? "−" : "+"}</span>
                </button>
                {faq === i && <p className="muted step-in" style={{ paddingBottom: 20, fontSize: 16, lineHeight: 1.65, fontWeight: 300 }}>{a}</p>}
              </div>
            ))}
          </div>
        </div>

        <div data-reveal="" style={{ border: "1px solid var(--d-text)", background: "#fbf8f4" }}>
          <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--d-text)", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <strong style={{ fontFamily: "var(--d-head)", fontSize: 26, fontWeight: 400 }}>Reserve a consultation</strong>
            <span className="num faint" style={{ fontSize: 13 }}>{Math.min(step + 1, 3)} / 3</span>
          </div>
          <div key={step} className="step-in" style={{ padding: "28px 24px 32px" }}>
            {step === 0 && (
              <>
                <p style={{ fontFamily: "var(--d-head)", fontSize: 24, marginBottom: 20 }}>What would you like to address?</p>
                <div style={{ display: "grid", gap: 8 }}>
                  {CONCERNS.map((c) => (
                    <button key={c} type="button" className="opt" aria-pressed={concern === c} onClick={() => { setConcern(c); setStep(1); }}>
                      <span>{c}</span><span>→</span>
                    </button>
                  ))}
                </div>
              </>
            )}
            {step === 1 && (
              <>
                <p style={{ fontFamily: "var(--d-head)", fontSize: 24, marginBottom: 20 }}>Who would you like to see?</p>
                <div style={{ display: "grid", gap: 8 }}>
                  {[...PRACTITIONERS.map((p) => p.n), "First available"].map((p) => (
                    <button key={p} type="button" className="opt" aria-pressed={who === p} onClick={() => { setWho(p); setStep(2); }}>
                      <span>{p}</span><span>→</span>
                    </button>
                  ))}
                </div>
              </>
            )}
            {step === 2 && (
              <form onSubmit={(e) => { e.preventDefault(); setStep(3); }} style={{ display: "grid", gap: 14 }}>
                <p className="muted" style={{ fontSize: 14 }}>{concern} · {who}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div className="field">
                    <label htmlFor="lm-name">Name</label>
                    <input id="lm-name" className="input" required value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="field">
                    <label htmlFor="lm-phone">Mobile</label>
                    <input id="lm-phone" className="input" required type="tel" />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="lm-when">Preferred time</label>
                  <select id="lm-when" className="input">
                    <option>Weekday mornings</option>
                    <option>Weekday evenings</option>
                    <option>Saturdays</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="lm-note">Anything we should know? (optional)</label>
                  <textarea id="lm-note" className="input" placeholder="Previous treatments, events coming up…" />
                </div>
                <button type="submit" className="btn btn-primary btn-row" style={{ padding: 16, fontFamily: "var(--d-body)", fontWeight: 400, letterSpacing: ".06em", textTransform: "uppercase", fontSize: 13 }}>
                  <span>Request my consultation</span>
                  <span className="arr">→</span>
                </button>
              </form>
            )}
            {step === 3 && (
              <>
                <p style={{ fontFamily: "var(--d-head)", fontSize: 34, lineHeight: 1.1, marginBottom: 12 }}>
                  Thank you, <span style={{ fontStyle: "italic" }}>{(name || "there").split(" ")[0]}.</span>
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.65, fontWeight: 300 }}>Our front desk will text two times that suit you within the hour. Your written plan follows the consultation.</p>
                <DemoSuccessNote demo="aesthetic-clinic">In a live build, this books straight into the clinic calendar and sends pre-visit forms automatically.</DemoSuccessNote>
              </>
            )}
            {step > 0 && step < 3 && (
              <button type="button" className="btn btn-ghost" onClick={() => setStep((s) => s - 1)} style={{ marginTop: 16, paddingLeft: 0, fontFamily: "var(--d-body)", fontWeight: 400 }}>← Back</button>
            )}
          </div>
        </div>
      </section>

      <footer className="wrap faint" style={{ padding: "32px var(--d-pad)", borderTop: "1px solid var(--d-divider)", display: "flex", gap: 24, justifyContent: "space-between", flexWrap: "wrap", fontSize: 13 }}>
        <span>Lumière Aesthetic Studio · New York · Results vary; all treatments follow a medical consultation</span>
        <span>Fictional clinic — design by bajwaa.dev</span>
      </footer>
    </DemoRoot>
  );
}

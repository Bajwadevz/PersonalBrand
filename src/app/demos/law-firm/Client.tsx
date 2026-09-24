"use client";

import { useState } from "react";
import { DemoRoot, DemoImage, CountUp, Line, DemoSuccessNote, type DemoTheme } from "../_shared/DemoKit";

const theme: DemoTheme = {
  bg: "#f4f1ea",
  surface: "#ebe6db",
  text: "#16140f",
  accent: "#6d1f1c",
  accent600: "#5a1816",
  accent700: "#6d1f1c",
  onAccent: "#f4f1ea",
  divider: "color-mix(in srgb, #16140f 22%, transparent)",
  head: "var(--f-garamond), Georgia, serif",
  body: "var(--f-plex), system-ui, sans-serif",
  headWeight: 500,
};

const mono = "var(--f-plex-mono), ui-monospace, monospace";

const GLANCE = [
  ["Founded", "1994"],
  ["Partners", "6"],
  ["Practice areas", "4, deliberately"],
  ["Offices", "Boston · New York"],
];
const PRACTICES = [
  { t: "Corporate & M&A", o: "Deals closed without surprises in diligence.", d: "Structuring, negotiation and closing for founders and acquirers who cannot afford ambiguity in the terms. Typical mandates run $10M–$250M." },
  { t: "Commercial litigation", o: "Disputes resolved before they become headlines.", d: "Pre-litigation strategy, arbitration and trial counsel for matters where reputation is as much at stake as damages." },
  { t: "Estates & wealth transfer", o: "Wealth passed on your terms, not the court’s.", d: "Trust structuring and succession planning for families and principals with complex, multi-generational holdings." },
  { t: "Regulatory & compliance", o: "Ahead of scrutiny, not reacting to it.", d: "Standing counsel for regulated businesses through examinations, filings and enforcement exposure." },
];
const DOCKET = [
  { no: "M-2026-014", area: "Corporate", matter: "Cross-border acquisition, industrial software", outcome: "Closed 11 days early; no post-close claims" },
  { no: "M-2025-102", area: "Litigation", matter: "Supply contract dispute, manufacturing", outcome: "Settled in arbitration; never public" },
  { no: "M-2025-077", area: "Estates", matter: "Three-generation family holding structure", outcome: "Transfer-tax exposure cut by eight figures" },
  { no: "M-2025-031", area: "Regulatory", matter: "State examination, specialty lender", outcome: "Closed with no findings" },
];
const STATS = [
  { n: "30", l: "Years in practice" },
  { n: "$1.8B", l: "Transaction value advised" },
  { n: "48 hrs", l: "From intake to a partner’s read" },
];
const PROCESS = [
  ["Confidential intake", "A partner — not an associate — reads your matter and gives you an honest view within 48 hours."],
  ["Strategy before scope", "We agree the outcome you need and the risk you carry before a single hour is billed."],
  ["One partner, start to finish", "The partner you retain leads the matter throughout. It is not handed down after signing."],
  ["Resolution, documented", "Every matter closes with a written record: outcome, exposure addressed, what to watch next."],
];
const FAQS = [
  ["Will a partner actually handle my matter?", "Yes. Every engagement is led by the partner you speak with first. Associates support the work; they do not run it."],
  ["How is billing structured?", "Most matters are scoped as a fixed fee for a defined phase, agreed upfront. Where litigation requires hourly billing, you receive itemised monthly detail."],
  ["Do you take matters outside your four practices?", "Rarely. If we are not the right firm we will say so in the first call and refer you to counsel we trust."],
];
const AREAS = ["Corporate & M&A", "Commercial litigation", "Estates & wealth transfer", "Regulatory & compliance", "Not sure yet"];
const URGENCY = ["Active deadline — days", "Within the month", "Planning ahead"];

const h2 = { fontSize: "clamp(36px,4.8vw,64px)", lineHeight: 1.04, letterSpacing: "-.015em" } as const;
const sec = (n: string) => (
  <span style={{ fontFamily: mono, fontSize: 12, letterSpacing: ".06em", color: "var(--d-accent)" }}>§ {n}</span>
);

export default function AshfordCole() {
  const [open, setOpen] = useState(0);
  const [faq, setFaq] = useState<number | null>(0);
  const [step, setStep] = useState(0);
  const [area, setArea] = useState("");
  const [urgency, setUrgency] = useState("");
  const [name, setName] = useState("");

  return (
    <DemoRoot theme={theme}>
      <div className="wrap">
        <nav className="nav" style={{ borderBottom: "1px solid var(--d-text)", paddingBlock: 22 }}>
          <a href="#top" className="nav-brand" style={{ fontSize: 22, fontWeight: 500, letterSpacing: ".01em" }}>
            <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden>
              <rect x=".5" y=".5" width="25" height="25" fill="none" stroke="var(--d-accent)" />
              <path d="M7 19 L13 6 L19 19 M9.5 14 H16.5" stroke="var(--d-accent)" strokeWidth="1.4" fill="none" />
            </svg>
            <span>
              Ashford <span style={{ fontStyle: "italic", color: "var(--d-accent)" }}>&amp;</span> Cole
            </span>
          </a>
          <a className="nav-link" href="#practice">Practice</a>
          <a className="nav-link" href="#matters">Matters</a>
          <a className="nav-link" href="#faq">Engagement</a>
          <a href="#intake" className="btn btn-primary" style={{ fontFamily: "var(--d-body)", fontWeight: 500, fontSize: 14 }}>Request a consultation</a>
        </nav>
      </div>

      {/* Hero */}
      <section id="top" className="wrap split-hero" style={{ paddingBlock: "clamp(72px,10vw,150px) clamp(56px,7vw,96px)", gap: "clamp(40px,6vw,96px)", alignItems: "end" }}>
        <div>
          <span className="eyebrow" data-reveal="" style={{ fontFamily: mono, fontSize: 12, letterSpacing: ".08em" }}>Corporate, litigation &amp; private-client counsel</span>
          <h1 style={{ fontSize: "clamp(48px,7.4vw,112px)", lineHeight: 0.98, letterSpacing: "-.025em", marginTop: 24, fontWeight: 400 }}>
            <Line>Counsel for matters</Line>
            <Line delay={110}>that cannot be</Line>
            <Line delay={220} style={{ fontStyle: "italic", color: "var(--d-accent)" }}>left to chance.</Line>
          </h1>
        </div>
        <div data-reveal="" style={{ ["--d" as string]: "300ms" }}>
          <p className="muted" style={{ fontSize: 17, lineHeight: 1.65, marginBottom: 28 }}>
            A six-partner firm for founders, principals and families. The partner you retain leads your matter personally — from the first call to the last signature.
          </p>
          <dl style={{ margin: 0, borderTop: "1px solid var(--d-text)" }}>
            {GLANCE.map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "10px 0", borderBottom: "1px solid var(--d-divider)", fontSize: 14 }}>
                <dt className="muted">{k}</dt>
                <dd style={{ margin: 0, fontWeight: 500 }}>{v}</dd>
              </div>
            ))}
          </dl>
          <a href="#intake" className="btn btn-primary btn-row" style={{ marginTop: 24, padding: 16, fontFamily: "var(--d-body)", fontWeight: 500 }}>
            <span>Begin confidential intake</span>
            <span className="arr">→</span>
          </a>
        </div>
      </section>

      {/* Stats */}
      <section style={{ borderTop: "1px solid var(--d-text)", borderBottom: "1px solid var(--d-text)" }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
          {STATS.map((s, i) => (
            <div key={s.l} data-reveal="" style={{ padding: "32px 24px 32px 0", borderRight: i < STATS.length - 1 ? "1px solid var(--d-divider)" : 0, ["--d" as string]: `${i * 100}ms` }}>
              <CountUp value={s.n} style={{ display: "block", fontFamily: "var(--d-head)", fontSize: "clamp(44px,5vw,68px)", lineHeight: 1, color: "var(--d-accent)" }} />
              <p className="muted" style={{ fontFamily: mono, fontSize: 12, letterSpacing: ".06em", textTransform: "uppercase", marginTop: 12 }}>{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Practice index */}
      <section id="practice" className="wrap sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "clamp(40px,6vw,96px)" }}>
        <div>
          {sec("1 — Practice")}
          <h2 data-reveal="" style={{ ...h2, margin: "16px 0 24px" }}>Four disciplines. No dilution of attention.</h2>
          <p className="muted" style={{ fontSize: 16, lineHeight: 1.65, maxWidth: "40ch" }}>We limit the practice so every matter gets partner-level judgment, not associate-level triage.</p>
          <DemoImage brief="Partner reviewing documents in a book-lined office" gray style={{ aspectRatio: "4/3", marginTop: 40 }} />
        </div>
        <div style={{ borderTop: "1px solid var(--d-text)" }}>
          {PRACTICES.map((p, i) => (
            <div key={p.t} data-reveal="" style={{ borderBottom: "1px solid var(--d-divider)", ["--d" as string]: `${i * 80}ms` }}>
              <button type="button" aria-expanded={open === i} onClick={() => setOpen(i)} className="hover-accent" style={{ all: "unset", cursor: "pointer", width: "100%", display: "grid", gridTemplateColumns: "56px 1fr 24px", alignItems: "baseline", padding: "24px 0" }}>
                <span style={{ fontFamily: mono, fontSize: 12, color: "var(--d-accent)" }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ fontFamily: "var(--d-head)", fontSize: "clamp(24px,2.6vw,34px)", lineHeight: 1.1 }}>{p.t}</span>
                <span style={{ fontFamily: "var(--d-head)", fontSize: 24, color: "var(--d-accent)" }}>{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div className="step-in" style={{ padding: "0 0 28px 56px" }}>
                  <p style={{ fontFamily: "var(--d-head)", fontStyle: "italic", fontSize: 21, marginBottom: 10 }}>{p.o}</p>
                  <p className="muted" style={{ fontSize: 15, lineHeight: 1.65, maxWidth: "52ch" }}>{p.d}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Docket */}
      <section id="matters" style={{ background: "var(--d-surface)", borderTop: "1px solid var(--d-text)", borderBottom: "1px solid var(--d-text)" }}>
        <div className="wrap sec">
          {sec("2 — Representative matters")}
          <h2 data-reveal="" style={{ ...h2, margin: "16px 0 12px" }}>Outcomes, stated plainly.</h2>
          <p className="muted" style={{ fontSize: 15, marginBottom: 40 }}>Client identities withheld. Detail is discussed under privilege.</p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 640, fontSize: 15 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--d-text)", textAlign: "left" }}>
                  {["No.", "Area", "Matter", "Outcome"].map((h) => (
                    <th key={h} style={{ fontFamily: mono, fontWeight: 400, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", padding: "10px 16px 10px 0", color: "var(--d-muted)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DOCKET.map((d, i) => (
                  <tr key={d.no} data-reveal="" className="cell" style={{ borderBottom: "1px solid var(--d-divider)", borderRight: 0, ["--d" as string]: `${i * 90}ms` }}>
                    <td style={{ fontFamily: mono, fontSize: 13, padding: "20px 16px 20px 0", color: "var(--d-accent)", whiteSpace: "nowrap" }}>{d.no}</td>
                    <td style={{ padding: "20px 16px 20px 0" }}>{d.area}</td>
                    <td style={{ padding: "20px 16px 20px 0", fontFamily: "var(--d-head)", fontSize: 20 }}>{d.matter}</td>
                    <td style={{ padding: "20px 0", fontWeight: 500 }}>{d.outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="wrap sec">
        {sec("3 — How engagements begin")}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))", gap: 32, marginTop: 32 }}>
          {PROCESS.map(([t, c], i) => (
            <div key={t} data-reveal="" style={{ borderTop: "1px solid var(--d-text)", paddingTop: 20, ["--d" as string]: `${i * 100}ms` }}>
              <span style={{ fontFamily: "var(--d-head)", fontSize: 44, lineHeight: 1, color: "var(--d-accent)" }}>{["i", "ii", "iii", "iv"][i]}.</span>
              <strong style={{ display: "block", fontFamily: "var(--d-head)", fontSize: 24, fontWeight: 500, margin: "14px 0 8px" }}>{t}</strong>
              <p className="muted" style={{ fontSize: 15, lineHeight: 1.65 }}>{c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section style={{ background: "var(--d-text)", color: "var(--d-bg)" }}>
        <div className="wrap sec" style={{ maxWidth: 1040 }}>
          <blockquote data-reveal="" style={{ margin: 0, fontFamily: "var(--d-head)", fontSize: "clamp(30px,3.8vw,52px)", lineHeight: 1.18, letterSpacing: "-.01em" }}>
            “They gave us a clear position within a week and closed the matter without it ever becoming public. That discretion was worth more than the invoice.”
          </blockquote>
          <p style={{ fontFamily: mono, fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", marginTop: 28, opacity: 0.7 }}>Managing partner, private equity firm · client since 2019</p>
        </div>
      </section>

      {/* FAQ + Intake */}
      <section className="wrap sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,400px),1fr))", gap: "clamp(48px,7vw,112px)", alignItems: "start" }}>
        <div id="faq">
          {sec("4 — Before you retain counsel")}
          <h2 data-reveal="" style={{ ...h2, margin: "16px 0 32px" }}>What clients ask first.</h2>
          <div style={{ borderTop: "1px solid var(--d-text)" }}>
            {FAQS.map(([q, a], i) => (
              <div key={q} style={{ borderBottom: "1px solid var(--d-divider)" }}>
                <button type="button" aria-expanded={faq === i} onClick={() => setFaq(faq === i ? null : i)} className="hover-accent" style={{ all: "unset", cursor: "pointer", width: "100%", display: "flex", justifyContent: "space-between", gap: 16, padding: "20px 0", fontFamily: "var(--d-head)", fontSize: 21 }}>
                  <span>{q}</span>
                  <span style={{ color: "var(--d-accent)" }}>{faq === i ? "−" : "+"}</span>
                </button>
                {faq === i && <p className="muted step-in" style={{ paddingBottom: 20, fontSize: 15, lineHeight: 1.65 }}>{a}</p>}
              </div>
            ))}
          </div>
        </div>

        <div id="intake" data-reveal="" style={{ border: "1px solid var(--d-text)", background: "#fbf9f4" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 24px", borderBottom: "1px solid var(--d-text)" }}>
            <strong style={{ fontFamily: "var(--d-head)", fontSize: 22, fontWeight: 500 }}>Confidential intake</strong>
            <span style={{ fontFamily: mono, fontSize: 12 }}>{Math.min(step + 1, 3)} / 3</span>
          </div>
          <div key={step} className="step-in" style={{ padding: "28px 24px 32px" }}>
            {step === 0 && (
              <>
                <p style={{ fontFamily: "var(--d-head)", fontSize: 24, marginBottom: 20 }}>What is the matter about?</p>
                <div style={{ display: "grid", gap: 8 }}>
                  {AREAS.map((a) => (
                    <button key={a} type="button" className="opt" aria-pressed={area === a} onClick={() => { setArea(a); setStep(1); }}>
                      <span>{a}</span><span>→</span>
                    </button>
                  ))}
                </div>
              </>
            )}
            {step === 1 && (
              <>
                <p style={{ fontFamily: "var(--d-head)", fontSize: 24, marginBottom: 20 }}>How time-sensitive is it?</p>
                <div style={{ display: "grid", gap: 8 }}>
                  {URGENCY.map((u) => (
                    <button key={u} type="button" className="opt" aria-pressed={urgency === u} onClick={() => { setUrgency(u); setStep(2); }}>
                      <span>{u}</span><span>→</span>
                    </button>
                  ))}
                </div>
              </>
            )}
            {step === 2 && (
              <form onSubmit={(e) => { e.preventDefault(); setStep(3); }} style={{ display: "grid", gap: 14 }}>
                <p className="muted" style={{ fontSize: 14 }}>{area} · {urgency}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div className="field">
                    <label htmlFor="ac-name">Full name</label>
                    <input id="ac-name" className="input" required value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="field">
                    <label htmlFor="ac-org">Company or family office</label>
                    <input id="ac-org" className="input" />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div className="field">
                    <label htmlFor="ac-email">Email</label>
                    <input id="ac-email" className="input" required type="email" />
                  </div>
                  <div className="field">
                    <label htmlFor="ac-phone">Phone</label>
                    <input id="ac-phone" className="input" type="tel" />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="ac-other">Other parties involved (for our conflict check)</label>
                  <input id="ac-other" className="input" placeholder="Company or individual names" />
                </div>
                <div className="field">
                  <label htmlFor="ac-sum">A brief summary — no privileged detail yet</label>
                  <textarea id="ac-sum" className="input" required />
                </div>
                <button type="submit" className="btn btn-primary btn-row" style={{ padding: 16, fontFamily: "var(--d-body)", fontWeight: 500 }}>
                  <span>Submit for partner review</span>
                  <span className="arr">→</span>
                </button>
                <p className="faint" style={{ fontSize: 12 }}>Submitting does not create an attorney–client relationship. We run a conflict check before any call.</p>
              </form>
            )}
            {step === 3 && (
              <>
                <p style={{ fontFamily: "var(--d-head)", fontSize: 32, lineHeight: 1.1, marginBottom: 12 }}>Received, {(name || "thank you").split(" ")[0]}.</p>
                <p style={{ fontSize: 15, lineHeight: 1.65 }}>A partner will review after our conflict check and contact you within 48 hours — sooner if there is an active deadline.</p>
                <DemoSuccessNote demo="law-firm">In a live build, this routes the intake to the right partner, runs the conflict-check queue, and confirms receipt to the client.</DemoSuccessNote>
              </>
            )}
            {step > 0 && step < 3 && (
              <button type="button" className="btn btn-ghost" onClick={() => setStep((s) => s - 1)} style={{ marginTop: 16, paddingLeft: 0, fontFamily: "var(--d-body)" }}>← Back</button>
            )}
          </div>
        </div>
      </section>

      <footer className="wrap faint" style={{ padding: "32px var(--d-pad)", borderTop: "1px solid var(--d-text)", display: "flex", gap: 24, justifyContent: "space-between", flexWrap: "wrap", fontSize: 13 }}>
        <span>Ashford &amp; Cole LLP · Boston · New York · Attorney advertising</span>
        <span>Fictional firm — design by bajwaa.dev</span>
      </footer>
    </DemoRoot>
  );
}

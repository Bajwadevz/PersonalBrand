"use client";

import { useEffect, useState } from "react";

/**
 * Live Perth time plus a business-hours overlap chart against Sydney/Melbourne.
 * Everything is computed in the browser with Intl, so daylight saving in the
 * eastern states is handled automatically. Server render shows a static
 * explanation (no hydration mismatch, still useful without JS).
 */

const START = 6;  // chart window, Perth time
const END = 20;
const SPAN = END - START;

function offsetHours(zone: string, at: Date) {
  const parts = new Intl.DateTimeFormat("en-AU", { timeZone: zone, timeZoneName: "shortOffset" }).formatToParts(at);
  const raw = parts.find(p => p.type === "timeZoneName")?.value ?? "GMT";
  const m = raw.match(/GMT([+-]\d+)(?::(\d+))?/);
  if (!m) return 0;
  const h = Number(m[1]);
  return h + Math.sign(h) * (Number(m[2] ?? 0) / 60);
}

function fmtHour(h: number) {
  const whole = Math.floor(h);
  const mins = Math.round((h - whole) * 60);
  const suffix = whole >= 12 ? "pm" : "am";
  const twelve = whole % 12 === 0 ? 12 : whole % 12;
  return `${twelve}${mins ? `:${String(mins).padStart(2, "0")}` : ""}${suffix}`;
}

const pct = (h: number) => `${((Math.min(END, Math.max(START, h)) - START) / SPAN) * 100}%`;

type State = { time: string; day: string; perthHour: number; diff: number; eastLabel: string };

export default function PerthClock() {
  const [s, setS] = useState<State | null>(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const perth = offsetHours("Australia/Perth", now);
      const sydney = offsetHours("Australia/Sydney", now);
      const parts = new Intl.DateTimeFormat("en-AU", { timeZone: "Australia/Perth", hour: "numeric", minute: "2-digit", hour12: false }).formatToParts(now);
      const hh = Number(parts.find(p => p.type === "hour")?.value ?? 0) % 24;
      const mm = Number(parts.find(p => p.type === "minute")?.value ?? 0);
      setS({
        time: new Intl.DateTimeFormat("en-AU", { timeZone: "Australia/Perth", hour: "numeric", minute: "2-digit", hour12: true }).format(now),
        day: new Intl.DateTimeFormat("en-AU", { timeZone: "Australia/Perth", weekday: "long", day: "numeric", month: "long" }).format(now),
        perthHour: hh + mm / 60,
        diff: sydney - perth,
        eastLabel: sydney - perth > 2 ? "AEDT" : "AEST",
      });
    };
    tick();
    const id = window.setInterval(tick, 15_000);
    return () => window.clearInterval(id);
  }, []);

  const diff = s?.diff ?? 2;
  const eastStart = 9 - diff; // eastern 9am, in Perth time
  const eastEnd = 17 - diff;
  const overlapStart = Math.max(9, eastStart);
  const overlapEnd = Math.min(17, eastEnd);
  const nowInRange = s && s.perthHour >= START && s.perthHour <= END;
  const open = s ? s.perthHour >= 9 && s.perthHour < 17 : false;

  return (
    <div className="perth-clock glass">
      <div className="perth-clock-head">
        <span className="perth-clock-label">
          <span className={`perth-live${open ? " is-open" : ""}`} aria-hidden="true" />
          Perth time · AWST (UTC+8)
        </span>
        <p className="perth-clock-time" aria-live="off">
          {s ? <time suppressHydrationWarning>{s.time}</time> : <span>AWST</span>}
        </p>
        <p className="perth-clock-day">
          {s ? <>{s.day} · {open ? "within business hours" : "outside business hours"}</> : "No daylight saving in WA, all year."}
        </p>
      </div>

      <figure className="perth-overlap" aria-labelledby="perth-overlap-cap">
        <div className="perth-axis" aria-hidden="true">
          {[6, 9, 12, 15, 18].map(h => <span key={h} style={{ left: pct(h) }}>{fmtHour(h)}</span>)}
        </div>
        <div className="perth-rows">
        <div className="perth-row">
          <span className="perth-row-name">Perth</span>
          <span className="perth-track">
            <span className="perth-bar perth-bar-wa" style={{ left: pct(9), right: `calc(100% - ${pct(17)})` }} />
          </span>
        </div>
        <div className="perth-row">
          <span className="perth-row-name">Syd / Melb</span>
          <span className="perth-track">
            <span className="perth-bar perth-bar-east" style={{ left: pct(eastStart), right: `calc(100% - ${pct(eastEnd)})` }} />
          </span>
        </div>
        <div className="perth-row perth-row-overlap">
          <span className="perth-row-name">Overlap</span>
          <span className="perth-track">
            <span className="perth-bar perth-bar-both" style={{ left: pct(overlapStart), right: `calc(100% - ${pct(overlapEnd)})` }} />
          </span>
        </div>
        {nowInRange && <span className="perth-now-layer" aria-hidden="true"><span className="perth-now" style={{ left: pct(s.perthHour) }}><span>now</span></span></span>}
        </div>
        <figcaption id="perth-overlap-cap">
          {s
            ? <>Sydney and Melbourne are {diff} hours ahead ({s.eastLabel}). 9am–5pm in both overlaps from <strong>{fmtHour(overlapStart)} to {fmtHour(overlapEnd)} Perth time</strong>. We book Perth calls in Perth hours.</>
            : <>Sydney and Melbourne are 2 hours ahead of Perth (3 during eastern daylight saving). We book Perth calls in Perth hours.</>}
        </figcaption>
      </figure>
    </div>
  );
}

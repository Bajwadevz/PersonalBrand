"use client";

import { useEffect, useState } from "react";
import { callDays, callPeriods, callTimeZones, maxCallTimes, zoneFromBrowser } from "@/lib/scheduling";

/**
 * Preferred call windows (1–3) plus the visitor's time zone. Works as plain
 * checkboxes without JavaScript; the server enforces the same limits.
 */
export default function CallTimePicker({ error, onChange }: { error?: string; onChange?: (times: string[]) => void }) {
  const [times, setTimes] = useState<string[]>([]);
  const [zone, setZone] = useState("");

  useEffect(() => {
    try {
      const detected = zoneFromBrowser(Intl.DateTimeFormat().resolvedOptions().timeZone || "");
      // Hydration-safe: the server cannot know the browser zone, so set it after mount.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (detected) setZone(current => current || detected);
    } catch { /* Fall back to a manual choice. */ }
  }, []);

  function toggle(value: string, checked: boolean) {
    const next = checked ? [...times, value].slice(0, maxCallTimes) : times.filter(time => time !== value);
    setTimes(next);
    onChange?.(next);
  }

  const full = times.length >= maxCallTimes;
  return <div className="call-request">
    <fieldset className="call-times" aria-describedby={`call-times-hint${error ? " call-times-error" : ""}`} aria-invalid={error ? true : undefined}>
      <legend>When could you talk? <span className="field-note">Pick 1–3 windows</span></legend>
      <p id="call-times-hint" className="field-hint">Weekdays, in your time zone. We’ll confirm one of these by email{full ? " — you’ve picked three" : ""}.</p>
      {error && <p id="call-times-error" className="field-error">{error}</p>}
      <div className="time-grid" role="presentation">
        <span aria-hidden="true" />
        {callPeriods.map(([key, , hours]) => <span key={key} className="time-head" aria-hidden="true">{hours}</span>)}
        {callDays.map(([day, dayLabel]) => <div key={day} className="time-row" role="group" aria-label={dayLabel}>
          <span className="time-day" aria-hidden="true"><span className="long">{dayLabel}</span><span className="short">{dayLabel.slice(0, 3)}</span></span>
          {callPeriods.map(([period, label, hours]) => {
            const value = `${day}-${period}`;
            const checked = times.includes(value);
            return <label key={value} className="time-chip">
              <input type="checkbox" name="times" value={value} checked={checked} disabled={full && !checked}
                onChange={event => toggle(value, event.currentTarget.checked)} aria-label={`${dayLabel} ${label.toLowerCase()}, ${hours}`} />
              <span aria-hidden="true">{label}</span>
            </label>;
          })}
        </div>)}
      </div>
    </fieldset>
    <label className="tz-field">Your time zone
      <select required name="timezone" value={zone} onChange={event => setZone(event.currentTarget.value)}>
        <option value="" disabled>Select a time zone</option>
        {callTimeZones.map(([key, label]) => <option key={key} value={key}>{label}</option>)}
      </select>
    </label>
    <label className="tz-other">Which city or time zone?<input name="timezoneOther" maxLength={60} placeholder="For example, Auckland" /></label>
  </div>;
}

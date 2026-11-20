// Shared, client-safe scheduling and qualification options for the discovery request.
// The server validates against these same lists, so the UI and API cannot drift.

export const callDays = [["mon", "Monday"], ["tue", "Tuesday"], ["wed", "Wednesday"], ["thu", "Thursday"], ["fri", "Friday"]] as const;
export const callPeriods = [["am", "Morning", "9am–12pm"], ["mid", "Midday", "12–2pm"], ["pm", "Afternoon", "2–5pm"]] as const;
export const maxCallTimes = 3;
export const callTimeValues: readonly string[] = callDays.flatMap(([day]) => callPeriods.map(([period]) => `${day}-${period}`));

export function callTimeLabel(value: string) {
  const [dayKey, periodKey] = value.split("-");
  const day = callDays.find(([key]) => key === dayKey);
  const period = callPeriods.find(([key]) => key === periodKey);
  return day && period ? `${day[1]} ${period[1].toLowerCase()} (${period[2]})` : value;
}

export const callTimeZones = [
  ["Australia/Perth", "Perth (AWST)"],
  ["Australia/Darwin", "Darwin (ACST)"],
  ["Australia/Adelaide", "Adelaide (ACST/ACDT)"],
  ["Australia/Brisbane", "Brisbane (AEST)"],
  ["Australia/Sydney", "Sydney, Melbourne, Canberra, Hobart (AEST/AEDT)"],
  ["Other", "Other time zone"],
] as const;

export function timeZoneLabel(value: string) {
  return callTimeZones.find(([key]) => key === value)?.[1] ?? value;
}

/** Map the browser's IANA zone to one of the offered choices. */
export function zoneFromBrowser(zone: string) {
  const exact = callTimeZones.find(([key]) => key === zone);
  if (exact) return exact[0];
  if (/^Australia\/(Melbourne|Hobart|Canberra|ACT|NSW|Victoria|Tasmania|Currie)$/.test(zone)) return "Australia/Sydney";
  if (/^Australia\/(Lindeman|Queensland)$/.test(zone)) return "Australia/Brisbane";
  if (/^Australia\/(Broken_Hill|South|Yancowinna)$/.test(zone)) return "Australia/Adelaide";
  if (/^Australia\/(North)$/.test(zone)) return "Australia/Darwin";
  if (/^Australia\/(West|Eucla)$/.test(zone)) return "Australia/Perth";
  return zone ? "Other" : "";
}

export const systemOptions = ["HubSpot", "Xero", "MYOB", "Salesforce", "Gmail/Outlook", "Job management", "Spreadsheets", "Other"] as const;
export const frequencies = [["daily", "Daily"], ["weekly", "Weekly"], ["monthly", "Monthly"]] as const;

export type CallRequest = { times: string[]; timezone: string; timezoneOther: string };

/** Short, non-personal receipt used by the no-JavaScript success page. */
export function encodeCallReceipt(request: CallRequest) {
  return encodeURIComponent(`${request.times.join(".")}~${request.timezone}`);
}

export function decodeCallReceipt(value: string | undefined): CallRequest | null {
  if (!value) return null;
  try {
    const [times, timezone] = decodeURIComponent(value).split("~");
    const list = times.split(".").filter(Boolean);
    const validTimes = list.length > 0 && list.length <= maxCallTimes && list.every(time => callTimeValues.includes(time));
    if (!validTimes || !callTimeZones.some(([key]) => key === timezone)) return null;
    return { times: list, timezone, timezoneOther: "" };
  } catch {
    return null;
  }
}

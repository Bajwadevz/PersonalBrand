import { track } from "@vercel/analytics";
import { campaignKeys, campaignValue } from "./discovery";

export type FunnelEvent = "cta_click" | "booking_link_open" | "lead_form_start" | "lead_form_submit_success" | "lead_form_submit_error";
export function funnelEvent(name: FunnelEvent) {
  // Analytics must never interrupt navigation, validation or delivery.
  try { track(name); } catch { /* Analytics may be blocked or unavailable. */ }
}

export function firstCampaign() {
  const params = new URLSearchParams(window.location.search);
  const current = Object.fromEntries(campaignKeys.map(key => [key, campaignValue(params.get(key))]));
  try {
    const stored = sessionStorage.getItem("agency-campaign");
    if (stored) {
      const parsed = JSON.parse(stored);
      return Object.fromEntries(campaignKeys.map(key => [key, campaignValue(parsed[key])]));
    }
    if (Object.values(current).some(Boolean)) sessionStorage.setItem("agency-campaign", JSON.stringify(current));
  } catch { /* Browser storage is optional. */ }
  return current;
}

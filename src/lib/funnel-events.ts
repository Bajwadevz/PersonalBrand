import { track } from "@vercel/analytics";
import { campaignKeys, campaignValue } from "./discovery";

export type FunnelEvent = "cta_click" | "booking_link_open" | "lead_form_start" | "lead_form_submit_success" | "lead_form_submit_error";
/**
 * Properties are limited to short non-personal labels (for example a CTA id or a
 * page path). Anything else is dropped so enquiry content can never leak in.
 */
export function funnelEvent(name: FunnelEvent, props?: Record<string, string>) {
  const safe = props && Object.fromEntries(Object.entries(props).filter(([, value]) => /^[a-z0-9/_-]{1,60}$/i.test(value)));
  // Analytics must never interrupt navigation, validation or delivery.
  try { track(name, safe && Object.keys(safe).length ? safe : undefined); } catch { /* Analytics may be blocked or unavailable. */ }
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

"use client";

import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { firstCampaign, funnelEvent } from "@/lib/funnel-events";

export default function ClientAnalytics() {
  useEffect(() => {
    firstCampaign();
    // One global listener: data-cta elements and calendar links. Only the CTA id
    // and current path are sent, never form content or query strings.
    const click = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const page = location.pathname;
      if (event.target.closest("[data-discovery-calendar]")) return funnelEvent("booking_link_open", { page });
      const cta = event.target.closest<HTMLElement>("[data-cta]");
      if (cta) return funnelEvent("cta_click", { cta: cta.dataset.cta || "unknown", page });
      const anchor = event.target.closest("a");
      if (anchor && anchor.origin === location.origin && anchor.pathname === "/contact") funnelEvent("cta_click", { cta: "contact-link", page });
    };
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, []);
  return <Analytics beforeSend={event => {
    const url = new URL(event.url, window.location.origin);
    url.search = "";
    url.hash = "";
    return { ...event, url: url.toString() };
  }} />;
}

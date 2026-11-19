"use client";

import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { firstCampaign, funnelEvent } from "@/lib/funnel-events";

export default function ClientAnalytics() {
  useEffect(() => {
    firstCampaign();
    const click = (event: MouseEvent) => {
      const anchor = event.target instanceof Element && event.target.closest("a");
      if (!anchor) return;
      if (anchor.hasAttribute("data-discovery-calendar")) funnelEvent("booking_link_open");
      else if (anchor.origin === location.origin && anchor.pathname === "/contact") funnelEvent("cta_click");
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

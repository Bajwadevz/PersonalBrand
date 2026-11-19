import type { Metadata } from "next";
import localFont from "next/font/local";
import Halden from "./Client";

const sans = localFont({
  variable: "--f-inst-sans",
  preload: false,
  src: [
    { path: "../../../fonts/instrument-sans-normal-400-600.woff2", weight: "400 600", style: "normal" },
  ],
});
const serif = localFont({
  variable: "--f-inst-serif",
  preload: false,
  src: [
    { path: "../../../fonts/instrument-serif-italic-400.woff2", weight: "400", style: "italic" },
    { path: "../../../fonts/instrument-serif-normal-400.woff2", weight: "400", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Halden Advisory — Consulting Concept Demo",
  description: "Concept advisory-firm website by bajwaa.dev: editorial restraint, case carousel, three-step call booking.",
  robots: { index: false },
};

export default function Page() {
  return (
    <div className={`${sans.variable} ${serif.variable}`}>
      <Halden />
    </div>
  );
}

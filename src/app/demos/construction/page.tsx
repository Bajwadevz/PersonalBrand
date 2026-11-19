import type { Metadata } from "next";
import localFont from "next/font/local";
import Ridgeform from "./Client";

const condensed = localFont({
  variable: "--f-barlow-c",
  preload: false,
  src: [
    { path: "../../../fonts/barlow-condensed-normal-600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/barlow-condensed-normal-800.woff2", weight: "800", style: "normal" },
    { path: "../../../fonts/barlow-condensed-normal-700.woff2", weight: "700", style: "normal" },
  ],
});
const barlow = localFont({
  variable: "--f-barlow",
  preload: false,
  src: [
    { path: "../../../fonts/barlow-normal-700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/barlow-normal-500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/barlow-normal-400.woff2", weight: "400", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Ridgeform Builders — Construction Concept Demo",
  description: "Concept general-contractor website by bajwaa.dev: live budget estimator, project portfolio, fixed-price process.",
  robots: { index: false },
};

export default function Page() {
  return (
    <div className={`${condensed.variable} ${barlow.variable}`}>
      <Ridgeform />
    </div>
  );
}

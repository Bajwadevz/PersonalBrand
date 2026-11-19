import type { Metadata } from "next";
import localFont from "next/font/local";
import FosterStone from "./Client";

const syne = localFont({
  variable: "--f-syne",
  preload: false,
  src: [
    { path: "../../../fonts/syne-normal-400-800.woff2", weight: "400 800", style: "normal" },
  ],
});
const dm = localFont({
  variable: "--f-dm",
  preload: false,
  src: [
    { path: "../../../fonts/dm-sans-normal-100-1000.woff2", weight: "100 1000", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Foster & Stone — Architecture & Interiors Concept Demo",
  description: "Concept architecture and interiors studio website by bajwaa.dev: project index, before/after, material library, project inquiry.",
  robots: { index: false },
};

export default function Page() {
  return (
    <div className={`${syne.variable} ${dm.variable}`}>
      <FosterStone />
    </div>
  );
}

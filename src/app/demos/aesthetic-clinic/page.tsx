import type { Metadata } from "next";
import localFont from "next/font/local";
import Lumiere from "./Client";

const bodoni = localFont({
  variable: "--f-bodoni",
  preload: false,
  src: [
    { path: "../../../fonts/bodoni-moda-italic-400-500.woff2", weight: "400 500", style: "italic" },
    { path: "../../../fonts/bodoni-moda-normal-400-500.woff2", weight: "400 500", style: "normal" },
  ],
});
const jost = localFont({
  variable: "--f-jost",
  preload: false,
  src: [
    { path: "../../../fonts/jost-normal-300-500.woff2", weight: "300 500", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Lumière — Aesthetic Clinic Concept Demo",
  description: "Concept aesthetic-clinic website by bajwaa.dev: treatment menu, recovery timeline, consultation booking.",
  robots: { index: false },
};

export default function Page() {
  return (
    <div className={`${bodoni.variable} ${jost.variable}`}>
      <Lumiere />
    </div>
  );
}

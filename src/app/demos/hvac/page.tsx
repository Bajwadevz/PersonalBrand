import type { Metadata } from "next";
import localFont from "next/font/local";
import NorthlineAir from "./Client";

const archivo = localFont({
  variable: "--f-archivo",
  preload: false,
  src: [
    { path: "../../../fonts/archivo-normal-400-800.woff2", weight: "400 800", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Northline Air — HVAC Concept Demo",
  description: "Concept HVAC website by bajwaa.dev: same-day booking flow, flat-rate services, comfort plans.",
  robots: { index: false },
};

export default function Page() {
  return (
    <div className={archivo.variable}>
      <NorthlineAir />
    </div>
  );
}

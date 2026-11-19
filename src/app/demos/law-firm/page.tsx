import type { Metadata } from "next";
import localFont from "next/font/local";
import AshfordCole from "./Client";

const garamond = localFont({
  variable: "--f-garamond",
  preload: false,
  src: [
    { path: "../../../fonts/eb-garamond-italic-400-600.woff2", weight: "400 600", style: "italic" },
    { path: "../../../fonts/eb-garamond-normal-400-600.woff2", weight: "400 600", style: "normal" },
  ],
});
const plex = localFont({
  variable: "--f-plex",
  preload: false,
  src: [
    { path: "../../../fonts/ibm-plex-sans-normal-400-600.woff2", weight: "400 600", style: "normal" },
  ],
});
const plexMono = localFont({
  variable: "--f-plex-mono",
  preload: false,
  src: [
    { path: "../../../fonts/ibm-plex-mono-normal-400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/ibm-plex-mono-normal-500.woff2", weight: "500", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Ashford & Cole — Law Firm Concept Demo",
  description: "Concept boutique law-firm website by bajwaa.dev: practice index, matter docket, confidential three-step intake.",
  robots: { index: false },
};

export default function Page() {
  return (
    <div className={`${garamond.variable} ${plex.variable} ${plexMono.variable}`}>
      <AshfordCole />
    </div>
  );
}

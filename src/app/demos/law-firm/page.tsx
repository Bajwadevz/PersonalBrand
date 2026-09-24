import type { Metadata } from "next";
import { EB_Garamond, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import AshfordCole from "./Client";

const garamond = EB_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--f-garamond" });
const plex = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--f-plex" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--f-plex-mono" });

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

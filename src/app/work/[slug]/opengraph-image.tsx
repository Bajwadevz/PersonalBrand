import { ImageResponse } from "next/og";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

export const alt = "bajwaa.dev case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const study = getCaseStudy((await params).slug);
  const metric = study?.metrics[0];
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "80px", background: "linear-gradient(140deg, #0E2A47 0%, #0B0F1A 100%)", color: "#fff", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 4, color: "#3FD0FF", textTransform: "uppercase" }}>Case study · client work, anonymised</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {metric && <div style={{ display: "flex", fontSize: 120, fontWeight: 800, color: "#85CCEF", lineHeight: 1 }}>{`${metric.value}${metric.suffix ?? ""}`}</div>}
          {metric && <div style={{ display: "flex", fontSize: 32, color: "#ACC7DD", marginTop: 12 }}>{metric.label}</div>}
          <div style={{ display: "flex", fontSize: 54, fontWeight: 800, marginTop: 36, lineHeight: 1.1, maxWidth: 1000 }}>{study?.title ?? "bajwaa.dev"}</div>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#ACC7DD" }}>bajwaa.dev · AI implementation for Australian businesses</div>
      </div>
    ),
    size,
  );
}

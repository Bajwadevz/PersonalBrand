import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";

type Demo = {
  href: string;
  name: string;
  category: string;
  line: string;
  bg: string;
  fg: string;
  accent: string;
  font: string;
  upper?: boolean;
  italic?: boolean;
  photo?: string;
};

// Each preview is rendered in its own demo's palette and type voice, so the
// grid itself shows that no two sites share a template.
const DEMOS: Demo[] = [
  { href: "/demos/hvac", name: "Northline Air", category: "Heating & cooling", line: "Cold air by tonight.", bg: "#f3f2f2", fg: "#201e1d", accent: "#ec3013", font: "system-ui, sans-serif", photo: "/demos/northline-tech.jpg" },
  { href: "/demos/construction", name: "Ridgeform Builders", category: "General contractor", line: "Built on budget.", bg: "#161614", fg: "#efece4", accent: "#f5c400", font: "'Arial Narrow', 'Roboto Condensed', system-ui, sans-serif", upper: true, photo: "/demos/ridgeform-hero.jpg" },
  { href: "/demos/consulting", name: "Halden Advisory", category: "Executive advisory", line: "Fewer priorities.", bg: "#f7f6f2", fg: "#141413", accent: "#1f4d3a", font: "Georgia, 'Times New Roman', serif", italic: true, photo: "/demos/halden-work.jpg" },
  { href: "/demos/plumbing", name: "ClearFlow Plumbing", category: "Residential plumbing", line: "Price agreed first.", bg: "#eef1f2", fg: "#0f1a20", accent: "#0a5bd8", font: "system-ui, sans-serif" },
  { href: "/demos/law-firm", name: "Ashford & Cole", category: "Boutique law firm", line: "Left to chance.", bg: "#f4f1ea", fg: "#16140f", accent: "#6d1f1c", font: "Garamond, Georgia, serif", italic: true },
  { href: "/demos/aesthetic-clinic", name: "Lumière", category: "Aesthetic clinic", line: "Look rested. Not done.", bg: "#f5efe8", fg: "#2a2420", accent: "#9a5b45", font: "'Didot', 'Bodoni 72', Georgia, serif", italic: true },
  { href: "/demos/renovation", name: "Foster & Stone", category: "Architecture & interiors", line: "Rooms, redrawn.", bg: "#e7e3dc", fg: "#121212", accent: "#8a6a3b", font: "system-ui, sans-serif" },
];

export default function DemoShowcase() {
  return (
    <section className="py-20 md:py-28 relative z-10 w-full overflow-hidden">
      <div className="container-shell w-full">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-site-border)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest muted-copy bg-[rgba(45,106,143,0.06)]">
              <Sparkles className="h-3.5 w-3.5 text-[var(--color-ocean)]" />
              <span>Website concepts for service businesses</span>
            </div>
            <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-extrabold tracking-tight leading-[1.05]">
              Seven businesses. Seven different websites.
            </h2>
          </div>
          <p className="max-w-md text-base muted-copy leading-relaxed">
            Each concept is designed around how that trade actually sells — a booking flow for HVAC, a live estimator for a builder, a confidential intake for a law firm.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DEMOS.map((d, i) => (
            <Link
              key={d.href}
              href={d.href}
              className={`group relative flex flex-col overflow-hidden border border-[var(--color-card-border)] transition-transform duration-300 hover:-translate-y-1 ${i === 0 || i === DEMOS.length - 1 ? "lg:col-span-2" : ""}`}
              style={{ background: d.bg, color: d.fg }}
            >
              <div className="relative flex min-h-[260px] flex-1 flex-col justify-between p-6">
                {d.photo && (
                  <>
                    <Image
                      src={d.photo}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      className="object-cover grayscale opacity-25 transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-35"
                    />
                    <span aria-hidden className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${d.bg}00 0%, ${d.bg} 88%)` }} />
                  </>
                )}
                <div className="relative flex items-center justify-between text-[11px] uppercase tracking-[0.12em]">
                  <span style={{ color: d.accent }}>{d.category}</span>
                  <span className="opacity-60">Concept</span>
                </div>
                <p
                  className="relative mt-10 text-[clamp(2rem,3.4vw,2.8rem)] leading-[0.98] tracking-tight"
                  style={{
                    fontFamily: d.font,
                    fontWeight: d.italic ? 400 : 800,
                    fontStyle: d.italic ? "italic" : "normal",
                    textTransform: d.upper ? "uppercase" : "none",
                    color: d.fg,
                  }}
                >
                  {d.line}
                </p>
              </div>
              <div
                className="relative flex items-center justify-between px-6 py-4 text-sm font-semibold"
                style={{ borderTop: `2px solid ${d.fg}` }}
              >
                <span className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5" style={{ background: d.accent }} />
                  {d.name}
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: d.accent }} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

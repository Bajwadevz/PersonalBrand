import Link from "next/link";
import { ArrowUpRight, Flame, Wrench, Sparkles, CheckCircle2, Scale, Sparkle, TrendingUp, Compass } from "lucide-react";

const DEMOS = [
  {
    href: "/demos/plumbing",
    url: "clearflow-plumbing-demo.bajwaa.dev",
    icon: Wrench,
    name: "ClearFlow Plumbing Co.",
    category: "Plumbing & Drain Services",
    description: "Emergency leak response, mobile 1-click calls, and instant lead capture.",
    features: ["Emergency vs. routine request selector", "Upfront job cost estimator"],
    accent: "blue",
  },
  {
    href: "/demos/hvac",
    url: "northstar-hvac-demo.bajwaa.dev",
    icon: Flame,
    name: "Northstar Heating & Air",
    category: "Heating & Air Conditioning",
    description: "Seasonal AC/heating pathways with a symptom diagnostic picker.",
    features: ["AC vs. heating diagnostic switcher", "SEER2 savings calculator"],
    accent: "amber",
  },
  {
    href: "/demos/law-firm",
    url: "ashford-cole-demo.bajwaa.dev",
    icon: Scale,
    name: "Ashford & Cole LLP",
    category: "Boutique Law Firm",
    description: "Quiet-luxury positioning for a firm that leads with discretion and trust.",
    features: ["Editorial practice-area explorer", "Confidential intake form"],
    accent: "gold",
  },
  {
    href: "/demos/aesthetic-clinic",
    url: "lumiere-clinic-demo.bajwaa.dev",
    icon: Sparkle,
    name: "Lumière Aesthetic Studio",
    category: "Cosmetic & Aesthetic Clinic",
    description: "Warm, restrained luxury for a clinic that sells results, not hype.",
    features: ["Treatment outcome explorer", "Real-results transformation gallery"],
    accent: "champagne",
  },
  {
    href: "/demos/consulting",
    url: "meridian-strategy-demo.bajwaa.dev",
    icon: TrendingUp,
    name: "Meridian Strategy Partners",
    category: "Executive Consulting Firm",
    description: "Sharp, data-led positioning built for boards and operators.",
    features: ["Outcome-driven mandate explorer", "Case-result proof grid"],
    accent: "bronze",
  },
  {
    href: "/demos/renovation",
    url: "foster-stone-demo.bajwaa.dev",
    icon: Compass,
    name: "Foster & Stone Studio",
    category: "Architecture & Renovation",
    description: "Material-driven, full-bleed storytelling for a design-build studio.",
    features: ["Full-bleed project switcher", "Fixed-price process walkthrough"],
    accent: "brass",
  },
];

const ACCENT_STYLES: Record<string, { icon: string; badge: string; url: string }> = {
  blue: {
    icon: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    badge: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    url: "text-blue-300",
  },
  amber: {
    icon: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    badge: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    url: "text-amber-300",
  },
  gold: {
    icon: "bg-[#b8973e]/20 text-[#d8bc72] border-[#b8973e]/30",
    badge: "bg-[#b8973e]/20 text-[#e9d9ad] border-[#b8973e]/30",
    url: "text-[#d8bc72]",
  },
  champagne: {
    icon: "bg-[#d8c3a5]/20 text-[#e7d6ba] border-[#d8c3a5]/30",
    badge: "bg-[#d8c3a5]/20 text-[#f0e5d2] border-[#d8c3a5]/30",
    url: "text-[#e7d6ba]",
  },
  bronze: {
    icon: "bg-[#a97d50]/20 text-[#cba377] border-[#a97d50]/30",
    badge: "bg-[#a97d50]/20 text-[#d8bb98] border-[#a97d50]/30",
    url: "text-[#cba377]",
  },
  brass: {
    icon: "bg-[#9c7a4a]/20 text-[#c2a172] border-[#9c7a4a]/30",
    badge: "bg-[#9c7a4a]/20 text-[#d6bd97] border-[#9c7a4a]/30",
    url: "text-[#c2a172]",
  },
};

export default function DemoShowcase() {
  return (
    <section className="py-20 md:py-28 relative z-10 w-full overflow-hidden">
      <div className="container-shell w-full">
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-site-border)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest muted-copy bg-[rgba(45,106,143,0.06)]">
            <Sparkles className="h-3.5 w-3.5 text-[var(--color-ocean)]" />
            <span>WEBSITE CONCEPTS FOR SERVICE BUSINESSES</span>
          </div>
          <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-extrabold tracking-tight mb-4">
            Built to turn visitors into calls, consultations, and booked work
          </h2>
          <p className="text-base muted-copy leading-relaxed">
            Six premium homepage concepts spanning trades, wellness, and high-ticket professional services —
            each with a distinct look, structure, and conversion path.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEMOS.map((demo) => {
            const Icon = demo.icon;
            const styles = ACCENT_STYLES[demo.accent];
            return (
              <div
                key={demo.href}
                className="glass-card card-hover demo-hairline relative flex flex-col rounded-3xl overflow-hidden group shadow-xl"
              >
                {/* Browser Top Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${styles.badge}`}>
                    Concept Demo
                  </span>
                </div>

                {/* Visual Teaser Body */}
                <div className="p-6 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 border-b border-slate-800 text-white flex-grow">
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border shadow-lg mb-4 ${styles.icon}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className={`text-[11px] font-bold uppercase tracking-widest mb-1 ${styles.url}`}>
                    {demo.category}
                  </p>
                  <h3 className="text-lg font-black mb-2 text-white">{demo.name}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{demo.description}</p>

                  <ul className="space-y-1.5 text-[11px] text-slate-400">
                    {demo.features.map((f) => (
                      <li key={f} className="flex items-center gap-1.5">
                        <CheckCircle2 className={`h-3.5 w-3.5 shrink-0 ${styles.url}`} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="p-5 bg-slate-950/60">
                  <Link
                    href={demo.href}
                    className="w-full bg-slate-800 hover:bg-slate-700 text-white min-h-[44px] text-xs inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all group-hover:scale-[1.01]"
                  >
                    Launch Demo <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

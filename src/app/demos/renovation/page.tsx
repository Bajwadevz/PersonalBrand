"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Plus,
  Minus,
  Compass,
  Hammer,
} from "lucide-react";

const PROJECTS = [
  { id: "coastal", name: "Coastal Modern Residence", location: "Malibu, CA", scope: "Full gut renovation, 4,200 sq ft", tone: "from-[#c9bda9] to-[#8a7d68]" },
  { id: "loft", name: "Industrial Loft Conversion", location: "Chicago, IL", scope: "Structural + interior, 2,800 sq ft", tone: "from-[#a39684] to-[#3a3a38]" },
  { id: "estate", name: "Hillside Family Estate", location: "Austin, TX", scope: "Ground-up architecture, 6,100 sq ft", tone: "from-[#bfae91] to-[#5a5248]" },
];

const CAPABILITIES = [
  { name: "Architecture & Planning", detail: "Full design development from concept through permit-ready drawings." },
  { name: "Whole-Home Renovation", detail: "Structural, mechanical, and finish work under one accountable team." },
  { name: "Interior Design", detail: "Material selection and spatial design carried through to final styling." },
  { name: "Construction Management", detail: "A single point of accountability from groundbreak to final walkthrough." },
];

const PROCESS = [
  { step: "01", title: "Discovery", body: "We walk the site and your goals together before a single sketch is made." },
  { step: "02", title: "Design", body: "Concept, materials, and budget aligned in parallel — not sequentially discovered." },
  { step: "03", title: "Permit & Price", body: "A fixed construction price, locked before you commit to build." },
  { step: "04", title: "Build", body: "Weekly site walkthroughs and a single project lead for the full build." },
];

const FAQS = [
  { q: "Do you handle both design and construction?", a: "Yes — architecture, interior design, and construction management sit under one team and one contract, so nothing gets lost in translation between the designer and the builder." },
  { q: "How accurate is the initial budget?", a: "We price to construction documents, not concept sketches. The number we give you after design development is the number we build to, with contingency clearly stated." },
  { q: "What's a typical project timeline?", a: "Design phases run 8–14 weeks depending on scope. Construction timelines are scoped project-by-project and confirmed in writing before groundbreak." },
  { q: "Do you take on partial renovations, or only full projects?", a: "Both — from single-room renovations to ground-up architecture. We'll tell you honestly in the first walkthrough if your project is a fit for our process." },
];

export default function RenovationDemoPage() {
  const [activeProject, setActiveProject] = useState(PROJECTS[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  const current = PROJECTS.find((p) => p.id === activeProject) || PROJECTS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#efe9de] text-[#1f1d1a] font-sans selection:bg-[#9c7a4a] selection:text-[#efe9de]">
      {/* Concept Demo Banner */}
      <div className="bg-amber-400 text-slate-950 px-4 py-2 text-center text-xs font-bold tracking-wide uppercase shadow-lg flex items-center justify-center gap-2 z-50 sticky top-0 border-b border-amber-500">
        <AlertTriangle className="h-4 w-4 shrink-0 text-slate-950" />
        <span>Concept demo by bajwaa.dev — not a real studio</span>
        <Link href="/services/websites" className="underline ml-2 hover:text-slate-800 text-[11px] font-extrabold whitespace-nowrap">
          Build a site like this →
        </Link>
      </div>

      {/* Header */}
      <header className="bg-[#efe9de]/95 backdrop-blur-xl border-b border-[#d8cebb] sticky top-8 z-40 px-6 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M4 22V12L14 4L24 12V22" stroke="#1f1d1a" strokeWidth="1.4" />
              <path d="M11 22V15H17V22" stroke="#9c7a4a" strokeWidth="1.4" />
            </svg>
            <span className="text-base font-bold tracking-[0.02em] uppercase text-[#1f1d1a]">Foster &amp; Stone</span>
          </div>
          <a href="#inquiry" className="inline-flex items-center gap-2 bg-[#1f1d1a] text-[#efe9de] px-5 py-2.5 text-xs font-semibold uppercase tracking-wide hover:bg-[#332f29] transition-colors">
            Start a Project
          </a>
        </div>
      </header>

      {/* Hero — full-bleed */}
      <section className="relative">
        <div className="h-[70vh] min-h-[480px] bg-gradient-to-br from-[#c9bda9] via-[#a39684] to-[#5a5248] flex items-end">
          <div className="max-w-6xl mx-auto w-full px-6 pb-14">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#efe9de] font-bold mb-5 block">
              Architecture · Renovation · Interiors
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] text-[#efe9de] max-w-3xl text-balance">
              We design the space. We build it too.
            </h1>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-start border-b border-[#d8cebb]">
          <p className="text-[#4a453d] text-base sm:text-lg leading-relaxed">
            Foster &amp; Stone carries a project from first sketch to final finish under one team —
            architecture, interiors, and construction, accountable to a single fixed price.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#inquiry" className="inline-flex items-center justify-center gap-2 bg-[#1f1d1a] hover:bg-[#332f29] text-[#efe9de] px-6 py-3.5 text-sm font-semibold uppercase tracking-wide transition-colors whitespace-nowrap">
              Start a Project <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#projects" className="inline-flex items-center justify-center gap-2 border border-[#c4b89e] text-[#1f1d1a] px-6 py-3.5 text-sm font-semibold uppercase tracking-wide hover:border-[#9c7a4a] transition-colors whitespace-nowrap">
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* Projects — full-bleed switcher */}
      <section id="projects" className="border-b border-[#d8cebb]">
        <div className={`h-[50vh] min-h-[360px] bg-gradient-to-br ${current.tone} transition-all duration-500`} />
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap items-start justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9c7a4a] font-bold block mb-2">{current.location}</span>
            <h3 className="text-2xl font-bold text-[#1f1d1a]">{current.name}</h3>
            <p className="text-sm text-[#6b6355] mt-1">{current.scope}</p>
          </div>
          <div className="flex gap-2">
            {PROJECTS.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveProject(p.id)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wide border transition-colors ${
                  activeProject === p.id
                    ? "bg-[#1f1d1a] text-[#efe9de] border-[#1f1d1a]"
                    : "border-[#c4b89e] text-[#4a453d] hover:border-[#9c7a4a]"
                }`}
              >
                {p.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities — asymmetric list, not icon cards */}
      <section className="py-24 px-6 max-w-6xl mx-auto w-full border-b border-[#d8cebb]">
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-14">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#9c7a4a] font-bold mb-4 block">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1f1d1a] leading-tight">
              One team. Every phase of the project.
            </h2>
          </div>
          <div>
            {CAPABILITIES.map((c, i) => (
              <div key={c.name} className="flex gap-6 py-6 border-b border-[#d8cebb] last:border-b-0">
                <span className="text-xs font-bold text-[#9c7a4a] shrink-0 pt-1">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-lg font-bold text-[#1f1d1a] mb-1">{c.name}</h3>
                  <p className="text-sm text-[#6b6355] leading-relaxed">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material-driven visual band */}
      <section className="grid grid-cols-2 sm:grid-cols-4 border-b border-[#d8cebb]">
        {["#3a3a38", "#9c7a4a", "#c9bda9", "#1f1d1a"].map((c) => (
          <div key={c} className="aspect-square" style={{ backgroundColor: c }} />
        ))}
      </section>

      {/* Process */}
      <section className="py-24 px-6 max-w-6xl mx-auto w-full border-b border-[#d8cebb]">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#9c7a4a] font-bold mb-4 block">Our Process</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1f1d1a] mb-14 max-w-xl leading-tight">
          Design and price locked before construction starts.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {PROCESS.map((p) => (
            <div key={p.step} className="border-t-2 border-[#9c7a4a] pt-5">
              <span className="text-3xl font-bold text-[#c4b89e]">{p.step}</span>
              <h3 className="text-base font-bold text-[#1f1d1a] mt-3 mb-2">{p.title}</h3>
              <p className="text-xs text-[#6b6355] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial — dark full-bleed */}
      <section className="py-24 px-6 bg-[#1f1d1a] text-[#efe9de]">
        <div className="max-w-3xl mx-auto text-center">
          <Compass className="h-8 w-8 text-[#9c7a4a] mx-auto mb-6" />
          <p className="text-xl sm:text-2xl leading-relaxed font-semibold mb-8 text-balance">
            &ldquo;The price we agreed to at permit was the price we paid at closeout. In twenty years of
            building, that has never happened before.&rdquo;
          </p>
          <span className="text-xs uppercase tracking-[0.2em] text-[#c4b89e] font-semibold">Homeowner, Hillside Family Estate</span>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 max-w-3xl mx-auto w-full border-b border-[#d8cebb]">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#9c7a4a] font-bold mb-4 block">Before You Start a Project</span>
        <h2 className="text-3xl font-bold text-[#1f1d1a] mb-10">Common questions.</h2>

        <div>
          {FAQS.map((f, i) => (
            <div key={f.q} className="border-b border-[#d8cebb]">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-4 py-5 text-left">
                <span className="text-sm sm:text-base font-bold text-[#1f1d1a]">{f.q}</span>
                {openFaq === i ? <Minus className="h-4 w-4 text-[#9c7a4a] shrink-0" /> : <Plus className="h-4 w-4 text-[#6b6355] shrink-0" />}
              </button>
              {openFaq === i && <p className="text-sm text-[#6b6355] leading-relaxed pb-6 max-w-2xl">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry */}
      <section id="inquiry" className="py-24 px-6 max-w-3xl mx-auto w-full">
        <div className="border border-[#d8cebb] bg-white/40 p-8 md:p-12">
          <div className="mb-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#9c7a4a] font-bold mb-3 block">Start a Project</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f1d1a] mb-2">Tell Us About Your Project</h2>
            <p className="text-xs text-[#6b6355]">A principal reviews every inquiry and responds within two business days.</p>
          </div>

          {submitted ? (
            <div className="p-8 border border-[#9c7a4a]/40 text-center">
              <Hammer className="h-10 w-10 text-[#9c7a4a] mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#1f1d1a] mb-2">Project Inquiry Received</h3>
              <p className="text-xs text-[#6b6355] mb-6 max-w-md mx-auto leading-relaxed">
                In a live deployment, this notifies the studio principal and schedules an initial site-walk call.
              </p>
              <div className="p-4 bg-white border border-[#d8cebb] text-left">
                <p className="text-xs font-bold text-[#1f1d1a] mb-1">Want a design-led, project-driven site like this?</p>
                <Link href="/contact?offer=modern-lead-generation-website&demo=renovation" className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#9c7a4a] hover:underline">
                  Request a quote from bajwaa.dev <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-[#4a453d]">Full Name</label>
                  <input required type="text" placeholder="Sam Rivera" className="w-full px-4 py-3 bg-white border border-[#d8cebb] text-sm text-[#1f1d1a] outline-none focus:border-[#9c7a4a]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-[#4a453d]">Property Address</label>
                  <input required type="text" placeholder="789 Ridgeline Dr" className="w-full px-4 py-3 bg-white border border-[#d8cebb] text-sm text-[#1f1d1a] outline-none focus:border-[#9c7a4a]" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-[#4a453d]">Project Type</label>
                  <select className="w-full px-4 py-3 bg-white border border-[#d8cebb] text-sm text-[#1f1d1a] outline-none focus:border-[#9c7a4a]">
                    <option>Whole-Home Renovation</option>
                    <option>Ground-Up Architecture</option>
                    <option>Interior Design Only</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-[#4a453d]">Estimated Budget</label>
                  <select className="w-full px-4 py-3 bg-white border border-[#d8cebb] text-sm text-[#1f1d1a] outline-none focus:border-[#9c7a4a]">
                    <option>Under $250K</option>
                    <option>$250K – $750K</option>
                    <option>$750K – $2M</option>
                    <option>$2M+</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5 text-[#4a453d]">Tell us about the space and your goals</label>
                <textarea required rows={4} placeholder="Describe the project, timeline, and what success looks like..." className="w-full px-4 py-3 bg-white border border-[#d8cebb] text-sm text-[#1f1d1a] outline-none focus:border-[#9c7a4a] resize-none" />
              </div>
              <button type="submit" className="w-full bg-[#1f1d1a] hover:bg-[#332f29] text-[#efe9de] py-4 text-sm font-bold uppercase tracking-wide transition-colors">
                Submit Project Inquiry
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-[#6b6355] text-xs py-10 px-6 mt-auto border-t border-[#d8cebb]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-bold text-[#4a453d]">Foster &amp; Stone Studio — Fictional Concept Demo</p>
            <p className="text-[11px] text-[#8a8271]">Designed &amp; engineered by bajwaa.dev to demonstrate architectural studio positioning.</p>
          </div>
          <Link href="/services/websites" className="text-[#9c7a4a] hover:underline font-bold text-xs">
            Built by bajwaa.dev — Explore Website Services <ArrowUpRight className="inline h-3.5 w-3.5" />
          </Link>
        </div>
      </footer>
    </div>
  );
}

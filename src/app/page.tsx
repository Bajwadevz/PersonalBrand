import Link from "next/link";
import { GitBranch, Layers3, ListChecks } from "lucide-react";
import { agencyMeta, CallLink, Closing, SecondaryLink } from "@/components/Agency";
import { insightGuides } from "@/lib/insight-guides";
import GlobalGridBackground from "@/components/GlobalGridBackground";
import HeroSystemMap from "@/components/pages/home/HeroSystemMap";
import ToolsStrip from "@/components/pages/home/ToolsStrip";
import SpotlightGroup from "@/components/pages/home/SpotlightGroup";
import BeforeAfter from "@/components/pages/home/BeforeAfter";
import "./home.css";
import PinnedProblems from "@/components/motion/PinnedProblems";
import WorkflowDemo from "@/components/WorkflowDemo";
import CaseStudyCards from "@/components/CaseStudyCards";
import { ClipboardCheck, FileText, KeyRound, LifeBuoy, LockKeyhole, Activity } from "lucide-react";

export const metadata = { ...agencyMeta("/", "AI Implementation Agency for Australian SMEs", "Done-for-you AI implementation for Australian small businesses. Cut repetitive admin, fix CRM workflows and connect HubSpot, Xero and MYOB, remotely."), title: { absolute: "AI Implementation Agency for Australian SMEs | bajwaa.dev" } };
const problems = [
  ["Admin & operations", "Someone rebuilds the weekly report by hand. We trace the source data and automate the repeatable steps.", "/solutions/business-process-automation", Layers3, ["Recurring reports", "Data entry", "Document prep"]],
  ["CRM & customer workflows", "An enquiry lands in the inbox and waits for an owner. We connect intake, validation and follow-up.", "/solutions/crm-automation", GitBranch, ["Enquiry intake", "Lead routing", "Follow-ups"]],
  ["Connected business systems", "Staff enter the same job twice. We map the handoff and connect the systems that need the update.", "/ai-implementation", ListChecks, ["Quote → job", "Job → invoice", "Sync checks"]],
] as const;
const faq=[
  ["What does AI implementation mean?", "We connect the software your team uses and build workflows around a specific process, such as routing customer enquiries or preparing a recurring report."],
  ["Do we need to replace our CRM?","Usually, we can start with the tools you already use. The audit checks your plan, permissions and integration options before we recommend changes."],
  ["Does every workflow need AI?","No. Rules often handle routing and validation well. We use AI where interpreting unstructured input adds value, with human review for ambiguous cases."],
  ["What’s included in the free call?","A 20-minute conversation about one process, the systems involved and whether a paid audit makes sense. The A$750 audit includes the detailed investigation and written plan."],
  ["How much does a build cost?", "Implementation starts from A$3,500. The quote depends on your integrations, exception handling, approval controls and testing."],
  ["Do you work across Australia?", "Yes. We deliver remotely across Australia and arrange discovery calls around a mutually agreed time."],
  ["Who owns the system after handover?","We favour client-owned accounts. Your proposal sets out access, ownership, documentation and any optional support before the build begins."],
];
const trust = [
  [ClipboardCheck, "You approve what matters", "Sensitive, financial or irreversible actions wait for a named person. Low-confidence AI output goes to review, not straight into your systems."],
  [LockKeyhole, "Data handled deliberately", "We map what data moves where, use the minimum access needed and agree where AI processing happens before anything goes live."],
  [KeyRound, "Your accounts, your system", "We build in client-owned accounts wherever possible, so you keep access, history and control if we stop working together."],
  [FileText, "Documented handover", "You get workflow maps, run notes and a recovery path your team can follow, plus a recorded handover for anyone who missed it."],
  [Activity, "Monitored, with logs", "Each run is logged. Failed steps retry safely and anything that still fails lands in a queue with an alert, not in silence."],
  [LifeBuoy, "Clear support boundaries", "A defect window after launch, then optional support with defined hours and response times. New features are always quoted separately."],
] as const;
export default function Home() {
  return <article className="agency">
    <section className="agency-hero">
      <GlobalGridBackground />
      <div className="agency-wrap hero-content hero-seq">
        <h1><span className="kicker h1-kicker"><span className="signal-dot" aria-hidden="true" /> AI implementation for Australian businesses</span><span className="sr-only">: </span><span className="line"><span>Your business,</span></span> <span className="line"><span>without the <em>busywork.</em></span></span></h1>
        <p className="lead">We implement AI-powered workflows that reduce repetitive admin, improve your CRM and help your existing systems work together.</p>
        <div className="hero-cta"><CallLink /></div>
        <p className="hero-note">Built around the tools you already use. Scoped, tested and handed over clearly.</p>
        <Link className="hero-process-link" href="#how-engagements-work">See how it works <span aria-hidden="true">↓</span></Link>
      </div>
      <HeroSystemMap />
    </section>
    <ToolsStrip />
    <PinnedProblems />
    <section className="agency-wrap agency-section capability-section ambient-zone">
      <p className="kicker">What we do</p>
      <h2 data-reveal>We find the bottleneck. Then we build the fix.</h2>
      <SpotlightGroup className="cap-grid home-spot">{problems.map(([title,copy,url,Icon,tags],i)=><Link key={url} href={url} className="glass" data-spot data-reveal style={{["--d" as string]:`${i*90}ms`}}><span className="home-cap-index" aria-hidden="true">{String(i+1).padStart(2,"0")}</span><Icon size={28} aria-hidden="true"/><h3>{title}</h3><p>{copy}</p><ul className="home-cap-tags">{tags.map(t=><li key={t}>{t}</li>)}</ul><span aria-hidden="true">↗</span></Link>)}</SpotlightGroup>
      <div className="home-section-cta"><SecondaryLink href="/contact#book">Not sure which fits? Bring it to a free discovery call</SecondaryLink></div></section>
    <BeforeAfter />
    <section className="agency-wrap agency-section" id="see-it-working" aria-labelledby="demo-heading">
      <p className="kicker">See it working</p>
      <h2 id="demo-heading" data-reveal>See what a working workflow looks like.</h2>
      <p className="section-lead" data-reveal>Run a fictional enquiry through intake, validation, human review and a CRM update — including what happens when the data is wrong or the CRM goes down.</p>
      <WorkflowDemo />
      <div className="home-section-cta"><SecondaryLink href="/contact#book">Want this for your enquiries? Book a free call</SecondaryLink></div>
    </section>
    <section className="agency-wrap agency-section ambient-zone" aria-labelledby="work-heading">
      <p className="kicker">Selected work</p>
      <h2 id="work-heading" data-reveal>Results our clients reported.</h2>
      <p className="section-lead" data-reveal>Anonymised client case studies, with the problem, the build and the numbers.</p>
      <CaseStudyCards />
      <Link className="work-link" href="/work">See all work and example builds <span aria-hidden="true">↗</span></Link>
    </section>
    <section className="agency-wrap agency-section" aria-labelledby="trust-heading">
      <p className="kicker">How we build</p>
      <h2 id="trust-heading" data-reveal>Built for real operations, not impressive demos.</h2>
      <div className="trust-grid home-trust">{trust.map(([Icon,title,copy],i)=><section key={title} className="trust-item" data-reveal style={{["--d" as string]:`${(i%3)*80}ms`}}><Icon size={22} aria-hidden="true"/><h3>{title}</h3><p>{copy}</p></section>)}</div>
      <Link className="work-link" href="/how-it-works">See the delivery process <span aria-hidden="true">↗</span></Link>
    </section>
    <section className="agency-wrap detail-list">
      <section data-reveal>
        <h2>AI implementation across Australia.</h2>
        <p>We work remotely with Australian teams. If you’re in Western Australia, see how we scope workflows and schedule discovery in Perth time. <Link href="/ai-implementation-perth">AI implementation for Perth and WA →</Link></p>
      </section>
    </section>
    <section className="agency-wrap agency-section" aria-labelledby="home-insights">
      <p className="kicker">Insights</p>
      <h2 id="home-insights" data-reveal>Plan your first workflow.</h2>
      <div className="scenario-grid">
        {insightGuides.slice(0, 3).map((guide,i) => (
          <Link key={guide.slug} className="insight-guide glass" href={`/blog/${guide.slug}`} data-reveal style={{["--d" as string]:`${i*90}ms`}}>
            <span>{guide.label}</span>
            <h3>{guide.shortTitle}</h3>
            <span aria-hidden="true">↗</span>
          </Link>
        ))}
      </div>
      <Link className="work-link" href="/blog">Browse all insights <span aria-hidden="true">↗</span></Link>
    </section>
    <section className="agency-wrap agency-section"><p className="kicker">Common questions</p><h2 data-reveal>Before we talk.</h2><div className="agency-faq home-faq">{faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      <div className="home-section-cta"><p>Question not here?</p><SecondaryLink href="/contact#book">Ask it on the free call</SecondaryLink></div></section><Closing/>
  </article>;
}

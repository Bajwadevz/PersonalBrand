import Link from "next/link";
import { GitBranch, Layers3, ListChecks } from "lucide-react";
import { agencyMeta, CallLink, Closing } from "@/components/Agency";
import { insightGuides } from "@/lib/insight-guides";
import GlobalGridBackground from "@/components/GlobalGridBackground";
import ImplementationProcess from "@/components/ImplementationProcess";

export const metadata = agencyMeta("/", "AI Implementation for Australian Businesses", "Reduce repetitive admin, improve CRM workflows and connect the tools your team already uses. Book a free discovery call with bajwaa.dev.");
const problems = [
  ["Admin & operations", "Someone rebuilds the weekly report by hand. We trace the source data and automate the repeatable steps.", "/solutions/business-process-automation", Layers3],
  ["CRM & customer workflows", "An enquiry lands in the inbox and waits for an owner. We connect intake, validation and follow-up.", "/solutions/crm-automation", GitBranch],
  ["Connected business systems", "Staff enter the same job twice. We map the handoff and connect the systems that need the update.", "/ai-implementation", ListChecks],
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
export default function Home() {
  return <article className="agency">
    <section className="agency-hero">
      <GlobalGridBackground />
      <div className="agency-wrap hero-content">
        <p className="kicker"><span className="signal-dot" aria-hidden="true" /> AI implementation for Australian businesses</p>
        <h1>Your business,<br />without the <em>busywork.</em></h1>
        <p className="lead">We implement AI-powered workflows that reduce repetitive admin, improve your CRM and help your existing systems work together.</p>
        <CallLink />

        <Link className="hero-process-link" href="#implementation-process">See how it works <span aria-hidden="true">↓</span></Link>
      </div>
    </section>
    <section className="agency-wrap agency-section handoff-intro">
      <h2>Too much work happens between your systems.</h2>
      <p className="section-lead">People copy records between tools, chase updates and rebuild reports. When a handoff goes wrong, someone has to piece together what happened.</p>
    </section>
    <section className="agency-wrap agency-section capability-section">
      <p className="kicker">What we do</p>
      <h2>We find the bottleneck. Then we build the fix.</h2>
      <div className="cap-grid">{problems.map(([title,copy,url,Icon])=><Link key={url} href={url}><Icon size={28}/><h3>{title}</h3><p>{copy}</p><span aria-hidden="true">↗</span></Link>)}</div></section>
    <ImplementationProcess />
    <section className="agency-wrap detail-list"><section><h2>Built for the people who run it.</h2><p>Your team approves sensitive actions, tests exceptions and gets a documented recovery path. We agree on account ownership and monitoring before the system goes live. <Link href="/how-it-works">See the delivery process →</Link></p></section></section>
    <section className="agency-wrap agency-section" aria-labelledby="home-insights">
      <p className="kicker">Insights</p>
      <h2 id="home-insights">Plan your first workflow.</h2>
      <div className="scenario-grid">
        {insightGuides.slice(0, 3).map(guide => (
          <Link key={guide.slug} className="insight-guide" href={`/blog/${guide.slug}`}>
            <span>{guide.label}</span>
            <h3>{guide.shortTitle}</h3>
            <span aria-hidden="true">↗</span>
          </Link>
        ))}
      </div>
      <Link className="work-link" href="/blog">Browse all insights <span aria-hidden="true">↗</span></Link>
    </section>
    <section className="agency-wrap agency-section"><p className="kicker">Common questions</p><h2>Before we talk.</h2><div className="agency-faq">{faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section><Closing/>
  </article>;
}

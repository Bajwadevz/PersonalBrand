import Link from "next/link";
import { ClipboardCheck, FileText, KeyRound, ShieldCheck, Target, Video, CalendarClock, Ban } from "lucide-react";
import { agencyMeta, detailJsonLd, PageHero, CallLink, SecondaryLink, Closing, type Detail } from "@/components/Agency";
import FounderMark from "@/components/pages/about/FounderMark";
import "./about.css";

const detail: Detail = {
  path: "/about",
  title: "About Shahzaib Bajwa and bajwaa.dev",
  description: "Meet Shahzaib Bajwa, founder of bajwaa.dev, and how a software sales and computer science background shapes AI implementation for Australian teams.",
  label: "About the founder",
  heading: "Built by someone who has carried the pipeline.",
  lead: "I’m Shahzaib Bajwa. My background is in computer science and B2B software sales. I started building workflows after seeing how often a good customer conversation disappeared between an inbox and the CRM.",
  sections: [],
  links: [],
};

export const metadata = agencyMeta(detail.path, detail.title, detail.description);

const story = [
  ["Computer science", "A technical foundation: how systems, data and integrations fit together, and where they break."],
  ["B2B software sales", "Carrying a pipeline meant living in the inbox and the CRM. Good conversations went quiet because a follow-up or an update slipped between the two."],
  ["Building the workflows", "I started connecting the tools myself with HubSpot, Make and n8n, so the next step happened without someone retyping it."],
  ["bajwaa.dev", "Now I do the same for Australian teams: start with the person doing the work, walk through a recent example, including what went wrong, and fix one process properly."],
] as const;

const principles = [
  [Target, "Start with one process", "One workflow, measured before and after, beats a roadmap of ten. If it works, we pick the next one together."],
  [KeyRound, "Your accounts, your data", "Workflows are built in accounts your business owns. You keep the logins, the data and the automations after handover."],
  [ShieldCheck, "A human approves what matters", "We agree which actions need sign-off. Anything touching money, customers or records you can’t undo gets a review step."],
  [FileText, "Document everything", "Every workflow ships with a written map and a recorded walkthrough, so your team can run it without me."],
  [Ban, "Say no when it isn’t worth it", "Some processes are cheaper to leave manual. If automation won’t pay for itself, I’ll tell you on the call."],
] as const;

const remote = [
  [CalendarClock, "Calls at an agreed time", "Discovery calls and reviews are booked around a mutually agreed time in your time zone."],
  [FileText, "Decisions in writing", "Scope, owners and approvals are documented so your team can review them asynchronously."],
  [Video, "Recorded walkthroughs", "Staff who can’t join live get a recorded handover they can rewatch."],
  [ClipboardCheck, "Clear ownership", "We name a process owner on your side and agree who signs off each change."],
] as const;

const tools = ["HubSpot", "Make", "n8n", "Clay", "Salesforce"];

export default function Page() {
  return (
    <article className="agency about-page">
      {detailJsonLd(detail)}
      <PageHero
        kicker={detail.label}
        title={detail.heading}
        lead={detail.lead}
        actions={<><CallLink /><SecondaryLink href="/how-it-works">How it works</SecondaryLink></>}
        visual={<FounderMark />}
      />

      <section className="agency-wrap agency-section about-story" aria-labelledby="about-story">
        <div className="about-story-head">
          <p className="kicker">The short version</p>
          <h2 id="about-story" data-reveal>From the sales floor to the workflow.</h2>
        </div>
        <ol className="about-timeline">
          {story.map(([title, copy], i) => (
            <li key={title} data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
              <span className="about-timeline-n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-principles-band" aria-labelledby="about-principles">
        <div className="agency-wrap agency-section">
          <p className="kicker">Working principles</p>
          <h2 id="about-principles" data-reveal>Five rules every project follows.</h2>
          <ul className="about-principles">
            {principles.map(([Icon, title, copy], i) => (
              <li key={title} className="glass" data-reveal style={{ ["--d" as string]: `${i * 70}ms` }}>
                <Icon aria-hidden="true" size={22} strokeWidth={1.75} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="agency-wrap agency-section about-remote" aria-labelledby="about-remote">
        <div>
          <p className="kicker">Remote, across Australia</p>
          <h2 id="about-remote" data-reveal>How we work with your team without an office.</h2>
          <p className="section-lead">bajwaa.dev supports Australian businesses remotely. There’s no shopfront to visit; instead, everything we agree is written down and recorded so it holds up after the call ends.</p>
        </div>
        <ul className="about-remote-list">
          {remote.map(([Icon, title, copy]) => (
            <li key={title} data-reveal>
              <span className="about-remote-icon"><Icon aria-hidden="true" size={18} strokeWidth={1.9} /></span>
              <div><h3>{title}</h3><p>{copy}</p></div>
            </li>
          ))}
        </ul>
      </section>

      <section className="agency-wrap agency-section about-tools" aria-labelledby="about-tools">
        <p className="kicker">Tools I work with</p>
        <h2 id="about-tools" data-reveal>Built on what you already use.</h2>
        <ul className="about-tool-list">
          {tools.map(tool => <li key={tool}>{tool}</li>)}
        </ul>
        <p className="about-tools-note">Listed because I build with them, not because of any partnership or reseller arrangement. Recommendations depend on your existing stack and plan.</p>
      </section>

      <section className="agency-wrap agency-section about-next" aria-labelledby="about-next">
        <h2 id="about-next" className="about-next-title" data-reveal>See the work before you book.</h2>
        <div className="about-next-grid">
          <Link href="/work" className="about-next-card glass" data-reveal>
            <span className="kicker">Case studies</span>
            <h3>Watch the implementation walkthrough</h3>
            <p>Anonymised client work, published with approval, with the workflow shown end to end.</p>
            <span className="about-next-arrow" aria-hidden="true">→</span>
          </Link>
          <Link href="/how-it-works" className="about-next-card glass" data-reveal style={{ ["--d" as string]: "90ms" }}>
            <span className="kicker">The method</span>
            <h3>How an engagement works</h3>
            <p>Free call, A$1,000 fixed-scope audit, then implementation from A$3,500 if it’s worthwhile.</p>
            <span className="about-next-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <Closing title="Talk it through with me directly." copy="On a free 20-minute call you’ll speak with me, not a sales team. We’ll look at one process and decide whether automating it is worth it." />
    </article>
  );
}

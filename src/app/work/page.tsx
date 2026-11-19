import Image from "next/image";
import Link from "next/link";
import { agencyMeta, CallLink, Closing } from "@/components/Agency";
import LoomEmbed from "@/components/LoomEmbed";

export const metadata = agencyMeta(
  "/work",
  "AI Implementation Examples & Work",
  "Watch the bajwaa.dev lead response and booking walkthrough, then explore a sales workspace and practical automation scenarios.",
);

const scenarios = [
  ["Service business", "Keep enquiries moving", "Capture a request from the website, check what the customer needs and give the right person a next action. Unclear requests stay with a team member."],
  ["B2B sales team", "Make follow-up visible", "Bring enquiries and quotes into one pipeline so owners can see what’s due and managers can spot stalled deals."],
  ["Operations team", "Simplify recurring reporting", "Pull agreed data from the tools the team uses, flag missing inputs and give the report owner a chance to review before distribution."],
];

export default function Work() {
  return (
    <article className="agency">
      <section className="agency-intro">
        <div className="agency-wrap">
          <p className="kicker">Selected work</p>
          <h1>See what we build.</h1>
          <p className="lead">Watch the lead-response walkthrough, then see how a sales workspace keeps contacts, quotes and next actions together.</p>
          <div className="inline-actions"><CallLink /><a href="#workflow">Watch the walkthrough <span aria-hidden="true">↓</span></a></div>
        </div>
      </section>
      <section className="blueprint-band" id="workflow">
        <div className="agency-wrap agency-section work-feature">
          <div>
            <p className="kicker">Recorded walkthrough</p>
            <h2>From enquiry to booking.</h2>
            <p className="section-lead">An introduction to the lead-response and booking system from the previous bajwaa.dev site.</p>
          </div>
          <LoomEmbed onDemand />
        </div>
      </section>
      <section className="agency-wrap agency-section work-feature">
        <div>
          <p className="kicker">Internal product build</p>
          <h2>Small Business Sales OS</h2>
          <p className="section-lead">A Notion workspace that puts contacts, pipeline, follow-ups and quotes in one place. The case study uses fictional records.</p>
          <Link className="work-link" href="/work/small-business-sales-os">Explore the build ↗</Link>
        </div>
        <Link className="work-image" href="/work/small-business-sales-os" aria-label="Explore the Small Business Sales OS build">
          <Image src="/work/sales-os/command-center.jpg" alt="Sales command centre showing follow-ups, contacts and opportunities" width={1512} height={805} sizes="(max-width: 700px) 90vw, 560px" />
        </Link>
      </section>
      <section className="agency-wrap agency-section" aria-labelledby="scenario-heading">
        <p className="kicker">Illustrative business scenarios</p>
        <h2 id="scenario-heading">Where this could help your team.</h2>
        <div className="scenario-grid">
          {scenarios.map(([type, title, description]) => (
            <section className="scenario-card" key={type}>
              <p className="kicker">{type}</p>
              <h3>{title}</h3>
              <p>{description}</p>
            </section>
          ))}
        </div>
      </section>
      <Closing />
    </article>
  );
}

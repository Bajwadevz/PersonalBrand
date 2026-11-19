import Link from "next/link";
import { notFound } from "next/navigation";
import { CallLink, Closing } from "@/components/Agency";
import FlowDiagram from "@/components/FlowDiagram";
import CountUp from "@/components/motion/CountUp";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { pageMetadata } from "@/lib/page-metadata";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Params) {
  const study = getCaseStudy((await params).slug);
  if (!study) return {};
  return pageMetadata(`/work/${study.slug}`, `Case Study: ${study.shortTitle}`, study.description);
}

export default async function CaseStudyPage({ params }: Params) {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();
  const origin = "https://bajwaa.dev";
  const url = `${origin}/work/${study.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: study.title,
        description: study.description,
        url,
        inLanguage: "en-AU",
        author: { "@id": `${origin}/about#founder` },
        publisher: { "@id": `${origin}/#organisation` },
        about: study.stack.map(name => ({ "@type": "Thing", name })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: origin },
          { "@type": "ListItem", position: 2, name: "Work", item: `${origin}/work` },
          { "@type": "ListItem", position: 3, name: study.shortTitle, item: url },
        ],
      },
    ],
  };
  const others = caseStudies.filter(c => c.slug !== study.slug);

  return (
    <article className="agency case-study">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <section className="agency-intro">
        <div className="agency-wrap">
          <p className="kicker"><Link href="/work">Work</Link> · Client work · anonymised</p>
          <h1>{study.title}</h1>
          <p className="lead">{study.summary}</p>
          <p className="case-client-line">{study.client} · {study.sector}</p>
        </div>
      </section>

      <section className="agency-wrap agency-section">
        <div className="metric-grid">
          {study.metrics.map((m, i) => (
            <div key={m.label} className="metric glass" data-reveal style={{ ["--d" as string]: `${i * 80}ms` }}>
              <span className="metric-value"><CountUp value={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} /></span>
              <span className="metric-label">{m.label}</span>
            </div>
          ))}
        </div>
        <p className="metric-note">Results reported by the client for the period described. Client name withheld. Figures are not independently audited and aren’t a promise of results for another business.</p>
      </section>

      <div className="agency-wrap detail-list">
        <section data-reveal><h2>The challenge</h2><p>{study.challenge}</p></section>
        <section data-reveal>
          <h2>The workflow</h2>
          <FlowDiagram steps={study.flow} label={`${study.shortTitle} workflow`} />
        </section>
        <section data-reveal>
          <h2>What we built</h2>
          <ul className="built-list">
            {study.built.map(([title, copy]) => <li key={title}><strong>{title}.</strong> {copy}</li>)}
          </ul>
        </section>
        <section data-reveal><h2>The impact</h2><p>{study.impact}</p></section>
        <section data-reveal>
          <h2>Tools used</h2>
          <ul className="stack-list">{study.stack.map(s => <li key={s}>{s}</li>)}</ul>
        </section>
        <section data-reveal><h2>What this means for your business</h2><p>{study.applies} <Link href="/ai-operations-audit">See how the audit scopes a first workflow →</Link></p></section>
        <nav aria-label="More case studies">
          {others.map(o => <Link key={o.slug} href={`/work/${o.slug}`}>{o.shortTitle} →</Link>)}
          <Link href="/work">All work →</Link>
        </nav>
        <div className="inline-actions case-cta"><CallLink /></div>
      </div>
      <Closing />
    </article>
  );
}

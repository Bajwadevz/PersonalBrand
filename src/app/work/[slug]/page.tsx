import Link from "next/link";
import { notFound } from "next/navigation";
import { CallLink, Closing, PageHero, SecondaryLink } from "@/components/Agency";
import FlowDiagram from "@/components/FlowDiagram";
import CountUp from "@/components/motion/CountUp";
import { caseStudies, exampleBuilds, getCaseStudy, getExampleBuild } from "@/lib/case-studies";
import ExampleBuildPage from "@/components/pages/work/ExampleBuildPage";
import { pageMetadata } from "@/lib/page-metadata";
import "../work.css";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return [...caseStudies, ...exampleBuilds].map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Params) {
  const slug = (await params).slug;
  const example = getExampleBuild(slug);
  if (example) return pageMetadata(`/work/${example.slug}`, example.slug.startsWith("construction") ? "Construction CRM Example for Perth Builders" : "HVAC Enquiry Response System Example", example.description);
  const study = getCaseStudy(slug);
  if (!study) return {};
  return pageMetadata(`/work/${study.slug}`, `Case Study: ${study.shortTitle}`, study.description);
}

export default async function CaseStudyPage({ params }: Params) {
  const slug = (await params).slug;
  const example = getExampleBuild(slug);
  if (example) return <ExampleBuildPage build={example} />;
  const study = getCaseStudy(slug);
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
  const idx = caseStudies.findIndex(c => c.slug === study.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];
  const [key, ...more] = study.metrics;
  const nm = next.metrics[0];

  return (
    <article className="agency case-study">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <PageHero
        kicker={<><Link href="/work">Work</Link> · Client work · anonymised</>}
        title={study.title}
        lead={study.summary}
        actions={<><CallLink /><SecondaryLink href="#results">See the results</SecondaryLink></>}
        visual={
          <div className="work-keymetric glass">
            <span className="work-tag">Key result · client-reported</span>
            <span className="work-keymetric-value"><CountUp value={key.value} prefix={key.prefix} suffix={key.suffix} decimals={key.decimals} /></span>
            <span className="work-keymetric-label">{key.label}</span>
            <ul className="work-case-mini">
              {more.slice(0, 2).map(x => <li key={x.label}><strong>{x.prefix}{x.value.toFixed(x.decimals ?? 0)}{x.suffix}</strong> {x.label}</li>)}
            </ul>
            <span className="work-keymetric-note">{study.client} · {study.sector}</span>
          </div>
        }
      />

      <div className="agency-wrap work-cs-layout">
        <aside className="work-cs-aside" aria-label="Project summary">
          <div className="work-cs-summary glass">
            <p className="work-legend-title">At a glance</p>
            <dl>
              <div><dt>Client type</dt><dd>{study.client}</dd></div>
              <div><dt>Sector</dt><dd>{study.sector}</dd></div>
              <div><dt>Client name</dt><dd>Withheld</dd></div>
              <div><dt>Stack</dt><dd><ul className="work-stack">{study.stack.map(s => <li key={s}>{s}</li>)}</ul></dd></div>
              <div><dt>Results</dt><dd>Client-reported, not audited</dd></div>
            </dl>
            <CallLink className="work-cs-cta" />
          </div>
        </aside>

        <div className="work-cs-main">
          <section className="work-cs-block" aria-labelledby="cs-ba">
            <h2 id="cs-ba" data-reveal>Before and after</h2>
            <div className="work-ba">
              <div className="work-ba-card work-ba-before" data-reveal>
                <span className="work-ba-label">Before</span>
                <p>{study.challenge}</p>
              </div>
              <span className="work-ba-arrow" aria-hidden="true">→</span>
              <div className="work-ba-card work-ba-after glass" data-reveal style={{ ["--d" as string]: "100ms" }}>
                <span className="work-ba-label">After</span>
                <p>{study.impact}</p>
              </div>
            </div>
          </section>

          <section className="work-cs-block" aria-labelledby="cs-flow">
            <h2 id="cs-flow" data-reveal>The workflow</h2>
            <div className="work-cs-flow glass"><FlowDiagram steps={study.flow} label={`${study.shortTitle} workflow`} /></div>
          </section>

          <section className="work-cs-block" aria-labelledby="cs-built">
            <h2 id="cs-built" data-reveal>What we built</h2>
            <ol className="work-built">
              {study.built.map(([title, copy], i) => (
                <li key={title} data-reveal style={{ ["--d" as string]: `${i * 60}ms` }}>
                  <span className="work-built-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </li>
              ))}
            </ol>
          </section>

          <section className="work-cs-block" id="results" aria-labelledby="cs-results">
            <h2 id="cs-results" data-reveal>Results</h2>
            <div className="work-results">
              {[key, ...more].map((m, i) => (
                <div key={m.label} className="work-result glass" data-reveal style={{ ["--d" as string]: `${i * 80}ms` }}>
                  <span className="work-result-value"><CountUp value={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} /></span>
                  <span className="work-result-label">{m.label}</span>
                </div>
              ))}
            </div>
            <p className="work-honesty"><strong>Honesty note.</strong> Results reported by the client for the period described. Client name withheld. Figures are not independently audited and aren’t a promise of results for another business.</p>
          </section>

          <section className="work-cs-block" aria-labelledby="cs-applies">
            <h2 id="cs-applies" data-reveal>What this means for your business</h2>
            <p className="work-cs-copy">{study.applies}</p>
            <p className="work-cs-copy"><Link className="work-link" href="/ai-operations-audit">See how the audit scopes a first workflow <span aria-hidden="true">→</span></Link></p>
          </section>

          <nav className="work-next" aria-label="More case studies">
            <Link href={`/work/${next.slug}`} className="work-next-card glass">
              <span className="work-tag">Next case study</span>
              <span className="work-next-metric">{nm.prefix}{nm.value.toFixed(nm.decimals ?? 0)}{nm.suffix} <small>{nm.label}</small></span>
              <strong>{next.shortTitle}</strong>
              <span className="work-case-go">Read it <span aria-hidden="true">↗</span></span>
            </Link>
            <Link href="/work" className="work-link">All work <span aria-hidden="true">→</span></Link>
          </nav>
        </div>
      </div>
      <Closing />
    </article>
  );
}

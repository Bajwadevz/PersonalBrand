import Link from "next/link";
import { CallLink, Closing, PageHero, SecondaryLink } from "@/components/Agency";
import FlowDiagram from "@/components/FlowDiagram";
import { exampleBuilds, type ExampleBuild } from "@/lib/case-studies";

/**
 * Same layout as a client case study, but for an illustrative example build:
 * no client, no results — "designed to" outcomes and "what we'd measure".
 */
export default function ExampleBuildPage({ build }: { build: ExampleBuild }) {
  const origin = "https://bajwaa.dev";
  const url = `${origin}/work/${build.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: build.title,
        description: build.description,
        url,
        inLanguage: "en-AU",
        author: { "@id": `${origin}/about#founder` },
        publisher: { "@id": `${origin}/#organisation` },
        about: build.stack.map(name => ({ "@type": "Thing", name })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: origin },
          { "@type": "ListItem", position: 2, name: "Work", item: `${origin}/work` },
          { "@type": "ListItem", position: 3, name: build.shortTitle, item: url },
        ],
      },
    ],
  };
  const idx = exampleBuilds.findIndex(e => e.slug === build.slug);
  const next = exampleBuilds[(idx + 1) % exampleBuilds.length];

  return (
    <article className="agency case-study example-build">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <PageHero
        kicker={<><Link href="/work">Work</Link> · Example build · illustrative</>}
        title={build.title}
        lead={build.summary}
        actions={<><CallLink /><SecondaryLink href="#built">See how it works</SecondaryLink></>}
        visual={
          <div className="work-keymetric glass">
            <span className="work-tag">Designed to</span>
            <ul className="work-designed">
              {build.designedTo.map(d => <li key={d}>{d}</li>)}
            </ul>
            <span className="work-keymetric-note">{build.businessType}</span>
          </div>
        }
      />

      <div className="agency-wrap work-cs-layout">
        <aside className="work-cs-aside" aria-label="Build summary">
          <div className="work-cs-summary glass">
            <p className="work-legend-title">At a glance</p>
            <dl>
              <div><dt>Type</dt><dd>Example build · not a client project</dd></div>
              <div><dt>Sector</dt><dd>{build.sector}</dd></div>
              <div><dt>Business</dt><dd>{build.businessType.replace(/^Illustrative: /, "")}</dd></div>
              <div><dt>Typical stack</dt><dd><ul className="work-stack">{build.stack.map(s => <li key={s}>{s}</li>)}</ul></dd></div>
              <div><dt>Pricing</dt><dd>Scoped in the A$1,000 audit; builds from A$3,500 depending on your systems</dd></div>
            </dl>
            <CallLink className="work-cs-cta" />
          </div>
        </aside>

        <div className="work-cs-main">
          <section className="work-cs-block" aria-labelledby="eb-problem">
            <h2 id="eb-problem" data-reveal>The problem</h2>
            <div className="work-ba">
              <div className="work-ba-card work-ba-before" data-reveal>
                <span className="work-ba-label">Today</span>
                <p>{build.problem}</p>
              </div>
              <span className="work-ba-arrow" aria-hidden="true">→</span>
              <div className="work-ba-card work-ba-after glass" data-reveal style={{ ["--d" as string]: "100ms" }}>
                <span className="work-ba-label">With the system</span>
                <ul className="work-designed">{build.designedTo.map(d => <li key={d}>{d}</li>)}</ul>
              </div>
            </div>
          </section>

          <section className="work-cs-block" aria-labelledby="eb-flow">
            <h2 id="eb-flow" data-reveal>The workflow</h2>
            <div className="work-cs-flow glass"><FlowDiagram steps={build.flow} label={`${build.shortTitle} workflow`} /></div>
          </section>

          <section className="work-cs-block" id="built" aria-labelledby="eb-built">
            <h2 id="eb-built" data-reveal>What we would build</h2>
            <ol className="work-built">
              {build.built.map(([title, copy], i) => (
                <li key={title} data-reveal style={{ ["--d" as string]: `${i * 60}ms` }}>
                  <span className="work-built-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </li>
              ))}
            </ol>
          </section>

          <section className="work-cs-block" aria-labelledby="eb-checks">
            <h2 id="eb-checks" data-reveal>Where a person stays in control</h2>
            <ul className="check-list work-cs-copy">{build.checks.map(c => <li key={c}>{c}</li>)}</ul>
          </section>

          <section className="work-cs-block" aria-labelledby="eb-measure">
            <h2 id="eb-measure" data-reveal>What we would measure</h2>
            <div className="work-results">
              {build.measures.map((m, i) => (
                <div key={m} className="work-result glass" data-reveal style={{ ["--d" as string]: `${i * 80}ms` }}>
                  <span className="work-result-label">{m}</span>
                </div>
              ))}
            </div>
            <p className="work-honesty"><strong>Honesty note.</strong> This is an illustrative example build, not a client project. It shows how we would scope the system; there are no client results here. Baselines are measured before any build so improvements can be shown honestly.</p>
          </section>

          <section className="work-cs-block" aria-labelledby="eb-applies">
            <h2 id="eb-applies" data-reveal>Does this fit your business?</h2>
            <p className="work-cs-copy">{build.applies}</p>
            <p className="work-cs-copy"><Link className="work-link" href="/ai-implementation-perth">AI implementation for Perth and WA <span aria-hidden="true">→</span></Link></p>
          </section>

          <nav className="work-next" aria-label="More example builds">
            <Link href={`/work/${next.slug}`} className="work-next-card glass">
              <span className="work-tag">Next example build</span>
              <strong>{next.shortTitle}</strong>
              <span className="work-case-go">Read it <span aria-hidden="true">↗</span></span>
            </Link>
            <Link href="/work" className="work-link">All work <span aria-hidden="true">→</span></Link>
          </nav>
        </div>
      </div>
      <Closing title="Want a system like this for your business?" />
    </article>
  );
}

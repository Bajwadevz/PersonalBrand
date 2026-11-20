export { pageMetadata as agencyMeta } from "@/lib/page-metadata";
import Link from "next/link";
import type { ReactNode } from "react";
import GlobalGridBackground from "./GlobalGridBackground";

/**
 * The one site-wide conversion action. Every primary CTA leads to the
 * booking page so visitors always end up at the same scheduling flow.
 */
export function CallLink({ label = "Book a Free Discovery Call", variant = "primary", className = "" }: { label?: string; variant?: "primary" | "light"; className?: string }) {
  return <Link href="/contact#book" data-cta="discovery" className={`agency-button${variant === "light" ? " agency-button-light" : ""}${className ? ` ${className}` : ""}`}>{label} <span aria-hidden="true">↗</span></Link>;
}

/** Secondary text link that sits beside the primary CTA. */
export function SecondaryLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="hero-secondary">{children} <span aria-hidden="true">→</span></Link>;
}

/** The offer, stated the same way everywhere: free call → paid audit → build → optional support. */
export function OfferPath({ compact = false }: { compact?: boolean }) {
  const steps = [
    ["Free", "20-min discovery call", "/contact#book"],
    ["A$1,000", "Fixed-scope audit", "/ai-operations-audit"],
    ["From A$3,500", "Build · priced to your systems", "/ai-implementation"],
    ["Optional", "Support from A$490/mo", "/how-it-works#support"],
  ] as const;
  return (
    <ol className={compact ? "offer-path offer-path-compact" : "offer-path"} aria-label="How engagements work">
      {steps.map(([price, label, href], i) => (
        <li key={label} data-reveal style={{ ["--d" as string]: `${i * 80}ms` }}>
          <Link href={href}>
            <span className="offer-step">{String(i + 1).padStart(2, "0")}</span>
            <span className="offer-price">{price}</span>
            <span className="offer-label">{label}</span>
          </Link>
        </li>
      ))}
    </ol>
  );
}

/**
 * Shared page hero. The perspective grid runs behind the floating header on
 * every page (the hero pulls up under it), so all pages share one frame.
 * Pass `visual` for a right-hand illustration that gives the page its own character.
 */
export function PageHero({ kicker, title, lead, actions, visual, children, id }: {
  kicker: ReactNode; title: ReactNode; lead?: ReactNode; actions?: ReactNode; visual?: ReactNode; children?: ReactNode; id?: string;
}) {
  return (
    <section className={visual ? "page-hero page-hero-split" : "page-hero"} id={id}>
      <GlobalGridBackground />
      <div className="agency-wrap page-hero-inner">
        <div className="page-hero-copy hero-seq">
          <p className="kicker">{kicker}</p>
          <h1>{title}</h1>
          {lead && <p className="lead">{lead}</p>}
          <div className="hero-actions">{actions ?? <CallLink />}</div>
          {children}
        </div>
        {visual && <div className="page-hero-visual" data-reveal>{visual}</div>}
      </div>
    </section>
  );
}

export function Closing({ title = "Know a process that’s taking too much time?", copy = "Tell us what’s happening. On a free 20-minute call we’ll work out whether an AI implementation is worthwhile — and what the next step should be." }: { title?: string; copy?: string }) {
  return (
    <section className="agency-close">
      <GlobalGridBackground />
      <div className="agency-wrap close-inner">
        <div>
          <p className="kicker">Next step</p>
          <h2 data-reveal>{title}</h2>
          <p data-reveal>{copy}</p>
          <div className="hero-actions"><CallLink /><SecondaryLink href="/ai-operations-audit">See what the A$1,000 audit includes</SecondaryLink></div>
        </div>
        <OfferPath compact />
      </div>
    </section>
  );
}

export type Detail = {path:string;title:string;description:string;label:string;heading:string;lead:string;sections:[string,string][];links:[string,string][]};
export function detailJsonLd(d: Detail) {
  const origin="https://bajwaa.dev";
  const graph:object[]=[{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:origin},{"@type":"ListItem",position:2,name:d.label,item:origin+d.path}]}];
  if(d.path.includes("implementation") || d.path.includes("audit") || d.path.startsWith("/solutions/")) graph.push({"@type":"Service",name:d.title,description:d.description,url:origin+d.path,provider:{"@id":origin+"/#organisation"},areaServed:d.path.endsWith("perth")?{"@type":"State",name:"Western Australia"}:{"@type":"Country",name:"Australia"},serviceType:"AI implementation",...(d.path==="/ai-operations-audit"?{offers:{"@type":"Offer",price:"1000",priceCurrency:"AUD",url:origin+d.path,description:"Fixed-scope AI Operations Audit"}}:d.path==="/ai-implementation"?{offers:{"@type":"Offer",priceSpecification:{"@type":"PriceSpecification",minPrice:"3500",priceCurrency:"AUD"},url:origin+d.path}}:{})});
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@graph":graph}).replace(/</g,"\\u003c")}}/>;
}
export function DetailPage({detail:d,children,visual,after}:{detail:Detail;children?:ReactNode;visual?:ReactNode;after?:ReactNode}) {
  return <article className="agency">{detailJsonLd(d)}
    <PageHero kicker={d.label} title={d.heading} lead={d.lead} visual={visual} />
    {children}<div className="agency-wrap detail-list">{d.sections.map(([h,p])=><section key={h} data-reveal><h2>{h}</h2><p>{p}</p></section>)}
      <nav aria-label="Related pages">{d.links.map(([label,href])=><Link key={href} href={href}>{label} →</Link>)}</nav>
    </div>{after}<Closing/></article>;
}

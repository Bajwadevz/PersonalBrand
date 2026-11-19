export { pageMetadata as agencyMeta } from "@/lib/page-metadata";
import Link from "next/link";
import type { ReactNode } from "react";

export function CallLink() {
  return <Link href="/contact" className="agency-button">Book a Free Discovery Call <span aria-hidden="true">↗</span></Link>;
}
export function Closing() {
  return <section className="agency-close"><div className="agency-wrap"><h2 data-reveal>Know a process that’s taking too much time?</h2><p data-reveal>Tell us what’s happening. On a free 20-minute call we’ll work out whether an AI implementation is worthwhile — and what the next step should be.</p><CallLink/></div></section>;
}
export type Detail = {path:string;title:string;description:string;label:string;heading:string;lead:string;sections:[string,string][];links:[string,string][]};
export function DetailPage({detail:d,children}:{detail:Detail;children?:ReactNode}) {
  const origin="https://bajwaa.dev";
  const graph:object[]=[{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:origin},{"@type":"ListItem",position:2,name:d.label,item:origin+d.path}]}];
  if(d.path.includes("implementation") || d.path.includes("audit") || d.path.startsWith("/solutions/")) graph.push({"@type":"Service",name:d.title,description:d.description,url:origin+d.path,provider:{"@id":origin+"/#organisation"},areaServed:d.path.endsWith("perth")?{"@type":"State",name:"Western Australia"}:{"@type":"Country",name:"Australia"},serviceType:"AI implementation",...(d.path==="/ai-operations-audit"?{offers:{"@type":"Offer",price:"750",priceCurrency:"AUD",url:origin+d.path,description:"Fixed-scope AI Operations Audit"}}:d.path==="/ai-implementation"?{offers:{"@type":"Offer",priceSpecification:{"@type":"PriceSpecification",minPrice:"3500",priceCurrency:"AUD"},url:origin+d.path}}:{})});
  return <article className="agency"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@graph":graph}).replace(/</g,"\\u003c")}}/>
    <section className="agency-intro"><div className="agency-wrap"><p className="kicker">{d.label}</p><h1>{d.heading}</h1><p className="lead">{d.lead}</p><CallLink/></div></section>
    {children}<div className="agency-wrap detail-list">{d.sections.map(([h,p])=><section key={h} data-reveal><h2>{h}</h2><p>{p}</p></section>)}
      <nav aria-label="Related pages">{d.links.map(([label,href])=><Link key={href} href={href}>{label} →</Link>)}</nav>
    </div><Closing/></article>;
}

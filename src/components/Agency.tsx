export { pageMetadata as agencyMeta } from "@/lib/page-metadata";
import Link from "next/link";

export function CallLink() {
  return <Link href="/contact" className="agency-button">Book a Free Discovery Call <span aria-hidden="true">↗</span></Link>;
}
export function Closing() {
  return <section className="agency-close"><div className="agency-wrap"><h2>Which process is taking too much time?</h2><p>Bring one example to a free 20-minute discovery call. We’ll talk through the handoffs and agree on a sensible next step.</p><CallLink/></div></section>;
}
export type Detail = {path:string;title:string;description:string;label:string;heading:string;lead:string;sections:[string,string][];links:[string,string][]};
export function DetailPage({detail:d}:{detail:Detail}) {
  const origin="https://bajwaa.dev";
  const graph:object[]=[{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:origin},{"@type":"ListItem",position:2,name:d.label,item:origin+d.path}]}];
  if(d.path.includes("implementation") || d.path.includes("audit") || d.path.startsWith("/solutions/")) graph.push({"@type":"Service",name:d.title,description:d.description,url:origin+d.path,provider:{"@id":origin+"/#organisation"},areaServed:d.path.endsWith("perth")?"Western Australia":"Australia"});
  return <article className="agency"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@graph":graph}).replace(/</g,"\\u003c")}}/>
    <section className="agency-intro"><div className="agency-wrap"><p className="kicker">{d.label}</p><h1>{d.heading}</h1><p className="lead">{d.lead}</p><CallLink/></div></section>
    <div className="agency-wrap detail-list">{d.sections.map(([h,p])=><section key={h}><h2>{h}</h2><p>{p}</p></section>)}
      <nav aria-label="Related pages">{d.links.map(([label,href])=><Link key={href} href={href}>{label} →</Link>)}</nav>
    </div><Closing/></article>;
}

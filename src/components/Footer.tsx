import Link from "next/link";
import Logo from "./Logo";
import { WavePath } from "./ui/wave-path";

const groups = [
  [["AI implementation", "/ai-implementation"], ["Operations audit", "/ai-operations-audit"], ["CRM automation", "/solutions/crm-automation"], ["Business process automation", "/solutions/business-process-automation"]],
  [["Perth & Western Australia", "/ai-implementation-perth"], ["Work", "/work"], ["Insights", "/blog"], ["About", "/about"], ["Contact", "/contact"]],
  [["Privacy", "/privacy"], ["Terms", "/terms"], ["Sitemap", "/sitemap.xml"]],
];
export default function Footer() {
  return (
    <footer className="agency-footer">
      <div className="footer-wave"><WavePath width={1100} height={105} stroke="currentColor" /></div>
      <div className="agency-wrap footer-inner">
        <div><Logo /><p>AI implementation for Australian businesses.</p></div>
        {groups.map((links) => <div key={links[0][0]}>{links.map(([text, href]) => <Link key={href} href={href}>{text}</Link>)}</div>)}
      </div>
      <div className="agency-wrap footer-signoff">
        <small>© {new Date().getFullYear()} bajwaa.dev</small>
        <Link href="/contact"><span className="footer-pulse" aria-hidden="true" /> Get in touch</Link>
      </div>
    </footer>
  );
}

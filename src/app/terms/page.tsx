import { pageMetadata } from "@/lib/page-metadata";
import Link from "next/link";
import "../contact/contact.css";

const title = "Website and Discovery Call Terms";
const description = "How discovery calls, paid audits, implementation quotes and demonstrations work at bajwaa.dev.";
export const metadata = pageMetadata("/terms", title, description);
export default function TermsPage() {
  return <article className="agency agency-policy"><p className="kicker">Website information</p><h1>Terms of use</h1>
    <section><h2>Discovery calls</h2><p>A discovery call is free. Sending a request lets us contact you about the process you describe. A meeting time is confirmed separately. You can decide after the call whether to continue.</p></section>
    <section><h2>Paid work</h2><p>Before a paid audit, we agree the workflow, deliverables, total price, applicable taxes and invoice terms in writing. Implementation and ongoing support each require their own agreed scope. The agreement sets out account access, ownership, payment, changes and handover.</p></section>
    <section><h2>Examples and estimates</h2><p>Interactive demonstrations use fictional inputs. The time, cost and outcome of a client implementation depend on the systems, access, people and exceptions involved. A scope or proposal identifies which assumptions apply to your project.</p></section>
    <section><h2>Contact</h2><p>For questions about an offer or an agreement, <Link href="/contact">contact bajwaa.dev</Link>. Read the <Link href="/privacy">privacy notice</Link> before sharing information about your business.</p></section>
  </article>;
}

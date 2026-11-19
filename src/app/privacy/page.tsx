import { pageMetadata } from "@/lib/page-metadata";
import Link from "next/link";
import { agencyEmail } from "@/lib/discovery";
import "../contact/contact.css";

const title = "Privacy Notice";
const description = "How bajwaa.dev handles discovery enquiries, contact details, booking information and website analytics.";
export const metadata = pageMetadata("/privacy", title, description);
export default function PrivacyPage() {
  return <article className="agency agency-policy"><p className="kicker">Website information</p><h1>Privacy notice</h1>
    <p>This notice covers the bajwaa.dev website and enquiries sent to Shahzeb Bajwa. A client engagement has its own scope and data-handling arrangements.</p>
    <section><h2>Information you share</h2><p>The discovery form asks for your name, email, company, region, team size and a description of your process. You can also share your website and software. We use these details to respond, assess fit and arrange a call. Please keep client records and sensitive personal information out of your enquiry.</p></section>
    <section><h2>Delivery and storage</h2><p>Vercel hosts the site. Formspree processes form submissions and forwards them to our email inbox. When the shared enquiry store is enabled, Upstash also holds a working copy for up to 90 days after the latest enquiry from the same contact and company. Email and Formspree records are managed separately. These providers and our email service may process information outside Australia.</p><p>If you follow an external scheduling link, the scheduling provider processes the information you submit there. If you use a separate newsletter or resource sign-up, Kit processes those subscription details.</p></section>
    <section><h2>Website activity</h2><p>We use Vercel Web Analytics to measure page visits, discovery links and form activity. Form answers are excluded from those events. Campaign labels from the link you followed may stay in your browser for the session and accompany your enquiry to help us understand how you found us.</p></section>
    <section><h2>Questions and requests</h2><p>To ask about your information or request access, correction or deletion, email <a href={`mailto:${agencyEmail}`}>{agencyEmail}</a>. Include the email address you used so we can locate your enquiry. You can also reach us through the <Link href="/contact">contact page</Link>.</p></section>
  </article>;
}

import { cookies } from "next/headers";
import { pageMetadata } from "@/lib/page-metadata";
import ContactForm from "@/components/ContactForm";
import { agencyEmail } from "@/lib/discovery";
import { calendarLink } from "@/lib/lead-intake";
import "./contact.css";

const title = "Book a Free 20-Minute AI Discovery Call";
const description = "Arrange a free 20-minute discovery call about a recurring admin task, CRM workflow or integration for your Australian business.";
export const metadata = pageMetadata("/contact", title, description);

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const { status } = await searchParams;
  const receipt = (await cookies()).get("discovery-receipt")?.value;
  const successRequested = status === "saved" || status === "duplicate";
  const formState = successRequested && receipt !== status ? undefined : status;
  const calendar = calendarLink();
  return <div className="agency"><div className="agency-wrap discovery-layout">
    <div className="discovery-copy">
      <p className="kicker">Free discovery call</p><h1>Bring us one recurring task.</h1>
      <p>In 20 minutes, we’ll talk through who does the work, which systems it touches and where it slows down. You’ll leave knowing whether a paid AI Operations Audit makes sense.</p>
      {calendar && <a data-discovery-calendar href={calendar} className="agency-button">Choose a call time</a>}
      <p>{calendar ? "If the calendar doesn’t suit, send an enquiry and include your time zone." : "Send an enquiry and we’ll arrange a time by email. Include your time zone if you have a preferred meeting window."}</p>
      <p>Prefer email? <a href={`mailto:${agencyEmail}?subject=Discovery%20call%20enquiry`}>{agencyEmail}</a></p>
    </div><ContactForm initialState={formState} />
  </div></div>;
}

import { cookies } from "next/headers";
import { pageMetadata } from "@/lib/page-metadata";
import ContactForm from "@/components/ContactForm";
import { OfferPath, PageHero } from "@/components/Agency";
import BookingOptions from "@/components/inbound/BookingOptions";
import { agencyEmail } from "@/lib/discovery";
import { calendarEmbed, calendarLink } from "@/lib/lead-intake";
import { decodeCallReceipt } from "@/lib/scheduling";
import "./contact.css";

const title = "Book a Free 20-Minute AI Discovery Call";
const description = "Request a free 20-minute discovery call about an admin task, CRM workflow or integration for your Australian business. Pick times; we confirm by email.";
export const metadata = pageMetadata("/contact", title, description);

const agenda = [
  ["Your process", "Who does the task today, how often, and which systems it touches."],
  ["Where it slows down", "The retyping, chasing and checking that eats the time."],
  ["Is AI worth it here?", "An honest view on whether automation or an AI step would help — or not."],
  ["The next step", "If it fits, what the A$1,000 fixed-scope audit would cover. No obligation."],
] as const;

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const { status } = await searchParams;
  const jar = await cookies();
  const receipt = jar.get("discovery-receipt")?.value;
  const successRequested = status === "saved" || status === "duplicate";
  // A success status only shows when the server set the matching short-lived receipt.
  const formState = successRequested && receipt !== status ? undefined : status;
  const request = formState === status && successRequested ? decodeCallReceipt(jar.get("discovery-request")?.value) : null;
  const calendar = calendarLink();
  const embed = calendarEmbed(calendar);

  return <div className="agency contact-page">
    <PageHero
      kicker="Free 20-minute discovery call"
      title={<>Bring us one task that <em>eats your week.</em></>}
      lead="A short video call with the person who would do the work. We look at one recurring task and tell you honestly whether AI or automation is worth it. Remote, Australia-wide."
      actions={<>
        <a href="#enquiry" className="agency-button">{calendar ? "Book your call" : "Request a call time"} <span aria-hidden="true">↓</span></a>
        <span className="hero-note">Free · 20 minutes · No sales sequence</span>
      </>}
    >
      <OfferPath compact />
    </PageHero>

    <div className="agency-wrap discovery-layout" id="book">
      <div className="discovery-copy">
        <section aria-labelledby="agenda-title">
          <h2 id="agenda-title">What the 20 minutes covers</h2>
          <ol className="agenda">{agenda.map(([heading, copy]) => <li key={heading}><strong>{heading}</strong><span>{copy}</span></li>)}</ol>
        </section>
        <section aria-labelledby="bring-title">
          <h2 id="bring-title">What to bring</h2>
          <ul className="bring">
            <li>One task you’d like to stop doing by hand</li>
            <li>A rough idea of how long it takes each week</li>
            <li>The names of the tools involved (no logins or customer data needed)</li>
          </ul>
        </section>
        <section aria-labelledby="after-title">
          <h2 id="after-title">After you send a request</h2>
          <p>We aim to reply within one business day (AEST/AWST) to confirm one of your chosen times with a video-call link. That’s a target, not a guarantee — if we can’t make your times, we’ll suggest others.</p>
          <p>Prefer email? <a href={`mailto:${agencyEmail}?subject=Discovery%20call%20request`}>{agencyEmail}</a></p>
        </section>
      </div>
      <div className="discovery-actions">
        {calendar && <BookingOptions calendar={calendar} embed={embed} />}
        <ContactForm initialState={formState} initialRequest={request} calendar={calendar} />
      </div>
    </div>
  </div>;
}

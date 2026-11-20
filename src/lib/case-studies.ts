export type Metric = { value: number; prefix?: string; suffix?: string; decimals?: number; label: string };
export type CaseStudy = {
  slug: string;
  title: string;
  shortTitle: string;
  client: string;
  sector: string;
  description: string;
  summary: string;
  challenge: string;
  built: [string, string][];
  flow: string[];
  metrics: Metric[];
  impact: string;
  stack: string[];
  applies: string;
};

/**
 * Client work, published anonymised with the founder's approval.
 * Results are as reported by each client for the period described; they
 * have not been independently audited and are not a promise of outcomes.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-lead-research-pipeline",
    title: "AI lead research pipeline for a B2B SaaS sales team",
    shortTitle: "AI lead research pipeline",
    client: "B2B SaaS sales team · US mid-market",
    sector: "Sales operations",
    description: "How a B2B SaaS sales team cut prospect research from about 40 minutes to 4 minutes per account with an AI enrichment workflow and human review.",
    summary: "Reps were spending most of their selling time researching accounts by hand. We built an enrichment workflow that gathers the research, drafts the context and leaves the final call with the rep.",
    challenge: "Each rep spent around 40 minutes per account browsing LinkedIn, reading company news and writing a first line. At 50 new accounts a week, research crowded out conversations, and quality varied by rep.",
    built: [
      ["Signal-based capture", "Clay tables pull in accounts that match agreed triggers, such as a new VP or director hire, a recent funding round or a relevant tech stack change."],
      ["Enrichment waterfall", "Apollo verifies contact details, public sources add firmographics, then the workflow summarises recent company news and activity."],
      ["AI context brief", "Claude writes a one-paragraph “why now” brief and a suggested opening line for each prospect from the enriched data."],
      ["Human review", "Reps approve or edit each brief in about 10 seconds before anything is sent. Nothing goes out unreviewed."],
      ["CRM sync", "Approved records and briefs sync to HubSpot so managers can see what was researched and why."],
    ],
    flow: ["Trigger signal", "Enrich & verify", "AI brief", "Rep approves", "HubSpot"],
    metrics: [
      { value: 90, suffix: "%", label: "less research time per account" },
      { value: 4, suffix: " min", label: "per account, down from about 40" },
      { value: 500, suffix: "+", label: "accounts enriched each week" },
      { value: 3.2, suffix: "x", decimals: 1, label: "reply rate on outreach" },
    ],
    impact: "Reps reclaimed more than 15 hours a week that had gone into manual research. Because every message referenced something specific and current, reply rates rose 3.2 times while the team kept a human check on every brief.",
    stack: ["Clay", "Claude", "Apollo", "LinkedIn Sales Navigator", "HubSpot", "Instantly"],
    applies: "The same pattern — gather data from several sources, have AI draft a summary, and let a person approve it before it reaches the CRM — fits Australian teams that research suppliers, tenders or new enquiries by hand.",
  },
  {
    slug: "outbound-automation-crm-sync",
    title: "Outbound automation and CRM sync for a three-person sales team",
    shortTitle: "Outbound engine with CRM sync",
    client: "SaaS company · three-person sales team",
    sector: "Sales operations",
    description: "How a SaaS sales team moved from spreadsheets to automated outbound with HubSpot sync, growing from 8–12 to 40+ qualified meetings a month.",
    summary: "A small team was sourcing, emailing and tracking everything by hand in spreadsheets. We set up the sending infrastructure, sourcing, sequencing and HubSpot sync as one connected system.",
    challenge: "Three reps sourced leads on LinkedIn, wrote every email individually and tracked replies in spreadsheets. They booked 8–12 qualified conversations a month against a target of 40, and poor deliverability meant many emails never arrived.",
    built: [
      ["Deliverability set-up", "Five sending domains configured with SPF, DKIM and DMARC and warmed over three weeks before any campaign started."],
      ["ICP sourcing", "Clay workflows pull decision-makers that match the agreed customer profile, so reps stop building lists by hand."],
      ["Sequencing", "Five-touch sequences over 14 days with AI-drafted, rep-approved first lines and parallel LinkedIn steps."],
      ["Real-time HubSpot sync", "Webhooks log every reply, booking and status change in HubSpot, giving reps one pipeline instead of several spreadsheets."],
      ["Reporting", "A dashboard tracks open, reply and booking rates by sequence variant so the team can test subject lines and offers."],
    ],
    flow: ["ICP source", "Verify & warm", "Sequence", "Reply / booking", "HubSpot"],
    metrics: [
      { value: 40, suffix: "+", label: "qualified meetings a month, up from 8–12" },
      { value: 62, suffix: "%", label: "average open rate" },
      { value: 12, suffix: "%", label: "positive reply rate" },
      { value: 4.2, suffix: "x", decimals: 1, label: "pipeline growth" },
    ],
    impact: "Within 60 days of launch the system was producing 40+ qualified meetings a month. The company later grew from three to five reps without adding operations headcount, because tracking and follow-up no longer lived in spreadsheets.",
    stack: ["Instantly", "Clay", "HubSpot", "LinkedIn Sales Navigator", "Apollo", "Zapier"],
    applies: "For Australian businesses the useful part is usually the plumbing: one source of truth in the CRM, automatic logging and clean reporting. Any outbound programme here must also meet the Spam Act 2003 consent, identification and unsubscribe rules.",
  },
  {
    slug: "salesforce-crm-hygiene-agent",
    title: "AI-assisted Salesforce hygiene for a 15-rep B2B sales team",
    shortTitle: "Salesforce CRM hygiene assistant",
    client: "Mid-size B2B company · 15 sales reps",
    sector: "CRM workflows",
    description: "How a 15-rep B2B team cut manual Salesforce updates by 70% and lifted CRM data accuracy from 61% to 94% with AI suggestions and one-click approval.",
    summary: "Reps spent hours a day on CRM upkeep and still left records out of date. We built an assistant that reads activity, suggests the updates and lets reps confirm them in one click.",
    challenge: "Fifteen reps spent more than two hours a day updating opportunity stages, logging notes, creating follow-ups and pulling reports. Updates slipped, data accuracy sat around 61% and managers couldn’t trust the forecast.",
    built: [
      ["Lead scoring", "Scores combine engagement signals with firmographic data and update inside Salesforce."],
      ["Suggested stage changes", "The assistant watches deal activity against agreed criteria and proposes stage changes. Reps confirm with one click."],
      ["Follow-up tasks", "After each logged interaction it drafts the next step as a task, assigned to the right rep with a due date."],
      ["Deal health alerts", "Deals with no activity for seven days, missing stakeholders or stalled stages are flagged in a weekly manager digest."],
      ["Plain-English reports", "Managers ask questions such as “deals closing this month over $50K” and get a Salesforce report back."],
    ],
    flow: ["Calls & emails", "AI reads notes", "Suggest update", "Rep confirms", "Salesforce"],
    metrics: [
      { value: 70, suffix: "%", label: "fewer manual CRM tasks" },
      { value: 15, suffix: " hrs", label: "saved per rep each month" },
      { value: 94, suffix: "%", label: "CRM data accuracy, up from 61%" },
      { value: 22, suffix: "%", label: "higher win rate over the period" },
    ],
    impact: "Manual CRM update time fell by 70%, giving each rep about 15 more selling hours a month. Data accuracy rose from 61% to 94%, so leadership could rely on the pipeline. The client also reported a 22% higher win rate, which other changes in the period may have contributed to.",
    stack: ["Salesforce", "Salesforce API", "Python", "OpenAI API", "Claude"],
    applies: "Most Australian teams we speak with have the same problem in HubSpot, Pipedrive or Salesforce: the CRM is only as good as the updates people remember to make. Suggest-and-confirm keeps a person in control while removing the retyping.",
  },
];

export const exampleWorkflows = [
  {
    title: "Approved quote → job → Xero",
    audience: "Field-service and trades teams",
    flow: ["Quote approved", "Match CRM deal", "Draft job", "Coordinator check", "Xero invoice draft"],
    copy: "Stop retyping customer and site details three times. Unclear addresses go to a coordinator with the original quote attached.",
  },
  {
    title: "Shared inbox → CRM triage",
    audience: "Professional and B2B services",
    flow: ["Email arrives", "Classify request", "Find or create contact", "Assign owner", "Follow-up task"],
    copy: "Every enquiry gets an owner and a next step. Low-confidence messages wait for a person instead of being guessed.",
  },
  {
    title: "Weekly report assembly",
    audience: "Operations and owners",
    flow: ["Pull CRM & accounts", "Check missing inputs", "Draft summary", "Owner reviews", "Send report"],
    copy: "The numbers are gathered and checked automatically. The owner still reviews the summary before it goes out.",
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find(c => c.slug === slug);

/**
 * Example builds: illustrative system designs for business types common in
 * Perth and WA. They are NOT client projects — no client, no results. They
 * show how we would scope and build the system, and what we would measure.
 */
export type ExampleBuild = {
  slug: string;
  title: string;
  shortTitle: string;
  sector: string;
  businessType: string;
  description: string;
  summary: string;
  problem: string;
  designedTo: string[];
  built: [string, string][];
  flow: string[];
  checks: string[];
  measures: string[];
  stack: string[];
  applies: string;
};

export const exampleBuilds: ExampleBuild[] = [
  {
    slug: "construction-custom-crm-perth",
    title: "A custom CRM for a Perth construction business",
    shortTitle: "Construction CRM, enquiry to handover",
    sector: "Construction & renovation",
    businessType: "Illustrative: a residential builder or renovation firm with 10–40 staff",
    description: "Example build: a custom CRM for a Perth construction business tracking every enquiry, site visit, estimate and variation through to handover and Xero.",
    summary: "Builders lose work between the first phone call and the signed contract. This example shows a CRM shaped around how a construction business actually sells: enquiry, site visit, estimate, follow-up, contract, then a clean handover to the job.",
    problem: "Enquiries arrive by phone, website, email and referral. Site visits live in someone’s calendar, estimates sit in spreadsheets or a separate estimating tool, and follow-ups depend on memory. When a job is won, the same client and site details are typed again into job management and Xero — and variations later in the job are hard to trace back to what was agreed.",
    designedTo: [
      "Give every enquiry an owner, a stage and a dated next step",
      "Stop re-typing client and site details at handover",
      "Make quote follow-up automatic but still personal",
      "Show the pipeline value by stage without a weekly spreadsheet",
    ],
    built: [
      ["One intake for every channel", "Website forms, the shared inbox and logged phone calls create or update one contact and one opportunity, with duplicates checked by phone and email."],
      ["Construction pipeline stages", "New enquiry → site visit booked → estimate in progress → quote sent → contract → won/lost, each with required fields so nothing moves forward half-filled."],
      ["Site visit scheduling", "Booking a site visit creates a calendar event with the address, access notes and the client’s brief attached, and sets the follow-up date automatically."],
      ["Estimate and quote follow-up", "When a quote is sent, follow-ups are drafted at agreed intervals. AI summarises the brief and suggests the next message; the estimator approves before anything is sent."],
      ["Won job handover", "Marking a job won creates the job in the job-management tool and the client in Xero from the same record, with the accepted quote attached. Unclear addresses or scopes stop for a coordinator."],
      ["Variations log", "Variations are logged against the job with who requested and approved them, so the final invoice matches what was agreed."],
    ],
    flow: ["Enquiry", "Site visit", "Estimate & quote", "Approve follow-up", "Won → job + Xero"],
    checks: [
      "The estimator approves every outgoing quote follow-up",
      "Handover pauses for a coordinator if the site address or scope is unclear",
      "Variations need a named approver before they reach the invoice",
    ],
    measures: [
      "Time from enquiry to first response",
      "Quotes sent vs quotes followed up within the agreed window",
      "Win rate by lead source",
      "Re-keying at handover (target: none)",
    ],
    stack: ["HubSpot or Pipedrive", "Make or n8n", "Xero", "Buildxact, ServiceM8 or similar job tool", "Google or Microsoft 365 calendar"],
    applies: "Most Perth builders and renovators already pay for a job tool and Xero. The gap is usually the sales side before the job exists. An audit maps your current stages and tools first, then the build connects them rather than replacing them.",
  },
  {
    slug: "hvac-enquiry-response-system",
    title: "An enquiry response system for an HVAC service business",
    shortTitle: "HVAC enquiry response system",
    sector: "Trades & home services",
    businessType: "Illustrative: an air-conditioning install and service business with 5–25 technicians",
    description: "Example build: a fast enquiry response system for an HVAC business — every call, form and message acknowledged, triaged by urgency and turned into a booked job.",
    summary: "In a Perth summer, a broken air conditioner is urgent and customers call the next business if nobody answers. This example shows a response system that acknowledges every enquiry, sorts urgent breakdowns from routine quotes and gets the right ones booked.",
    problem: "Technicians are on roofs and in ceilings, so calls go to voicemail. Web forms and Facebook messages wait until someone checks the inbox at night. Urgent no-cooling jobs and routine install quotes sit in the same queue, and quote follow-ups and annual service reminders depend on whoever remembers.",
    designedTo: [
      "Acknowledge every enquiry within minutes, day or night",
      "Separate urgent breakdowns from routine quotes",
      "Turn enquiries into booking requests in the job system",
      "Follow up quotes and service reminders without manual chasing",
    ],
    built: [
      ["Missed-call and form capture", "Missed calls, web forms and messages create one enquiry record. The customer gets an immediate acknowledgement by SMS or email confirming what happens next."],
      ["Urgency triage", "Rules and AI classify each enquiry — no cooling, fault, install quote or service — using the customer’s own words. Low-confidence or sensitive cases go to the office for a decision."],
      ["Booking request into the job tool", "Qualified enquiries create a draft job or booking request in ServiceM8 or simPRO with the address, unit details and photos attached. The office confirms the slot."],
      ["Quote follow-up", "Install quotes get follow-ups at set intervals, drafted for the office to approve, and stop automatically when the quote is accepted or declined."],
      ["Service reminders", "Completed installs schedule annual service reminders for customers who agreed to receive them."],
      ["Daily summary", "Each morning the owner gets new enquiries by type, unanswered items and quotes awaiting a decision."],
    ],
    flow: ["Call, form or message", "Instant acknowledgement", "Triage urgency", "Office confirms", "Booked in job tool"],
    checks: [
      "Pricing, emergency call-out fees and exact arrival times are confirmed by a person",
      "Unclear or sensitive messages go to the office instead of an automated reply",
      "Marketing reminders only go to customers who consented (Spam Act 2003)",
    ],
    measures: [
      "Time to first response, in and out of business hours",
      "Share of missed calls that receive a reply",
      "Enquiry-to-booking rate by enquiry type",
      "Quotes followed up on time",
    ],
    stack: ["ServiceM8 or simPRO", "Twilio or the job tool’s SMS", "Make or n8n", "Website forms and Facebook messages", "Xero"],
    applies: "The same pattern fits plumbers, electricians, solar and pool services: acknowledge fast, triage honestly, and let a person confirm anything involving price or timing. An audit checks your phone system, job tool and current response times before anything is built.",
  },
];

export const getExampleBuild = (slug: string) => exampleBuilds.find(e => e.slug === slug);

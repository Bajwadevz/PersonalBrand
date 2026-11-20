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
  /** Client-reported figures. Empty when the client has not shared figures yet. */
  metrics: Metric[];
  /** What changed, in words. Used when there are no figures to show. */
  outcomes?: string[];
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
  {
    slug: "construction-crm",
    title: "A custom CRM for a construction business, from enquiry to handover",
    shortTitle: "Construction CRM to job handover",
    client: "Construction business · anonymised",
    sector: "Construction & renovation",
    description: "Client case study: a custom CRM for a construction business that tracks every enquiry, site visit, quote and follow-up through to a clean job handover.",
    summary: "Work was being lost between the first phone call and the signed contract. We built a CRM around how this construction business actually sells — enquiry, site visit, quote, follow-up, contract — and connected it to the handover into the job.",
    challenge: "Enquiries came in by phone, website, email and referral and lived in different places. Site visits sat in individual calendars, quotes in spreadsheets, and follow-ups depended on memory. When a job was won, client and site details were typed again for the job, and there was no single view of what was in the pipeline.",
    built: [
      ["One intake for every channel", "Website forms, the shared inbox and logged phone calls create or update a single contact and opportunity, with duplicate checks so the same client isn’t entered twice."],
      ["A pipeline built for construction", "Stages that mirror how the business sells — new enquiry, site visit booked, quoting, quote sent, contract, won or lost — with the details each stage needs before a job moves on."],
      ["Site visit scheduling", "Booking a site visit attaches the address, access notes and the client’s brief to the calendar event and sets the follow-up date automatically."],
      ["Quote follow-ups", "Sent quotes trigger follow-up reminders at agreed intervals, so no quote goes quiet without someone deciding to let it."],
      ["Won-job handover", "Marking a job won carries the client, site and accepted quote into the job set-up from the same record, instead of re-typing it."],
      ["Pipeline view", "The owner sees every open opportunity by stage and value without rebuilding a spreadsheet each week."],
    ],
    flow: ["Enquiry", "Site visit", "Quote", "Follow-up", "Won → job handover"],
    metrics: [],
    outcomes: [
      "Every enquiry has an owner, a stage and a next step",
      "Quotes are followed up on schedule instead of from memory",
      "Client and site details are entered once and carried to the job",
      "The owner can see the whole pipeline in one place",
    ],
    impact: "The business moved from scattered notes, calendars and spreadsheets to one CRM that matches how it wins work. Enquiries no longer sit unowned, quote follow-ups happen on time, and winning a job no longer means typing the same details again.",
    stack: ["Custom CRM", "Website forms", "Shared inbox", "Calendar", "Automation layer"],
    applies: "Builders, renovators and trades that quote before they work usually lose the most between first contact and contract. The same pattern — one intake, construction-shaped stages, automatic follow-ups and a clean handover — fits most Australian construction businesses.",
  },
  {
    slug: "hvac-enquiry-response-system",
    title: "An enquiry response system for an HVAC service business",
    shortTitle: "HVAC enquiry response system",
    client: "HVAC service business · anonymised",
    sector: "Trades & home services",
    description: "Client case study: an enquiry response system for an HVAC business that acknowledges every call and form fast, sorts urgent jobs and gets them booked.",
    summary: "Technicians on jobs meant missed calls and enquiries that waited until evening. We built a response system that acknowledges every enquiry quickly, separates urgent breakdowns from routine quotes and turns enquiries into bookings.",
    challenge: "Calls went to voicemail while technicians were on roofs and in ceilings. Web forms and messages waited until someone checked the inbox after hours, and urgent no-cooling jobs sat in the same queue as routine install quotes. Quote follow-ups and service reminders depended on whoever remembered.",
    built: [
      ["Missed-call and form capture", "Missed calls, website forms and messages create one enquiry record, and the customer gets an immediate acknowledgement explaining what happens next."],
      ["Urgency triage", "Enquiries are sorted into breakdowns, faults, install quotes and servicing from the customer’s own words. Anything unclear goes to the office to decide."],
      ["Booking requests", "Qualified enquiries become booking requests with the address, unit details and photos attached, and the office confirms the time slot."],
      ["Quote follow-up", "Install quotes get follow-ups at set intervals that stop automatically once the customer accepts or declines."],
      ["Service reminders", "Completed installs get service reminders for customers who agreed to receive them."],
      ["Daily summary", "The owner starts each day with new enquiries by type, anything unanswered and quotes awaiting a decision."],
    ],
    flow: ["Call, form or message", "Instant acknowledgement", "Triage urgency", "Office confirms", "Booked"],
    metrics: [],
    outcomes: [
      "Every call, form and message gets a fast acknowledgement",
      "Urgent breakdowns are separated from routine quotes",
      "Enquiries become booking requests with the details attached",
      "Quote follow-ups and service reminders run on their own",
    ],
    impact: "Customers no longer wait in silence while the team is on the tools. Urgent jobs are visible straight away, routine quotes are followed up on schedule, and the office works from one queue instead of voicemail, inboxes and memory.",
    stack: ["Telephony / SMS", "Website forms", "Job management system", "Automation layer"],
    applies: "Any service business where the team is out on jobs — plumbing, electrical, solar, pools — loses work to slow replies. Acknowledging fast, triaging honestly and letting a person confirm price and timing is the same pattern.",
  },
  {
    slug: "clinic-call-tracking-crm",
    title: "A custom CRM for a clinic to track calls and follow-ups",
    shortTitle: "Clinic call-tracking CRM",
    client: "Clinic · anonymised",
    sector: "Health & clinics",
    description: "Client case study: a custom CRM for a clinic that tracks every call, gives the assistant a daily call list and makes sure follow-ups never slip.",
    summary: "The clinic’s assistant was juggling calls, callbacks and follow-ups across notes and memory. We built a custom CRM that tracks every call, tells the assistant who to call next, and keeps follow-ups on schedule.",
    challenge: "Calls in and out weren’t recorded in one place, so it was hard to know who had been contacted, what was said and who still needed a callback. Follow-ups relied on sticky notes and memory, and the owner had no view of how many enquiries turned into appointments.",
    built: [
      ["Call tracking", "Every inbound and outbound call is logged against the person, with the outcome and notes, so anyone can see the full history before picking up the phone."],
      ["The assistant’s call list", "A daily list shows exactly who to call — new enquiries, callbacks and follow-ups due — in priority order."],
      ["Outbound calling workflow", "The assistant works through calls from the CRM and records the outcome in a couple of clicks, which sets the next step automatically."],
      ["Follow-up system", "Follow-ups are scheduled from each call’s outcome and reappear on the list when due, so nobody falls through the cracks."],
      ["Enquiry-to-appointment tracking", "Each enquiry moves through clear stages through to a booked appointment, so the clinic can see what is converting."],
      ["Owner reporting", "A simple view of calls made, follow-ups due and enquiries converted, without counting by hand."],
    ],
    flow: ["Call in or out", "Logged to the person", "Outcome recorded", "Follow-up scheduled", "Appointment booked"],
    metrics: [],
    outcomes: [
      "Every call is recorded against the right person",
      "The assistant starts each day with a clear call list",
      "Follow-ups are scheduled automatically from each call’s outcome",
      "The owner can see enquiries turning into appointments",
    ],
    impact: "The assistant now works from one list instead of notes and memory, every call has a recorded outcome, and follow-ups come back automatically when they are due. The clinic has a clear view of its enquiries for the first time.",
    stack: ["Custom CRM", "Phone / call logging", "Calendar", "Automation layer"],
    applies: "Clinics and appointment-based practices often run on a busy front desk and phone. Tracking calls, giving the team a daily call list and automating follow-ups is a practical, low-risk first step.",
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

export const exampleBuilds: ExampleBuild[] = [];

export const getExampleBuild = (slug: string) => exampleBuilds.find(e => e.slug === slug);

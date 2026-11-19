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

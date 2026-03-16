"use client";

import { useState } from "react";
import InlineOptIn from "@/components/InlineOptIn";

const industries = [
  "SaaS / Software",
  "Sales & Business Development",
  "Marketing Agency",
  "E-commerce",
  "Consulting / Freelance",
  "Real Estate",
  "Recruiting / HR",
  "Finance & Accounting",
  "Education / Coaching",
  "Legal",
];

const toolOptions = [
  "HubSpot", "Salesforce", "Pipedrive", "Notion", "Airtable",
  "Google Sheets", "Slack", "Gmail", "LinkedIn", "Clay",
  "Apollo", "Stripe", "Shopify", "Calendly", "Typeform",
  "Webflow", "WordPress", "OpenAI / ChatGPT",
];

type WorkflowIdea = {
  title: string;
  description: string;
  tools: string[];
  timeSaved: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
};

const workflowDatabase: Record<string, WorkflowIdea[]> = {
  "SaaS / Software": [
    { title: "Trial-to-paid conversion alert system", description: "When a trial user hits a usage threshold in your product, n8n fires a Slack notification to the account owner with enriched company data and a suggested outreach message — all before the trial expires.", tools: ["n8n", "Slack", "HubSpot", "Airtable"], timeSaved: "3 hrs/week", difficulty: "Intermediate" },
    { title: "Automated NPS follow-up routing", description: "When a detractor score comes in via Typeform or your NPS tool, n8n creates a support ticket, notifies the CSM, and adds a tag to the CRM record — within seconds of submission.", tools: ["n8n", "Typeform", "HubSpot", "Slack"], timeSaved: "2 hrs/week", difficulty: "Beginner" },
    { title: "Weekly product usage report", description: "Every Monday morning, n8n pulls usage metrics from your analytics tool, formats them into a clean summary, and posts the report to Notion and Slack. No manual compilation.", tools: ["n8n", "Notion", "Slack", "Google Sheets"], timeSaved: "4 hrs/week", difficulty: "Intermediate" },
    { title: "Churned customer win-back sequence trigger", description: "When a customer cancels, n8n waits 14 days, checks if they have re-activated, and if not — creates a win-back task in your CRM with their usage history attached for context.", tools: ["n8n", "HubSpot", "Airtable", "Gmail"], timeSaved: "2 hrs/week", difficulty: "Intermediate" },
    { title: "Inbound demo request enrichment", description: "When a demo form is submitted, n8n enriches the contact with company data from Apollo, scores the lead against your ICP, and routes qualified leads to Salesforce with a rep assigned — before a human sees it.", tools: ["n8n", "Apollo", "Salesforce", "Slack"], timeSaved: "5 hrs/week", difficulty: "Advanced" },
  ],
  "Sales & Business Development": [
    { title: "Pre-call research brief generator", description: "30 minutes before a scheduled call, n8n pulls LinkedIn data, recent news, and CRM history for the prospect and sends a formatted research brief to the rep's email. Preparation with zero manual work.", tools: ["n8n", "LinkedIn", "HubSpot", "Gmail"], timeSaved: "5 hrs/week", difficulty: "Advanced" },
    { title: "CRM data hygiene automation", description: "Every night, n8n scans your CRM for missing fields — company size, industry, LinkedIn URL — and fills them automatically using Apollo. Your CRM stays clean without an ops hire.", tools: ["n8n", "Apollo", "HubSpot", "Airtable"], timeSaved: "4 hrs/week", difficulty: "Intermediate" },
    { title: "Deal stage follow-up reminder", description: "When a deal sits in the same stage for more than 7 days, n8n sends the rep a Slack nudge with the deal value, days stale, and a suggested next action based on the stage.", tools: ["n8n", "HubSpot", "Slack"], timeSaved: "2 hrs/week", difficulty: "Beginner" },
    { title: "LinkedIn connection to CRM pipeline", description: "When you accept a LinkedIn connection request, n8n uses a webhook to check if they match your ICP criteria and — if yes — adds them to your CRM with a follow-up task created.", tools: ["n8n", "LinkedIn", "HubSpot", "Airtable"], timeSaved: "3 hrs/week", difficulty: "Intermediate" },
    { title: "Weekly pipeline summary report", description: "Every Friday, n8n pulls all deals from your CRM, calculates weighted pipeline value, flags deals going stale, and sends a formatted summary to you and your manager. No manual spreadsheets.", tools: ["n8n", "Salesforce", "Google Sheets", "Gmail"], timeSaved: "3 hrs/week", difficulty: "Intermediate" },
  ],
  "Marketing Agency": [
    { title: "Client reporting automation", description: "Every Monday, n8n pulls campaign metrics from Google Ads, Meta, and your analytics tools, formats them into a client-ready summary, and sends it to each client automatically.", tools: ["n8n", "Google Sheets", "Notion", "Gmail"], timeSaved: "8 hrs/week", difficulty: "Advanced" },
    { title: "New client onboarding sequence", description: "When a contract is signed, n8n creates the client folder in Drive, sends the intake form, adds them to your CRM, creates project tasks in Airtable, and sends a welcome email — all triggered automatically.", tools: ["n8n", "Airtable", "Gmail", "Calendly"], timeSaved: "4 hrs/week", difficulty: "Intermediate" },
    { title: "Content calendar auto-population", description: "When a blog post goes live on WordPress, n8n automatically creates social post drafts for LinkedIn and Twitter, adds them to your content calendar in Notion, and notifies the social media manager.", tools: ["n8n", "WordPress", "Notion", "Slack"], timeSaved: "3 hrs/week", difficulty: "Beginner" },
    { title: "Lead form to CRM with source tracking", description: "When a lead submits any form on your site, n8n captures the UTM parameters, enriches the contact, adds them to HubSpot with the correct source attribution, and notifies the right team member.", tools: ["n8n", "Typeform", "HubSpot", "Slack"], timeSaved: "3 hrs/week", difficulty: "Intermediate" },
    { title: "Monthly invoice generation trigger", description: "On the first of each month, n8n pulls client data from Airtable, calculates billable hours or retainer amounts, and creates draft invoices in your billing tool — ready to review and send.", tools: ["n8n", "Airtable", "Google Sheets", "Gmail"], timeSaved: "4 hrs/week", difficulty: "Intermediate" },
  ],
  "E-commerce": [
    { title: "Abandoned cart follow-up sequence", description: "When a cart is abandoned for more than 1 hour, n8n sends a personalized recovery email via Gmail, waits 24 hours, and if no purchase — sends a second email with a discount code.", tools: ["n8n", "Shopify", "Gmail", "Airtable"], timeSaved: "4 hrs/week", difficulty: "Intermediate" },
    { title: "Low inventory alert system", description: "When any product drops below a threshold quantity in Shopify, n8n sends a Slack alert to the ops team and creates a reorder task in Airtable with supplier contact info attached.", tools: ["n8n", "Shopify", "Slack", "Airtable"], timeSaved: "2 hrs/week", difficulty: "Beginner" },
    { title: "Post-purchase review request", description: "7 days after an order is marked fulfilled, n8n sends an automated review request email — personalized with the product name and a direct link to leave a review.", tools: ["n8n", "Shopify", "Gmail"], timeSaved: "3 hrs/week", difficulty: "Beginner" },
    { title: "Daily sales summary report", description: "Every evening, n8n pulls the day's orders from Shopify, calculates revenue, AOV, and top products, and sends a clean daily summary to the founder's inbox and Slack.", tools: ["n8n", "Shopify", "Slack", "Gmail"], timeSaved: "2 hrs/week", difficulty: "Beginner" },
    { title: "New VIP customer tagging and outreach", description: "When a customer's lifetime value crosses a threshold, n8n automatically adds a VIP tag in Shopify, creates a personalized outreach task in your CRM, and notifies the team.", tools: ["n8n", "Shopify", "HubSpot", "Slack"], timeSaved: "2 hrs/week", difficulty: "Intermediate" },
  ],
  "Consulting / Freelance": [
    { title: "Automated project kickoff workflow", description: "When a new project is confirmed in Calendly, n8n creates the project in Airtable, sends the client an onboarding questionnaire via Typeform, and creates a checklist for you in Notion.", tools: ["n8n", "Calendly", "Airtable", "Notion"], timeSaved: "3 hrs/week", difficulty: "Intermediate" },
    { title: "Weekly time and progress summary", description: "Every Friday, n8n compiles your logged hours, completed tasks, and key outputs from Notion into a formatted client progress email — ready to send with one click.", tools: ["n8n", "Notion", "Google Sheets", "Gmail"], timeSaved: "2 hrs/week", difficulty: "Beginner" },
    { title: "Invoice trigger on project milestone", description: "When a milestone is marked complete in Airtable, n8n automatically creates a draft invoice in your billing tool and sends you a Slack notification to review and send.", tools: ["n8n", "Airtable", "Slack", "Gmail"], timeSaved: "2 hrs/week", difficulty: "Beginner" },
    { title: "Proposal follow-up sequence", description: "When a proposal is sent and marked pending in your CRM, n8n waits 3 days, checks if there is a response, and if not — sends you a follow-up reminder with the proposal attached.", tools: ["n8n", "HubSpot", "Gmail", "Airtable"], timeSaved: "1 hr/week", difficulty: "Beginner" },
    { title: "Testimonial request automation", description: "2 weeks after a project is marked complete in Airtable, n8n sends an automated testimonial request to the client — personalized with the project name and a simple form link.", tools: ["n8n", "Airtable", "Gmail", "Typeform"], timeSaved: "1 hr/week", difficulty: "Beginner" },
  ],
  "Real Estate": [
    { title: "New listing alert to qualified buyers", description: "When a new listing is added to your database in Airtable, n8n matches it against saved buyer criteria and sends a personalized email to every matching contact automatically.", tools: ["n8n", "Airtable", "Gmail"], timeSaved: "4 hrs/week", difficulty: "Intermediate" },
    { title: "Lead follow-up cadence automation", description: "When a new inquiry comes in via your website form, n8n adds the lead to HubSpot, sends an immediate acknowledgment email, and creates follow-up tasks for days 1, 3, and 7.", tools: ["n8n", "Typeform", "HubSpot", "Gmail"], timeSaved: "5 hrs/week", difficulty: "Intermediate" },
    { title: "Weekly market report for active clients", description: "Every Monday, n8n compiles new listings, price changes, and market stats relevant to each active client's search criteria and sends personalized updates automatically.", tools: ["n8n", "Airtable", "Google Sheets", "Gmail"], timeSaved: "4 hrs/week", difficulty: "Advanced" },
    { title: "Post-showing follow-up sequence", description: "After a showing is logged in your CRM, n8n waits 24 hours and sends a follow-up email asking for feedback — then routes the response back to update the deal record.", tools: ["n8n", "HubSpot", "Gmail"], timeSaved: "2 hrs/week", difficulty: "Beginner" },
    { title: "Transaction milestone checklist automation", description: "When a deal moves to a new stage in your CRM, n8n sends the relevant checklist to the client, creates tasks for your team, and logs the stage change with a timestamp.", tools: ["n8n", "HubSpot", "Gmail", "Airtable"], timeSaved: "3 hrs/week", difficulty: "Intermediate" },
  ],
  "Recruiting / HR": [
    { title: "Application screening and routing", description: "When a candidate submits an application via Typeform, n8n scores their answers against your criteria, routes qualified candidates to a Notion review board, and sends an acknowledgment automatically.", tools: ["n8n", "Typeform", "Notion", "Gmail"], timeSaved: "6 hrs/week", difficulty: "Intermediate" },
    { title: "Interview scheduling automation", description: "When a candidate passes screening, n8n sends them a Calendly link for the next interview stage, creates the event in the interviewer's calendar, and adds a briefing note with the candidate's application.", tools: ["n8n", "Calendly", "Gmail", "Notion"], timeSaved: "4 hrs/week", difficulty: "Beginner" },
    { title: "Candidate pipeline status updates", description: "Every week, n8n scans your Airtable pipeline for candidates who have not had a status update in 7+ days and sends a reminder to the hiring manager to take action.", tools: ["n8n", "Airtable", "Slack"], timeSaved: "2 hrs/week", difficulty: "Beginner" },
    { title: "New hire onboarding task creation", description: "When a candidate is marked as hired in your ATS, n8n automatically creates their onboarding checklist in Notion, sends the new hire their pre-boarding documents, and notifies IT and their manager.", tools: ["n8n", "Notion", "Gmail", "Slack"], timeSaved: "3 hrs/week", difficulty: "Intermediate" },
    { title: "Job posting syndication", description: "When a new job is added to your Airtable or Notion database, n8n automatically posts it to LinkedIn and sends it to your email list — one source of truth, no manual cross-posting.", tools: ["n8n", "Airtable", "LinkedIn", "Gmail"], timeSaved: "2 hrs/week", difficulty: "Intermediate" },
  ],
  "Finance & Accounting": [
    { title: "Expense report collection automation", description: "Every Friday, n8n sends a Typeform link to each team member requesting their weekly expenses, collects the responses, and compiles them into a formatted Google Sheet for review.", tools: ["n8n", "Typeform", "Google Sheets", "Gmail"], timeSaved: "4 hrs/week", difficulty: "Beginner" },
    { title: "Invoice payment status tracker", description: "Every morning, n8n checks for unpaid invoices past their due date and sends a reminder email to the client — escalating the tone after 7, 14, and 30 days automatically.", tools: ["n8n", "Airtable", "Gmail", "Slack"], timeSaved: "3 hrs/week", difficulty: "Intermediate" },
    { title: "Monthly close checklist automation", description: "On the last business day of each month, n8n sends the accounting team a checklist of close tasks in Notion, assigns each item to the right person, and pings incomplete items at end of day.", tools: ["n8n", "Notion", "Slack", "Google Sheets"], timeSaved: "3 hrs/week", difficulty: "Intermediate" },
    { title: "Budget variance alert", description: "When spend in any category crosses 80% of budget, n8n sends a Slack alert to the budget owner and the finance lead — with the current spend and remaining amount shown.", tools: ["n8n", "Google Sheets", "Slack", "Airtable"], timeSaved: "2 hrs/week", difficulty: "Beginner" },
    { title: "Client financial report delivery", description: "On the agreed reporting date, n8n pulls client financials from your accounting software, formats them into a clean PDF summary, and sends it to the client automatically.", tools: ["n8n", "Google Sheets", "Gmail", "Notion"], timeSaved: "5 hrs/week", difficulty: "Advanced" },
  ],
  "Education / Coaching": [
    { title: "Student progress tracker and alert", description: "Each week, n8n checks completion data in your course platform and sends personalized check-in emails to students who have fallen behind — and congratulations to those ahead of schedule.", tools: ["n8n", "Airtable", "Gmail", "Notion"], timeSaved: "4 hrs/week", difficulty: "Intermediate" },
    { title: "Session booking to prep workflow", description: "When a coaching session is booked via Calendly, n8n pulls the client's notes from Notion, their previous session summary, and sends you a briefing 30 minutes before the call.", tools: ["n8n", "Calendly", "Notion", "Gmail"], timeSaved: "2 hrs/week", difficulty: "Beginner" },
    { title: "Post-session summary delivery", description: "After each session, n8n prompts you with a short Typeform to capture key notes, then automatically formats them into a session summary and sends it to the client within the hour.", tools: ["n8n", "Typeform", "Notion", "Gmail"], timeSaved: "3 hrs/week", difficulty: "Beginner" },
    { title: "Testimonial and case study pipeline", description: "30 days after a student completes the program, n8n sends a testimonial request, collects the response via Typeform, and adds approved testimonials to your Notion content bank.", tools: ["n8n", "Typeform", "Notion", "Gmail"], timeSaved: "2 hrs/week", difficulty: "Beginner" },
    { title: "Waitlist to enrollment automation", description: "When a spot opens in a cohort, n8n emails the next person on your Airtable waitlist with an enrollment link, sets a 48-hour deadline, and moves them to the next person if not confirmed.", tools: ["n8n", "Airtable", "Gmail", "Calendly"], timeSaved: "2 hrs/week", difficulty: "Intermediate" },
  ],
  "Legal": [
    { title: "Intake form to matter creation", description: "When a potential client submits an intake form, n8n creates a matter record in your practice management tool, sends a conflict check notification, and schedules a consultation automatically.", tools: ["n8n", "Typeform", "Airtable", "Gmail"], timeSaved: "3 hrs/week", difficulty: "Intermediate" },
    { title: "Deadline and deadline reminder system", description: "When a new deadline is added to your Airtable matter tracker, n8n creates reminders at 30, 14, 7, and 1 day before — sent to both the responsible attorney and their assistant.", tools: ["n8n", "Airtable", "Slack", "Gmail"], timeSaved: "4 hrs/week", difficulty: "Beginner" },
    { title: "Document request tracking", description: "When a document request is sent to a client, n8n logs it in Airtable with the sent date, checks daily for receipt, and escalates via email if not received within 5 business days.", tools: ["n8n", "Airtable", "Gmail"], timeSaved: "3 hrs/week", difficulty: "Beginner" },
    { title: "Monthly billing summary compilation", description: "On the last day of each month, n8n pulls all billable hours from your time tracking tool and compiles a billing summary by matter — ready for attorney review before invoicing.", tools: ["n8n", "Google Sheets", "Airtable", "Gmail"], timeSaved: "4 hrs/week", difficulty: "Intermediate" },
    { title: "Client update cadence automation", description: "Every 2 weeks, n8n checks all active matters and sends each client a status update email — pulling the latest notes from Notion and prompting you to add anything new before it sends.", tools: ["n8n", "Notion", "Airtable", "Gmail"], timeSaved: "3 hrs/week", difficulty: "Intermediate" },
  ],
};

const difficultyStyles: Record<string, string> = {
  Beginner: "bg-emerald-50 text-emerald-700 border border-emerald-100",
  Intermediate: "bg-amber-50 text-amber-700 border border-amber-100",
  Advanced: "bg-gray-100 text-gray-500 border border-gray-200/50",
};

export default function WorkflowFinderClient() {
  const [industry, setIndustry] = useState("");
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [ideas, setIdeas] = useState<WorkflowIdea[] | null>(null);

  function toggleTool(tool: string) {
    setSelectedTools((prev) =>
      prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool].slice(0, 8)
    );
  }

  function handleFind() {
    if (!industry) return;
    const base = workflowDatabase[industry] ?? [];
    if (selectedTools.length === 0) {
      setIdeas(base.slice(0, 5));
      return;
    }
    const scored = base.map((idea) => ({
      ...idea,
      matchScore: idea.tools.filter((t) =>
        selectedTools.some((st) => t.toLowerCase().includes(st.toLowerCase()) || st.toLowerCase().includes(t.toLowerCase()))
      ).length,
    }));
    scored.sort((a, b) => b.matchScore - a.matchScore);
    setIdeas(scored.slice(0, 5));
  }

  return (
    <div className="relative w-full overflow-hidden pb-32">
      <section className="pt-32 lg:pt-40 pb-12 px-6 max-w-4xl mx-auto w-full relative z-10">
        <div className="mb-8 inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600 border border-gray-200/50">
          <span className="flex h-2 w-2 rounded-full bg-[#0B2545] mr-2 opacity-80"></span>
          Free tool · instant result · curated from real workflows
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#0F172A] leading-[1.1] mb-6">
          n8n Workflow Idea Finder
        </h1>
        <p className="text-xl max-w-2xl text-gray-600 font-medium leading-relaxed">
          Select your industry and the tools you use. Get 5 specific n8n workflow ideas matched to your exact stack — no generic advice.
        </p>
      </section>

      <section className="pb-12 px-6 max-w-4xl mx-auto w-full relative z-10">
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-gray-100 p-8 md:p-10 flex flex-col gap-8">

          <div>
            <label className="block text-[#0F172A] font-bold text-sm uppercase tracking-wider mb-3">Your industry</label>
            <div className="flex flex-wrap gap-2">
              {industries.map((ind) => (
                <button key={ind} onClick={() => setIndustry(ind)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-150 ${industry === ind ? "bg-[#0F172A] border-[#0F172A] text-white" : "bg-[#F8FAFC] border-gray-200 text-gray-600 hover:border-gray-400"}`}>
                  {ind}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[#0F172A] font-bold text-sm uppercase tracking-wider mb-1">
              Tools you use <span className="font-normal text-gray-400 normal-case tracking-normal">(optional — pick up to 8 to filter results)</span>
            </label>
            <p className="text-xs text-gray-400 mb-3">{selectedTools.length}/8 selected</p>
            <div className="flex flex-wrap gap-2">
              {toolOptions.map((tool) => (
                <button key={tool} onClick={() => toggleTool(tool)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-150 ${selectedTools.includes(tool) ? "bg-[#0F172A] border-[#0F172A] text-white" : "bg-[#F8FAFC] border-gray-200 text-gray-600 hover:border-gray-400"}`}>
                  {tool}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleFind}
            disabled={!industry}
            className="bg-black text-white px-8 py-3.5 rounded-full font-medium hover:bg-gray-900 transition-colors duration-200 ease-out min-h-[44px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] disabled:opacity-30 disabled:cursor-not-allowed w-full sm:w-auto"
          >
            Find My Workflows →
          </button>
        </div>
      </section>

      {ideas && (
        <section className="pb-12 px-6 max-w-4xl mx-auto w-full relative z-10 flex flex-col gap-5">
          {ideas.map((idea, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-gray-100 p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#F8FAFC] border border-gray-200/50 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-[#0B2545]">0{i + 1}</span>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 flex-wrap mb-1">
                    <h3 className="text-lg font-bold text-[#0F172A] leading-snug">{idea.title}</h3>
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${difficultyStyles[idea.difficulty]}`}>
                      {idea.difficulty}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-5 ml-12">{idea.description}</p>
              <div className="ml-12 flex flex-wrap items-center gap-3">
                <div className="flex flex-wrap gap-2">
                  {idea.tools.map((t) => (
                    <span key={t} className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500 border border-gray-200/50">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-100 ml-auto">
                  {idea.timeSaved}
                </span>
              </div>
            </div>
          ))}
        </section>
      )}

      <section className="pb-16 px-6 max-w-4xl mx-auto w-full relative z-10">
        <InlineOptIn />
      </section>
    </div>
  );
}

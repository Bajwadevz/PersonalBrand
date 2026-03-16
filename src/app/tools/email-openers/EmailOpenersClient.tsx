"use client";

import { useState } from "react";
import InlineOptIn from "@/components/InlineOptIn";

type Opener = {
  text: string;
  role: string;
  tactic: string;
  offerType: string;
};

const openers: Opener[] = [
  // C-Suite / Founders
  { text: "Noticed [Company]'s recent push into [New Market]. Given the shift, are you prioritizing [Specific Outcome] this quarter?", role: "C-Suite / Founder", tactic: "Recent Event", offerType: "Strategic Consulting" },
  { text: "Usually when companies hit [Milestone, e.g., Series B], the biggest drag on growth is [Pain Point]. Is that on your radar right now?", role: "C-Suite / Founder", tactic: "Milestone", offerType: "Software / System" },
  { text: "I'll keep this brief — [Competitor X] recently implemented [Strategy] to cut [Cost] by [X]%. Curious if you're exploring similar efficiency plays?", role: "C-Suite / Founder", tactic: "Competitor Mention", offerType: "Cost Reduction" },
  { text: "Saw your post on LinkedIn about [Topic]. Agree completely, especially regarding [Specific Point]. It made me wonder how you handle [Related Problem] at [Company]?", role: "C-Suite / Founder", tactic: "Content Reference", offerType: "Targeted Solution" },
  { text: "Most founders I speak to in [Industry] are struggling to balance [Priority A] and [Priority B] right now. How is [Company] navigating that trade-off?", role: "C-Suite / Founder", tactic: "Industry Trend", offerType: "Strategic Tool" },
  
  // Sales Leadership
  { text: "Saw your SDR team is growing. Usually, onboarding [X] new reps leads to a dip in [Metric, e.g., connect rates]. Are you seeing that right now?", role: "Sales Leadership", tactic: "Hiring Signal", offerType: "Sales Enablement" },
  { text: "Just read the [Company] 10-K/quarterly update. With the focus on [Goal, e.g., upmarket expansion], how are your AEs adjusting their outbound motion?", role: "Sales Leadership", tactic: "Company Strategy", offerType: "Training / Strategy" },
  { text: "Most VP Sales in [Industry] are telling me win rates dropped [X]% this quarter due to [Reason]. Is your team feeling that same pressure?", role: "Sales Leadership", tactic: "Industry Pain", offerType: "Process Improvement" },
  { text: "Noticed you're using [Competitor Tool / Legacy Tool] for [Task]. Are your reps actually adopting it, or is it mostly shelfware?", role: "Sales Leadership", tactic: "Tech Stack", offerType: "Software Replacement" },
  { text: "Quick question — if your reps could eliminate [Manual Task], how much more pipeline could they generate this quarter?", role: "Sales Leadership", tactic: "Hypothetical Scenario", offerType: "Automation" },
  
  // Marketing Leadership
  { text: "Loved the recent campaign for [Product/Feature]. But noticed your inbound routing seems to be sending leads to [Incorrect Place/Delay]. Is that intentional?", role: "Marketing Leadership", tactic: "Observation / Critique", offerType: "Ops / Optimization" },
  { text: "With [Google Update / Platform Change], most CMOS are shifting budget from [Channel A] to [Channel B]. Are you reallocating as well?", role: "Marketing Leadership", tactic: "Platform Shift", offerType: "Agency / Strategy" },
  { text: "Saw you're hiring for a [Specific Role, e.g., Demand Gen Mgr]. While you backfill, are you open to bridging the gap with a fractional team?", role: "Marketing Leadership", tactic: "Hiring Signal", offerType: "Staff Augmentation" },
  { text: "Your content on [Topic] is great, but it's not ranking for [High Intent Keyword]. Is organic capture a priority right now?", role: "Marketing Leadership", tactic: "Missed Opportunity", offerType: "SEO Service" },
  { text: "Noticed your competitor [Name] is heavily outspending you on [Channel]. How are you defending market share?", role: "Marketing Leadership", tactic: "Competitor Action", offerType: "Paid Media Strategy" },

  // Operations / IT
  { text: "I see your team is running [Software A] and [Software B]. Usually, that creates a silo when trying to report on [Metric]. Are you experiencing that?", role: "Operations / IT", tactic: "Tech Stack Sytem", offerType: "Integration Software" },
  { text: "With the upcoming compliance changes for [Regulation], how confident are you in your current [System Type] setup?", role: "Operations / IT", tactic: "Compliance / Risk", offerType: "Security / Compliance Tool" },
  { text: "Most Ops teams spend [X] hours a week just manually reconciling [Data Point]. Is that a bottleneck for your team currently?", role: "Operations / IT", tactic: "Process Inefficiency", offerType: "Automation" },
  { text: "Saw you recently implemented [Major System, e.g., Salesforce]. Are you getting the expected ROI, or is user adoption still a struggle?", role: "Operations / IT", tactic: "Recent Implementation", offerType: "Consulting / Optimization" },
  { text: "Quick question on your infrastructure — are you planning to migrate [Legacy System] this year, or maintaining the status quo?", role: "Operations / IT", tactic: "Direct Inquiry", offerType: "Migration Services" },

  // HR / Recruiting
  { text: "Noticed [Company] has [X] open roles for [Hard to Fill Position]. How is the current talent shortage impacting your time-to-hire?", role: "HR / Recruiting", tactic: "Job Openings", offerType: "Recruiting Service" },
  { text: "With the shift back to [Office Policy], many HR leaders are seeing a spike in [Issue, e.g., turnover]. Are you proactively addressing that?", role: "HR / Recruiting", tactic: "Policy Change", offerType: "Employee Retention" },
  { text: "I saw your company reviews on [Site] mentioned [Specific Issue]. Is improving employer brand a focus this quarter?", role: "HR / Recruiting", tactic: "Public Feedback", offerType: "Consulting / Tool" },
  { text: "Most TA teams spend 60% of their time scheduling rather than interviewing. Is automating that workflow on your roadmap?", role: "HR / Recruiting", tactic: "Process Pain", offerType: "Automation Tool" },
  { text: "Congratulations on the recent [Award, e.g., Best Places to Work]. How are you leveraging that to lower your cost-per-hire?", role: "HR / Recruiting", tactic: "Award Recognition", offerType: "Marketing / Strategy" }
];

const roles = ["All", ...Array.from(new Set(openers.map((o) => o.role)))];
const tactics = ["All", ...Array.from(new Set(openers.map((o) => o.tactic)))];

export default function EmailOpenersClient() {
  const [selectedRole, setSelectedRole] = useState("All");
  const [selectedTactic, setSelectedTactic] = useState("All");
  const [copied, setCopied] = useState<number | null>(null);

  const filtered = openers.filter((o) => {
    const roleMatch = selectedRole === "All" || o.role === selectedRole;
    const tacticMatch = selectedTactic === "All" || o.tactic === selectedTactic;
    return roleMatch && tacticMatch;
  });

  function handleCopy(text: string, index: number) {
    navigator.clipboard.writeText(text);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <div className="relative w-full overflow-hidden pb-32">
      <section className="pt-32 lg:pt-40 pb-12 px-6 max-w-4xl mx-auto w-full relative z-10">
        <div className="mb-8 inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600 border border-gray-200/50">
          <span className="flex h-2 w-2 rounded-full bg-[#0B2545] mr-2 opacity-80"></span>
          Free tool · {openers.length} templates · field-tested
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#0F172A] leading-[1.1] mb-6">
          Outbound Email Opener Templates
        </h1>
        <p className="text-xl max-w-2xl text-gray-600 font-medium leading-relaxed">
          Stop writing generic "hope you are doing well" emails. Use these 30+ field-tested cold email hook frameworks categorized by prospect role and tactic.
        </p>
      </section>

      <section className="pb-8 px-6 max-w-4xl mx-auto w-full relative z-10">
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-gray-100 p-6 flex flex-col sm:flex-row gap-6 flex-wrap">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Filter by Prospect Role</label>
            <div className="flex flex-wrap gap-2">
              {roles.map((r) => (
                <button key={r} onClick={() => setSelectedRole(r)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-150 ${selectedRole === r ? "bg-[#0F172A] border-[#0F172A] text-white" : "bg-[#F8FAFC] border-gray-200 text-gray-600 hover:border-gray-400"}`}>
                  {r}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Filter by Tactic</label>
            <div className="flex flex-wrap gap-2">
              {tactics.map((t) => (
                <button key={t} onClick={() => setSelectedTactic(t)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-150 ${selectedTactic === t ? "bg-[#0F172A] border-[#0F172A] text-white" : "bg-[#F8FAFC] border-gray-200 text-gray-600 hover:border-gray-400"}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 px-6 max-w-4xl mx-auto w-full relative z-10 flex flex-col gap-4">
        {filtered.length === 0 && (
          <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center text-gray-400 text-sm">
            No templates match those filters. Try clearing one filter.
          </div>
        )}
        {filtered.map((o, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden flex flex-col sm:flex-row items-stretch">
            <div className="p-6 flex-grow flex flex-col justify-center">
              <p className="text-[#0F172A] text-lg font-medium leading-relaxed mb-4">"{o.text}"</p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500 border border-gray-200/50">{o.role}</span>
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500 border border-gray-200/50">{o.tactic}</span>
                <span className="inline-flex items-center rounded-full bg-[#F8FAFC] px-3 py-1 text-xs font-medium text-[#0B2545] border border-gray-200/50">{o.offerType}</span>
              </div>
            </div>
            <div className="border-t sm:border-t-0 sm:border-l border-gray-100 bg-[#F8FAFC] p-6 flex items-center justify-center shrink-0">
              <button
                onClick={() => handleCopy(o.text, i)}
                className="text-xs font-semibold text-[#0B2545] bg-white hover:bg-gray-50 border border-gray-200 shadow-sm rounded-full px-4 py-2 transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
              >
                {copied === i ? "Copied ✓" : "Copy Template"}
              </button>
            </div>
          </div>
        ))}
      </section>

      <section className="pb-16 px-6 max-w-4xl mx-auto w-full relative z-10">
        <InlineOptIn />
      </section>
    </div>
  );
}

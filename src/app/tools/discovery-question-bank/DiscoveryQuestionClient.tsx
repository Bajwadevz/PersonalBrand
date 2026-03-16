"use client";

import { useState } from "react";
import InlineOptIn from "@/components/InlineOptIn";

type Question = {
  text: string;
  stage: string;
  persona: string;
};

const questions: Question[] = [
  // Current State
  { text: "Take me back to when you first bought [Current System]. What was the original goal, and where is it falling short today?", stage: "Current State", persona: "Operations" },
  { text: "When [Process] breaks down right now, who gets the frantic Slack message?", stage: "Current State", persona: "Manager" },
  { text: "Walk me through how your team currently handles [Task]—from the moment the data enters the system to the final report.", stage: "Current State", persona: "End User" },
  { text: "On a scale of 1-10, how confident are you in the accuracy of the data your team uses to make decisions?", stage: "Current State", persona: "Executive" },
  { text: "What is the most manual, copy-paste heavy part of your day right now?", stage: "Current State", persona: "End User" },

  // Pain / Implication
  { text: "If you don't fix [Problem] by next quarter, what happens to your individual OKRs?", stage: "Pain / Implication", persona: "Manager" },
  { text: "How many hours per week would you estimate your team spends simply moving data between systems?", stage: "Pain / Implication", persona: "Operations" },
  { text: "When a mistake happens in [Process], what is the financial or reputational cost to the business?", stage: "Pain / Implication", persona: "Executive" },
  { text: "You mentioned [Competitor] is beating you on [Metric]. How much of that is due to your current tech stack holding you back?", stage: "Pain / Implication", persona: "Executive" },
  { text: "Is fixing this a 'nice-to-have' for this year, or is it a board-level priority? Why?", stage: "Pain / Implication", persona: "Executive" },

  // Desired State / Future
  { text: "If we could wave a magic wand and automate [Task] completely, what would your team spend those reclaimed hours doing?", stage: "Desired State", persona: "Manager" },
  { text: "Fast forward 12 months. What measurable outcome needs to happen for you to get promoted based on this project?", stage: "Desired State", persona: "Champion" },
  { text: "If you had perfect visibility into [Data Point], what's the first strategic decision you would change today?", stage: "Desired State", persona: "Executive" },
  { text: "What does the ideal workflow look like to you, ignoring whatever limitations your current system has?", stage: "Desired State", persona: "Operations" },
  { text: "How would your day-to-day change if you never had to manually [Action] again?", stage: "Desired State", persona: "End User" },

  // Buying Process / Qualification
  { text: "Who else on the leadership team feels the pain of [Problem] as acutely as you do?", stage: "Buying Process", persona: "Champion" },
  { text: "The last time you purchased a tool like this, what did the evaluation and approval process look like?", stage: "Buying Process", persona: "Manager" },
  { text: "If we prove the ROI today, whose signature is actually required to get this funded?", stage: "Buying Process", persona: "Champion" },
  { text: "What competing priorities could potentially derail or delay this project in the next 30 days?", stage: "Buying Process", persona: "Executive" },
  { text: "How are you currently measuring the success of the tools you implement?", stage: "Buying Process", persona: "Operations" }
];

const stages = ["All", ...Array.from(new Set(questions.map((q) => q.stage)))];
const personas = ["All", ...Array.from(new Set(questions.map((q) => q.persona)))];

export default function DiscoveryQuestionClient() {
  const [selectedStage, setSelectedStage] = useState("All");
  const [selectedPersona, setSelectedPersona] = useState("All");
  const [copied, setCopied] = useState<number | null>(null);

  const filtered = questions.filter((q) => {
    const stageMatch = selectedStage === "All" || q.stage === selectedStage;
    const personaMatch = selectedPersona === "All" || q.persona === selectedPersona;
    return stageMatch && personaMatch;
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
          Free tool · {questions.length} questions
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#0F172A] leading-[1.1] mb-6">
          Sales Discovery Question Bank
        </h1>
        <p className="text-xl max-w-2xl text-gray-600 font-medium leading-relaxed">
          Stop asking "what keeps you up at night". Use these hard-hitting discovery questions organized by sales stage and buyer persona to uncover real pain.
        </p>
      </section>

      <section className="pb-8 px-6 max-w-4xl mx-auto w-full relative z-10">
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-gray-100 p-6 flex flex-col sm:flex-row gap-6 flex-wrap">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Filter by Stage</label>
            <div className="flex flex-wrap gap-2">
              {stages.map((s) => (
                <button key={s} onClick={() => setSelectedStage(s)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-150 ${selectedStage === s ? "bg-[#0F172A] border-[#0F172A] text-white" : "bg-[#F8FAFC] border-gray-200 text-gray-600 hover:border-gray-400"}`}>
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Filter by Persona</label>
            <div className="flex flex-wrap gap-2">
              {personas.map((p) => (
                <button key={p} onClick={() => setSelectedPersona(p)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-150 ${selectedPersona === p ? "bg-[#0F172A] border-[#0F172A] text-white" : "bg-[#F8FAFC] border-gray-200 text-gray-600 hover:border-gray-400"}`}>
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 px-6 max-w-4xl mx-auto w-full relative z-10 flex flex-col gap-4">
        {filtered.length === 0 && (
          <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center text-gray-400 text-sm">
            No questions match those filters. Try clearing one filter.
          </div>
        )}
        {filtered.map((q, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-gray-100 p-6 flex items-start justify-between gap-4">
            <div className="flex-grow">
              <p className="text-[#0F172A] text-lg font-medium leading-relaxed mb-4">"{q.text}"</p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500 border border-gray-200/50">{q.stage}</span>
                <span className="inline-flex items-center rounded-full bg-[#F8FAFC] px-3 py-1 text-xs font-medium text-[#0B2545] border border-gray-200/50">{q.persona}</span>
              </div>
            </div>
            <button
              onClick={() => handleCopy(q.text, i)}
              className="text-xs font-semibold text-[#0B2545] bg-[#F8FAFC] hover:bg-gray-100 border border-gray-200/50 rounded-full px-4 py-2 transition-colors shrink-0"
            >
              {copied === i ? "Copied ✓" : "Copy"}
            </button>
          </div>
        ))}
      </section>

      <section className="pb-16 px-6 max-w-4xl mx-auto w-full relative z-10">
        <InlineOptIn />
      </section>
    </div>
  );
}

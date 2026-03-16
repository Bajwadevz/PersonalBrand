"use client";

import { useState } from "react";
import Link from "next/link";
import InlineOptIn from "@/components/InlineOptIn";

const questions = [
  {
    id: 1,
    question: "How many hours per week does your team spend on repetitive manual tasks?",
    options: [
      { label: "Less than 2 hours", score: 1 },
      { label: "2–5 hours", score: 2 },
      { label: "5–15 hours", score: 3 },
      { label: "More than 15 hours", score: 4 },
    ],
  },
  {
    id: 2,
    question: "Do you currently use any of these: Notion, Airtable, Google Sheets, or a CRM?",
    options: [
      { label: "None of these", score: 1 },
      { label: "1–2 of these", score: 2 },
      { label: "3 of these", score: 3 },
      { label: "All of them", score: 4 },
    ],
  },
  {
    id: 3,
    question: "How consistent are the manual tasks you want to automate?",
    options: [
      { label: "Completely unpredictable each time", score: 1 },
      { label: "Sometimes consistent", score: 2 },
      { label: "Mostly consistent", score: 3 },
      { label: "Same steps every single time", score: 4 },
    ],
  },
  {
    id: 4,
    question: "Does your team currently use any automation tools (Zapier, Make, n8n)?",
    options: [
      { label: "No, never tried", score: 1 },
      { label: "Tried but gave up", score: 2 },
      { label: "Use basic automations", score: 3 },
      { label: "Active user, want to go deeper", score: 4 },
    ],
  },
  {
    id: 5,
    question: "How comfortable is your team setting up new software tools?",
    options: [
      { label: "Very uncomfortable", score: 1 },
      { label: "Needs a lot of support", score: 2 },
      { label: "Can follow step-by-step instructions", score: 3 },
      { label: "Self-sufficient learners", score: 4 },
    ],
  },
  {
    id: 6,
    question: "Do you have documented processes or SOPs for your key workflows?",
    options: [
      { label: "Nothing documented", score: 1 },
      { label: "Partially documented", score: 2 },
      { label: "Most workflows documented", score: 3 },
      { label: "Full documentation exists", score: 4 },
    ],
  },
  {
    id: 7,
    question: "How much budget could you allocate to automation tools monthly?",
    options: [
      { label: "$0 — must be free", score: 1 },
      { label: "$20–50/month", score: 2 },
      { label: "$50–200/month", score: 3 },
      { label: "$200+/month", score: 4 },
    ],
  },
  {
    id: 8,
    question: "What is your biggest blocker right now?",
    options: [
      { label: "Don't know where to start", score: 1 },
      { label: "Too many tools, no system", score: 2 },
      { label: "One specific process eating my time", score: 3 },
      { label: "Scaling automations I already have", score: 4 },
    ],
  },
  {
    id: 9,
    question: "How quickly do you need to see results?",
    options: [
      { label: "Not urgent, just exploring", score: 1 },
      { label: "Would love results in 3 months", score: 2 },
      { label: "Need impact within 30 days", score: 3 },
      { label: "Need it done this week", score: 4 },
    ],
  },
  {
    id: 10,
    question: "Who owns automation decisions in your organization?",
    options: [
      { label: "No one — it's unclear", score: 1 },
      { label: "IT or an external vendor", score: 2 },
      { label: "Ops or team lead", score: 3 },
      { label: "Me — I make the call", score: 4 },
    ],
  },
];

type Result = {
  label: string;
  description: string;
  nextSteps: string[];
  ctaLabel: string;
  ctaHref: string;
};

function getResult(score: number): Result {
  if (score <= 15) {
    return {
      label: "Automation Beginner",
      description: "You are in the early exploration phase. Your processes are not fully defined yet — which is actually the right time to start, before bad habits scale.",
      nextSteps: [
        "Pick one high-frequency task you do manually every day. That is your first automation target. Do not start with anything else.",
        "Set up Make.com on the free tier. Connect two tools you already use and automate one handoff between them.",
        "Read the Workflow Automation Audit Guide before building anything — it will save you from the most common mistakes.",
      ],
      ctaLabel: "Read the Workflow Audit Guide →",
      ctaHref: "/blog/how-to-audit-your-workflow-for-ai-automation",
    };
  }
  if (score <= 25) {
    return {
      label: "Automation Ready",
      description: "You have the tools, the processes, and the awareness. What is missing is a system that connects them. You are 1–2 focused builds away from serious leverage.",
      nextSteps: [
        "Map your top 3 manual workflows and rank by time cost per week. Work on number one only — do not split focus.",
        "Choose n8n or Make as your primary automation layer and commit to one platform. Read the n8n vs Make comparison to decide.",
        "Use the Automation Stack Recommender to find the right tools for your exact situation before buying anything new.",
      ],
      ctaLabel: "Build your stack →",
      ctaHref: "/tools/stack-builder",
    };
  }
  if (score <= 35) {
    return {
      label: "Automation Operator",
      description: "You are already building. The gap now is architecture — making your automations resilient and compounding instead of brittle one-off fixes.",
      nextSteps: [
        "Audit your existing automations for single points of failure. Add error handling and fallback logic to your top 3 workflows.",
        "Read the guide on designing AI workflows that actually ship — most operator automations break at deployment, not design.",
        "Book a discovery call. At your stage, a second set of eyes on your architecture will unlock the next level faster than more solo building.",
      ],
      ctaLabel: "Work with me →",
      ctaHref: "/work-with-me",
    };
  }
  return {
    label: "Automation Architect",
    description: "You think in systems. You are ready for compound automation — multi-step workflows that self-correct and run without you. This is where serious leverage lives.",
    nextSteps: [
      "Map your current automations and identify every point where a human decision is still required. Those are your next AI nodes.",
      "Implement a modular architecture in n8n using sub-workflows — this makes each piece reusable and your whole system maintainable.",
      "Calculate the full annual ROI of your current stack. You likely have a strong case for investing in a custom-built internal tool.",
    ],
    ctaLabel: "Calculate your ROI →",
    ctaHref: "/tools/roi-calculator",
  };
}

export default function ReadinessQuizClient() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const result = getResult(totalScore);
  const progress = (currentQ / questions.length) * 100;
  const scorePercent = Math.round((totalScore / 40) * 100);

  function handleNext() {
    if (selected === null) return;
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    setSelected(null);
    if (currentQ + 1 >= questions.length) {
      setShowResult(true);
    } else {
      setCurrentQ(currentQ + 1);
    }
  }

  function handleRestart() {
    setCurrentQ(0);
    setAnswers([]);
    setSelected(null);
    setShowResult(false);
  }

  return (
    <div className="relative w-full overflow-hidden pb-32">
      <section className="pt-32 lg:pt-40 pb-12 px-6 max-w-4xl mx-auto w-full relative z-10">
        <div className="mb-8 inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600 border border-gray-200/50">
          <span className="flex h-2 w-2 rounded-full bg-[#0B2545] mr-2 opacity-80"></span>
          Free tool · 10 questions · 2 minutes
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#0F172A] leading-[1.1] mb-6">
          Automation Readiness Quiz
        </h1>
        <p className="text-xl max-w-2xl text-gray-600 font-medium leading-relaxed">
          Answer 10 questions. Get a readiness score and 3 personalized next steps based on where you actually are — not generic advice.
        </p>
      </section>

      <section className="pb-20 px-6 max-w-3xl mx-auto w-full relative z-10">
        {!showResult ? (
          <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-gray-100 p-8 md:p-10">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Question {currentQ + 1} of {questions.length}</span>
                <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider">{Math.round(progress)}% complete</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0B2545] rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-8 leading-snug">
              {questions[currentQ].question}
            </h2>

            <div className="flex flex-col gap-3 mb-8">
              {questions[currentQ].options.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => setSelected(opt.score)}
                  className={`text-left px-6 py-4 rounded-xl border text-sm font-medium transition-all duration-150 ${
                    selected === opt.score
                      ? "bg-[#0F172A] border-[#0F172A] text-white"
                      : "bg-[#F8FAFC] border-gray-200 text-gray-700 hover:border-gray-400 hover:bg-white"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={selected === null}
              className="w-full bg-black text-white px-8 py-3.5 rounded-full font-medium hover:bg-gray-900 transition-colors duration-200 ease-out min-h-[44px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {currentQ + 1 === questions.length ? "See My Results" : "Next Question →"}
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="bg-[#0F172A] rounded-2xl p-8 md:p-10 text-white">
              <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                <div>
                  <p className="text-white/50 text-sm font-bold uppercase tracking-widest mb-2">Your Score</p>
                  <p className="text-6xl font-bold">{scorePercent}<span className="text-3xl text-white/40">/100</span></p>
                </div>
                <span className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-semibold text-white">
                  {result.label}
                </span>
              </div>
              <p className="text-white/70 leading-relaxed">{result.description}</p>
            </div>

            <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-gray-100 p-8">
              <h3 className="text-lg font-bold text-[#0F172A] mb-6">Your 3 next steps</h3>
              <div className="flex flex-col gap-6">
                {result.nextSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#F8FAFC] border border-gray-200/50 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-[#0B2545]">0{i + 1}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                <Link
                  href={result.ctaHref}
                  className="bg-black text-white px-8 py-3.5 rounded-full font-medium hover:bg-gray-900 transition-colors duration-200 ease-out min-h-[44px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] inline-flex items-center justify-center text-sm"
                >
                  {result.ctaLabel}
                </Link>
                <button
                  onClick={handleRestart}
                  className="text-gray-500 font-medium hover:text-gray-900 underline-offset-4 hover:underline transition-colors duration-200 ease-out min-h-[44px] inline-flex items-center justify-center text-sm px-4"
                >
                  Retake quiz
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="pb-16 px-6 max-w-3xl mx-auto w-full relative z-10">
        <InlineOptIn />
      </section>
    </div>
  );
}

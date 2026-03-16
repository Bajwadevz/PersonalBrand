"use client";

import { useState } from "react";
import InlineOptIn from "@/components/InlineOptIn";

export default function RoutingLogicClient() {
  const [employeeThreshold, setEmployeeThreshold] = useState("50");
  const [revenueThreshold, setRevenueThreshold] = useState("1M");
  const [freeEmailAction, setFreeEmailAction] = useState("disqualify");
  
  const generateLogic = () => {
    return `1. Webhook Receives Lead Data
   ↓
2. Check Email Domain
   ├─ IF Free Email (gmail, yahoo, etc.):
   │   └─ Action: ${freeEmailAction === "disqualify" ? "Tag as 'Disqualified' & End" : "Send to Nurture Sequence & End"}
   └─ IF Business Domain:
       └─ Continue to Enrichment
          ↓
3. Enrich via Apollo/Clearbit
   (Fetch Company Size & Estimated Revenue)
          ↓
4. Score & Route
   ├─ IF Employees >= ${employeeThreshold} OR Revenue >= $${revenueThreshold}:
   │   └─ Action: Tag 'High Intent ICP' 
   │   └─ Route to: Enterprise AE (Round Robin)
   │   └─ Notification: Slack Alert to #sales-enterprise
   │
   ├─ IF Employees < ${employeeThreshold}:
   │   └─ Action: Tag 'SMB ICP'
   │   └─ Route to: Commercial / SMB Team
   │   └─ Notification: Slack Alert to #sales-smb
   │
   └─ IF Enrichment Fails / Missing Data:
       └─ Action: Tag 'Needs Manual Review'
       └─ Route to: SDR Team for manual research`;
  };

  return (
    <div className="relative w-full overflow-hidden pb-32">
      <section className="pt-32 lg:pt-40 pb-12 px-6 max-w-4xl mx-auto w-full relative z-10">
        <div className="mb-8 inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600 border border-gray-200/50">
          <span className="flex h-2 w-2 rounded-full bg-[#0B2545] mr-2 opacity-80"></span>
          Free tool · Visual Logic Builder
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#0F172A] leading-[1.1] mb-6">
          Inbound Routing Logic Builder
        </h1>
        <p className="text-xl max-w-2xl text-gray-600 font-medium leading-relaxed">
          Map out exactly how your inbound leads should be scored and routed before you build the workflow in n8n or Zapier.
        </p>
      </section>

      <section className="pb-12 px-6 max-w-4xl mx-auto w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-gray-100 p-8 flex flex-col gap-6">
          <h2 className="text-xl font-bold text-[#0F172A]">Routing Rules</h2>
          
          <div>
            <label className="block text-[#0F172A] font-bold text-sm uppercase tracking-wider mb-2">Free Email Handling</label>
            <select 
              value={freeEmailAction} 
              onChange={(e) => setFreeEmailAction(e.target.value)}
              className="w-full bg-[#F8FAFC] border border-gray-200 text-gray-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2545]"
            >
              <option value="disqualify">Immediately Disqualify</option>
              <option value="nurture">Send to Nurture Sequence</option>
            </select>
          </div>

          <div>
            <label className="block text-[#0F172A] font-bold text-sm uppercase tracking-wider mb-2">Enterprise Employee Threshold</label>
            <input 
              type="number" 
              value={employeeThreshold}
              onChange={(e) => setEmployeeThreshold(e.target.value)}
              className="w-full bg-[#F8FAFC] border border-gray-200 text-gray-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2545]"
              placeholder="e.g. 50"
            />
          </div>

          <div>
            <label className="block text-[#0F172A] font-bold text-sm uppercase tracking-wider mb-2">Enterprise Revenue Threshold</label>
            <input 
              type="text" 
              value={revenueThreshold}
              onChange={(e) => setRevenueThreshold(e.target.value)}
              className="w-full bg-[#F8FAFC] border border-gray-200 text-gray-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2545]"
              placeholder="e.g. 1M or 500K"
            />
          </div>
        </div>

        <div className="bg-[#0F172A] rounded-2xl border border-gray-800 p-8 flex flex-col">
          <span className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-4">Generated Logic Flow</span>
          <pre className="text-white/80 text-sm leading-relaxed overflow-x-auto whitespace-pre-wrap font-mono">
            {generateLogic()}
          </pre>
        </div>
      </section>

      <section className="pb-16 px-6 max-w-4xl mx-auto w-full relative z-10">
        <InlineOptIn />
      </section>
    </div>
  );
}

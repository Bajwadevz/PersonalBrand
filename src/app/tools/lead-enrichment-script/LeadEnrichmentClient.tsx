"use client";

import { useState } from "react";
import InlineOptIn from "@/components/InlineOptIn";

const crms = ["HubSpot", "Salesforce", "Pipedrive"];
const dataSources = ["Clearbit", "Apollo", "LinkedIn", "Custom"];

export default function LeadEnrichmentClient() {
  const [crm, setCrm] = useState("HubSpot");
  const [source, setSource] = useState("Apollo");
  const [language, setLanguage] = useState<"JavaScript" | "Python">("JavaScript");
  const [fields, setFields] = useState({
    industry: true,
    employeeCount: true,
    annualRevenue: false,
    linkedinUrl: true,
  });
  const [copied, setCopied] = useState(false);

  function generateScript() {
    if (language === "JavaScript") {
      let script = `// n8n/Make script to transform ${source} data for ${crm}\n\n`;
      script += `const inputData = items[0].json; // Adjust based on your node input\n\n`;
      script += `const enrichedRecord = {\n`;
      script += `  email: inputData.email || null,\n`;
      script += `  firstName: inputData.first_name || null,\n`;
      script += `  lastName: inputData.last_name || null,\n`;
      script += `  companyName: inputData.company?.name || inputData.company_name || null,\n`;
      
      if (fields.industry) {
        script += `  industry: inputData.company?.industry || null,\n`;
      }
      if (fields.employeeCount) {
        script += `  employees: inputData.company?.metrics?.employees || inputData.employee_count || null,\n`;
      }
      if (fields.annualRevenue) {
        script += `  revenue: inputData.company?.metrics?.estimated_revenue || inputData.annual_revenue || null,\n`;
      }
      if (fields.linkedinUrl) {
        script += `  linkedin: inputData.linkedin_url || inputData.person?.linkedin_url || null,\n`;
      }
      
      script += `};\n\n`;
      
      if (crm === "HubSpot") {
        script += `// HubSpot specific formatting\n`;
        script += `return {\n  properties: enrichedRecord\n};\n`;
      } else if (crm === "Salesforce") {
        script += `// Salesforce specific formatting\n`;
        script += `return {\n  attributes: { type: "Contact" },\n  ...enrichedRecord\n};\n`;
      } else {
        script += `return enrichedRecord;\n`;
      }
      return script;
    } else {
      let script = `# Python snippet to transform ${source} data for ${crm}\n\n`;
      script += `def transform_data(input_data):\n`;
      script += `    # Adjust indexing/keys based on real input structure\n`;
      script += `    enriched_record = {\n`;
      script += `        "email": input_data.get("email"),\n`;
      script += `        "first_name": input_data.get("first_name"),\n`;
      script += `        "last_name": input_data.get("last_name"),\n`;
      script += `        "company_name": input_data.get("company", {}).get("name") or input_data.get("company_name"),\n`;
      
      if (fields.industry) {
        script += `        "industry": input_data.get("company", {}).get("industry"),\n`;
      }
      if (fields.employeeCount) {
        script += `        "employees": input_data.get("company", {}).get("metrics", {}).get("employees") or input_data.get("employee_count"),\n`;
      }
      if (fields.annualRevenue) {
        script += `        "revenue": input_data.get("company", {}).get("metrics", {}).get("estimated_revenue") or input_data.get("annual_revenue"),\n`;
      }
      if (fields.linkedinUrl) {
        script += `        "linkedin": input_data.get("linkedin_url") or input_data.get("person", {}).get("linkedin_url"),\n`;
      }
      script += `    }\n\n`;
      
      if (crm === "HubSpot") {
        script += `    # HubSpot specific formatting\n`;
        script += `    return { "properties": enriched_record }\n`;
      } else if (crm === "Salesforce") {
        script += `    # Salesforce specific formatting\n`;
        script += `    return { "attributes": { "type": "Contact" }, **enriched_record }\n`;
      } else {
        script += `    return enriched_record\n`;
      }
      return script;
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(generateScript());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="relative w-full overflow-hidden pb-32">
      <section className="pt-32 lg:pt-40 pb-12 px-6 max-w-4xl mx-auto w-full relative z-10">
        <div className="mb-8 inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600 border border-gray-200/50">
          <span className="flex h-2 w-2 rounded-full bg-[#0B2545] mr-2 opacity-80"></span>
          Free tool · Instant script generation
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#0F172A] leading-[1.1] mb-6">
          Lead Enrichment Script Generator
        </h1>
        <p className="text-xl max-w-2xl text-gray-600 font-medium leading-relaxed">
          Generate custom JavaScript or Python snippets to parse and format data from enrichment tools before pushing to your CRM.
        </p>
      </section>

      <section className="pb-12 px-6 max-w-4xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-gray-100 p-8 flex flex-col gap-6">
            <div>
              <label className="block text-[#0F172A] font-bold text-sm uppercase tracking-wider mb-2">Target CRM</label>
              <select 
                value={crm} 
                onChange={(e) => setCrm(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-gray-200 text-gray-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2545]"
              >
                {crms.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            
            <div>
              <label className="block text-[#0F172A] font-bold text-sm uppercase tracking-wider mb-2">Data Source</label>
              <select 
                value={source} 
                onChange={(e) => setSource(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-gray-200 text-gray-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2545]"
              >
                {dataSources.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-[#0F172A] font-bold text-sm uppercase tracking-wider mb-2">Script Language</label>
              <div className="flex gap-2">
                <button onClick={() => setLanguage("JavaScript")} className={`flex-1 py-2 rounded-lg text-sm font-medium border transition-colors ${language === "JavaScript" ? "bg-[#0F172A] text-white border-[#0F172A]" : "bg-[#F8FAFC] text-gray-600 border-gray-200 hover:border-gray-400"}`}>JavaScript</button>
                <button onClick={() => setLanguage("Python")} className={`flex-1 py-2 rounded-lg text-sm font-medium border transition-colors ${language === "Python" ? "bg-[#0F172A] text-white border-[#0F172A]" : "bg-[#F8FAFC] text-gray-600 border-gray-200 hover:border-gray-400"}`}>Python</button>
              </div>
            </div>

            <div>
              <label className="block text-[#0F172A] font-bold text-sm uppercase tracking-wider mb-2">Include Fields</label>
              <div className="space-y-2">
                {Object.keys(fields).map((field) => (
                  <label key={field} className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={fields[field as keyof typeof fields]} 
                      onChange={() => setFields(prev => ({ ...prev, [field]: !prev[field as keyof typeof fields] }))}
                      className="w-4 h-4 text-[#0B2545] border-gray-300 rounded focus:ring-[#0B2545]"
                    />
                    <span className="text-sm text-gray-600 font-medium capitalize">{field.replace(/([A-Z])/g, ' $1').trim()}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#0F172A] rounded-2xl border border-gray-800 p-6 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Generated {language}</span>
              <button 
                onClick={handleCopy}
                className="text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-full px-4 py-1.5 transition-colors"
              >
                {copied ? "Copied ✓" : "Copy Code"}
              </button>
            </div>
            <pre className="text-white/80 text-xs sm:text-sm leading-relaxed overflow-x-auto whitespace-pre-wrap font-mono flex-grow">
              {generateScript()}
            </pre>
          </div>
        </div>
      </section>

      <section className="pb-16 px-6 max-w-4xl mx-auto w-full relative z-10">
        <InlineOptIn />
      </section>
    </div>
  );
}

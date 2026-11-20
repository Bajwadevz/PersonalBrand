"use client";

import Link from "next/link";
import { useId, useRef, useState, type KeyboardEvent } from "react";

type Step = { system: string; text: string; human?: boolean };
type UseCase = { id: string; tab: string; title: string; summary: string; steps: Step[]; href: string; linkLabel: string };

const cases: UseCase[] = [
  {
    id: "admin",
    tab: "Admin & operations",
    title: "Supplier invoices from inbox to accounting",
    summary: "Bills arrive by email in different formats. The workflow reads them, checks them and prepares a draft — a person still approves payment.",
    steps: [
      { system: "Shared inbox", text: "Invoice email arrives with a PDF attached" },
      { system: "AI extraction", text: "Supplier, amount, due date and line items are read" },
      { system: "Rules", text: "Checked against the purchase order and known suppliers" },
      { system: "Review", text: "Mismatches or unknown suppliers go to a named reviewer", human: true },
      { system: "Accounting", text: "A draft bill is created with the original attached" },
    ],
    href: "/solutions/business-process-automation",
    linkLabel: "Admin & operations workflows",
  },
  {
    id: "crm",
    tab: "CRM & enquiries",
    title: "Website enquiry to qualified CRM record",
    summary: "New enquiries stop waiting in an inbox. Each one is logged, sorted and assigned, with a reply drafted for a person to send.",
    steps: [
      { system: "Web form", text: "A prospect submits an enquiry" },
      { system: "AI classification", text: "Free-text request sorted by service, region and urgency" },
      { system: "CRM", text: "Contact and deal created or updated — no duplicates" },
      { system: "Review", text: "Unclear or high-value enquiries flagged for a person", human: true },
      { system: "Team chat", text: "Owner notified with a drafted reply to check and send" },
    ],
    href: "/solutions/crm-automation",
    linkLabel: "CRM & customer workflows",
  },
  {
    id: "connected",
    tab: "Connected systems",
    title: "Job completion to invoice and report",
    summary: "Information typed twice between job, accounting and reporting tools moves once, with checks where errors would be costly.",
    steps: [
      { system: "Job tool", text: "Job marked complete with hours and materials" },
      { system: "Rules", text: "Rates, missing fields and approval limits checked" },
      { system: "Review", text: "Jobs over the agreed limit wait for manager approval", human: true },
      { system: "Accounting", text: "Invoice created against the right customer" },
      { system: "Report", text: "Weekly summary prepared from both systems" },
    ],
    href: "/work",
    linkLabel: "See a build walkthrough",
  },
];

/** "What we build" — accessible tabs, each showing one example flow. */
export default function UseCaseTabs() {
  const [active, setActive] = useState(0);
  const base = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, number> = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    let next: number | null = null;
    if (e.key in keys) next = (active + keys[e.key] + cases.length) % cases.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = cases.length - 1;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="impl-tabs">
      <div className="impl-tablist" role="tablist" aria-label="Example workflows" onKeyDown={onKey}>
        {cases.map((c, i) => (
          <button
            key={c.id}
            ref={el => { tabs.current[i] = el; }}
            type="button"
            role="tab"
            id={`${base}-tab-${c.id}`}
            aria-selected={active === i}
            aria-controls={`${base}-panel-${c.id}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
          >
            <span className="impl-tab-n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>{c.tab}
          </button>
        ))}
      </div>
      {cases.map((c, i) => (
        <div
          key={c.id}
          role="tabpanel"
          id={`${base}-panel-${c.id}`}
          aria-labelledby={`${base}-tab-${c.id}`}
          hidden={active !== i}
          tabIndex={0}
          className="impl-panel glass"
        >
          <div className="impl-panel-copy">
            <p className="impl-tag">Example flow</p>
            <h3>{c.title}</h3>
            <p>{c.summary}</p>
            <Link href={c.href} className="impl-panel-link">{c.linkLabel} <span aria-hidden="true">→</span></Link>
          </div>
          <ol className="impl-flow" key={`flow-${active}`}>
            {c.steps.map((s, j) => (
              <li key={s.text} className={s.human ? "is-human" : undefined} style={{ ["--j" as string]: j }}>
                <span className="impl-flow-sys">{s.human ? "Human check" : s.system}</span>
                <span className="impl-flow-text">{s.text}</span>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}

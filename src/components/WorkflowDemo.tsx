"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CheckCircle2, CircleAlert, Database, FileInput, RotateCw, ScrollText, ShieldCheck, UserCheck } from "lucide-react";

type NodeState = "idle" | "active" | "done" | "error" | "waiting" | "skipped";
type NodeId = "intake" | "validate" | "review" | "crm" | "log";
type LogLevel = "info" | "ok" | "warn" | "error";
type Step =
  | { node: NodeId; state: NodeState; log?: [LogLevel, string]; wait?: number }
  | { pause: "review" };

const nodes: { id: NodeId; label: string; Icon: typeof FileInput }[] = [
  { id: "intake", label: "Intake", Icon: FileInput },
  { id: "validate", label: "Validate & classify", Icon: ShieldCheck },
  { id: "review", label: "Human review", Icon: UserCheck },
  { id: "crm", label: "CRM update", Icon: Database },
  { id: "log", label: "Log & report", Icon: ScrollText },
];

type Scenario = {
  id: string;
  tab: string;
  summary: string;
  input: [string, string][];
  steps: Step[];
  approve?: Step[];
  reject?: Step[];
  outcome: string;
  approveOutcome?: string;
  rejectOutcome?: string;
};

const scenarios: Scenario[] = [
  {
    id: "clean",
    tab: "Clean enquiry",
    summary: "A complete website enquiry passes the rules and is created in the CRM without anyone retyping it.",
    input: [["Name", "Mia Chen"], ["Business", "Harbourline Plumbing (fictional)"], ["Email", "mia@harbourline.example"], ["Message", "Quote for three bathroom fit-outs in Joondalup, starting February."]],
    steps: [
      { node: "intake", state: "active", log: ["info", "Website form received · source=contact-page"], wait: 500 },
      { node: "intake", state: "done" },
      { node: "validate", state: "active", log: ["info", "Checking required fields and email format"], wait: 650 },
      { node: "validate", state: "done", log: ["ok", "Classified: quote request · residential · confidence 0.93"] },
      { node: "review", state: "skipped", log: ["info", "Above 0.85 threshold, no sensitive data → no review needed"], wait: 450 },
      { node: "crm", state: "active", log: ["info", "Searching CRM for existing contact by email"], wait: 650 },
      { node: "crm", state: "done", log: ["ok", "Contact created · deal “3 bathroom fit-outs” · stage New enquiry · owner assigned"] },
      { node: "log", state: "done", log: ["ok", "Run complete · 1 contact, 1 deal, 0 errors"] },
    ],
    outcome: "Contact and deal created. The sales owner gets a task with the original message attached.",
  },
  {
    id: "malformed",
    tab: "Malformed input",
    summary: "Bad data is stopped at the door, so nothing incomplete reaches the CRM.",
    input: [["Name", "Jordan"], ["Business", "—"], ["Email", "jordan@"], ["Message", "need a price asap"]],
    steps: [
      { node: "intake", state: "active", log: ["info", "Website form received · source=contact-page"], wait: 500 },
      { node: "intake", state: "done" },
      { node: "validate", state: "active", log: ["info", "Checking required fields and email format"], wait: 650 },
      { node: "validate", state: "error", log: ["error", "Rejected: email “jordan@” has no domain · business name missing"] },
      { node: "review", state: "skipped" },
      { node: "crm", state: "skipped", log: ["warn", "No CRM write attempted"], wait: 300 },
      { node: "log", state: "done", log: ["ok", "Held in the correction queue with the reason attached"] },
    ],
    outcome: "Nothing written to the CRM. The record waits in a correction queue with the reason, so it is not silently lost.",
  },
  {
    id: "ambiguous",
    tab: "Needs a human",
    summary: "When the system isn’t sure, it asks a person instead of guessing.",
    input: [["Name", "Sam Patel"], ["Business", "Patel Electrical (fictional)"], ["Email", "sam@patel-electrical.example"], ["Message", "Can someone call me about the thing from last week?"]],
    steps: [
      { node: "intake", state: "active", log: ["info", "Email received · inbox=enquiries"], wait: 500 },
      { node: "intake", state: "done" },
      { node: "validate", state: "active", log: ["info", "Classifying request"], wait: 650 },
      { node: "validate", state: "done", log: ["warn", "Low confidence 0.41: follow-up, complaint or new job?"] },
      { node: "review", state: "waiting", log: ["warn", "Sent to the office coordinator for a decision"], wait: 200 },
      { pause: "review" },
    ],
    approve: [
      { node: "review", state: "done", log: ["ok", "Coordinator: existing job follow-up"], wait: 350 },
      { node: "crm", state: "active", log: ["info", "Matched existing contact by email"], wait: 600 },
      { node: "crm", state: "done", log: ["ok", "Note added to open job · call-back task due today"] },
      { node: "log", state: "done", log: ["ok", "Run complete · decision recorded with reviewer and time"] },
    ],
    reject: [
      { node: "review", state: "error", log: ["warn", "Coordinator: not a customer request"], wait: 350 },
      { node: "crm", state: "skipped", log: ["info", "No CRM write"], wait: 250 },
      { node: "log", state: "done", log: ["ok", "Archived with the reviewer’s reason"] },
    ],
    outcome: "Waiting for a person. Choose what the coordinator decides.",
    approveOutcome: "Added to the existing job with a call-back task. The decision and reviewer are logged.",
    rejectOutcome: "Archived with a reason. Nothing changed in the CRM.",
  },
  {
    id: "retry",
    tab: "CRM outage",
    summary: "An integration fails mid-run. The workflow retries safely instead of dropping the lead or creating duplicates.",
    input: [["Name", "Ava Nguyen"], ["Business", "Northside Fitouts (fictional)"], ["Email", "ava@northside.example"], ["Message", "Approved quote Q-1042 — please book the job."]],
    steps: [
      { node: "intake", state: "active", log: ["info", "Approved quote received · Q-1042"], wait: 500 },
      { node: "intake", state: "done" },
      { node: "validate", state: "active", log: ["info", "Linking quote to deal by quote ID"], wait: 550 },
      { node: "validate", state: "done", log: ["ok", "Valid · idempotency key q-1042-book"] },
      { node: "review", state: "skipped", wait: 250 },
      { node: "crm", state: "active", log: ["info", "Attempt 1: create job"], wait: 650 },
      { node: "crm", state: "error", log: ["error", "504 timeout from CRM API · retry in 2s (simulated)"], wait: 700 },
      { node: "crm", state: "active", log: ["info", "Attempt 2: create job"], wait: 600 },
      { node: "crm", state: "error", log: ["error", "429 rate limited · retry in 4s (simulated)"], wait: 800 },
      { node: "crm", state: "active", log: ["info", "Attempt 3: create job (same idempotency key)"], wait: 600 },
      { node: "crm", state: "done", log: ["ok", "200 OK · job created once, no duplicate"] },
      { node: "log", state: "done", log: ["ok", "Run complete after 2 retries · alert cleared"] },
    ],
    outcome: "Job created exactly once after two retries. If all retries failed, it would go to a manual queue and alert the owner.",
  },
];

const initialStates = (): Record<NodeId, NodeState> => ({ intake: "idle", validate: "idle", review: "idle", crm: "idle", log: "idle" });

export default function WorkflowDemo() {
  const [scenarioId, setScenarioId] = useState(scenarios[0].id);
  const [states, setStates] = useState(initialStates);
  const [logs, setLogs] = useState<{ t: string; level: LogLevel; text: string }[]>([]);
  const [status, setStatus] = useState<"idle" | "running" | "review" | "done">("idle");
  const [outcome, setOutcome] = useState("");
  const timers = useRef<number[]>([]);
  const started = useRef(0);
  const host = useRef<HTMLDivElement>(null);
  const autoRan = useRef(false);
  const scenario = scenarios.find(s => s.id === scenarioId)!;

  const clear = () => { timers.current.forEach(clearTimeout); timers.current = []; };
  useEffect(() => clear, []);

  const play = useCallback((steps: Step[], onEnd: () => void) => {
    const fast = !document.documentElement.classList.contains("motion-ok");
    let delay = 0;
    for (const step of steps) {
      if ("pause" in step) {
        timers.current.push(window.setTimeout(() => setStatus("review"), delay));
        return;
      }
      timers.current.push(window.setTimeout(() => {
        setStates(s => ({ ...s, [step.node]: step.state }));
        if (step.log) {
          const elapsed = ((performance.now() - started.current) / 1000).toFixed(2);
          const [level, text] = step.log;
          setLogs(l => [...l, { t: `+${elapsed}s`, level, text }]);
        }
      }, delay));
      delay += fast ? 120 : step.wait ?? 380;
    }
    timers.current.push(window.setTimeout(onEnd, delay));
  }, []);

  const run = useCallback((s: Scenario) => {
    clear();
    started.current = performance.now();
    setStates(initialStates());
    setLogs([]);
    setOutcome("");
    setStatus("running");
    play(s.steps, () => { setStatus("done"); setOutcome(s.outcome); });
  }, [play]);

  const decide = (approve: boolean) => {
    const steps = approve ? scenario.approve : scenario.reject;
    if (!steps) return;
    setStatus("running");
    play(steps, () => { setStatus("done"); setOutcome((approve ? scenario.approveOutcome : scenario.rejectOutcome) ?? ""); });
  };

  // Run the first scenario once when the demo scrolls into view.
  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !autoRan.current) {
        autoRan.current = true;
        run(scenarios[0]);
        observer.disconnect();
      }
    }, { threshold: 0.45 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [run]);

  const select = (s: Scenario) => { setScenarioId(s.id); autoRan.current = true; run(s); };

  return (
    <div ref={host} className="workflow-demo glass" data-status={status}>
      <div className="demo-topbar">
        <span className="demo-badge">Interactive demonstration · fictional example data</span>
        <span className="demo-status" aria-hidden="true">{status === "running" ? "Running" : status === "review" ? "Waiting for review" : status === "done" ? "Complete" : "Ready"}</span>
      </div>
      <div className="demo-tabs" role="group" aria-label="Choose a scenario">
        {scenarios.map(s => (
          <button key={s.id} type="button" aria-pressed={s.id === scenarioId} onClick={() => select(s)}>{s.tab}</button>
        ))}
      </div>
      <p className="demo-summary">{scenario.summary}</p>

      <div className="demo-body">
        <dl className="demo-input" aria-label="Incoming record">
          <p className="demo-caption">Incoming record</p>
          {scenario.input.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
        </dl>

        <ol className="demo-pipeline" aria-label="Workflow steps">
          {nodes.map(({ id, label, Icon }) => {
            const state = states[id];
            const StateIcon = state === "done" ? CheckCircle2 : state === "error" ? CircleAlert : state === "active" && id === "crm" && logs.some(l => l.text.startsWith("Attempt 2")) ? RotateCw : Icon;
            return (
              <li key={id} className="demo-node" data-state={state}>
                <span className="demo-node-icon"><StateIcon size={18} aria-hidden="true" /></span>
                <span className="demo-node-label">{label}</span>
                <span className="sr-only">: {state}</span>
              </li>
            );
          })}
        </ol>

        <div className="demo-log">
          <p className="demo-caption">Run log</p>
          <ol aria-live="polite" aria-relevant="additions">
            {logs.map((l, i) => <li key={i} data-level={l.level}><time>{l.t}</time><span>{l.text}</span></li>)}
            {!logs.length && <li className="demo-log-empty"><span>Choose a scenario to run it.</span></li>}
          </ol>
        </div>
      </div>

      <div className="demo-footer">
        {status === "review" ? (
          <div className="demo-review" role="group" aria-label="Reviewer decision">
            <span>Coordinator decision:</span>
            <button type="button" className="agency-button" onClick={() => decide(true)}>Approve as job follow-up</button>
            <button type="button" className="demo-secondary" onClick={() => decide(false)}>Not a customer request</button>
          </div>
        ) : (
          <p className="demo-outcome" aria-live="polite">{outcome || (status === "running" ? "Running…" : " ")}</p>
        )}
        <button type="button" className="demo-secondary" onClick={() => run(scenario)} disabled={status === "running"}>Run again</button>
      </div>
    </div>
  );
}

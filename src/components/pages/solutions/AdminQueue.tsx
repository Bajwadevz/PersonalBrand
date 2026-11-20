type Item = { task: string; kind: "rule" | "ai" | "person" };

const items: Item[] = [
  { task: "Copy job totals into the weekly report", kind: "rule" },
  { task: "Create Xero contact for a new customer", kind: "rule" },
  { task: "Chase unsigned quote (day 3)", kind: "ai" },
  { task: "Rename and file supplier invoice PDF", kind: "rule" },
  { task: "Key supplier invoice into Xero", kind: "ai" },
  { task: "Approve supplier payment", kind: "person" },
  { task: "Send job sheet to the subcontractor", kind: "rule" },
  { task: "Quote with an unclear site address", kind: "person" },
  { task: "Reply to a customer complaint", kind: "person" },
];

const tag = { rule: "Rule", ai: "AI draft · review", person: "Needs a person" } as const;

/**
 * Illustrative admin queue that shrinks: rule-based items tick off and
 * collapse, AI-assisted items become quick reviews, judgement calls stay.
 * Without motion it renders the end state with handled items struck through.
 */
export default function AdminQueue() {
  let autoIndex = 0;
  return (
    <figure className="sol-queue glass" role="img" aria-label="Illustrative admin queue: of nine weekly tasks, four are handled by rules, two become AI drafts for quick review and three still need a person.">
      <div className="sol-queue-head" aria-hidden="true">
        <div>
          <span className="sol-tag">Illustrative example</span>
          <strong className="sol-queue-title">Monday admin queue</strong>
        </div>
        <span className="sol-queue-count"><span className="sol-count-before">9 by hand</span><span className="sol-count-after">3 by hand · 2 to review</span></span>
      </div>
      <ol className="sol-queue-list" aria-hidden="true">
        {items.map(it => {
          const d = it.kind === "person" ? 0 : autoIndex++;
          return (
            <li key={it.task} className={`sol-queue-item sol-q-${it.kind}`} style={{ ["--q" as string]: d }}>
              <span className="sol-q-check">{it.kind === "person" ? "" : "✓"}</span>
              <span className="sol-q-task">{it.task}</span>
              <span className="sol-q-tag">{tag[it.kind]}</span>
            </li>
          );
        })}
      </ol>
      <figcaption className="sol-queue-foot" aria-hidden="true">4 handled by rules and logged · 2 drafted for review · 3 judgement calls stay with your team</figcaption>
    </figure>
  );
}

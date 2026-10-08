import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, Clock3, Inbox, Layers3, ReceiptText, Users } from "lucide-react";

const CUSTOM_BUILD_URL = "/contact?offer=operations-workflow-build&demo=small-business-sales-os";

export const metadata: Metadata = {
  title: "Small Business Sales OS — a Notion CRM product build",
  description: "Inside a bajwaa.dev product build: a Notion sales system that connects leads, opportunities and follow-ups. Explore the design or discuss a custom CRM for your business.",
  alternates: { canonical: "https://bajwaa.dev/work/small-business-sales-os" },
  openGraph: {
    title: "Small Business Sales OS | bajwaa.dev",
    description: "A next step for every open deal. Explore a Notion CRM built around the places small businesses lose track of sales.",
    url: "https://bajwaa.dev/work/small-business-sales-os",
    images: [{ url: "/work/sales-os/command-center.jpg", width: 1512, height: 805, alt: "Small Business Sales OS command center with fictional demo records" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Business Sales OS | bajwaa.dev",
    description: "A Notion CRM product build for leads, quotes and follow-ups.",
    images: ["/work/sales-os/command-center.jpg"],
  },
};

const leaks = [
  { number: "01", Icon: Inbox, title: "Enquiries never get captured", answer: "One place to start", detail: "A New Leads queue and shared Contacts database give enquiries from calls, email and WhatsApp a home. Capture is manual in this version." },
  { number: "02", Icon: Clock3, title: "Follow-ups depend on memory", answer: "Make the next step visible", detail: "Every open deal needs an action and a date. Missing either marks it at risk; overdue, today and upcoming views organize the work." },
  { number: "03", Icon: ReceiptText, title: "Quotes sit without an answer", answer: "Bring waiting quotes back", detail: "Open quotes, follow-up dates and quote values stay together. A recovery playbook helps the owner choose what to say next." },
  { number: "04", Icon: Layers3, title: "The owner cannot see what is moving", answer: "Start with a command center", detail: "Urgent work, the pipeline and sales insights share the same source records, so the daily view stays connected to the wider picture." },
];

export default function SalesOsCaseStudy() {
  return (
    <article className="w-full pb-20 pt-12 md:pt-20">
      <header className="container-shell">
        <Link href="/#portfolio" className="inline-flex items-center gap-2 text-sm muted-copy hover:underline">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to the portfolio
        </Link>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-ocean)]">Product build · Notion CRM · bajwaa.dev</p>
            <h1 className="mt-5 max-w-3xl text-[clamp(2.6rem,6vw,4.8rem)] font-extrabold leading-[1.04] tracking-tight">Small Business<br />Sales OS</h1>
            <p className="mt-6 text-xl font-semibold md:text-2xl">A next step for every open deal.</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed muted-copy">A practical sales workspace for owners juggling spreadsheets, messages and memory. Built around the leads, follow-ups and quotes that are easiest to lose track of.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={CUSTOM_BUILD_URL} className="btn-primary inline-flex min-h-12 items-center justify-center gap-2 text-sm">Discuss a custom build <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
              <a href="#inside-the-build" className="btn-secondary inline-flex min-h-12 items-center justify-center text-sm">Explore the system</a>
            </div>
          </div>
          <aside className="glass-card rounded-2xl p-6 md:p-8" aria-label="Project details">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-ocean)]">The project</p>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex justify-between gap-4 border-b border-[var(--color-site-border)] pb-4"><dt className="muted-copy">Built for</dt><dd className="text-right font-medium">Small service businesses</dd></div>
              <div className="flex justify-between gap-4 border-b border-[var(--color-site-border)] pb-4"><dt className="muted-copy">My role</dt><dd className="text-right font-medium">System design &amp; implementation</dd></div>
              <div className="flex justify-between gap-4"><dt className="muted-copy">Core setup</dt><dd className="text-right font-medium">3 databases · 12 pages</dd></div>
            </dl>
            <p className="mt-6 rounded-xl bg-[rgba(45,106,143,0.07)] p-4 text-sm leading-relaxed muted-copy">An internal bajwaa.dev product build. All people, businesses and sales values shown are fictional demo data.</p>
          </aside>
        </div>
        <figure className="mt-12 overflow-hidden rounded-2xl border border-[var(--color-site-border)] bg-[#191919] shadow-xl md:mt-16">
          <Image src="/work/sales-os/command-center.jpg" alt="Sales Command Center showing three overdue follow-ups linked to their contacts and opportunities" width={1512} height={805} sizes="(max-width: 1200px) 100vw, 1152px" priority className="h-auto w-full" />
          <figcaption className="border-t border-white/10 px-5 py-4 text-xs leading-relaxed text-white/70">Actual Notion workspace · fictional demo records. Start with overdue work, then set the next action for every open deal.</figcaption>
        </figure>
      </header>

      <section id="inside-the-build" className="container-shell scroll-mt-28 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-ocean)]">The design brief</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">Four places sales fall through the cracks.</h2>
          <p className="mt-5 muted-copy">The system gives each one a visible queue and a clear next step. The owner can keep a simple daily routine while contacts, deal details and actions stay connected.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {leaks.map(({ number, Icon, title, answer, detail }) => (
            <div key={number} className="glass-card rounded-2xl p-6 md:p-8">
              <div className="flex items-center justify-between"><Icon className="h-6 w-6 text-[var(--color-ocean)]" aria-hidden="true" /><span className="font-mono text-sm muted-copy">{number}</span></div>
              <p className="mt-6 text-sm muted-copy">{title}</p>
              <h3 className="mt-2 text-xl font-bold">{answer}</h3>
              <p className="mt-3 text-sm leading-relaxed muted-copy">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--color-site-border)] bg-[rgba(45,106,143,0.04)] py-16 md:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-ocean)]">One operating rule</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">No open deal without a next action.</h2>
            <p className="mt-5 leading-relaxed muted-copy">Missing an action or date triggers an <strong className="text-[var(--color-site-text)]">AT RISK</strong> status. Overdue and cold deals get their own attention views. Won and Lost records remain available for review.</p>
            <p className="mt-4 text-sm leading-relaxed muted-copy">The workflow is manual: after a conversation, the owner updates the deal and its linked action. No messages are sent automatically by the template.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3" aria-label="Three connected source databases">
            {[
              { Icon: Users, name: "Contacts", description: "Who you know", detail: "Details, sources and relationship history" },
              { Icon: Layers3, name: "Opportunities", description: "What could close", detail: "Stage, value, health and the next step" },
              { Icon: Clock3, name: "Actions", description: "What to do next", detail: "Dated work linked to the person and sale" },
            ].map(({ Icon, name, description, detail }) => (
              <div key={name} className="glass-card rounded-2xl p-5">
                <Icon className="h-6 w-6 text-[var(--color-ocean)]" aria-hidden="true" />
                <h3 className="mt-5 text-base font-bold">{name}</h3>
                <p className="mt-2 text-sm font-medium">{description}</p>
                <p className="mt-3 text-xs leading-relaxed muted-copy">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-20 md:py-28" aria-labelledby="screens-heading">
        <h2 id="screens-heading" className="text-3xl font-bold tracking-tight md:text-4xl">The daily work, in context.</h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <figure className="glass-card overflow-hidden rounded-2xl">
            <Image src="/work/sales-os/pipeline.jpg" alt="Notion sales pipeline grouped by stage, with deal values, contacts, next-action dates and health visible on the cards" width={1512} height={805} sizes="(max-width: 1024px) 100vw, 560px" className="h-auto w-full" />
            <figcaption className="p-6"><h3 className="text-xl font-bold">A pipeline with a next move</h3><p className="mt-3 text-sm leading-relaxed muted-copy">Seven stages follow the customer from New Enquiry to Won or Lost. Each card keeps the next action date and deal health close to the sale.</p></figcaption>
          </figure>
          <figure className="glass-card overflow-hidden rounded-2xl">
            <Image src="/work/sales-os/quotes.jpg" alt="Quote Follow-Up Due view showing two fictional quotes worth $11,000 in potential sales" width={1512} height={805} sizes="(max-width: 1024px) 100vw, 560px" className="h-auto w-full" />
            <figcaption className="p-6"><h3 className="text-xl font-bold">Quotes that stay on the radar</h3><p className="mt-3 text-sm leading-relaxed muted-copy">See waiting proposals and due follow-ups together. The values in this demo represent potential sales, not money collected or measured client results.</p></figcaption>
          </figure>
        </div>
        <div className="mt-10 grid gap-6 rounded-2xl border border-[var(--color-site-border)] p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8">
          <div><h3 className="text-xl font-bold">The handoff is part of the build.</h3><p className="mt-3 text-sm leading-relaxed muted-copy">Start Here explains intake, stages, the daily routine and demo cleanup. Four guides support adoption and leave room for a future custom implementation.</p></div>
          <ul className="grid gap-4 text-sm sm:grid-cols-2">
            {["Follow-Up Playbook", "Quote Recovery Playbook", "Spreadsheet Migration Guide", "Automation Upgrade Guide"].map((guide) => <li key={guide} className="flex items-center gap-3"><Check className="h-4 w-4 shrink-0 text-[var(--color-ocean)]" aria-hidden="true" />{guide}</li>)}
          </ul>
        </div>
      </section>

      <section className="container-shell" aria-labelledby="custom-build-heading">
        <div className="grid gap-6 lg:grid-cols-[1.45fr_1fr]">
          <div className="rounded-3xl bg-[#16394e] p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a9d8f4]">Built by bajwaa.dev</p>
            <h2 id="custom-build-heading" className="mt-4 text-3xl font-bold tracking-tight !text-white md:text-4xl">Make it fit the way your business sells.</h2>
            <p className="mt-5 leading-relaxed text-white/80">Need a CRM shaped around your stages, services and team? I can scope a custom sales system, data migration and the integrations your process needs.</p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">Forms, booking tools, notifications and follow-up automation can be scoped separately. Custom implementation is quoted after we review your workflow.</p>
            <Link href={CUSTOM_BUILD_URL} className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#16394e] transition-colors hover:bg-[#e5f2fa]">Discuss your sales workflow <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
          <aside className="glass-card rounded-3xl p-8 md:p-10" aria-labelledby="template-heading">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-ocean)]">Template release</p>
            <h2 id="template-heading" className="mt-4 text-2xl font-bold">Prefer to set it up yourself?</h2>
            <div className="mt-6 flex items-baseline gap-2"><span className="text-4xl font-bold">$59</span><span className="text-sm muted-copy">USD · planned launch price</span></div>
            <p className="mt-5 text-sm leading-relaxed muted-copy">The Small Business Sales OS Notion template is being prepared for Gumroad. Checkout is not open yet.</p>
            <p className="mt-4 text-sm leading-relaxed muted-copy">This page previews the product build. Custom setup, migration and integrations are separate services.</p>
            <Link href="/contact?demo=small-business-sales-os" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--color-ocean)] hover:underline">Ask about the template <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
          </aside>
        </div>
      </section>
    </article>
  );
}

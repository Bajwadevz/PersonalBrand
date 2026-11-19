import Link from "next/link";
import { pageMetadata } from "@/lib/page-metadata";
import { getAllPosts } from "@/lib/api";
import { insightGuides } from "@/lib/insight-guides";
import { BlogWithFilter } from "./BlogClient";

export const metadata = pageMetadata(
  "/blog",
  "Insights on AI Implementation and Automation",
  "Guides for Australian teams on AI implementation pricing, CRM automation, workflow audits and choosing between rules and AI agents.",
);

export default function BlogPage() {
  const posts = getAllPosts().map(({ slug, title, date, excerpt, tags, readingTime }) => ({
    slug, title, date, excerpt, tags, readingTime,
  }));

  return (
    <article className="agency insights-index">
      <section className="agency-intro">
        <div className="agency-wrap">
          <p className="kicker">Insights</p>
          <h1>AI implementation guides.</h1>
          <p className="lead">Plan your first workflow, understand the cost and see what to check before you automate.</p>
        </div>
      </section>
      <section className="agency-wrap agency-section" aria-labelledby="featured-insights">
        <h2 className="insight-subtitle" id="featured-insights">Start here</h2>
        <div className="scenario-grid">
          {insightGuides.map(guide => (
            <Link className="insight-guide" key={guide.slug} href={`/blog/${guide.slug}`}>
              <span>{guide.label}</span>
              <h3>{guide.shortTitle}</h3>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="agency-wrap agency-section" aria-labelledby="all-insights">
        <h2 className="insight-subtitle" id="all-insights">All {posts.length} articles</h2>
        <BlogWithFilter posts={posts} />
      </section>
    </article>
  );
}

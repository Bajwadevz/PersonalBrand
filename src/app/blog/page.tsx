import Link from "next/link";
import { pageMetadata } from "@/lib/page-metadata";
import { getAllPosts } from "@/lib/api";
import { insightGuides } from "@/lib/insight-guides";
import { PageHero, CallLink, SecondaryLink } from "@/components/Agency";
import { BlogWithFilter } from "./BlogClient";
import "./insights.css";

export const metadata = pageMetadata(
  "/blog",
  "Insights on AI Implementation and Automation",
  "Guides for Australian teams on AI implementation pricing, CRM automation, workflow audits and choosing between rules and AI agents.",
);

export default function BlogPage() {
  const all = getAllPosts();
  const posts = all.map(({ slug, title, date, excerpt, tags, readingTime }) => ({
    slug, title, date, excerpt, tags, readingTime,
  }));

  const [featuredGuide, ...guides] = insightGuides;
  const featured = all.find(post => post.slug === featuredGuide.slug);

  const visual = featured ? (
    <Link href={`/blog/${featured.slug}`} className="ins-featured glass">
      <span className="ins-featured-top">
        <span className="ins-chip">Featured guide</span>
        <span className="ins-featured-label">{featuredGuide.label}</span>
      </span>
      <span className="ins-featured-title">{featured.title}</span>
      <span className="ins-featured-excerpt">{featured.excerpt}</span>
      <span className="ins-featured-foot">
        {featured.readingTime && <span>{featured.readingTime}</span>}
        <span className="ins-featured-read">Read the guide <span aria-hidden="true">→</span></span>
      </span>
    </Link>
  ) : undefined;

  return (
    <article className="agency insights-index ins-index">
      <PageHero
        kicker="Insights"
        title="AI implementation guides."
        lead="Plan your first workflow, understand the cost and see what to check before you automate. Written for Australian teams of 5–50 people."
        actions={<><CallLink /><SecondaryLink href="#all-insights">Browse all {posts.length} articles</SecondaryLink></>}
        visual={visual}
      />

      <section className="agency-wrap agency-section ins-start" aria-labelledby="featured-insights">
        <div className="ins-start-head">
          <p className="kicker">Start here</p>
          <h2 className="insight-subtitle" id="featured-insights">Five guides that answer the first questions.</h2>
        </div>
        <ol className="ins-guide-list">
          {guides.map((guide, i) => (
            <li key={guide.slug} data-reveal style={{ ["--d" as string]: `${i * 60}ms` }}>
              <Link href={`/blog/${guide.slug}`}>
                <span className="ins-guide-n">{String(i + 2).padStart(2, "0")}</span>
                <span className="ins-guide-label">{guide.label}</span>
                <span className="ins-guide-title">{guide.shortTitle}</span>
                <span className="ins-guide-arrow" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="agency-wrap agency-section ins-all" id="all-insights" aria-labelledby="all-insights-title">
        <h2 className="insight-subtitle" id="all-insights-title">All {posts.length} articles</h2>
        <BlogWithFilter posts={posts} />
      </section>

      <section className="agency-wrap ins-index-cta" aria-labelledby="ins-index-cta">
        <div className="ins-cta glass">
          <div>
            <p className="kicker">Prefer to talk it through?</p>
            <h2 id="ins-index-cta">Bring one process to a free 20-minute call.</h2>
            <p>We’ll tell you whether it’s worth automating, and what the next step would be.</p>
          </div>
          <CallLink />
        </div>
      </section>
    </article>
  );
}

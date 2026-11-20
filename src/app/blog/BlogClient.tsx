"use client";

import { useState } from "react";
import Link from "next/link";

const BLOG_FILTER_TAGS = ["All", "Automation", "AI Systems", "Sales", "Strategy"] as const;

type Post = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    tags?: string[];
    readingTime?: string;
};

function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-AU", {
        timeZone: "UTC",
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

export function BlogPostList({ posts }: { posts: Post[] }) {
    if (posts.length === 0) return <p className="ins-empty">No posts found.</p>;
    return (
        <ul className="ins-cards">
            {posts.map((post) => (
                <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="ins-card insights-card">
                        <article>
                            <div className="ins-card-meta">
                                {post.tags?.[0] && <span className="ins-chip">{post.tags[0]}</span>}
                                {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
                                {post.readingTime && <span>{post.readingTime}</span>}
                            </div>
                            <h3>{post.title}</h3>
                            <p>{post.excerpt}</p>
                            <span className="ins-card-read">Read <span aria-hidden="true">→</span></span>
                        </article>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export function BlogTagFilter({
    activeTag,
    onTagChange,
    counts,
}: {
    activeTag: string;
    onTagChange: (tag: string) => void;
    counts?: Record<string, number>;
}) {
    return (
        <div className="insight-topic-filter ins-filter" role="group" aria-label="Filter by topic">
            {BLOG_FILTER_TAGS.map((tag) => (
                <button
                    key={tag}
                    type="button"
                    aria-pressed={activeTag === tag}
                    onClick={() => onTagChange(tag)}
                    className="ins-filter-btn"
                >
                    {tag}
                    {counts && <span className="ins-filter-count">{counts[tag] ?? 0}</span>}
                </button>
            ))}
        </div>
    );
}

export function filterPostsByTag(posts: Post[], tag: string): Post[] {
    if (tag === "All") return posts;
    if (tag === "AI Systems") return posts.filter((post) => post.tags?.some((t) => t === "AI Systems" || t === "AI Tools") ?? false);
    return posts.filter((post) => post.tags?.some((t) => t === tag) ?? false);
}

export function BlogWithFilter({ posts }: { posts: Post[] }) {
    const [activeTag, setActiveTag] = useState("All");
    const filtered = filterPostsByTag(posts, activeTag);
    const counts = Object.fromEntries(BLOG_FILTER_TAGS.map((tag) => [tag, filterPostsByTag(posts, tag).length]));

    return (
        <>
            <BlogTagFilter activeTag={activeTag} onTagChange={setActiveTag} counts={counts} />
            <p className="ins-result-count" aria-live="polite">
                {activeTag === "All" ? `Showing all ${filtered.length} articles` : `${filtered.length} ${filtered.length === 1 ? "article" : "articles"} in ${activeTag}`}
            </p>
            <BlogPostList posts={filtered} />
        </>
    );
}

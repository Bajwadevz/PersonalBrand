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

export function BlogPostList({ posts }: { posts: Post[] }) {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {posts.length === 0 ? (
                <p className="text-muted-foreground">No posts found.</p>
            ) : (
                posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group glass-card card-hover block rounded-2xl p-6 md:p-8"
                    >
                        <article>
                            <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm muted-copy">
                                <time dateTime={post.date}>
                                    {new Date(post.date).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </time>
                                {post.readingTime && (
                                    <>
                                        <span aria-hidden>·</span>
                                        <span>{post.readingTime}</span>
                                    </>
                                )}
                            </div>
                            <h2 className="mb-3 text-[clamp(1.2rem,2vw,1.5rem)] font-bold tracking-tight">
                                {post.title}
                            </h2>
                            <p className="text-base leading-relaxed muted-copy line-clamp-1">
                                {post.excerpt}
                            </p>
                        </article>
                    </Link>
                ))
            )}
        </div>
    );
}

export function BlogTagFilter({
    activeTag,
    onTagChange,
}: {
    activeTag: string;
    onTagChange: (tag: string) => void;
}) {
    return (
        <div className="mb-10 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Filter by topic">
            {BLOG_FILTER_TAGS.map((tag) => (
                <button
                    key={tag}
                    type="button"
                    role="tab"
                    aria-selected={activeTag === tag}
                    onClick={() => onTagChange(tag)}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        activeTag === tag
                            ? "bg-[#2D6A8F] text-white"
                            : "border border-[var(--color-site-border)] bg-transparent text-[var(--color-site-text-secondary)] hover:text-[var(--color-site-text)]"
                    }`}
                >
                    {tag}
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

    return (
        <>
            <BlogTagFilter activeTag={activeTag} onTagChange={setActiveTag} />
            <BlogPostList posts={filtered} />
        </>
    );
}

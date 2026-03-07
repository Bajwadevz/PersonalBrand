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
        <div className="flex flex-col gap-8">
            {posts.length === 0 ? (
                <p className="text-muted-foreground">No posts found.</p>
            ) : (
                posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group block p-6 -mx-6 rounded-2xl hover:bg-[var(--color-muted)] transition-colors duration-200 ease-out border border-transparent hover:border-[var(--color-border)]"
                    >
                        <article>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-3">
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
                            <h2 className="text-2xl font-semibold text-[var(--color-heading)] group-hover:underline underline-offset-4 decoration-muted-foreground/30 mb-3 tracking-tight">
                                {post.title}
                            </h2>
                            {post.tags && post.tags.length > 0 && (
                                <ul className="flex flex-wrap gap-2 mb-3" aria-label="Tags">
                                    {post.tags.slice(0, 5).map((tag) => (
                                        <li
                                            key={tag}
                                            className="text-xs font-medium text-muted-foreground bg-[var(--color-muted)] px-2 py-1 rounded-md"
                                        >
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <p className="text-foreground text-base line-clamp-2 leading-relaxed">
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
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter by topic">
            {BLOG_FILTER_TAGS.map((tag) => (
                <button
                    key={tag}
                    type="button"
                    role="tab"
                    aria-selected={activeTag === tag}
                    onClick={() => onTagChange(tag)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        activeTag === tag
                            ? "bg-[var(--color-heading)] text-white"
                            : "bg-[var(--color-muted)] text-foreground hover:bg-[var(--color-border)]"
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

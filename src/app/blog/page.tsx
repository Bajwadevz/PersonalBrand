import type { Metadata } from "next";
import { getAllPosts } from "@/lib/api";
import { BlogWithFilter } from "./BlogClient";
import Link from "next/link";

export const metadata: Metadata = {
    title: "AI Automation Blog for Operators | bajwaa.dev",
    description:
        "Practical guides on AI workflow automation, no-code systems, and operator leverage. Built for founders, sales pros, and operators who want to move fast.",
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="section-shell flex w-full flex-col">
            <div className="container-shell w-full">
                <div className="mb-12 max-w-3xl">
                    <h1 className="text-[clamp(2.25rem,5vw,4rem)] font-bold tracking-tight">AI Automation Guides</h1>
                    <p className="mt-4 text-lg muted-copy">Practical guides for operators building durable AI systems.</p>
                </div>
                <BlogWithFilter posts={posts} />
                <div className="mt-20 flex justify-center">
                    <Link href="/product" className="btn-primary min-h-[48px] px-8">Get the Playbook</Link>
                </div>
            </div>
        </div>
    );
}

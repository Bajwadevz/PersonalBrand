import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "src/content/posts");

export type Post = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    description: string;
    content: string;
    keywords?: string;
    og_image?: string;
    tags?: string[];
    readingTime?: string;
    author?: string;
};

export function getPostSlugs(): string[] {
    if (!fs.existsSync(postsDirectory)) return [];
    return fs.readdirSync(postsDirectory).filter((name) => name.endsWith(".md"));
}

export function getPostBySlug(slug: string): Post | null {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    if (!fs.existsSync(fullPath)) return null;
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Truncate logic ensuring excerpt is precisely restricted around 160 characters
    const rawDescription = data.description || content.slice(0, 160);
    const excerpt = rawDescription.length > 160
        ? rawDescription.substring(0, 157) + "..."
        : rawDescription;

    const dateStr = data.date;
    const date = dateStr ? (() => {
        try {
            const d = new Date(dateStr);
            return isNaN(d.getTime()) ? "" : d.toISOString();
        } catch {
            return "";
        }
    })() : "";

    const tagsRaw = data.tags;
    const tags = Array.isArray(tagsRaw)
        ? tagsRaw
        : typeof tagsRaw === "string"
          ? tagsRaw.split(",").map((t: string) => t.trim()).filter(Boolean)
          : undefined;

    return {
        slug: realSlug,
        title: data.title || "Untitled",
        date,
        description: data.description || "",
        excerpt,
        content,
        keywords: data.keywords || "",
        og_image: data.ogImage ?? data.og_image ?? "",
        tags,
        readingTime: data.readingTime ?? "",
        author: data.author ?? "",
    };
}

export function getAllPosts(): Post[] {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((filename) => getPostBySlug(filename.replace(/\.md$/, "")))
        .filter((post): post is Post => post !== null)
        .sort((a, b) => (b.date || "").localeCompare(a.date || ""));
    return posts;
}

import { isValidElement, type ReactNode } from "react";

/** Slug used for both the TOC links and the rendered H2 ids. */
export function headingId(text: string) {
  return text
    .toLowerCase()
    .replace(/&amp;/g, "and")
    .replace(/[’'"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

/** Plain text of rendered markdown children (strings, nested elements). */
export function textOf(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) return textOf(node.props.children);
  return "";
}

/** `## ` headings from markdown source, skipping fenced code. Inline markdown is stripped. */
export function extractToc(markdown: string) {
  const items: { id: string; text: string }[] = [];
  let fenced = false;
  for (const line of markdown.split("\n")) {
    if (/^\s*(```|~~~)/.test(line)) { fenced = !fenced; continue; }
    if (fenced) continue;
    const m = line.match(/^##\s+(.+?)\s*#*\s*$/);
    if (!m) continue;
    const text = m[1]
      .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1")
      .replace(/[*_`]/g, "")
      .trim();
    if (text) items.push({ id: headingId(text), text });
  }
  return items;
}

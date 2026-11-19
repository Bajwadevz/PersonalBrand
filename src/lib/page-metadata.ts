import type { Metadata } from "next";

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const url = new URL(path, "https://bajwaa.dev").href;
  const socialTitle = title + " | bajwaa.dev";
  const images = [{ url: "/opengraph-image", width: 1200, height: 630, alt: "bajwaa.dev" }];
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title: socialTitle, description, url, images, type: "website", siteName: "bajwaa.dev", locale: "en_AU" },
    twitter: { card: "summary_large_image", title: socialTitle, description, images },
  };
}

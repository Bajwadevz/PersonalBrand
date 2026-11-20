import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";
import ClientAnalytics from "./ClientAnalytics";

const inter = localFont({
  variable: "--font-inter",
  preload: true,
  src: [
    { path: "../fonts/inter-normal-100-900.woff2", weight: "100 900", style: "normal" },
  ],
});

const plusJakarta = localFont({
  variable: "--font-plus-jakarta",
  preload: false,
  src: [
    { path: "../fonts/plus-jakarta-sans-normal-700-800.woff2", weight: "700 800", style: "normal" },
  ],
});

const jetbrainsMono = localFont({
  variable: "--font-jetbrains-mono",
  preload: false,
  src: [
    { path: "../fonts/jetbrains-mono-normal-400-500.woff2", weight: "400 500", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bajwaa.dev"),
  title: {
    default: "AI Implementation for Australian Businesses | bajwaa.dev",
    template: "%s | bajwaa.dev",
  },
  description: "AI implementation for Australian businesses. Reduce repetitive admin, organise CRM workflows and connect the systems your team already uses.",
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  robots: process.env.VERCEL_ENV === "preview" ? { index: false, follow: false } : undefined,
};

export const viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://bajwaa.dev/#organisation",
      name: "bajwaa.dev",
      url: "https://bajwaa.dev/",
      logo: "https://bajwaa.dev/wave-logo.png",
      founder: { "@id": "https://bajwaa.dev/about#founder" },
      description: "AI implementation agency for Australian small businesses. Reduces repetitive admin, automates CRM workflows and connects business systems, delivered remotely.",
      areaServed: { "@type": "Country", name: "Australia" },
      knowsAbout: ["AI implementation", "Business process automation", "CRM automation", "HubSpot", "Xero", "MYOB", "Salesforce", "n8n", "Make", "Workflow automation"],
      sameAs: ["https://github.com/Bajwadevz", "https://www.linkedin.com/in/shahzeb-bajwa/"],
      contactPoint: { "@type": "ContactPoint", contactType: "sales", url: "https://bajwaa.dev/contact", areaServed: "AU", availableLanguage: "en-AU" },
    },
    {
      "@type": "Person",
      "@id": "https://bajwaa.dev/about#founder",
      name: "Shahzaib Bajwa",
      url: "https://bajwaa.dev/about",
      jobTitle: "Founder",
      worksFor: { "@id": "https://bajwaa.dev/#organisation" },
      sameAs: ["https://www.linkedin.com/in/shahzeb-bajwa/", "https://github.com/Bajwadevz"],
    },
    {
      "@type": "WebSite",
      "@id": "https://bajwaa.dev/#website",
      name: "bajwaa.dev",
      url: "https://bajwaa.dev/",
      inLanguage: "en-AU",
      publisher: { "@id": "https://bajwaa.dev/#organisation" },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en-AU" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: "(function(){try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){var r=document.documentElement;r.classList.add('motion-ok');setTimeout(function(){if(!window.__motionReady){r.classList.remove('motion-ok')}},4000)}}catch(e){}})();" }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
      </head>
      <body className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen flex flex-col relative overflow-x-clip`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#0F172A] focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F172A]">
          Skip to main content
        </a>
        <SiteChrome>{children}</SiteChrome>
        <ClientAnalytics />
      </body>
    </html>
  );
}

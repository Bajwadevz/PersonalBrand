import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bajwaa.dev"),
  title: {
    default: "Shahzeb Bajwa | AI Workflow Automation for Operators",
    template: "%s | Bajwaa Dev",
  },
  description: "Shahzeb Bajwa teaches operators, founders, and sales professionals how to automate workflows with AI and build no-code AI systems that scale output.",
  keywords: "AI workflow automation, practical AI for operators, no-code AI systems, AI productivity systems, build AI without coding, AI tools for sales professionals",
  alternates: {
    canonical: "https://bajwaa.dev",
  },
  openGraph: {
    title: "Shahzeb Bajwa | AI Workflow Automation for Operators",
    description: "Shahzeb Bajwa teaches operators, founders, and sales professionals how to automate workflows with AI and build no-code AI systems that scale output.",
    url: "https://bajwaa.dev",
    siteName: "Bajwaa Dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahzeb Bajwa | AI Workflow Automation for Operators",
    description: "Shahzeb Bajwa teaches operators, founders, and sales professionals how to automate workflows with AI and build no-code AI systems that scale output.",
  }
};

export const viewport = {
  themeColor: "#0F172A",
};

import GlobalGridBackground from "@/components/GlobalGridBackground";
import FloatingSocialBar from "@/components/FloatingSocialBar";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-white relative overflow-x-hidden`}>
        <GlobalGridBackground />
        <FloatingSocialBar />
        <Header />
        <main className="flex-grow flex flex-col w-full relative z-10">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

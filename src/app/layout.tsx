import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalGridBackground from "@/components/GlobalGridBackground";
import FloatingSocialBar from "@/components/FloatingSocialBar";
import ClientAnalytics from "./ClientAnalytics";

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
  keywords: "AI workflow automation, practical AI for operators, no-code AI systems, AI productivity systems, build AI without coding, AI systems for sales professionals",
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
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-white relative overflow-x-hidden`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#0F172A] focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F172A]">
          Skip to main content
        </a>
        <GlobalGridBackground />
        <FloatingSocialBar />
        <Header />
        <main id="main-content" className="flex-grow flex flex-col w-full relative z-10" role="main">
          {children}
        </main>
        <Footer />
        <ClientAnalytics />
      </body>
    </html>
  );
}

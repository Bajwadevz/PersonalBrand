import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalGridBackground from "@/components/GlobalGridBackground";
import ClientAnalytics from "./ClientAnalytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bajwaa.dev"),
  title: {
    default: "Shahzeb Bajwa | AI Workflow Automation for Growing Businesses",
    template: "%s | Bajwaa Dev",
  },
  description: "Shahzeb Bajwa builds AI-powered workflows that eliminate manual work for small and mid-sized businesses. Tool-agnostic. Fixed price. 5–7 day delivery.",
  keywords: "AI workflow automation, business process automation, automate business operations, n8n freelancer, Make automation specialist, sales automation consultant, AI automation for small business, workflow automation SMB, CRM automation, eliminate manual work",
  alternates: {
    canonical: "https://bajwaa.dev",
  },
  openGraph: {
    title: "Shahzeb Bajwa | AI Workflow Automation for Growing Businesses",
    description: "Shahzeb Bajwa builds AI-powered workflows that eliminate manual work for small and mid-sized businesses. Tool-agnostic. Fixed price. 5–7 day delivery.",
    url: "https://bajwaa.dev",
    siteName: "Bajwaa Dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahzeb Bajwa | AI Workflow Automation for Growing Businesses",
    description: "Shahzeb Bajwa builds AI-powered workflows that eliminate manual work for small and mid-sized businesses. Tool-agnostic. Fixed price. 5–7 day delivery.",
  }
};

export const viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shahzeb Bajwa",
    "url": "https://bajwaa.dev",
    "jobTitle": "AI Workflow Automation Specialist",
    "description": "Builds AI-powered workflows for small and mid-sized businesses. Former B2B AE with 6 years of sales experience.",
    "sameAs": [
      "https://www.linkedin.com/in/shahzeb-bajwa/",
      "https://www.upwork.com/freelancers/bajwaadev?viewMode=1",
      "https://github.com/Bajwadevz"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Workflow Automation for Small Businesses",
    "provider": {
      "@type": "Person",
      "name": "Shahzeb Bajwa",
      "url": "https://bajwaa.dev"
    },
    "description": "Custom AI-powered workflow automation for growing businesses. Revenue pipeline automation, operations workflow builds, and CRM automation. Fixed price, 5–7 day delivery.",
    "areaServed": "United States",
    "priceRange": "$500–$2000",
    "url": "https://bajwaa.dev/work-with-me"
  }
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen flex flex-col relative overflow-x-hidden`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#0F172A] focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F172A]">
          Skip to main content
        </a>
        <GlobalGridBackground />
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

import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bajwaa.dev"),
  title: {
    default: "Bajwaa Dev | AI Systems Consultant & Educator",
    template: "%s | Bajwaa Dev",
  },
  description: "Shahzeb Bajwa is an AI systems expert helping U.S. professionals, entrepreneurs, and operators leverage practical AI automation and implement scalable AI strategies.",
  openGraph: {
    title: "Bajwaa Dev | AI Systems Consultant & Educator",
    description: "Shahzeb Bajwa is an AI systems expert helping U.S. professionals, entrepreneurs, and operators leverage practical AI automation and implement scalable AI strategies.",
    url: "https://bajwaa.dev",
    siteName: "Bajwaa Dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bajwaa Dev | AI Systems Consultant & Educator",
    description: "Shahzeb Bajwa is an AI systems expert helping U.S. professionals, entrepreneurs, and operators leverage practical AI automation and implement scalable AI strategies.",
  }
};

export const viewport = {
  themeColor: "#0F172A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Shahzeb Bajwa",
      url: "https://bajwaa.dev",
      jobTitle: "AI Systems Consultant",
      sameAs: [
        "https://github.com/Bajwadevz",
        "https://www.linkedin.com/in/shahzebbajwa/",
        "https://x.com/shahzo_12",
        "https://www.instagram.com/bajwaa.dev/"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Bajwaa Dev",
      url: "https://bajwaa.dev",
      logo: "https://bajwaa.dev/wave-icon.svg",
      sameAs: [
        "https://github.com/Bajwadevz",
        "https://www.linkedin.com/in/shahzebbajwa/",
        "https://x.com/shahzo_12",
        "https://www.instagram.com/bajwaa.dev/"
      ]
    }
  ];

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow flex flex-col w-full animate-fade-in-up">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

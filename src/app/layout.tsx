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
    default: "Bajwaa Dev | AI Education & Vibe Coding",
    template: "%s | Bajwaa Dev",
  },
  description: "Bajwaa Dev is an AI education platform focused on vibe coding, AI-first development, and building real software with AI as leverage.",
  openGraph: {
    title: "Bajwaa Dev | AI Education & Vibe Coding",
    description: "Bajwaa Dev is an AI education platform focused on vibe coding, AI-first development, and building real software with AI as leverage.",
    url: "https://bajwaa.dev",
    siteName: "Bajwaa Dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bajwaa Dev | AI Education & Vibe Coding",
    description: "Bajwaa Dev is an AI education platform focused on vibe coding, AI-first development, and building real software with AI as leverage.",
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
      jobTitle: "Software Engineer",
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
      logo: "https://bajwaa.dev/icon.png",
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

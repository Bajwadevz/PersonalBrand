import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";
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
    default: "AI Lead Response & Booking Systems for Service Businesses | Shahzeb Bajwa",
    template: "%s | Bajwaa Dev",
  },
  description: "I build AI systems that answer, qualify, and book every inbound lead in under 60 seconds, day or night, on the tools you already use. Live in 10 business days. For HVAC, home services, and appointment-led businesses.",
  alternates: {
    canonical: "https://bajwaa.dev",
  },
  openGraph: {
    title: "AI Lead Response & Booking Systems for Service Businesses | Shahzeb Bajwa",
    description: "I build AI systems that answer, qualify, and book every inbound lead in under 60 seconds, day or night, on the tools you already use. Live in 10 business days. For HVAC, home services, and appointment-led businesses.",
    url: "https://bajwaa.dev",
    siteName: "Bajwaa Dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Lead Response & Booking Systems for Service Businesses | Shahzeb Bajwa",
    description: "I build AI systems that answer, qualify, and book every inbound lead in under 60 seconds, day or night, on the tools you already use. Live in 10 business days. For HVAC, home services, and appointment-led businesses.",
  },
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
    "jobTitle": "AI Lead Response & Booking Systems Specialist",
    "description": "Builds AI systems that answer, qualify, and book inbound leads for service businesses. 6+ years of B2B SaaS sales experience.",
    "sameAs": [
      "https://www.linkedin.com/in/shahzeb-bajwa/",
      "https://www.upwork.com/freelancers/bajwaadev?viewMode=1",
      "https://github.com/Bajwadevz"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Lead Response & Booking Systems for Service Businesses",
    "provider": {
      "@type": "Person",
      "name": "Shahzeb Bajwa",
      "url": "https://bajwaa.dev"
    },
    "description": "AI lead response and booking systems for service businesses. Fixed price, live in 10 business days.",
    "areaServed": "United States",
    "priceRange": "$750–$6,000",
    "url": "https://bajwaa.dev/work-with-me"
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bajwaa Dev",
    "url": "https://bajwaa.dev",
    "logo": "https://bajwaa.dev/wave-logo.png",
    "founder": { "@type": "Person", "name": "Shahzeb Bajwa" },
    "description": "AI lead response and booking systems for service businesses.",
    "sameAs": [
      "https://www.linkedin.com/in/shahzeb-bajwa/",
      "https://www.upwork.com/freelancers/bajwaadev?viewMode=1",
      "https://github.com/Bajwadevz"
    ]
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
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(w,d,s,u,n,a,b){if(w[n])return;a=w[n]={q:[],t:+new Date,s:[],o:u,track:function(){a.q.push([+new Date].concat([].slice.call(arguments)))},setScope:function(){a.s=[].slice.call(arguments).filter(function(x){return typeof x==="string"});a.q.push([+new Date,"setScope"].concat(a.s))},scope:function(){var c=[].slice.call(arguments);return{track:function(){a.q.push([+new Date].concat([].slice.call(arguments)).concat([{__scope:c}]))}}}};b=d.createElement(s);b.async=1;b.src=u+"/s.js";d.getElementsByTagName(s)[0].parentNode.insertBefore(b,d.getElementsByTagName(s)[0])}(window,document,"script","https://t.whop.tw","whop");whop.setScope("biz_PhJYcLxIhDb3NX");whop.track("page");`
          }}
        />
      </head>
      <body className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen flex flex-col relative overflow-x-hidden`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#0F172A] focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F172A]">
          Skip to main content
        </a>
        <GlobalGridBackground />
        <SiteChrome>{children}</SiteChrome>
        <ClientAnalytics />
      </body>
    </html>
  );
}

"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

/**
 * Concept demo pages under /demos/* render their own bespoke header, nav,
 * and footer to look like a standalone third-party business website. They
 * should not also be wrapped in bajwaa.dev's own site header/footer, which
 * would double up sticky navs and break the illusion (and the layout).
 */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDemo = pathname?.startsWith("/demos/");

  return (
    <>
      {!isDemo && <Header />}
      <main id="main-content" className="flex-grow flex flex-col w-full relative z-10" role="main">
        {children}
      </main>
      {!isDemo && <Footer />}
    </>
  );
}

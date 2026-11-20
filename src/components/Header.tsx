"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const navigation = [
  ["/ai-implementation", "What We Do"],
  ["/how-it-works", "How It Works"],
  ["/work", "Work"],
  ["/blog", "Insights"],
  ["/about", "About"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", localStorage.getItem("theme") === "dark");
  }, []);

  function toggleTheme() {
    const dark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }

  return (
    <header className={scrolled ? "agency-header is-scrolled" : "agency-header"} onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        event.currentTarget.querySelector<HTMLButtonElement>(".nav-toggle")?.focus();
      }
    }}>
      <div className="header-inner">
        <Logo />
        <nav id="agency-nav" aria-label="Main navigation" className={open ? "agency-nav is-open" : "agency-nav"}>
          {navigation.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
        <div className="header-actions">
          <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Toggle colour theme">
            <Moon className="theme-light" size={17} aria-hidden="true" />
            <Sun className="theme-dark" size={17} aria-hidden="true" />
          </button>
          <Link href="/contact#book" data-cta="header" className="agency-button nav-book" onClick={() => setOpen(false)}>Book a Free Discovery Call <span aria-hidden="true">↗</span></Link>
          <button type="button" className="nav-toggle" aria-label={open ? "Close menu" : "Menu"} aria-expanded={open} aria-controls="agency-nav" onClick={() => setOpen(!open)}>
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}

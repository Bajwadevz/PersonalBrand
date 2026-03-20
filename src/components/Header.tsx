"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import Logo from "./Logo";

import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/tools", label: "Tools" },
    { href: "/workflows", label: "Workflows" },
    { href: "/about", label: "About" },
];

export default function Header() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const shouldUseDark = savedTheme === "dark";
        document.documentElement.classList.toggle("dark", shouldUseDark);
        setIsDark(shouldUseDark);
    }, []);

    const toggleTheme = () => {
        setIsDark((prev) => {
            const next = !prev;
            document.documentElement.classList.toggle("dark", next);
            localStorage.setItem("theme", next ? "dark" : "light");
            return next;
        });
    };

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] md:w-auto">
                <div
                    className={`mx-auto flex h-14 items-center justify-between gap-4 rounded-full border px-4 md:px-6 transition-all duration-300 ${
                        scrolled ? "shadow-[0_14px_32px_rgba(0,0,0,0.12)]" : "shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
                    }`}
                    style={{
                        background: "var(--color-glass-bg)",
                        borderColor: "var(--color-card-border)",
                        backdropFilter: "blur(20px) saturate(180%)"
                    }}
                >
                    <Logo />

                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map(({ href, label }) => {
                            const isActive = pathname === href || pathname.startsWith(href + "/");
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`group relative text-sm font-medium transition-opacity duration-300 ${
                                        isActive ? "text-[var(--color-site-text)]" : "text-[var(--color-site-text-secondary)] hover:text-[var(--color-site-text)]"
                                    }`}
                                >
                                    {label}
                                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--color-ocean)] transition-all duration-300 group-hover:w-full" />
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={toggleTheme}
                            className="hidden md:inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-full border border-[var(--color-card-border)] text-[var(--color-site-text-secondary)] hover:text-[var(--color-site-text)] transition-colors"
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                        </button>
                        <Link href="/product" className="hidden md:inline-flex min-h-[40px] items-center rounded-full bg-[#2D6A8F] px-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#245A7A]">Get the Playbook</Link>

                        <button
                            type="button"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden p-2 -mr-1 text-[var(--color-site-text-secondary)] hover:text-[var(--color-site-text)] transition-colors"
                            aria-expanded={mobileOpen}
                            aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        >
                            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </header>
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -32 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="fixed inset-x-0 top-0 z-40 md:hidden overflow-hidden border-b px-6 pt-28 pb-12"
                        style={{
                            background: "var(--color-glass-bg)",
                            borderColor: "var(--color-card-border)",
                            backdropFilter: "blur(20px) saturate(180%)",
                            borderRadius: "0 0 24px 24px"
                        }}
                    >
                        <nav className="mx-auto flex min-h-[60vh] max-w-sm flex-col items-center justify-center gap-8 text-center">
                            {navItems.map(({ href, label }) => {
                                const isActive = pathname === href || pathname.startsWith(href + "/");
                                return (
                                    <Link
                                        key={href}
                                        href={href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`text-3xl font-bold tracking-tight transition-opacity duration-300 ${
                                            isActive ? "text-[var(--color-site-text)]" : "text-[var(--color-site-text-secondary)] hover:text-[var(--color-site-text)]"
                                        }`}
                                    >
                                        {label}
                                    </Link>
                                );
                            })}
                            <button
                                type="button"
                                onClick={toggleTheme}
                                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[var(--color-card-border)] px-5 text-sm font-semibold text-[var(--color-site-text)]"
                            >
                                {isDark ? "Switch to Light" : "Switch to Dark"}
                            </button>
                            <Link href="/product" onClick={() => setMobileOpen(false)} className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#2D6A8F] px-6 text-base font-semibold text-white">Get the Playbook</Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

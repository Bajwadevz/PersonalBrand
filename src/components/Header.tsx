"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { href: "/blog", label: "Blog" },
    { href: "/tools", label: "Free Tools" },
    { href: "/about", label: "About" },
    { href: "/work-with-me", label: "Work With Me" },
] as const;

export default function Header() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    // Add subtle shadow when scrolling
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 w-full bg-white/60 backdrop-blur-lg border-b transition-colors duration-200 ${scrolled ? "border-gray-200/80 shadow-sm" : "border-gray-200/0"
                }`}
        >
            <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-2">
                    <Logo />
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map(({ href, label }) => {
                        const isActive = pathname === href || pathname.startsWith(href + "/");
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`text-sm font-medium transition-all duration-300 hover:opacity-70 ${isActive ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-900"
                                    }`}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        href="/product"
                        className="hidden md:flex items-center justify-center bg-zinc-900 text-white px-5 min-h-[40px] rounded-full text-sm font-medium hover:-translate-y-[1px] hover:shadow-[0_4px_14px_0_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.05)_inset] active:translate-y-[0px] active:shadow-none transition-all duration-300 shadow-sm tracking-[-0.01em]"
                    >
                        Get the Playbook
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        type="button"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 -mr-2 text-zinc-600 hover:text-zinc-900 transition-colors"
                        aria-expanded={mobileOpen}
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    >
                        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-lg overflow-hidden"
                    >
                        <nav className="flex flex-col py-4 px-6 gap-4">
                            {navItems.map(({ href, label }) => {
                                const isActive = pathname === href || pathname.startsWith(href + "/");
                                return (
                                    <Link
                                        key={href}
                                        href={href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`text-sm font-medium transition-all duration-300 ${isActive ? "text-zinc-900" : "text-zinc-500 hover:opacity-70 hover:text-zinc-900"
                                            }`}
                                    >
                                        {label}
                                    </Link>
                                );
                            })}
                            <div className="pt-2">
                                <Link
                                    href="/product"
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center justify-center w-full bg-zinc-900 text-white px-5 min-h-[44px] rounded-full text-sm font-medium hover:-translate-y-[1px] hover:shadow-[0_4px_14px_0_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.05)_inset] active:translate-y-[0px] active:shadow-none transition-all duration-300 shadow-sm tracking-[-0.01em]"
                                >
                                    Get the Playbook
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

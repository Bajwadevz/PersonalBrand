import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="relative z-10 mt-24 border-t border-[var(--color-site-border)]">
            <div className="container-shell flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col items-center gap-2 md:items-start">
                    <Logo />
                    <p className="text-sm muted-copy text-center md:text-left">© 2026 Shahzaib Bajwa</p>
                </div>
                <nav className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium">
                    <Link href="/" className="muted-copy hover:text-[var(--color-site-text)]">Home</Link>
                    <Link href="/blog" className="muted-copy hover:text-[var(--color-site-text)]">Blog</Link>
                    <Link href="/tools" className="muted-copy hover:text-[var(--color-site-text)]">Tools</Link>
                    <Link href="/workflows" className="muted-copy hover:text-[var(--color-site-text)]">Workflows</Link>
                    <Link href="/about" className="muted-copy hover:text-[var(--color-site-text)]">About</Link>
                    <Link href="/contact" className="muted-copy hover:text-[var(--color-site-text)]">Contact</Link>
                </nav>
                <div className="flex items-center justify-center gap-3">
                    <a href="https://x.com/shahzo_12" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[var(--color-site-border)] muted-copy hover:text-[var(--color-ocean)]">
                        <Twitter className="h-4 w-4" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[var(--color-site-border)] muted-copy hover:text-[var(--color-ocean)]">
                        <Linkedin className="h-4 w-4" />
                    </a>
                    <a href="https://github.com/Bajwadevz" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[var(--color-site-border)] muted-copy hover:text-[var(--color-ocean)]">
                        <Github className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

import Link from "next/link";
import { Github, Twitter } from "lucide-react";
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
                    <Link href="/work-with-me" className="muted-copy hover:text-[var(--color-site-text)]">Work With Me</Link>
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
                    <a href="https://www.linkedin.com/in/shahzeb-bajwa/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[var(--color-site-border)] muted-copy hover:text-[var(--color-ocean)]">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                    <a href="https://github.com/Bajwadevz" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[var(--color-site-border)] muted-copy hover:text-[var(--color-ocean)]">
                        <Github className="h-4 w-4" />
                    </a>
                    <a href="https://www.upwork.com/freelancers/bajwaadev?viewMode=1" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[var(--color-site-border)] muted-copy hover:text-[var(--color-ocean)]">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H8.362v7.019c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H1.067v7.019c0 2.807 2.275 5.083 5.082 5.083 2.807 0 5.084-2.276 5.084-5.083v-1.178c.529 1.107 1.182 2.228 1.974 3.221l-1.673 7.872h2.212l1.257-5.904c1.098.651 2.386 1.039 3.558 1.039 3.184 0 5.772-2.587 5.772-5.771-.001-3.183-2.589-5.771-5.772-5.771z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}

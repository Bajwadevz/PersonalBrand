import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between px-6 py-8 mt-auto border-t border-muted">
            <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 gap-2">
                <Logo />
                <div className="flex flex-col items-center md:items-start mt-2">
                    <a href="mailto:hello@bajwaa.dev" className="text-sm font-medium hover:text-muted-foreground transition-colors">
                        hello@bajwaa.dev
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">© {new Date().getFullYear()} Shahzeb Bajwa</p>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <a href="https://www.linkedin.com/in/shahzebbajwa/" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors" aria-label="LinkedIn">
                    LinkedIn
                </a>
                <a href="https://x.com/shahzo_12" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors" aria-label="Twitter">
                    Twitter
                </a>
                <a href="https://github.com/Bajwadevz" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors" aria-label="GitHub">
                    GitHub
                </a>
                <a href="https://www.instagram.com/bajwaa.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors" aria-label="Instagram">
                    Instagram
                </a>
            </div>

            <nav className="flex items-center gap-6 text-sm font-medium mt-4 md:mt-0">
                <Link href="/blog" className="hover:text-muted-foreground transition-colors">
                    Blog
                </Link>
                <Link href="/about" className="hover:text-muted-foreground transition-colors">
                    About
                </Link>
                <Link href="/product" className="hover:text-muted-foreground transition-colors">
                    Product
                </Link>
            </nav>
        </footer>
    );
}

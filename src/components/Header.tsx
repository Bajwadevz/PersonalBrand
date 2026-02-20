import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
    return (
        <header className="max-w-6xl mx-auto w-full flex items-center justify-between px-6 py-6">
            <Logo />
            <nav className="flex items-center gap-6 text-sm font-medium">
                <Link href="/blog" className="hover:text-muted-foreground transition-colors py-2">
                    Blog
                </Link>
                <Link href="/about" className="hover:text-muted-foreground transition-colors py-2">
                    About
                </Link>
                <Link href="/product" className="hover:text-muted-foreground transition-colors py-2">
                    Product
                </Link>
            </nav>
        </header>
    );
}

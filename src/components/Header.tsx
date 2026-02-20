import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-lg border-b border-gray-100/50 shadow-sm transition-all duration-300">
            <div className="max-w-6xl mx-auto w-full flex items-center justify-between px-6 py-4">
                <Logo />
                <nav className="flex items-center gap-6 text-sm font-medium">
                    <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors py-2">
                        Blog
                    </Link>
                    <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors py-2">
                        About
                    </Link>
                    <Link href="/product" className="text-gray-600 hover:text-gray-900 transition-colors py-2">
                        Product
                    </Link>
                </nav>
            </div>
        </header>
    );
}

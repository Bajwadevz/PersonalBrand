import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full flex items-center justify-between p-6 sm:px-12 lg:px-24">
            <Link href="/" className="font-semibold text-xl tracking-tight hover:opacity-70 transition-opacity">
                Bajwaa Dev
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium">
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
        </header>
    );
}

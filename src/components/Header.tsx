import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md" style={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
            <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-2">
                    <Logo />
                </div>

                <nav className="flex items-center gap-6 text-sm font-medium">
                    <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors py-2 whitespace-nowrap hidden sm:block rounded">
                        Blog
                    </Link>
                    <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors py-2 whitespace-nowrap hidden sm:block rounded">
                        About
                    </Link>
                    <Link href="/work-with-me" className="text-gray-600 hover:text-gray-900 transition-colors py-2 whitespace-nowrap hidden sm:block rounded">
                        Work With Me
                    </Link>
                    <Link href="/product" className="flex items-center justify-center bg-[#0F172A] text-white px-5 min-h-[44px] min-w-[44px] rounded-full hover:bg-gray-800 transition-colors duration-200 ease-out shadow-[0_1px_2px_rgba(0,0,0,0.05)] whitespace-nowrap ml-2">
                        Get the Playbook
                    </Link>
                </nav>
            </div>
        </header>
    );
}

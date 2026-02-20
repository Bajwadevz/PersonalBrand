import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="w-full bg-white border-t border-gray-200/60 py-16 mt-20">
            <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                {/* Left: Positioning */}
                <div className="max-w-xs">
                    <div className="mb-4">
                        <Logo />
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Practical AI implementation, systems architecture, and automated workflows for professionals.
                    </p>
                </div>

                {/* Right: Navigation */}
                <div className="flex flex-wrap gap-12 md:gap-20">
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="text-gray-500 hover:text-[#0F172A] text-sm font-medium transition-colors">Home</Link>
                        <Link href="/about" className="text-gray-500 hover:text-[#0F172A] text-sm font-medium transition-colors">About</Link>
                        <Link href="/work-with-me" className="text-gray-500 hover:text-[#0F172A] text-sm font-medium transition-colors">Work With Me</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Link href="/blog" className="text-gray-500 hover:text-[#0F172A] text-sm font-medium transition-colors">Blog</Link>
                        <Link href="/contact" className="text-gray-500 hover:text-[#0F172A] text-sm font-medium transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-6 w-full mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-xs">
                    © {new Date().getFullYear()} Shahzaib Bajwa. All rights reserved.
                </p>
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-gray-400 text-xs font-medium">Systems Operational</span>
                </div>
            </div>
        </footer>
    );
}

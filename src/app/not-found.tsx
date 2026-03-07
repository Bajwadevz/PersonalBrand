import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-24 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#0F172A] mb-2">Page not found</h1>
            <p className="text-gray-500 mb-8 max-w-md leading-relaxed">
                The page you’re looking for doesn’t exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-full bg-[#0F172A] text-white px-6 py-3 min-h-[44px] text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
                >
                    Home
                </Link>
                <Link
                    href="/blog"
                    className="inline-flex items-center justify-center rounded-full border border-gray-200 text-gray-700 px-6 py-3 min-h-[44px] text-sm font-medium hover:bg-gray-50 transition-colors duration-200"
                >
                    Blog
                </Link>
            </div>
        </div>
    );
}

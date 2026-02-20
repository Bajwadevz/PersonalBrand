import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <Link
            href="/"
            className="flex items-center gap-2.5 group transition-opacity hover:opacity-80"
            aria-label="Bajwaa Dev Home"
        >
            <Image src="/icon.png" alt="Bajwaa Dev Logo" width={24} height={24} className="rounded-sm" />
            <span className="font-extrabold text-xl tracking-tighter text-gray-900 leading-none">
                bajwaa dev.
            </span>
        </Link>
    );
}

import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <Link
            href="/"
            className="flex items-center gap-2.5 group transition-opacity hover:opacity-80"
            aria-label="Bajwaa Dev Home"
        >
            <div className="relative w-7 h-7 flex items-center justify-center pt-0.5">
                <Image src="/wave-icon.svg" alt="Wave Icon" fill className="object-contain" priority />
            </div>
            <span className="font-extrabold text-xl tracking-tighter text-gray-900 leading-none">
                bajwaa dev.
            </span>
        </Link>
    );
}

import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <Link
            href="/"
            className="flex items-center gap-2 group transition-opacity hover:opacity-80"
            aria-label="Bajwaa Dev Home"
        >
            <Image
                src="/wave-icon.svg"
                alt="Wave Icon"
                width={24}
                height={24}
                className="object-contain"
                priority
            />
            <span className="font-extrabold text-lg tracking-tight text-gray-900 leading-none">
                bajwaa dev.
            </span>
        </Link>
    );
}

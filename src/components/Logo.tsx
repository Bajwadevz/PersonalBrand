import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <Link
            href="/"
            className="flex items-center gap-2 group transition-opacity hover:opacity-70"
            aria-label="Bajwaa Dev Home"
        >
            <Image
                src="/wave-icon.svg"
                alt="Bajwaa Dev wave logo"
                width={24}
                height={24}
                className="flex-shrink-0"
                priority
            />
            <span className="font-bold text-base md:text-lg tracking-tight text-zinc-900 dark:text-white leading-none">
                bajwaa.dev
            </span>
        </Link>
    );
}

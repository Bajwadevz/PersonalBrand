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
                alt="Wave Icon"
                width={20}
                height={20}
                className="object-contain"
                priority
            />
            <span className="font-semibold text-base tracking-tight text-zinc-900 leading-none">
                bajwaa dev.
            </span>
        </Link>
    );
}

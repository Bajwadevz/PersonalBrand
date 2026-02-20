import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <Link
            href="/"
            className="flex items-center gap-2.5 group transition-opacity hover:opacity-80"
            aria-label="Bajwaa Dev Home"
        >
            <Image src="/wave-logo.png" alt="Bajwaa Dev Logo" width={32} height={32} quality={100} priority className="rounded-sm object-contain" />
            <span className="font-extrabold text-xl tracking-tighter text-gray-900 leading-none">
                bajwaa dev.
            </span>
        </Link>
    );
}

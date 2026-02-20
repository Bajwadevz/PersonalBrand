import Link from "next/link";
import WaveIcon from "./WaveIcon";

export default function Logo() {
    return (
        <Link
            href="/"
            className="flex items-center gap-2.5 group transition-opacity hover:opacity-80"
            aria-label="Bajwaa Dev Home"
        >
            <WaveIcon className="w-6 h-6 text-foreground" />
            <span className="font-semibold text-lg tracking-tight text-foreground" style={{ letterSpacing: "-0.01em" }}>
                Bajwaa Dev
            </span>
        </Link>
    );
}

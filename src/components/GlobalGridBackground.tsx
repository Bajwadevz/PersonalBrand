export default function GlobalGridBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div
                className="absolute inset-0"
                style={{
                    maskImage: "radial-gradient(circle at center, black 38%, transparent 88%)",
                    WebkitMaskImage: "radial-gradient(circle at center, black 38%, transparent 88%)"
                }}
            >
                <div
                    className="absolute left-1/2 top-[35%] h-[150vh] w-[180vw] -translate-x-1/2"
                    style={{
                        backgroundImage:
                            "linear-gradient(var(--color-grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-grid-line) 1px, transparent 1px)",
                        backgroundSize: "58px 58px",
                        transform: "perspective(1200px) rotateX(60deg) translateZ(0)",
                        transformOrigin: "center top"
                    }}
                />
            </div>
            <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 1200 900" fill="none" aria-hidden>
                <g stroke="var(--color-grid-line)" strokeWidth="1">
                    <path d="M140 220 L180 250 L230 230" className="animate-[float_6s_ease-in-out_infinite]" />
                    <circle cx="140" cy="220" r="3" />
                    <circle cx="180" cy="250" r="2.5" />
                    <circle cx="230" cy="230" r="3" />

                    <path d="M980 310 L1025 335 L1080 320" className="animate-[float_8s_ease-in-out_infinite_1s]" />
                    <circle cx="980" cy="310" r="3" />
                    <circle cx="1025" cy="335" r="2.5" />
                    <circle cx="1080" cy="320" r="3" />

                    <circle cx="860" cy="640" r="15" className="animate-[float_7s_ease-in-out_infinite_0.7s]" />
                    <circle cx="860" cy="640" r="6" />
                    <path d="M300 600 h24 m-12 -12 v24" className="animate-[float_7s_ease-in-out_infinite_1.2s]" />
                    <path d="M560 690 l18 -8 l-9 16 z" className="animate-[float_8s_ease-in-out_infinite_1.4s]" />
                </g>
            </svg>
        </div>
    );
}

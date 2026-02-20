export default function BackgroundGrid() {
    return (
        <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none w-full h-full flex items-center justify-center pt-24 pb-20 max-w-6xl mx-auto px-6">
            <div className="absolute inset-0">
                <svg
                    className="absolute inset-0 h-full w-full opacity-15"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <pattern
                            id="header-grid"
                            width="40"
                            height="40"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                d="M 40 0 L 0 0 0 40"
                                fill="none"
                                stroke="#E5E7EB"
                                strokeWidth="1"
                            />
                        </pattern>
                        <radialGradient id="fade-mask" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="white" stopOpacity="1" />
                            <stop offset="100%" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <rect
                        width="100%"
                        height="100%"
                        fill="url(#header-grid)"
                        mask="url(#fade-mask)"
                    />
                </svg>
            </div>
        </div>
    );
}

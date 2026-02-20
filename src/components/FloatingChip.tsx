interface FloatingChipProps {
    children: React.ReactNode;
    className?: string;
    animationClass?: string;
}

export default function FloatingChip({ children, className = "", animationClass = "animate-[float_8s_ease-in-out_infinite]" }: FloatingChipProps) {
    return (
        <div className={`absolute bg-white/80 backdrop-blur-md border border-gray-200 text-gray-500 rounded-full px-4 py-2 text-sm shadow-sm opacity-70 ${animationClass} ${className}`}>
            {children}
        </div>
    );
}

interface FloatingChipProps {
    children: React.ReactNode;
    className?: string;
    animationClass?: string;
}

export default function FloatingChip({ children, className = "", animationClass = "animate-[float_8s_ease-in-out_infinite]" }: FloatingChipProps) {
    return (
        <div className={`absolute bg-white/90 backdrop-blur-xl border border-gray-200/60 text-gray-500 rounded-2xl px-5 py-2.5 text-sm shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] opacity-80 rotate-1 hover:rotate-0 hover:-translate-y-1 hover:opacity-100 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 ${animationClass} ${className}`}>
            {children}
        </div>
    );
}

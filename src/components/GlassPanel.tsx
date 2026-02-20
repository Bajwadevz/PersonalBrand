interface GlassPanelProps {
    children?: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export default function GlassPanel({ children, className = "", hoverEffect = false }: GlassPanelProps) {
    return (
        <div className={`bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-2xl shadow-[0_2px_10px_-3px_rgba(0,0,0,0.02)] ${hoverEffect ? "hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300" : ""} ${className}`}>
            {children}
        </div>
    );
}

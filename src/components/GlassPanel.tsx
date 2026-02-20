interface GlassPanelProps {
    children?: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export default function GlassPanel({ children, className = "", hoverEffect = false }: GlassPanelProps) {
    return (
        <div className={`bg-white/70 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-sm ${hoverEffect ? "hover:shadow-lg hover:-translate-y-1 transition-all duration-300" : ""} ${className}`}>
            {children}
        </div>
    );
}

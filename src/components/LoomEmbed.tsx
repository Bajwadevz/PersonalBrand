'use client';

type Props = {
    eyebrow?: string;
    heading?: string;
    className?: string;
};

export default function LoomEmbed({ eyebrow, heading, className = '' }: Props) {
    return (
        <div className={`w-full max-w-3xl mx-auto ${className}`}>
            {eyebrow && (
                <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-ocean)] mb-2">
                    {eyebrow}
                </p>
            )}
            {heading && (
                <h3 className="text-2xl font-semibold mb-5">
                    {heading}
                </h3>
            )}
            <div
                className="glass-card relative h-0 overflow-hidden rounded-2xl"
                style={{ paddingBottom: '62.7178%' }}
            >
                {/* TODO: swap PLACEHOLDER_HVAC_DEMO_ID for the real HVAC demo Loom ID */}
                <iframe
                    src="https://www.loom.com/embed/PLACEHOLDER_HVAC_DEMO_ID"
                    title="AI Lead Response and Booking Systems: 90 second walkthrough"
                    loading="lazy"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                />
            </div>
        </div>
    );
}

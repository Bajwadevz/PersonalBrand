'use client';

import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

const videoId = '812342319423449b8acaa9c77b7e1ca3';
const videoTitle = 'AI lead response and booking walkthrough';

type Props = {
    eyebrow?: string;
    heading?: string;
    className?: string;
    onDemand?: boolean;
};

export default function LoomEmbed({ eyebrow, heading, className = '', onDemand = false }: Props) {
    const [loaded, setLoaded] = useState(!onDemand);
    const iframe = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        if (onDemand && loaded) iframe.current?.focus({ preventScroll: true });
    }, [loaded, onDemand]);
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
                {loaded ? <iframe
                    ref={iframe}
                    src={`https://www.loom.com/embed/${videoId}`}
                    title={videoTitle}
                    loading="lazy"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                /> : <button type="button" className="loom-play" onClick={() => setLoaded(true)}>
                    <Play size={26} aria-hidden="true" />
                    <span>Load video</span>
                </button>}
            </div>
            {onDemand && <a className="loom-fallback" href={`https://www.loom.com/share/${videoId}`} target="_blank" rel="noopener noreferrer">Open in Loom ↗</a>}
        </div>
    );
}

"use client";

import { useEffect, useRef } from "react";

/**
 * Embeds the Kit.com (ConvertKit) inline form on the product page.
 * Dynamically loads the script once on mount.
 */
export default function KitEmbedForm() {
    const containerRef = useRef<HTMLDivElement>(null);
    const injected = useRef(false);

    useEffect(() => {
        if (injected.current || !containerRef.current) return;
        injected.current = true;

        const script = document.createElement("script");
        script.async = true;
        script.setAttribute("data-uid", "83fb0dd633");
        script.src = "https://bajwaa-dev.kit.com/83fb0dd633/index.js";
        containerRef.current.appendChild(script);
    }, []);

    return <div ref={containerRef} className="w-full" />;
}

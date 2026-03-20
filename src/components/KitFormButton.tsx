"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface KitFormButtonProps {
    label?: string;
    className?: string;
}

export default function KitFormButton({
    label = "Get the Playbook",
    className,
}: KitFormButtonProps) {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const scriptInjected = useRef(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!open || scriptInjected.current) return;

        const timer = setTimeout(() => {
            const container = containerRef.current;
            if (!container) return;

            const script = document.createElement("script");
            script.async = true;
            script.setAttribute("data-uid", "83fb0dd633");
            script.src = "https://bajwaa-dev.kit.com/83fb0dd633/index.js";
            container.appendChild(script);
            scriptInjected.current = true;
        }, 80);

        return () => clearTimeout(timer);
    }, [open]);

    useEffect(() => {
        if (!open) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", handleKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [open]);

    const handleClose = useCallback(() => setOpen(false), []);

    const btnClass = className ?? "btn-primary min-h-[48px] min-w-[220px]";

    if (!mounted) {
        return (
            <button type="button" className={btnClass}>
                {label}
            </button>
        );
    }

    return (
        <>
            <button type="button" onClick={() => setOpen(true)} className={btnClass}>
                {label}
            </button>

            {open &&
                createPortal(
                    <div
                        className="fixed inset-0 z-[300] flex items-center justify-center p-4"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Get the Playbook"
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={handleClose}
                        />

                        {/* Modal */}
                        <div className="relative z-10 w-full max-w-lg rounded-2xl bg-white shadow-2xl dark:bg-zinc-900 overflow-hidden">
                            {/* Header bar */}
                            <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 px-6 py-4">
                                <div>
                                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white leading-tight">
                                        Get the AI Operator Playbook
                                    </h3>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                                        Free frameworks &amp; systems delivered to your inbox.
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    className="ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
                                    aria-label="Close"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>

                            {/* Kit form container */}
                            <div className="px-6 py-6">
                                <div ref={containerRef} className="min-h-[120px]" />
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
}

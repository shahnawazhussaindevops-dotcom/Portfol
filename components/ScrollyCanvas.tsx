"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

interface ScrollyCanvasProps {
    children?: React.ReactNode;
}

export default function ScrollyCanvas({ children }: ScrollyCanvasProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const currentFrameRef = useRef<number>(-1);
    const rafRef = useRef<number | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const loadedCountRef = useRef(0);

    const frameCount = 120; // 000.webp to 119.webp

    // ── Draw a specific frame ──────────────────────────────────────────
    const drawFrame = useCallback((index: number) => {
        const canvas = canvasRef.current;
        const img = imagesRef.current[index];
        if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const cw = canvas.width;
        const ch = canvas.height;
        const ir = img.naturalWidth / img.naturalHeight;
        const cr = cw / ch;

        let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;

        if (ir > cr) {
            // Image wider → crop sides
            sw = img.naturalHeight * cr;
            sx = (img.naturalWidth - sw) / 2;
        } else {
            // Image taller → crop top/bottom
            sh = img.naturalWidth / cr;
            sy = (img.naturalHeight - sh) / 2;
        }

        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
    }, []);

    // ── Scroll handler via getBoundingClientRect (most reliable) ─────
    const handleScroll = useCallback(() => {
        if (rafRef.current) return;
        rafRef.current = requestAnimationFrame(() => {
            rafRef.current = null;

            const container = containerRef.current;
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const scrollable = rect.height - window.innerHeight;
            if (scrollable <= 0) return;

            const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
            const frameIndex = Math.min(frameCount - 1, Math.floor(progress * frameCount));

            if (frameIndex !== currentFrameRef.current) {
                currentFrameRef.current = frameIndex;
                drawFrame(frameIndex);
            }
        });
    }, [drawFrame, frameCount]);

    // ── Resize handler ───────────────────────────────────────────────
    const handleResize = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        if (currentFrameRef.current >= 0) {
            drawFrame(currentFrameRef.current);
        }
    }, [drawFrame]);

    // ── Load images in batches ───────────────────────────────────────
    useEffect(() => {
        const images: HTMLImageElement[] = new Array(frameCount);
        imagesRef.current = images;
        loadedCountRef.current = 0;

        const checkDone = () => {
            loadedCountRef.current += 1;
            if (loadedCountRef.current >= frameCount) {
                setIsLoaded(true);
            }
        };

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            const p = i.toString().padStart(3, "0");
            img.src = `/sequence/${p}.webp`;
            // First 10 frames load with high priority so animation starts fast
            if (i < 10) (img as any).fetchPriority = "high";

            img.onload = () => {
                // Initialize canvas on first frame ready
                if (i === 0 && canvasRef.current) {
                    const canvas = canvasRef.current;
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                    currentFrameRef.current = 0;
                    drawFrame(0);
                }
                checkDone();
            };
            img.onerror = checkDone;
            images[i] = img;
        }

        return () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
                rafRef.current = null;
            }
        };
    }, [drawFrame, frameCount]);

    // ── Attach listeners ─────────────────────────────────────────────
    useEffect(() => {
        handleResize();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleResize, { passive: true });
        handleScroll(); // fire once for initial position
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [handleScroll, handleResize]);

    // Inject containerRef into children so Overlay can bind its scroll to it
    const childrenWithRef = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, { containerRef });
        }
        return child;
    });

    return (
        <div ref={containerRef} className="h-[600vh] relative bg-black">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="block w-full h-full"
                    style={{ opacity: 0.65 }}
                />

                {/* Overlay with containerRef injected */}
                {childrenWithRef}

                {/* Loading overlay */}
                {!isLoaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#121212] z-50">
                        <div className="w-12 h-12 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mb-4" />
                        <div className="text-xs font-mono tracking-[0.5em] text-gray-500 uppercase animate-pulse">
                            Initializing Assets...
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

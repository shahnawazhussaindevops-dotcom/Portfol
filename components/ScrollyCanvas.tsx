"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function ScrollyCanvas({ children }: { children?: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const frameCount = 120; // 000.webp to 119.webp

    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const promises: Promise<void>[] = [];

            for (let i = 0; i < frameCount; i++) {
                const promise = new Promise<void>((resolve) => {
                    const img = new Image();
                    const p = i.toString().padStart(3, "0");
                    img.src = `/sequence/${p}.webp`;
                    img.onload = () => {
                        loadedImages[i] = img;
                        resolve();
                    };
                    img.onerror = () => {
                        console.error(`Failed to load image ${i}`);
                        resolve();
                    };
                });
                promises.push(promise);
            }

            await Promise.all(promises);
            setImages(loadedImages);
            setIsLoaded(true);
        };

        loadImages();
    }, []);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !images[index]) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];

        // Calculate aspect ratios for object-fit: cover logic
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            drawWidth = canvas.width;
            drawHeight = canvas.width / imgRatio;
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            drawWidth = canvas.height * imgRatio;
            drawHeight = canvas.height;
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Initial draw and resize handler
    useEffect(() => {
        if (!isLoaded || images.length === 0) return;

        const handleResize = () => {
            if (canvasRef.current) {
                // Set canvas internal resolution to match screen
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;

                // Render current scroll position frame
                const currentScroll = scrollYProgress.get();
                const frameIndex = Math.min(
                    frameCount - 1,
                    Math.floor(currentScroll * frameCount)
                );
                renderFrame(frameIndex);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isLoaded, images, scrollYProgress]);

    // Update frame on scroll
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;

        const frameIndex = Math.min(
            frameCount - 1,
            Math.floor(latest * frameCount)
        );

        requestAnimationFrame(() => renderFrame(frameIndex));
    });

    return (
        <div ref={containerRef} className="h-[600vh] relative bg-black">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="block w-full h-full object-cover opacity-60 backdrop-brightness-50"
                />
                {/* Children (Overlay) sits on top of sticky canvas */}
                {React.Children.map(children, (child: React.ReactNode) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child as React.ReactElement<any>, { scrollYProgress });
                    }
                    return child;
                })}

                {!isLoaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#121212] z-50">
                        <div className="w-12 h-12 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mb-4"></div>
                        <div className="text-xs font-mono tracking-[0.5em] text-gray-500 uppercase animate-pulse">Initializing Assets...</div>
                    </div>
                )}
            </div>
        </div>
    );
}


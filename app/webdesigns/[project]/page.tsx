"use client";

import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";

const PROJECT_URLS: Record<string, { url: string; name: string }> = {
    "neerjharna": { url: "https://neerjharna.vercel.app", name: "Neerjharna" },
    "porsche": { url: "https://porsche-flax.vercel.app", name: "Porsche" },
    "gaurcity": { url: "https://gaurcity-ten.vercel.app", name: "Gaur City" },
    "realmespeaker": { url: "https://realmespeaker.vercel.app", name: "Realme Speaker" },
    "tastethethunder": { url: "https://tastethethunder.vercel.app", name: "Taste The Thunder" },
    "asuslaptop": { url: "https://asus-laptop.vercel.app", name: "Asus Laptop" },
    "cinepose": { url: "https://cinepose.vercel.app", name: "CinePose" },
    "sultanijansevakendra": { url: "https://sultanijansevakendra.vercel.app", name: "Sultani Jan Seva Kendra" },
    "portfolio": { url: "https://shahnawazhussaindevops.in", name: "Portfolio" },
};

export default function ProjectPage({ params }: { params: { project: string } }) {
    const project = PROJECT_URLS[params.project];

    if (!project) {
        notFound();
    }

    return (
        <main className="fixed inset-0 flex flex-col bg-[#121212]">
            <Navbar />
            
            {/* Header bar with project name and external link */}
            <div className="flex-shrink-0 h-12 sm:h-14 bg-[#0a0a0a] border-b border-white/10 flex items-center justify-between px-4 sm:px-6 mt-16 sm:mt-20">
                <div className="flex items-center gap-3">
                    <a 
                        href="/webdesigns" 
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Back to web designs"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                    <h1 className="text-sm sm:text-base font-bold text-white">{project.name}</h1>
                </div>
                <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-primary transition-colors"
                >
                    <span className="hidden sm:inline">Open in new tab</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </a>
            </div>

            {/* Full-screen iframe */}
            <iframe
                src={project.url}
                className="flex-1 w-full h-full border-0"
                title={project.name}
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
                loading="eager"
            />
        </main>
    );
}

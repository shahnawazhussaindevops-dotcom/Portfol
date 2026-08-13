"use client";

import { notFound } from "next/navigation";

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
        <iframe
            src={project.url}
            style={{ 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                bottom: 0, 
                right: 0, 
                width: '100vw', 
                height: '100vh', 
                border: 'none', 
                margin: 0, 
                padding: 0, 
                overflow: 'hidden', 
                zIndex: 999999 
            }}
            title={project.name}
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
            loading="eager"
        />
    );
}

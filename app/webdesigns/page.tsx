"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface WebProject {
    name: string;
    url: string;
    thumb: string;
    desc: string;
    tags: string[];
    accent: string;
    repo?: string;
}

const GITHUB_USER = "shahnawazhussaindevops-dotcom";

/**
 * Source repositories for the projects below, keyed by project name.
 * Anything not listed here simply renders without a "Source" button.
 */
const GITHUB_REPOS: Record<string, string> = {
    "Khan Lorries": "khanlorries",
    "Neerjharna": "neerjharna-",
    "Taste The Thunder": "tastethethunder",
    "CinePose": "cinepose",
    "Gaur City": "gaurcity",
    "Realme Speaker": "realmespeaker",
    "Asus Laptop": "Asus-laptop-redesign",
    "Porsche": "porsche",
    "Sultani Jan Seva Kendra": "sultanijansevakendra",
    "Safarnama": "safarnama",
    "Volvo": "volvo",
    "Statue": "statue-of-unity",
    "Mahindra BE6": "be6",
    "Portfolio": "Portfolio",
};

const repoUrl = (repo?: string) =>
    repo ? `https://github.com/${GITHUB_USER}/${repo}` : undefined;

const PROJECTS: WebProject[] = [
    {
        name: "Khan Lorries",
        url: "https://khanlorries.shahnawazhussaindevops.in/",
        thumb: "https://image.thum.io/get/width/1200/crop/800/https://khanlorries.shahnawazhussaindevops.in/",
        desc: "Transport and logistics web experience.",
        tags: ["Logistics", "Vercel"],
        accent: "#3b82f6",
        repo: "khanlorries",
    },
    {
        name: "Neerjharna",
        url: "https://neerjharna-rishikesh.design.shahnawazhussaindevops.in/",
        thumb: "/thumbnails/neerjharna.jpg",
        desc: "Discover the hidden cascade of Rishikesh.",
        tags: ["Landing Page", "Vercel"],
        accent: "#10b981",
        repo: "neerjharna-",
    },
    {
        name: "Taste The Thunder",
        url: "https://thumpsupcoke.design.shahnawazhussaindevops.in/",
        thumb: "/thumbnails/taste-the-thunder.jpg",
        desc: "Premium beverage brand experience with bold visuals.",
        tags: ["Brand Site", "Vercel"],
        accent: "#f97316",
        repo: "tastethethunder",
    },
    {
        name: "CinePose",
        url: "https://cinepose.ai.shahnawazhussaindevops.in/",
        thumb: "/thumbnails/cinepose.jpg",
        desc: "Ultra AI cinema camera product experience.",
        tags: ["Product Page", "Vercel"],
        accent: "#ef4444",
        repo: "cinepose",
    },
    {
        name: "Gaur City",
        url: "https://gaurcity.shahnawazhussaindevops.in/",
        thumb: "/thumbnails/gaur-city.jpg",
        desc: "Gaur City Centre — the story of your stay, in film.",
        tags: ["Showcase", "Vercel"],
        accent: "#f59e0b",
        repo: "gaurcity",
    },
    {
        name: "Realme Speaker",
        url: "https://realme.shahnawazhussaindevops.in/",
        thumb: "/thumbnails/realme-speaker.jpg",
        desc: "Sound that speaks for itself — a product page for Realme speaker.",
        tags: ["Product Page", "Vercel"],
        accent: "#3b82f6",
        repo: "realmespeaker",
    },
    {
        name: "Asus Laptop",
        url: "https://asus.shahnawazhussaindevops.in/",
        thumb: "/thumbnails/asus-laptop.jpg",
        desc: "Shop laptops, accessories, and more — an Asus India inspired storefront.",
        tags: ["Storefront", "Vercel"],
        accent: "#a855f7",
        repo: "Asus-laptop-redesign",
    },
    {
        name: "Porsche",
        url: "https://porsche.shahnawazhussaindevops.in/",
        thumb: "/thumbnails/porsche.jpg",
        desc: "Porsche 911 GT3 RS — Defy Gravity.",
        tags: ["Landing Page", "Vercel"],
        accent: "#ef4444",
        repo: "porsche",
    },
    {
        name: "Doms",
        url: "https://doms.shahnawazhussaindevops.in/",
        thumb: "https://image.thum.io/get/width/1200/crop/800/https://doms.shahnawazhussaindevops.in/",
        desc: "Stationery and art materials digital storefront.",
        tags: ["E-commerce", "Vercel"],
        accent: "#f59e0b",
    },
    {
        name: "XUV 700",
        url: "https://xuv700.shahnawazhussaindevops.in/",
        thumb: "https://image.thum.io/get/width/1200/crop/800/https://xuv700.shahnawazhussaindevops.in/",
        desc: "Experience the Mahindra XUV 700.",
        tags: ["Automotive", "Vercel"],
        accent: "#3b82f6",
    },
    {
        name: "Adil Portfolio",
        url: "https://adil-portfolio.shahnawazhussaindevops.in/",
        thumb: "https://image.thum.io/get/width/1200/crop/800/https://adil-portfolio.shahnawazhussaindevops.in/",
        desc: "Personal portfolio for Adil.",
        tags: ["Portfolio", "Vercel"],
        accent: "#a855f7",
    },
    {
        name: "Safarnama",
        url: "https://safarnama-1.vercel.app/",
        thumb: "https://image.thum.io/get/width/1200/crop/800/https://safarnama-1.vercel.app/",
        desc: "Travel and journey experiences.",
        tags: ["Travel", "Vercel"],
        accent: "#ef4444",
        repo: "safarnama",
    },
    {
        name: "Sultani Jan Seva Kendra",
        url: "https://sultanijansevakendra.vercel.app/",
        thumb: "/thumbnails/sultani-jan-seva-kendra.jpg",
        desc: "Cyber cafe & documentation services.",
        tags: ["Service Site", "Vercel"],
        accent: "#f59e0b",
        repo: "sultanijansevakendra",
    },
    {
        name: "Portfolio",
        url: "https://shahnawazhussaindevops.in/",
        thumb: "/thumbnails/portfolio.jpg",
        desc: "My personal portfolio website.",
        tags: ["Portfolio", "Next.js"],
        accent: "#3b82f6",
        repo: "Portfolio",
    },
    {
        name: "Volvo",
        url: "https://volvo.shahnawazhussaindevops.in/",
        thumb: "https://image.thum.io/get/width/1200/crop/800/https://volvo.shahnawazhussaindevops.in/",
        desc: "Volvo — luxury automotive brand experience.",
        tags: ["Automotive", "Vercel"],
        accent: "#1e40af",
        repo: "volvo",
    },
    {
        name: "Statue",
        url: "https://statue.shahnawazhussaindevops.in/",
        thumb: "https://image.thum.io/get/width/1200/crop/800/https://statue.shahnawazhussaindevops.in/",
        desc: "Statue of Unity — a tribute to India's heritage.",
        tags: ["Showcase", "Vercel"],
        accent: "#d97706",
        repo: "statue-of-unity",
    },
    {
        name: "Mahindra BE6",
        url: "https://be6.shahnawazhussaindevops.in/",
        thumb: "https://image.thum.io/get/width/1200/crop/800/https://be6.shahnawazhussaindevops.in/",
        desc: "Mahindra BE 6 — born electric, built bold.",
        tags: ["Automotive", "Vercel"],
        accent: "#dc2626",
        repo: "be6",
    },
];

function ProjectCard({ project, index }: { project: WebProject; index: number }) {
    const [thumbFailed, setThumbFailed] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative block overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#161616] hover:border-white/25 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.25)]"
        >
            {/* Browser frame with screenshot thumbnail */}
            <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[16/10] overflow-hidden bg-[#0d0d0d] border-b border-white/5"
            >
                <div className="absolute top-0 inset-x-0 h-9 bg-[#1b1b1b] border-b border-white/5 flex items-center gap-2 px-3 z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></span>
                    <span className="ml-2 flex-1 truncate text-[9px] font-mono text-gray-500 bg-white/5 border border-white/5 rounded-md px-2 py-1">
                        {project.url.replace(/^https?:\/\//, "")}
                    </span>
                </div>

                {thumbFailed ? (
                    <div
                        className="absolute inset-0 mt-9 flex flex-col items-center justify-center gap-3"
                        style={{ background: `radial-gradient(circle at 50% 120%, ${project.accent}22, transparent 60%)` }}
                    >
                        <span
                            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-black text-white"
                            style={{ background: project.accent }}
                        >
                            {project.name.charAt(0)}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
                            {project.name}
                        </span>
                    </div>
                ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={project.thumb}
                        alt={project.name}
                        loading="lazy"
                        onError={() => setThumbFailed(true)}
                        className="absolute inset-0 mt-9 w-full h-[calc(100%-2.25rem)] object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                )}
            </a>

            {/* Card body */}
            <div className="p-6">
                <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                        {project.name}
                    </h3>
                    <span className="flex items-center gap-1.5 text-xs font-mono text-gray-400 group-hover:text-white transition-colors">
                        Live
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/10 text-[9px] font-mono uppercase tracking-widest text-gray-400 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Actions */}
                <div className="mt-5 flex items-center gap-3">
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
                    >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Visit
                    </a>

                    {repoUrl(project.repo) && (
                        <>
                            <span className="w-px h-3 bg-white/10"></span>
                            <a
                                href={repoUrl(project.repo)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
                            >
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.28.74-1.57-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.42.36.8 1.07.8 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
                                </svg>
                                Source
                            </a>
                        </>
                    )}
                </div>
            </div>

            {/* Hover glow */}
            <div
                className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700 pointer-events-none"
                style={{ background: project.accent }}
            ></div>
        </motion.div>
    );
}

export default function WebDesigns() {
    return (
        <main className="bg-[#121212] min-h-screen">
            <Navbar />

            {/* Hero */}
            <section className="pt-28 sm:pt-36 md:pt-40 pb-10 sm:pb-16 px-4 sm:px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs font-mono tracking-[0.4em] uppercase text-primary mb-4 sm:mb-6"
                    >
                        Portfolio / Web Designs
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-4 sm:mb-6"
                    >
                        Web Designs <span className="text-gradient">Portfolio</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-base sm:text-lg max-w-2xl font-light"
                    >
                        Every project below is live and deployed on Vercel. Click any card to open the
                        hosted website in a new tab.
                    </motion.p>
                </div>
            </section>

            {/* Projects grid */}
            <section className="py-8 sm:py-12 pb-16 sm:pb-24 px-4 sm:px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-8 sm:mb-12">
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                            {PROJECTS.length} {PROJECTS.length === 1 ? "Project" : "Projects"} Deployed
                        </span>
                        <div className="h-[1px] flex-grow bg-white/10"></div>
                        <span className="flex items-center gap-2 text-xs font-mono text-gray-500">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            Vercel
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
                        {PROJECTS.map((project, idx) => (
                            <ProjectCard key={project.url} project={project} index={idx} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

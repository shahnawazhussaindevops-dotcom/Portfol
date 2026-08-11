"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface WebProject {
    name: string;
    url: string;
    desc: string;
    tags: string[];
    accent: string;
}

const PROJECTS: WebProject[] = [
    {
        name: "Neerjharna",
        url: "https://neerjharna.vercel.app/",
        desc: "Discover the hidden cascade of Rishikesh.",
        tags: ["Landing Page", "Vercel"],
        accent: "#10b981",
    },
    {
        name: "Porsche",
        url: "https://porsche-flax.vercel.app/",
        desc: "Porsche 911 GT3 RS — Defy Gravity.",
        tags: ["Landing Page", "Vercel"],
        accent: "#ef4444",
    },
    {
        name: "Gaur City",
        url: "https://gaurcity-ten.vercel.app/",
        desc: "Gaur City Centre — the story of your stay, in film.",
        tags: ["Showcase", "Vercel"],
        accent: "#f59e0b",
    },
    {
        name: "Realme Speaker",
        url: "https://realmespeaker.vercel.app/",
        desc: "Sound that speaks for itself — a product page for Realme speaker.",
        tags: ["Product Page", "Vercel"],
        accent: "#3b82f6",
    },
    {
        name: "Taste The Thunder",
        url: "https://tastethethunder.vercel.app/",
        desc: "Premium beverage brand experience with bold visuals.",
        tags: ["Brand Site", "Vercel"],
        accent: "#f97316",
    },
    {
        name: "Asus Laptop",
        url: "https://asus-laptop.vercel.app/",
        desc: "Shop laptops, accessories, and more — an Asus India inspired storefront.",
        tags: ["Storefront", "Vercel"],
        accent: "#a855f7",
    },
    {
        name: "Sultani Jan Seva Kendra",
        url: "https://sultanijansevakendra.vercel.app/",
        desc: "Cyber cafe & documentation services.",
        tags: ["Service Site", "Vercel"],
        accent: "#f59e0b",
    },
    {
        name: "CinePose",
        url: "https://cinepose.vercel.app/",
        desc: "Ultra AI cinema camera product experience.",
        tags: ["Product Page", "Vercel"],
        accent: "#ef4444",
    },
    {
        name: "Portfolio",
        url: "https://www.shahnawazhussaindevops.in/",
        desc: "My personal portfolio website.",
        tags: ["Portfolio", "Vercel"],
        accent: "#3b82f6",
    },
];

function thumbnailUrl(url: string) {
    return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200&h=675`;
}

function ProjectCard({ project, index }: { project: WebProject; index: number }) {
    const [thumbFailed, setThumbFailed] = useState(false);

    return (
        <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative block overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#161616] hover:border-white/25 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.25)]"
        >
            {/* Browser frame with screenshot thumbnail */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0d0d0d] border-b border-white/5">
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
                        src={thumbnailUrl(project.url)}
                        alt={project.name}
                        loading="lazy"
                        onError={() => setThumbFailed(true)}
                        className="absolute inset-0 mt-9 w-full h-[calc(100%-2.25rem)] object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                )}
            </div>

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
            </div>

            {/* Hover glow */}
            <div
                className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700 pointer-events-none"
                style={{ background: project.accent }}
            ></div>
        </motion.a>
    );
}

export default function WebDesigns() {
    return (
        <main className="bg-[#121212] min-h-screen">
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-16 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs font-mono tracking-[0.4em] uppercase text-primary mb-6"
                    >
                        Portfolio / Web Designs
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black tracking-tight text-white mb-6"
                    >
                        Web Designs <span className="text-gradient">Portfolio</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl font-light"
                    >
                        Every project below is live and deployed on Vercel. Click any card to open the
                        hosted website in a new tab.
                    </motion.p>
                </div>
            </section>

            {/* Projects grid */}
            <section className="py-12 pb-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-12">
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                            {PROJECTS.length} {PROJECTS.length === 1 ? "Project" : "Projects"} Deployed
                        </span>
                        <div className="h-[1px] flex-grow bg-white/10"></div>
                        <span className="flex items-center gap-2 text-xs font-mono text-gray-500">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            Vercel
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

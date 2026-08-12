"use client";

import { motion } from "framer-motion";

const previews = [
    { name: "Porsche", accent: "#ef4444" },
    { name: "Neerjharna", accent: "#10b981" },
    { name: "CinePose", accent: "#ef4444" },
    { name: "Realme Speaker", accent: "#3b82f6" },
    { name: "Taste The Thunder", accent: "#f97316" },
    { name: "Asus Laptop", accent: "#a855f7" },
];

export default function WebDesignsBanner() {
    return (
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
                <motion.a
                    href="/webdesigns"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group relative block overflow-hidden rounded-2xl sm:rounded-[2rem] border border-white/10 hover:border-primary/40 transition-all duration-500 p-6 sm:p-10 md:p-14 bg-gradient-to-br from-white/[0.03] to-transparent"
                >
                    {/* Background glow */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-all duration-700 pointer-events-none" />
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/20 transition-all duration-700 pointer-events-none" />

                    <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-10">
                        <div className="flex-1">
                            <p className="text-primary text-xs font-mono tracking-[0.4em] uppercase mb-3 sm:mb-4">
                                Creative Work
                            </p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-3 sm:mb-4 leading-tight">
                                Web Designs <br className="hidden sm:block" />
                                <span className="text-gradient">Portfolio</span>
                            </h2>
                            <p className="text-gray-400 text-sm sm:text-base max-w-md">
                                9 live projects deployed on Vercel — landing pages, product showcases, brand experiences and more.
                            </p>

                            <div className="mt-6 sm:mt-8 inline-flex items-center gap-3 bg-primary text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest group-hover:bg-white group-hover:text-black transition-all duration-300">
                                View All Projects
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        {/* Preview pills */}
                        <div className="flex flex-wrap gap-2 sm:max-w-[220px] sm:justify-end">
                            {previews.map((p, i) => (
                                <motion.span
                                    key={p.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.07 }}
                                    className="px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-mono border border-white/10 text-gray-400 group-hover:border-white/20 transition-colors"
                                    style={{ borderColor: `${p.accent}33` , color: p.accent }}
                                >
                                    {p.name}
                                </motion.span>
                            ))}
                            <span className="px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-mono border border-white/10 text-gray-500">
                                +3 more
                            </span>
                        </div>
                    </div>
                </motion.a>
            </div>
        </section>
    );
}

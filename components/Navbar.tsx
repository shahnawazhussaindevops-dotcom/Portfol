"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "Web Designs", href: "/webdesigns" },
    { label: "Experience", href: "#" },
    { label: "Strategy", href: "#" },
    { label: "Tech", href: "#" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 inset-x-0 h-16 sm:h-20 z-50 flex items-center justify-between px-4 sm:px-8 md:px-12 pointer-events-none"
            >
                {/* Left — logo + links */}
                <div className="glass px-4 sm:px-6 py-2 rounded-full pointer-events-auto flex items-center gap-3 sm:gap-6">
                    <span className="font-black tracking-tighter text-lg sm:text-xl">SH.</span>
                    <div className="w-px h-4 bg-white/20"></div>

                    {/* Desktop links */}
                    <div className="hidden md:flex gap-6 text-[10px] uppercase tracking-widest font-bold text-gray-400">
                        {navLinks.map((l) => (
                            <a key={l.label} href={l.href} className="hover:text-white transition-colors">
                                {l.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden flex flex-col justify-center gap-[5px] w-6 h-6"
                        onClick={() => setMenuOpen((o) => !o)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        <span className={`block h-[2px] w-full bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                        <span className={`block h-[2px] w-full bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                        <span className={`block h-[2px] w-full bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                    </button>
                </div>

                {/* Right — CTA */}
                <div className="pointer-events-auto">
                    <a
                        href="mailto:shahnawazhussaindevops@gmail.com"
                        className="bg-primary hover:bg-white hover:text-black text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-none"
                    >
                        <span className="hidden sm:inline">Get in Touch</span>
                        <span className="sm:hidden">Contact</span>
                    </a>
                </div>
            </motion.nav>

            {/* Mobile dropdown menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-16 inset-x-4 z-40 glass rounded-2xl p-4 flex flex-col gap-1 md:hidden"
                    >
                        {navLinks.map((l) => (
                            <a
                                key={l.label}
                                href={l.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors px-4 py-3 rounded-xl hover:bg-white/5"
                            >
                                {l.label}
                            </a>
                        ))}
                        <div className="mt-2 pt-3 border-t border-white/10">
                            <a
                                href="mailto:shahnawazhussaindevops@gmail.com"
                                className="block text-center bg-primary text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

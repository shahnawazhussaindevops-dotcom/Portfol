"use client";

import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 inset-x-0 h-20 z-50 flex items-center justify-between px-8 md:px-12 pointer-events-none"
        >
            <div className="glass px-6 py-2 rounded-full pointer-events-auto flex items-center gap-6">
                <span className="font-black tracking-tighter text-xl">SH.</span>
                <div className="w-px h-4 bg-white/20"></div>
                <div className="hidden md:flex gap-6 text-[10px] uppercase tracking-widest font-bold text-gray-400">
                    <a href="/webdesigns" className="hover:text-white transition-colors">Web Designs</a>
                    <a href="#" className="hover:text-white transition-colors">Experience</a>
                    <a href="#" className="hover:text-white transition-colors">Strategy</a>
                    <a href="#" className="hover:text-white transition-colors">Tech</a>
                </div>
            </div>

            <div className="pointer-events-auto">
                <a
                    href="mailto:shahnawazhussaindevops@gmail.com"
                    className="bg-primary hover:bg-white hover:text-black text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-none"
                >
                    Get in Touch
                </a>
            </div>
        </motion.nav>
    );
}

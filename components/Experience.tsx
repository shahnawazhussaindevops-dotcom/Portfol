"use client";

import { motion } from "framer-motion";

import { BackgroundBeams } from "./ui/background-beams";

export default function Experience() {
    return (
        <section id="experience" className="bg-[#0a0a0a] py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden">
            <BackgroundBeams className="opacity-70" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 sm:mb-16 md:mb-20 gap-4 sm:gap-8">
                    <div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-2 sm:mb-4 italic">Experience</h2>
                        <p className="text-gray-400 text-base sm:text-xl font-light">Leading infrastructure initiatives.</p>
                    </div>
                    <div className="flex flex-col sm:items-end">
                        <div className="text-2xl sm:text-3xl font-display font-bold text-primary">2+ Years</div>
                        <div className="text-xs uppercase tracking-[0.3em] text-gray-500">Professional Legacy</div>
                    </div>
                </div>

                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="relative pl-6 sm:pl-10 border-l-2 border-white/10 group pb-12 hover:border-blue-500/50 transition-colors duration-500"
                    >
                        <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-black border-2 border-blue-500 flex items-center justify-center group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                            <div className="w-1.5 h-1.5 bg-blue-300 rounded-full group-hover:bg-white animate-ping"></div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-start mb-6 sm:mb-8 gap-3 sm:gap-4 glass p-6 sm:p-8 rounded-3xl group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-shadow">
                            <div>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-2">Linux System Administrator</h3>
                                <p className="text-blue-400 font-bold text-lg sm:text-xl tracking-wide">Shadow Infosystem Pvt. Ltd.</p>
                            </div>
                            <div className="sm:text-right mt-2 sm:mt-0">
                                <span className="bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 rounded-full text-xs font-mono text-blue-400 whitespace-nowrap uppercase tracking-widest font-bold">
                                    APR 2024 – PRESENT
                                </span>
                                <p className="text-xs text-gray-400 mt-3 font-medium tracking-wide">Noida, India (Remote-Capable)</p>
                            </div>
                        </div>

                        <ul className="space-y-4 sm:space-y-6 text-gray-300 max-w-4xl glass p-6 sm:p-8 rounded-3xl mt-6">
                            {[
                                "Architected enterprise Linux infrastructure for 50+ production servers with <span class='text-blue-400 font-bold'>99.9% uptime</span> consistent SLA compliance.",
                                "Spearheaded network optimization resulting in <span class='text-blue-400 font-bold'>30% reduction in latency</span> via strategic VLAN segmentation and firewall rules.",
                                "Automated provisioning using <span class='text-blue-400 font-bold'>Kickstart</span>, improving deployment efficiency by 60%.",
                                "Deployed hybrid cloud solutions integrating AWS services with on-premise Linux environments."
                            ].map((item, i) => (
                                <motion.li 
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15, duration: 0.5 }}
                                    className="flex gap-4 sm:gap-5 text-sm sm:text-base md:text-lg items-start"
                                >
                                    <span className="text-blue-500 flex-shrink-0 mt-1">▶</span>
                                    <span dangerouslySetInnerHTML={{ __html: item }}></span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";

export default function Experience() {
    return (
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 sm:mb-16 md:mb-20 gap-4 sm:gap-8">
                    <div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 sm:mb-4 italic">Experience</h2>
                        <p className="text-gray-400 text-base sm:text-xl font-light">Leading infrastructure initiatives.</p>
                    </div>
                    <div className="flex flex-col sm:items-end">
                        <div className="text-2xl sm:text-3xl font-bold text-primary">2+ Years</div>
                        <div className="text-xs uppercase tracking-[0.3em] text-gray-500">Professional Legacy</div>
                    </div>
                </div>

                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative pl-6 sm:pl-8 border-l border-white/10 group pb-12"
                    >
                        <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>

                        <div className="flex flex-col sm:flex-row justify-between items-start mb-4 sm:mb-6 gap-3 sm:gap-4">
                            <div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Linux System Administrator</h3>
                                <p className="text-blue-400 text-base sm:text-lg">Shadow Infosystem Pvt. Ltd.</p>
                            </div>
                            <div className="sm:text-right">
                                <span className="bg-white/5 border border-white/10 px-3 sm:px-4 py-1 rounded-full text-xs font-mono text-gray-400 whitespace-nowrap">
                                    APR 2024 – PRESENT
                                </span>
                                <p className="text-xs text-gray-500 mt-2">Noida, India (Remote-Capable)</p>
                            </div>
                        </div>

                        <ul className="space-y-3 sm:space-y-4 text-gray-400 max-w-4xl">
                            <li className="flex gap-3 sm:gap-4 text-sm sm:text-base">
                                <span className="text-blue-500 flex-shrink-0">▶</span>
                                <span>Architected enterprise Linux infrastructure for 50+ production servers with <span className="text-white">99.9% uptime</span> consistent SLA compliance.</span>
                            </li>
                            <li className="flex gap-3 sm:gap-4 text-sm sm:text-base">
                                <span className="text-blue-500 flex-shrink-0">▶</span>
                                <span>Spearheaded network optimization resulting in <span className="text-white">30% reduction in latency</span> via strategic VLAN segmentation and firewall rules.</span>
                            </li>
                            <li className="flex gap-3 sm:gap-4 text-sm sm:text-base">
                                <span className="text-blue-500 flex-shrink-0">▶</span>
                                <span>Automated provisioning using <span className="text-white">Kickstart</span>, improving deployment efficiency by 60%.</span>
                            </li>
                            <li className="flex gap-3 sm:gap-4 text-sm sm:text-base">
                                <span className="text-blue-500 flex-shrink-0">▶</span>
                                <span>Deployed hybrid cloud solutions integrating AWS services with on-premise Linux environments.</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";

const certifications = [
    { name: "Oracle Cloud Infrastructure 2025 Architect Associate", year: "2025" },
    { name: "Oracle Cloud Infrastructure 2025 DevOps Professional", year: "2025" },
    { name: "Oracle Cloud Infrastructure 2025 Networking Professional", year: "2025" },
    { name: "Oracle Linux 8 Advanced System Administration", year: "2025" },
    { name: "Oracle Cloud Database Services 2025 Professional", year: "2025" },
    { name: "Oracle Autonomous Database Cloud 2025 Professional", year: "2025" },
    { name: "Oracle MySQL Associate (Rel 1)", year: "2025" },
    { name: "Oracle Analytics Cloud 2025 Professional", year: "2025" },
    { name: "Oracle Cloud Infrastructure 2025 Generative AI Professional", year: "2025" },
    { name: "Oracle Cloud Infrastructure 2025 Foundations Associate", year: "2025" },
];

export default function Certifications() {
    return (
        <section id="certifications" className="relative z-20 bg-[#121212] py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 sm:mb-16 md:mb-20"
                >
                    <p className="text-cyan-400 text-xs sm:text-sm tracking-[0.3em] uppercase mb-3 sm:mb-4 font-medium">Credentials</p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">Certifications</h2>
                    <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full" />
                    <p className="text-gray-400 text-base sm:text-lg mt-4 sm:mt-6">
                        <span className="text-white font-semibold">10× Oracle Certified Professional</span> across Cloud Infrastructure,
                        DevOps, Database Services, and AI/ML.
                    </p>
                </motion.div>

                {/* Oracle Badge Strip */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 sm:mb-12 inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-red-600/20 border border-orange-500/30 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4"
                >
                    <span className="text-2xl sm:text-3xl">🔶</span>
                    <div>
                        <p className="text-white font-bold text-base sm:text-lg">Oracle University</p>
                        <p className="text-orange-400 text-xs sm:text-sm">All Certifications Issued 2025</p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                            className="flex items-center gap-3 sm:gap-4 bg-white/[0.04] border border-white/[0.08] hover:border-orange-500/30 hover:bg-white/[0.07] rounded-xl p-4 sm:p-5 transition-all duration-300 group"
                        >
                            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                                {i + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-white text-xs sm:text-sm font-medium leading-snug group-hover:text-orange-300 transition-colors">
                                    {cert.name}
                                </p>
                                <p className="text-gray-500 text-xs mt-1">Oracle University · {cert.year}</p>
                            </div>
                            <span className="flex-shrink-0 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                                ✓
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";

import { BackgroundBeams } from "./ui/background-beams";

const education = [
    {
        degree: "Bachelor of Computer Application (BCA)",
        institution: "Maharishi University of Information and Technology",
        location: "Noida, India",
        period: "Graduation: 2026",
        status: "completed",
        grade: "A",
        coursework: [
            "Data Structures & Algorithms",
            "Database Management Systems",
            "Computer Networks",
            "Operating Systems",
            "Cloud Computing",
            "Software Engineering",
        ],
        projects: [
            "Automated deployment scripts",
            "Database optimization solutions",
            "Network monitoring dashboards",
        ],
    },
    {
        degree: "Intermediate (Pre-University) — Mathematics & Science",
        institution: "Jamia Islamia College",
        location: "Aligarh, India",
        period: "Graduated: 2023",
        status: "completed",
        grade: "80%",
        coursework: ["Mathematics", "Physics", "Computer Science"],
        projects: [],
    },
];

export default function Education() {
    return (
        <section id="education" className="relative z-20 bg-[#0d0d0d] py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-12 border-t border-white/5 overflow-hidden">
            <BackgroundBeams className="opacity-40" />
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 sm:mb-16 md:mb-20"
                >
                    <p className="text-cyan-400 text-xs sm:text-sm tracking-[0.3em] uppercase mb-3 sm:mb-4 font-medium">Academic Background</p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 sm:mb-6">Education</h2>
                    <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full" />
                </motion.div>

                <div className="space-y-6 sm:space-y-8">
                    {education.map((edu, i) => (
                        <motion.div
                            key={edu.degree}
                            initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                            viewport={{ once: true, margin: "-100px" }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.2 }}
                            className="relative bg-[#15100a]/80 backdrop-blur-xl border border-white/10 hover:border-emerald-500/50 rounded-3xl p-6 sm:p-10 transition-all duration-300 group shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(16,185,129,0.2)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            {/* Status Badge */}
                            <div className="flex items-start justify-between gap-3 mb-6">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white leading-snug flex-1">
                                    {edu.degree}
                                </h3>
                                <div className="flex-shrink-0 mt-0.5">
                                    {edu.status === "ongoing" ? (
                                        <span className="flex items-center gap-1.5 px-3 py-1.5 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-400 text-xs font-medium whitespace-nowrap">
                                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                                            In Progress
                                        </span>
                                    ) : (
                                        <motion.span 
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", delay: 0.5 }}
                                            className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-400/10 border border-emerald-400/30 rounded-full text-emerald-400 text-xs font-bold whitespace-nowrap uppercase tracking-widest"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                            Completed
                                        </motion.span>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col gap-6 sm:gap-8 relative z-10">
                                <div>
                                    <p className="text-emerald-400 font-bold text-base sm:text-lg">{edu.institution}</p>
                                    <div className="flex flex-wrap gap-4 mt-3 text-gray-400 text-sm">
                                        <span className="flex items-center gap-1"><span className="text-emerald-500">📍</span> {edu.location}</span>
                                        <span className="flex items-center gap-1"><span className="text-emerald-500">🗓</span> {edu.period}</span>
                                        {edu.grade && (
                                            <span className="text-white font-bold bg-white/10 px-2 py-0.5 rounded-md">Score: {edu.grade}</span>
                                        )}
                                    </div>
                                </div>

                                {edu.coursework.length > 0 && (
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase tracking-widest mb-3 font-bold">Relevant Coursework</p>
                                        <div className="flex flex-wrap gap-2">
                                            {edu.coursework.map((c) => (
                                                <span
                                                    key={c}
                                                    className="text-xs px-3 py-1.5 bg-black/40 border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/10 transition-colors rounded-full text-gray-300"
                                                >
                                                    {c}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {edu.projects.length > 0 && (
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase tracking-widest mb-3 font-bold">Academic Projects</p>
                                        <div className="space-y-2">
                                            {edu.projects.map((p) => (
                                                <div key={p} className="flex items-center gap-3 text-gray-300 text-sm">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                                                    {p}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

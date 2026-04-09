"use client";

import { useScroll, motion, useTransform, MotionValue } from "framer-motion";

export default function Overlay({ scrollYProgress: externalScrollYProgress }: { scrollYProgress?: MotionValue<number> }) {
    const { scrollYProgress: localScrollYProgress } = useScroll();
    const scrollYProgress = externalScrollYProgress || localScrollYProgress;

    // Opacity transforms for various sections
    const op1 = useTransform(scrollYProgress, [0, 0.05, 0.12], [0, 1, 0]); // Intro
    const op2 = useTransform(scrollYProgress, [0.15, 0.22, 0.35], [0, 1, 0]); // Summary & Competencies
    const op3 = useTransform(scrollYProgress, [0.4, 0.48, 0.6], [0, 1, 0]); // Cloud/Linux Expertise
    const op4 = useTransform(scrollYProgress, [0.65, 0.75, 0.85], [0, 1, 0]); // Experience
    const op5 = useTransform(scrollYProgress, [0.9, 0.95, 0.99], [0, 1, 1]); // Final / Call to action

    // Movement transforms
    const y1 = useTransform(scrollYProgress, [0, 0.12], [20, -20]);
    const y2 = useTransform(scrollYProgress, [0.15, 0.35], [40, -40]);
    const y3 = useTransform(scrollYProgress, [0.4, 0.6], [40, -40]);
    const y4 = useTransform(scrollYProgress, [0.65, 0.85], [40, -40]);

    return (
        <div className="absolute inset-0 pointer-events-none z-10 font-sans">

            {/* Section 1: Intro */}
            <motion.div
                style={{ opacity: op1, y: y1 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-6"
            >
                <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white mb-2 text-center">
                    SHAH NAWAZ <br /><span className="text-gradient">HUSSAIN</span>
                </h1>
                <p className="text-sm md:text-xl text-gray-400 font-light tracking-[0.4em] uppercase text-center max-w-2xl">
                    Cloud Infrastructure Specialist & Linux Administrator
                </p>
                <div className="mt-12 flex gap-4 text-xs font-mono text-blue-400">
                    <span>+91-8077644340</span>
                    <span>•</span>
                    <span>Remote Ready</span>
                </div>
            </motion.div>

            {/* Section 2: Summary & Stats */}
            <motion.div
                style={{ opacity: op2, y: y2 }}
                className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-24"
            >
                <div className="max-w-4xl glass p-8 md:p-12 rounded-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 flex items-baseline gap-4">
                        <span className="text-blue-500 font-mono text-xl">01/</span>
                        Operational Excellence
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                Managing enterprise-scale production environments with a focus on mission-critical stability and
                                <span className="text-white font-semibold"> infrastructure optimization.</span>
                            </p>
                            <div className="flex gap-8">
                                <div>
                                    <div className="text-4xl font-bold text-emerald-400">99.9%</div>
                                    <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">Uptime Maintained</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-blue-400">30%</div>
                                    <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">Latency Reduction</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            {["Red Hat Expert", "DevOps Professional", "Database Specialist", "AI/ML Integration"].map(skill => (
                                <div key={skill} className="flex items-center gap-3 text-sm text-gray-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Section 3: Cloud Expertise */}
            <motion.div
                style={{ opacity: op3, y: y3 }}
                className="absolute inset-0 flex flex-col items-end justify-center p-8 md:p-24"
            >
                <div className="max-w-2xl text-right">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                        Certified <br />
                        <span className="text-gradient font-black underline decoration-purple-500/50">Oracle & AWS</span> <br />
                        Strategist.
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-md ml-auto">
                        Leveraging Infrastructure as Code (IaC) and automation to deliver robust, scalable cloud solutions globally.
                    </p>
                    <div className="bg-white/5 border border-white/10 rounded-full px-6 py-3 inline-flex items-center gap-4 text-xs tracking-tighter transition-all hover:bg-white/10">
                        <span className="text-purple-400">10x ORACLE CERTIFIED</span>
                        <div className="w-[1px] h-4 bg-white/20"></div>
                        <span>AWS CLOUD PRACTITIONER</span>
                    </div>
                </div>
            </motion.div>

            {/* Section 4: Professional Experience Highlight */}
            <motion.div
                style={{ opacity: op4, y: y4 }}
                className="absolute inset-0 flex items-center justify-center p-8"
            >
                <div className="glass p-12 rounded-[2rem] max-w-5xl border-emerald-500/20">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <span className="text-emerald-400 font-mono text-sm tracking-widest block mb-2">CURRENT MISSION</span>
                            <h3 className="text-4xl font-bold text-white mb-4">Shadow Infosystem</h3>
                            <p className="text-gray-400 leading-relaxed italic">
                                "Architecting and maintaining enterprise Linux infrastructure comprising 50+ production servers with 60% reduction in deployment time through Kickstart automation."
                            </p>
                        </div>
                        <div className="w-full md:w-px h-px md:h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                        <div className="flex-shrink-0 grid grid-cols-2 gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white leading-none">50+</div>
                                <div className="text-[10px] uppercase text-gray-500 mt-2">Servers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white leading-none">60%</div>
                                <div className="text-[10px] uppercase text-gray-500 mt-2">Efficiency Boost</div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Section 5: Transition to scroll down */}
            <motion.div
                style={{ opacity: op5 }}
                className="absolute inset-x-0 bottom-24 flex flex-col items-center justify-center text-center p-6"
            >
                <p className="text-sm font-mono text-gray-500 animate-bounce">
                    Keep scrolling for detailed technical stack
                </p>
            </motion.div>

        </div>
    );
}

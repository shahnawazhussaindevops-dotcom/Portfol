"use client";

import { motion } from "framer-motion";

const achievements = [
    {
        title: "Enterprise Cloud Migration",
        year: "2024",
        impact: "25% Cost Reduction",
        desc: "Led migration of on-premise infrastructure to AWS, implementing EC2 auto-scaling, S3 backups, and CloudWatch monitoring."
    },
    {
        title: "Automated Deployment Pipeline",
        year: "2024",
        impact: "60% Faster Delivery",
        desc: "Developed Kickstart-based framework reducing server deployment time from 4 hours to 45 minutes."
    },
    {
        title: "Infrastructure Optimization",
        year: "2024",
        impact: "30% Latency Reduction",
        desc: "Redesigned network architecture implementing VLANs, optimized routing, and enhanced firewall rules."
    }
];

export default function Projects() {
    return (
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-[#0d0d0d]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 sm:mb-16 md:mb-20 gap-4 sm:gap-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">Major Milestones</h2>
                    <p className="text-gray-500 font-mono text-xs sm:text-sm sm:max-w-xs sm:text-right">
                        SCROLL TO DISCOVER KEY PROJECTS & IMPACT METRICS
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
                    {achievements.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl sm:rounded-[2rem] overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-500 min-h-[280px] sm:min-h-[340px] md:min-h-[400px]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500/5 group-hover:to-blue-500/10 transition-all"></div>

                            <div className="relative z-10 flex justify-between items-start">
                                <span className="text-xs font-mono text-gray-500 tracking-tighter">{item.year}</span>
                                <span className="px-3 py-1 bg-primary/20 text-primary text-[10px] rounded-full uppercase tracking-widest">{item.impact}</span>
                            </div>

                            <div className="relative z-10 mt-6">
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed font-light">
                                    {item.desc}
                                </p>
                            </div>

                            <div className="absolute -bottom-10 -right-10 text-[8rem] sm:text-[10rem] font-black text-white/[0.02] -z-10 group-hover:text-white/[0.05] transition-colors select-none">
                                {idx + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

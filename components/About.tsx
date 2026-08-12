"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-white text-black rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] mx-3 sm:mx-4 md:mx-12 overflow-hidden shadow-2xl relative">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">
                <div className="flex-1">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight tracking-tighter"
                    >
                        Bridging the gap between{" "}
                        <span className="text-primary italic">Cloud Complexity</span> &{" "}
                        Seamless Operations.
                    </motion.h2>

                    <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                        <p>
                            I am a results-driven Linux System Administrator and Cloud Infrastructure Specialist with a relentless focus on efficiency and automation.
                            My expertise lies in architecting robust environments that don't just work—they excel.
                        </p>
                        <p>
                            With 10+ Oracle specializations and hands-on experience in high-pressure production settings,
                            I specialize in turning technical challenges into strategic advantages.
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-72 lg:w-80 flex flex-col gap-4 sm:gap-6">
                    <div className="p-5 sm:p-8 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">Focus</div>
                        <p className="text-sm text-gray-800">Operational Excellence & Scalable Cloud Solutions</p>
                    </div>
                    <div className="p-5 sm:p-8 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">Availability</div>
                        <p className="text-sm text-gray-800">Open to Remote Opportunities Worldwide</p>
                    </div>
                </div>
            </div>

            {/* Decorative text — hidden on small screens to prevent overflow */}
            <div className="hidden sm:block absolute bottom-[-2%] right-10 whitespace-nowrap text-[5rem] md:text-[8rem] font-bold text-black/[0.03] select-none uppercase pointer-events-none">
                Systems Strategy Excellence
            </div>
        </section>
    );
}

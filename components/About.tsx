"use client";

import { motion } from "framer-motion";
import { SquigglyText } from "./ui/squiggly-text";
import { FlipWords } from "./ui/flip-words";

export default function About() {
    return (
        <section id="strategy" className="py-12 sm:py-20 md:py-24 px-5 sm:px-10 md:px-16 bg-white text-black rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] mx-4 sm:mx-6 md:mx-12 overflow-hidden shadow-2xl relative">
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                <div className="flex-1 w-full text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight tracking-tighter"
                    >
                        <SquigglyText>
                            Bridging the gap between Cloud Complexity & Seamless Operations.
                        </SquigglyText>
                        <div className="mt-4 text-2xl sm:text-3xl font-medium text-gray-500 flex flex-wrap items-center justify-center lg:justify-start">
                            Build beautiful systems with <FlipWords words={["Shahnawazhussain", "Excellence", "Automation"]} className="text-primary" />
                        </div>
                    </motion.div>

                    <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed text-justify lg:text-left">
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

                <div className="w-full lg:w-80 flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-6">
                    <div className="flex-1 p-6 sm:p-8 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">Focus</div>
                        <p className="text-sm sm:text-base text-gray-800">Operational Excellence & Scalable Cloud Solutions</p>
                    </div>
                    <div className="flex-1 p-6 sm:p-8 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">Availability</div>
                        <p className="text-sm sm:text-base text-gray-800">Open to Remote Opportunities Worldwide</p>
                    </div>
                </div>
            </div>

            {/* Decorative text — hidden on smaller screens to prevent overflow */}
            <div className="hidden lg:block absolute bottom-[-2%] right-10 whitespace-nowrap text-[6rem] md:text-[8rem] font-bold text-black/[0.03] select-none uppercase pointer-events-none">
                Systems Strategy Excellence
            </div>
        </section>
    );
}

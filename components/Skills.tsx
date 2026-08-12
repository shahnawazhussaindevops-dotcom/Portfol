"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "OS & Virtualization",
        skills: ["RHEL (6/7/8)", "Ubuntu Server", "CoreOS", "KVM Virtualization"]
    },
    {
        title: "Cloud Platforms",
        skills: ["AWS (EC2, S3, CloudWatch)", "Oracle Cloud Infrastructure", "Cloud Migration"]
    },
    {
        title: "Automation & IaC",
        skills: ["BASH Scripting", "Kickstart Automation", "RPM/YUM Management"]
    },
    {
        title: "Networking",
        skills: ["TCP/IP", "DNS/DHCP", "Firewall (iptables)", "VLAN/Subnetting"]
    },
    {
        title: "Security",
        skills: ["SELinux", "SSH Hardening", "SETUID/SETGID", "Security Patching"]
    },
    {
        title: "DevOps & Monitoring",
        skills: ["Git", "Grafana", "CloudWatch", "Log Analysis"]
    }
];

export default function Skills() {
    return (
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Technical Arsenal</h2>
                    <p className="text-gray-400 text-base sm:text-lg border-l-2 border-primary pl-4 sm:pl-6 ml-1 sm:ml-2">
                        A comprehensive suite of tools and protocols mastered for enterprise-scale stability.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass p-5 sm:p-8 rounded-2xl group hover:border-primary/50 transition-colors"
                        >
                            <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-4 sm:mb-6 flex items-baseline gap-3">
                                <span className="opacity-20 text-2xl sm:text-3xl font-mono">0{idx + 1}</span>
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map(skill => (
                                    <span key={skill} className="px-2.5 sm:px-3 py-1 bg-white/5 border border-white/5 rounded-md text-xs text-gray-400 font-mono transition-all group-hover:border-white/20 group-hover:text-white">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PricingPage() {
  const [code, setCode] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === "0955") {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setCode("");
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <main className="bg-[#121212] min-h-screen flex flex-col font-sans">
      <Navbar />

      <div className="flex-1 relative flex items-center justify-center p-4">
        {/* Background Decorative */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
        </div>

        <AnimatePresence mode="wait">
          {!unlocked ? (
            <motion.div
              key="lock"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 0.4 }}
              className="z-10 w-full max-w-md"
            >
              <div className="glass p-8 sm:p-12 rounded-3xl text-center border-white/10 shadow-2xl">
                <div className="mb-8">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border border-white/10 mb-4 shadow-inner">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 text-emerald-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                    Restricted Access
                  </h1>
                  <p className="text-gray-400 text-sm">
                    Please enter your 4-digit access code to view pricing.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <motion.div
                    animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
                    transition={{ duration: 0.4 }}
                  >
                    <input
                      type="password"
                      maxLength={4}
                      value={code}
                      onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
                      className={`w-full bg-black/50 border ${
                        error ? "border-red-500 text-red-400" : "border-white/20 text-white"
                      } rounded-xl px-6 py-4 text-center text-3xl font-mono tracking-[0.5em] focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-white/10`}
                      placeholder="••••"
                      autoFocus
                    />
                  </motion.div>
                  {error && (
                    <p className="text-red-400 text-xs mt-3 font-mono">
                      Access Denied. Invalid Code.
                    </p>
                  )}
                  <button
                    type="submit"
                    className="w-full mt-6 bg-white text-black font-bold uppercase tracking-widest text-sm py-4 rounded-xl hover:bg-emerald-400 transition-colors"
                  >
                    Unlock
                  </button>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="z-10 w-full max-w-5xl mx-auto py-20"
            >
              <div className="text-center mb-16">
                <p className="text-emerald-400 text-sm tracking-[0.3em] uppercase font-bold mb-4">
                  Access Granted
                </p>
                <h1 className="text-5xl sm:text-7xl font-display font-bold text-white mb-6">
                  Web Design Packages
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Premium web experiences, from stunning landing pages to highly animated, trendy digital presences.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    title: "Landing Page",
                    price: "₹36,000",
                    subPrice: " / $360",
                    period: "",
                    desc: "Normal web design landing page.",
                    features: ["Custom Design", "Responsive Layout", "SEO Optimized", "Basic Animations"],
                  },
                  {
                    title: "Entire Site",
                    price: "₹50,000",
                    subPrice: " / $500",
                    period: "",
                    desc: "Complete multi-page website.",
                    features: ["Up to 10 Pages", "CMS Integration", "Performance Optimized", "Advanced Animations"],
                    featured: true,
                  },
                  {
                    title: "Premium Animated",
                    price: "₹1,00,000",
                    subPrice: " / $1000",
                    period: "",
                    desc: "Trendy, modern, highly animated site.",
                    features: ["Cinematic Scroll", "Framer Motion", "Custom UI Components", "Infinite Polish"],
                  },
                ].map((plan, i) => (
                  <div
                    key={i}
                    className={`glass p-8 rounded-3xl relative overflow-hidden flex flex-col ${
                      plan.featured ? "border-emerald-500/50 transform md:-translate-y-4 shadow-[0_0_40px_rgba(16,185,129,0.15)]" : ""
                    }`}
                  >
                    {plan.featured && (
                      <div className="absolute top-0 inset-x-0 bg-emerald-500 text-black text-[10px] font-bold uppercase tracking-widest text-center py-1">
                        Recommended
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-white mb-2 mt-4">{plan.title}</h3>
                    <p className="text-gray-400 text-sm mb-6">{plan.desc}</p>
                    <div className="mb-8">
                      <div className="flex items-baseline flex-wrap gap-2">
                        <span className="text-4xl sm:text-5xl font-display font-bold text-white">{plan.price}</span>
                        <span className="text-gray-400 text-xl font-medium">{plan.subPrice}</span>
                      </div>
                      <span className="text-gray-500 text-sm">{plan.period}</span>
                    </div>
                    <ul className="space-y-4 flex-1 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                          <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`mailto:shahnawazhussaindevops@gmail.com?subject=Inquiry about ${plan.title} Plan`}
                      className={`w-full py-4 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-300 text-center block ${
                        plan.featured ? "bg-emerald-400 text-black hover:bg-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.4)]" : "bg-white/10 text-white hover:bg-white hover:text-black"
                      }`}
                    >
                      Buy Plan
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {unlocked && <Footer />}
    </main>
  );
}

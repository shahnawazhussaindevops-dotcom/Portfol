"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 overflow-hidden pointer-events-none w-full h-full",
        className
      )}
    >
      <div className="absolute inset-0 bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black_80%)]" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 z-0 opacity-100"
      >
        <svg
          className="absolute inset-0 w-full h-full opacity-60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="beamGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="beamGrad3" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          {/* Beams */}
          <path
            d="M-100,-100 L3000,3000"
            stroke="url(#beamGrad)"
            strokeWidth="4"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M2000,-100 L-100,2000"
            stroke="url(#beamGrad2)"
            strokeWidth="4"
            fill="none"
            className="animate-pulse delay-75"
          />
          <path
            d="M800,-100 L800,2000"
            stroke="url(#beamGrad)"
            strokeWidth="3"
            fill="none"
            className="animate-pulse delay-150"
          />
          <path
            d="M-100,800 L2000,800"
            stroke="url(#beamGrad3)"
            strokeWidth="3"
            fill="none"
            className="animate-pulse delay-300"
          />
        </svg>
      </motion.div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] animate-pulse delay-700" />
    </div>
  );
};

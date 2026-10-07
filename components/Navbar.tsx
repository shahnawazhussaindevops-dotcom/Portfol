"use client";

import { useState } from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  Home,
  Palette,
  Briefcase,
  Award,
  GraduationCap,
  DollarSign,
  Mail,
} from "lucide-react";

const dockItems = [
  {
    title: "Home",
    icon: <Home className="h-full w-full" />,
    href: "/",
  },
  {
    title: "Web Designs",
    icon: <Palette className="h-full w-full" />,
    href: "/webdesigns",
  },
  {
    title: "Experience",
    icon: <Briefcase className="h-full w-full" />,
    href: "/#experience",
  },
  {
    title: "Certificates",
    icon: <Award className="h-full w-full" />,
    href: "/#certifications",
  },
  {
    title: "Education",
    icon: <GraduationCap className="h-full w-full" />,
    href: "/#education",
  },
  {
    title: "Pricing",
    icon: <DollarSign className="h-full w-full text-emerald-400" />,
    href: "/pricing",
  },
  {
    title: "Get in Touch",
    icon: <Mail className="h-full w-full text-blue-400" />,
    href: "mailto:shahnawazhussaindevops@gmail.com",
  },
];

export default function Navbar() {
  return (
    <div className="fixed top-12 sm:top-16 left-4 sm:left-6 z-50 flex pointer-events-auto">
      <FloatingDock items={dockItems} desktopClassName="bg-black/80 backdrop-blur-md border border-white/10 shadow-2xl" mobileClassName="absolute top-0 right-4" />
    </div>
  );
}

"use client";

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
  {
    title: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
        <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.28.74-1.57-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.42.36.8 1.07.8 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
      </svg>
    ),
    href: "https://github.com/shahnawazhussaindevops-dotcom",
  },
];

export default function Navbar() {
  return (
    <div className="fixed top-4 right-4 md:top-12 md:left-6 md:right-auto z-50 flex pointer-events-auto">
      <FloatingDock items={dockItems} desktopClassName="bg-black/80 backdrop-blur-md border border-white/10 shadow-2xl" mobileClassName="" />
    </div>
  );
}


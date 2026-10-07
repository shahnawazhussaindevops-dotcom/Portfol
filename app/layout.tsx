import "./globals.css";
import { Inter, Fraunces } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

export const metadata = {
  title: 'Shah Nawaz Hussain — Linux & Cloud Infrastructure',
  description: 'Portfolio of Shah Nawaz Hussain, Linux System Administrator and Cloud Infrastructure Specialist.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable} font-sans`}>{children}</body>
    </html>
  )
}

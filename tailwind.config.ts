import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            xs: "320px",   // smartwatch / very small phones
            sm: "640px",   // phones
            md: "768px",   // tablets portrait
            lg: "1024px",  // tablets landscape / small laptops
            xl: "1280px",
            "2xl": "1536px",
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                display: ["var(--font-fraunces)", "serif"],
            },
            colors: {
                background: "#121212",
                foreground: "#ffffff",
                primary: "#3b82f6", // Blue
                secondary: "#a855f7", // Purple
                accent: "#10b981", // Emerald
            },
            animation: {
                'shine': 'shine 2s infinite',
                'fade-in': 'fadeIn 1s ease-out forwards',
                'slide-up': 'slideUp 0.8s ease-out forwards',
                'squiggly': 'squiggly 0.34s linear infinite',
            },
            keyframes: {
                shine: {
                    '0%': { left: '-100%' },
                    '100%': { left: '100%' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                squiggly: {
                    '0%': { filter: 'url("#squiggly-0")' },
                    '25%': { filter: 'url("#squiggly-1")' },
                    '50%': { filter: 'url("#squiggly-2")' },
                    '75%': { filter: 'url("#squiggly-3")' },
                    '100%': { filter: 'url("#squiggly-4")' },
                },
            },
            backdropBlur: {
                xs: '2px',
            }
        },
    },
    plugins: [],
};
export default config;

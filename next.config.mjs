/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            // Neerjharna
            {
                source: "/webdesigns/neerjharna",
                destination: "https://neerjharna.vercel.app/",
            },
            {
                source: "/webdesigns/neerjharna/:path*",
                destination: "https://neerjharna.vercel.app/:path*",
            },
            // Porsche
            {
                source: "/webdesigns/porsche",
                destination: "https://porsche-flax.vercel.app/",
            },
            {
                source: "/webdesigns/porsche/:path*",
                destination: "https://porsche-flax.vercel.app/:path*",
            },
            // Gaur City
            {
                source: "/webdesigns/gaur-city",
                destination: "https://gaurcity-ten.vercel.app/",
            },
            {
                source: "/webdesigns/gaur-city/:path*",
                destination: "https://gaurcity-ten.vercel.app/:path*",
            },
            // Realme Speaker
            {
                source: "/webdesigns/realme-speaker",
                destination: "https://realmespeaker.vercel.app/",
            },
            {
                source: "/webdesigns/realme-speaker/:path*",
                destination: "https://realmespeaker.vercel.app/:path*",
            },
            // Taste The Thunder
            {
                source: "/webdesigns/taste-the-thunder",
                destination: "https://tastethethunder.vercel.app/",
            },
            {
                source: "/webdesigns/taste-the-thunder/:path*",
                destination: "https://tastethethunder.vercel.app/:path*",
            },
            // Asus Laptop
            {
                source: "/webdesigns/asus-laptop",
                destination: "https://asus-laptop.vercel.app/",
            },
            {
                source: "/webdesigns/asus-laptop/:path*",
                destination: "https://asus-laptop.vercel.app/:path*",
            },
            // CinePose
            {
                source: "/webdesigns/cinepose",
                destination: "https://cinepose.vercel.app/",
            },
            {
                source: "/webdesigns/cinepose/:path*",
                destination: "https://cinepose.vercel.app/:path*",
            },
            // Sultani Jan Seva Kendra
            {
                source: "/webdesigns/sultani-jan-seva-kendra",
                destination: "https://sultanijansevakendra.vercel.app/",
            },
            {
                source: "/webdesigns/sultani-jan-seva-kendra/:path*",
                destination: "https://sultanijansevakendra.vercel.app/:path*",
            },
        ];
    },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            // Neerjharna
            { source: '/webdesigns/neerjharna', destination: 'https://neerjharna.vercel.app' },
            { source: '/webdesigns/neerjharna/:path*', destination: 'https://neerjharna.vercel.app/:path*' },
            // Porsche
            { source: '/webdesigns/porsche', destination: 'https://porsche-flax.vercel.app' },
            { source: '/webdesigns/porsche/:path*', destination: 'https://porsche-flax.vercel.app/:path*' },
            // Gaur City
            { source: '/webdesigns/gaurcity', destination: 'https://gaurcity-ten.vercel.app' },
            { source: '/webdesigns/gaurcity/:path*', destination: 'https://gaurcity-ten.vercel.app/:path*' },
            // Realme Speaker
            { source: '/webdesigns/realmespeaker', destination: 'https://realmespeaker.vercel.app' },
            { source: '/webdesigns/realmespeaker/:path*', destination: 'https://realmespeaker.vercel.app/:path*' },
            // Taste The Thunder
            { source: '/webdesigns/tastethethunder', destination: 'https://tastethethunder.vercel.app' },
            { source: '/webdesigns/tastethethunder/:path*', destination: 'https://tastethethunder.vercel.app/:path*' },
            // Asus Laptop
            { source: '/webdesigns/asuslaptop', destination: 'https://asus-laptop.vercel.app' },
            { source: '/webdesigns/asuslaptop/:path*', destination: 'https://asus-laptop.vercel.app/:path*' },
            // CinePose
            { source: '/webdesigns/cinepose', destination: 'https://cinepose.vercel.app' },
            { source: '/webdesigns/cinepose/:path*', destination: 'https://cinepose.vercel.app/:path*' },
            // Sultani Jan Seva Kendra
            { source: '/webdesigns/sultanijansevakendra', destination: 'https://sultanijansevakendra.vercel.app' },
            { source: '/webdesigns/sultanijansevakendra/:path*', destination: 'https://sultanijansevakendra.vercel.app/:path*' },
        ];
    },
};

export default nextConfig;

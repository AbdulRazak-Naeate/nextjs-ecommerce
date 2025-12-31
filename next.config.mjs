/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
  serverActions: {
    allowedOrigins: ['superadmirably-semiglobular-elodia.ngrok-free.dev'],
  },
},
  reactStrictMode: false,
  allowedDevOrigins: ["http://localhost:3000","https://superadmirably-semiglobular-elodia.ngrok-free.dev/"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "drive.usercontent.google.com",
      },
    ],
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/main",
        permanent: true, // 301 영구 리디렉션
      },
    ];
  },
};

module.exports = nextConfig;

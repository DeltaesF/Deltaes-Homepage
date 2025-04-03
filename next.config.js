/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // 추가
      },
      {
        protocol: "https",
        hostname: "drive.usercontent.google.com", // 추가
      },
    ],
  },
};

module.exports = nextConfig;

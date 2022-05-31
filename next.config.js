/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.notion.so', 'images.unsplash.com', 'cdn.jsdelivr.net'],
  },
};

module.exports = nextConfig;

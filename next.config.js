/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "ui.aceternity.com",
      "assets.aceternity.com",
      "images.unsplash.com",
      "tailark.com"
    ],
  },
}

module.exports = nextConfig 
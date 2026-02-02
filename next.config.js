/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // IMPORTANT: repo name (case-sensitive)
  basePath: "/Neev",
  assetPrefix: "/Neev/",

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

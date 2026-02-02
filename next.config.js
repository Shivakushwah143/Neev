/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/Neev",
  assetPrefix: "/Neev",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

module.exports = nextConfig;

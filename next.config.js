/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: 'loose'
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: "canvas" }]; // required to make pdfjs work
    return config;
  },
};

module.exports = nextConfig;
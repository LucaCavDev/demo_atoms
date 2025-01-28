import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true, // Enables React strict mode
  //swcMinify: true,       // Enables SWC minification for better performance

  images: {
    domains: ["example.com"], // Add external domains for images if needed
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"], // Enables SVG import as React components
    });
    return config;
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

module.exports = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

export default nextConfig;

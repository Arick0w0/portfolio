import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio_1',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/jome-farmer',
  trailingSlash: true,
};

export default nextConfig;

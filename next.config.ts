import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "determined-bison-894.convex.cloud", protocol: "https" },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    devIndicators: false,
    serverExternalPackages:["sequelize", "pg", "pg-hstore"]
};

export default nextConfig;

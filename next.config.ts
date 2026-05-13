import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  devIndicators: false,
  images: {
    domains: ["e-sales-bucket.s3.us-east-1.amazonaws.com"],
    remotePatterns: [{
      protocol: "https",
      hostname: "e-sales-bucket.s3.us-east-1.amazonaws.com",
      port: "",
      pathname: "/**"

    }]
  }
};

export default nextConfig;

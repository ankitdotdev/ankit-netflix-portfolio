import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media2.giphy.com",
      },
      {
        protocol: "https",
        hostname: "i.gifer.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
         {
        protocol: "https",
        hostname: "example.com",
      },
    ],
  },
};

export default nextConfig;

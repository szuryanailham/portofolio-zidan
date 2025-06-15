import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://flowbite.s3.amazonaws.com/docs/gallery/masonry/**")],
  },
};

export default nextConfig;

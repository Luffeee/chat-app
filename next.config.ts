import type { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com"
    ]
  },
  // Add any other Next.js configurations here
};

export default withPWA({
  dest: "public", // This specifies where the service worker will be generated
  register: true, // Automatically registers the service worker
  skipWaiting: true, // Activates the new service worker as soon as it’s available
  ...nextConfig, // Spread existing configurations here
});

import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

/**
 * Static export config for GitHub Pages.
 * The site is served from https://<user>.github.io/SpiceCateringBD/
 * so we need a basePath/assetPrefix in production.
 */
const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/SpiceCateringBD" : "",
  assetPrefix: isProd ? "/SpiceCateringBD/" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

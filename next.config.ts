/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
  output: "export",
  basePath: isProd ? "/shaunakmukherjee.github.io" : "",
  assetPrefix: isProd ? "/shaunakmukherjee.github.io/" : "",
  images: {
    unoptimized: true,
  },
}

export default nextConfig

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
  output: "export",
  // Nested routes such as /partners need a folder index.html on GitHub Pages
  trailingSlash: true,
  // If your repo is exactly 'shaunakmukherjee.github.io', keep these as ""
  // If it's a different name, put '/repo-name' here
  basePath: "", 
  assetPrefix: "", 
  images: {
    unoptimized: true,
  },
}

export default nextConfig
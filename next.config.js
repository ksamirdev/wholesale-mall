/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND: "https://fakestoreapi.com"
  },
  images: {
    domains: ['fakestoreapi.com']
  }
}

module.exports = nextConfig

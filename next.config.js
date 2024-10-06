/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_ENVIRONMENT_LOCAL: process.env.NEXT_PUBLIC_ENVIRONMENT_LOCAL,
    NEXT_PUBLIC_ENVIRONMENT_DEV: process.env.NEXT_PUBLIC_ENVIRONMENT_DEV,
    NEXT_PUBLIC_ENVIRONMENT_DEV_2: process.env.NEXT_PUBLIC_ENVIRONMENT_DEV_2, // 2.0
    NEXT_PUBLIC_ENVIRONMENT_PROD: process.env.NEXT_PUBLIC_ENVIRONMENT_PROD,
  }
}
module.exports = nextConfig;
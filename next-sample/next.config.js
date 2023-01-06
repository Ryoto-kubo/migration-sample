/** @type {import('next').NextConfig} **/
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: `http://localhost:3020/:path*`,
        },
      ],
    }
  },
}

module.exports = nextConfig

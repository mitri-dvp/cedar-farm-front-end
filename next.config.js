/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/Home',
        destination: '/',
        permanent: true
      }
    ]
  },
  images: {
    domains: ['kjhdorpersheep.com']
  }
}

module.exports = nextConfig

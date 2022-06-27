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
    domains: ['kjhdorpersheep.com', 'www.agdaily.com', 'localhost']
  }
}

module.exports = nextConfig

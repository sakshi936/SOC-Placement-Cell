/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    domains: ['images.pexels.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
    async rewrites() {
        return [
          {
            source: '/api/:path*', // Proxy all requests starting with /api
            destination: 'http://localhost:8000/api/:path*' // Your backend server URL
          },
        ];
      },

};

export default nextConfig;



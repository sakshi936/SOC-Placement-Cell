/** @type {import('next').NextConfig} */
const nextConfig = {

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



const { ROUTE_PLANNING_URL } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/route-planning',
        destination: `https://nextjs-microfrontends-example-route-planning.vercel.app/route-planning`,
      },
      {
        source: '/route-planning/:path*',
        destination: `https://nextjs-microfrontends-example-route-planning.vercel.app/route-planning/:path*`,
      },
    ]
  }
};

export default nextConfig;

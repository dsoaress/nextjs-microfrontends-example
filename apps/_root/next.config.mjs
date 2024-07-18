const { ROUTE_PLANNING_URL } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/route-planning',
        destination: `${ROUTE_PLANNING_URL}/route-planning`,
      },
      {
        source: '/route-planning/:path*',
        destination: `${ROUTE_PLANNING_URL}/route-planning/:path*`,
      },
    ]
  }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['docs.material-tailwind.com', 'localhost:3000', '*.ducs.in'],
  },
};

export default nextConfig;

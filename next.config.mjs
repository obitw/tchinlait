/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    dirs: ['pages', 'utils'],
  },
  assetPrefix: isProd ? '/tchinlait/' : '',
  basePath: isProd ? '/tchinlait' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

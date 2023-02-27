/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  }
})

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  webpack: true,
  webpack: (config) =>
  {
    config.resolve.fallback = { fs: false };

    return config
  },
  images: {
    domains: ['image.unsplash.com'],
  },
}

module.exports = withMDX(nextConfig)

module.exports = nextConfig;


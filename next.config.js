/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If you're using basePath, add it here
  // basePath: '/your-base-path',
  
  // If you're deploying to GitHub Pages, you might need this
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
};

module.exports = nextConfig;
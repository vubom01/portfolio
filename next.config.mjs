const isGithubPages = process.env.GITHUB_PAGES === 'true';
const basePath = isGithubPages ? '/portfolio' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isGithubPages && {
    output: 'export',
    basePath,
    assetPrefix: basePath,
  }),
  images: { unoptimized: isGithubPages }, // Vercel vẫn dùng Image Optimization bình thường
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
const isGithubPages = process.env.GITHUB_PAGES === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isGithubPages && {
    output: 'export',
  }),
  images: { unoptimized: isGithubPages }, // Vercel vẫn dùng Image Optimization bình thường
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  dynamicParams: true,
  env: {
    NEXT_PUBLIC_CF_PAGES: process.env.CF_PAGES,
    NEXT_PUBLIC_CF_PAGES_COMMIT_SHA: process.env.CF_PAGES_COMMIT_SHA,
    NEXT_PUBLIC_CF_PAGES_BRANCH: process.env.CF_PAGES_BRANCH,
  },
};

module.exports = nextConfig;

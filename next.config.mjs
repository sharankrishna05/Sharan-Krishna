/** @type {import('next').NextConfig} */
const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";
const repositoryName = "Sharan-Krishna";

const nextConfig = isGitHubPagesBuild
  ? {
      output: "export",
      basePath: `/${repositoryName}`
    }
  : {};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

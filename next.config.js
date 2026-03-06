const path = require('path')

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repoName = process.env.GITHUB_REPOSITORY?.split('/')?.[1] ?? '';
const isUserSite = repoName.endsWith('.github.io');
const basePath = isGitHubPages && repoName && !isUserSite ? `/${repoName}` : '';
const assetPrefix = basePath ? `${basePath}/` : '';

module.exports = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
    ],
  },
}
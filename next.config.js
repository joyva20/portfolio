const path = require('path')

const isGithubPages = process.env.GITHUB_PAGES === 'true'
const repoName = process.env.GITHUB_REPOSITORY?.split('/')?.[1]

// For GitHub Pages project sites:
//   https://<user>.github.io/<repo>/
// Next.js needs a basePath so asset URLs resolve correctly.
const basePath = isGithubPages && repoName ? `/${repoName}` : ''

/** @type {import('next').NextConfig} */
module.exports = {
  ...(isGithubPages ? { output: 'export' } : {}),
  ...(isGithubPages ? { trailingSlash: true } : {}),
  ...(isGithubPages && basePath ? { basePath, assetPrefix: `${basePath}/` } : {}),

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    ...(isGithubPages ? { unoptimized: true } : {}),
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
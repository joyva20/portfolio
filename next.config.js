// biome-ignore lint/style/useNodejsImportProtocol: Path module usage is required for compatibility
const path = require('path');

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        remotePatterns: [{
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'media.dev.to',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'media2.dev.to',
                pathname: '**',
            },
        ],
    },
    output: 'export', // Enable static export for Next.js
    basePath: '/portfolio', // Set the base path for your app
    assetPrefix: '/portfolio/', // Set asset prefix to match basePath
};
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
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
    basePath: '/portfolio',
    assetPrefix: '/portfolio/',
};
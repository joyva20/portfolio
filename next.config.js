const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Konfigurasi untuk SASS
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },

    // Konfigurasi untuk gambar remote
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

    output: 'export',
    basePath: '/portfoliojoyva.github.io',
    assetPrefix: '/portfoliojoyva.github.io',

    trailingSlash: true,
};

module.exports = nextConfig;
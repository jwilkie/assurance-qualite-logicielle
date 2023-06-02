/** 
 * @type {import('next').NextConfig} 
 */
const nextConfig = {
    reactStrictMode: true,
    basePath: '/assurance-qualite-logicielle',
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    }
}

module.exports = nextConfig

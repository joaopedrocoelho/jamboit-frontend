/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images : {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
      }
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{loader:'@svgr/webpack', options: {
        icon:true,
        typescript: true,
        dimensions: false,
        replaceAttrValues: {
          '#000': 'currentColor',
        },
      }}],
    })

    return config
  },
}

module.exports = nextConfig

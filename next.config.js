/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ['next-international', 'international-types'],
  env:{
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  images: {
    unoptimized: true,
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {

    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );

    // Important: return the modified config
    return config
  },
  output: "standalone",
}

module.exports = nextConfig

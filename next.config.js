const withCSS = require('@zeit/next-css')
const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config')
const withSass = require('@zeit/next-sass')
const withTypescript = require('@zeit/next-typescript')
const webpack = require('webpack')

require('dotenv').config()

module.exports = withTypescript(withCSS(withSass({
  onDemandEntries: {
    maxInactiveAge: 1000 * 60 * 60
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  webpack: (config, options) => {
    config.node = {
      fs: 'empty'
    }

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.API_CSR_PORT': JSON.stringify(process.env.API_CSR_PORT),
        'process.env.API_SSR_PORT': JSON.stringify(process.env.API_SSR_PORT),
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'process.env.PORT': JSON.stringify(process.env.PORT)
      })
    )

    // https://github.com/zeit/next-plugins/issues/71
    if (!options.isServer) {
      config = commonsChunkConfig(config, /\.(sass|scss|css)$/)
    }

    if (!options.dev) {
      // https://github.com/zeit/next.js/tree/canary/examples/with-polyfills
      const originalEntry = config.entry
      config.entry = function () {
        return originalEntry()
          .then(function (entries) {
            if (entries['main.js']) {
              entries['main.js'].unshift('./polyfill.js')
            }
            return entries
          })
      }
    }

    return config
  }
})))

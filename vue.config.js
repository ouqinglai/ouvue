const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '././'
    : '/',
  // filenameHashing: false
  // chainWebpack: config => {
  //   config.output
  //     .filename(`js/[name].[contenthash:8].js`)
  //     .chunkFilename(`js/[name].[contenthash:8].${version}.js`)
  // }
  chainWebpack: (config) => {
    // if (process.env.NODE_ENV === 'development') {
      // config.plugins.delete('preload')
    // }

    config.resolve.alias.set('@', path.resolve(__dirname, './src'))

    config.output.chunkFilename(`js/[name].[contenthash:8].js`)
    if(config.plugins.has('extract-css')) {
      const extractCSSPlugin = config.plugin('extract-css')
      extractCSSPlugin && extractCSSPlugin.tap(() => [{
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      }])
    }
  }
}

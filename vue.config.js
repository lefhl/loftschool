const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/3/'
    : '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@comp': path.resolve(__dirname, './src/components'),
        '@assets': path.resolve(__dirname, './src/assets')
      },
      extensions: ['.js', '.vue', '.json']
    }
  }
}

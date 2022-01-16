const path = require('path')

module.exports = {
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

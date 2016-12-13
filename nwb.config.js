const path = require('path')

module.exports = {
  type: 'preact-app',
  polyfill: false,
  webpack: {
    aliases: {
      assets: path.resolve('src/assets')
    }
  }
}

const path = require('path')

module.exports = {
  type: 'inferno-app',
  polyfill: false,
  babel: {
    plugins: ['react-html-attrs']
  },
  webpack: {
    aliases: {
      assets: path.resolve('src/assets')
    }
  }
}

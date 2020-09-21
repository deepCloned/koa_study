const path = require('path')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')

const pathResolve = function (filePath) {
  return path.resolve(__dirname, filePath)
}

const webpackConfig = {
  mode: 'development',
  entry: pathResolve('./src/index.js'),
  output: {
    path: pathResolve('./dist')
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}

module.exports = webpackConfig
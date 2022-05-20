const { __DEV__ } = require('./config')
const MiniCssExtractLoader = require('mini-css-extract-plugin')

function getStyleLoaders({ importLoaders }) {
  const loaders = [
    __DEV__ ? 'style-loader' : MiniCssExtractLoader.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: /\.module\.\w+$/i,
          localIdentName: '_[local]-[hash:base64:6]'
        },
        sourceMap: !!__DEV__,
        importLoaders: importLoaders + 1
      }
    },
    'postcss-loader'
  ]
}

module.exports = getStyleLoaders

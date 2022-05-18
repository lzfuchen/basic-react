const { paths } = require('config.js')

module.exports = {
  target: ['web', 'es5'],
  context: process.cwd(),
  entry: paths.entryPath,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ],
        exclude: [/node_modules/]
      },
      {
        test: /\.(gif|png|jpe?g|webp)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/[name].[contenthash:6][ext][query]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 1000
          }
        }
      }
    ]
  }
}

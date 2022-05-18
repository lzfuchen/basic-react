const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  stats: 'errors-only',
  entry: path.resolve(process.cwd(), 'src/index.tsx'),
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'js/[name].[chunkhash:6].js',
    clean: true,
    publicPath: '/'
  },
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
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(process.cwd(), './src')
    }
  },
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  },
  optimization: {
    runtimeChunk: 'single'
  },
  devServer: {
    static: {
      directory: path.resolve(process.cwd(), './dist')
    },
    client: {
      overlay: {
        errors: true,
        warnings: true
      }
    },
    host: '0.0.0.0',
    hot: 'only',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*'
    },
    compress: true,
    // open: true,
    liveReload: false
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), './public/index.html')
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`You application is running here 123`]
      }
    })
  ]
}

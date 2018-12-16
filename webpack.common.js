const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    app: './src/index.jsx',
    vendors: ['react', 'react-dom', 'react-redux', 'react-router-dom', 'redux', 'redux-thunk', 'styled-components', 'axios']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      api: path.resolve(__dirname, 'src/common/api'),
      ui: path.resolve(__dirname, 'src/ui')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Boilerplate',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
      }
    })
  ]
}

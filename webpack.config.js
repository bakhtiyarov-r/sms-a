const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'app': './src/main.ts',
    'script': './src/common.js'
  },
  output:{
    path: path.resolve(__dirname, './dist'),     // путь к каталогу выходных файлов - папка public
    publicPath: '/',
    filename: '[name].js'
  },
  devServer: {
     historyApiFallback: true,
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module:{
    rules:[ 
      {
        test: /\.ts$/,
        use: [
        {
          loader: 'awesome-typescript-loader',
          options: { configFileName: path.resolve(__dirname, 'tsconfig.json') }
        } ,
         'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'raw-loader',
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core/,
        path.resolve(__dirname, 'src'),
      {}
    ),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false
      }
    })
  ]
}

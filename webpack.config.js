const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDevelopment = true;

module.exports = {
  entry: "./src/main.js",
  mode: "development",
  output: {
    filename: "./main.js",
    // publicPath: '/'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8000,
    watchContentBase: true,
    progress: true,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src/"),
      'public': path.resolve(__dirname, "public/"),
      'assets': path.resolve(__dirname, "src/assets/")
    },
    extensions: ['.js', '.jsx', '.scss']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]__[hash:base64:5]'
              },
              sourceMap: isDevelopment
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|woff|ttf|eot)$/,
        use: ["file-loader"]
      }
    ]
  },
  externals: ["fs"]
};
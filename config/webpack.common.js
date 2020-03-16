const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const webpack = require('webpack');
const { rootDir } = global.__WEBPACK_CONFIG__;

module.exports = {
  /* 入口及[name] */
  entry: {
    main: path.resolve(rootDir, './src/admin/main.js')
  },
  /* 出口 */
  output: {
    filename: '[name]_[hash:6].js',
    chunkFilename: '[name]_[contenthash:6].js',
    path: path.resolve(rootDir, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js?$/i,
        include: path.resolve(rootDir, 'src'),
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[contenthash:6].[ext]',
            outputPath: './asset/images/', // 图片输出地址
            limit: 10 * 1024
          }
        }
      },
      // 本地字体文件（从iconfont引用的话就没必要写了）
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            outputPath: './fonts/',
            limit: 1 * 1024
          }
        }
      }
    ]
  },
  plugins: [
    /* 生成html文件，每个页面一个配置 */
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir, './src/template/common.html'),
      title: 'title',
      filename: 'index.html',
      favicon: './public/favicon.png'
      // chunks: ['runtime', 'package', 'common', 'main']
    })
  ],
  resolve: {
    // 模块不写后缀时的匹配顺序
    extensions: ['.js', '.jsx'],
    // 业务中只写路径不写文件名时的匹配顺序
    mainFiles: ['index', 'default'],
    // 供模块使用的别名
    alias: {
      src: path.resolve(rootDir, './src'),
      public: path.resolve(rootDir, './public')
    }
  },
  optimization: {
    /* runtime相关代码分离出来,防止内容没有变化但runtime经常变导致的文件contenthash变化 */
    /*
    runtimeChunk: {
      name: 'runtime'
    },
    */
    /* tree shaking开关 */
    usedExports: false
    /* 代码分离 */
    /*
    splitChunks: {
      chunks: 'all',
      minSize: 1024 * 1,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        style: {
          test: /\.(css|less)$/,
          name: 'styles'
        },
        package: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/,
          minChunks: 1,
          name: 'package'
        },
        common: {
          priority: -100,
          minChunks: 2,
          reuseExistingChunk: true,
          name: 'common'
        }
      }
    }
    */
  }
};

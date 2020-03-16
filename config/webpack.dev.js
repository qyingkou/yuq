const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const { rootDir } = global.__WEBPACK_CONFIG__;

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    overlay: {
      warnings: false,
      errors: true
    }, // 当编译器错误或警告时，在浏览器中显示全屏覆盖层
    contentBase: path.resolve(rootDir, './dist'),
    host: '0.0.0.0',
    port: '8080',
    hot: true,
    hotOnly: true,
    // 前端路由配置，true表示匹配所有且指向默认的html模板入口
    historyApiFallback: true,
    /* devserver的代理设置
     * 路由替换为测试地址，开发环境下使用
     */
    proxy: [
      {
        context: ['/api'],
        target: 'http://api.yuque.com',
        pathRewrite: {},
        changeOrigin: true
      }
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true,
              localIdentName: '[path]_[name]_[local]_[contenthash:6]'
            }
          },
          'less-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = merge(commonConfig, devConfig);

/**
 * Created by Crystal on 2018/10/26.
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractPlugin = require('extract-text-webpack-plugin');
// 服务端渲染重要的插件，处理复杂逻辑
const VueServerPlugin = require('vue-server-renderer/server-plugin');

const baseConfig = require('./webpack.config.base');

let config

const isDev = process.env.NODE_ENV === 'development'

const plugins = [
  new ExtractPlugin('styles.[contentHash:8].css'),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) || 'development',
    'process.env.VUE_ENV': '"server"'
  })
]

if(isDev) {
  plugins.push(new VueServerPlugin())
}

config = merge(baseConfig, {
  target: 'node',
  entry: path.join(__dirname,'../client/server-entry.js'),
  output: {
    libraryTarget: 'commonjs2', // 打包出来的形式是module.exports
    filename: 'server-entry.js',
    path: path.join(__dirname, '../server-build')
  },
  // 浏览器中：wepback打包会把所有依赖的js文件打包到同一个js文件中(因为浏览器没办法通过require这种方式单独加载一个文件)
  // node端：如果我们依赖了vue，我们只需要在导出的server-entry.js中require vue就可以
  externals: Object.keys(require('../package.json').dependencies),
  devtool: '#source-map', // 指引出错文件出在哪一行
  module: {
    rules: [
      {
        test: /\.styl/,
        use: ExtractPlugin.extract({
          fallback: 'vue-style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            'stylus-loader'
          ]
        })
      }
    ]
  },
  plugins
});


module.exports = config;

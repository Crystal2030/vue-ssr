/**
 * Created by Crystal on 2018/10/22.
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HTMLPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.config.base');


let config
const devServer = {
  historyApiFallback: true,
  hot: true,
  port: 8004,
  host: '0.0.0.0',
  overlay: {
    errors: true,
  },
  // open: true,
};

const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  }),
  new HTMLPlugin({
    template: path.join(__dirname, '../practice/template.html')
  })
];

config = merge(baseConfig, {
  mode: process.env.NODE_ENV || 'production',
  entry: path.join(__dirname,'../practice/index.js'),
  devtool: '#cheanp-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.styl/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  devServer,
  resolve: {
    // import Vue from 'vue'
    alias: {
      'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
    }
  },
  plugins: defaultPlugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(), // 减少不需要的一些信息展示问题
  ])
});


module.exports = config;

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.config.base');

const isDev = process.env.NODE_ENV === 'development';

let config
const devServer = {
    historyApiFallback: true,
    hot: true,
    port: 8003,
    host: '0.0.0.0',
    overlay: {
        errors: true,
    },
    // open: true,
};

const defaultPlugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: isDev ? '"development"' : '"production"'
        }
    }),
    new HTMLPlugin()
];

if(isDev) {
    config = merge(baseConfig, {
        // devtool: '#cheanp-module-eval-source-map', // webpack4 自动加了这个配置
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
        plugins: defaultPlugins.concat([
            new webpack.HotModuleReplacementPlugin(),
            // new webpack.NoEmitOnErrorsPlugin(), // 减少不需要的一些信息展示问题  webpack4废弃了
        ])
    });

} else {
    config = merge(baseConfig, {
        entry: {
            app: path.join(__dirname, '../client/index.js'),
            vendor: ['vue']
        },
        output: {
            filename: '[name].[chunkhash:8].js',  // 每个chunk会单独打包成一个hash
        },
        module: {
            rules: [
                {
                    test: /\.styl/,
                    use: [
                      MiniCssExtractPlugin.loader,
                      'css-loader',
                      {

                        loader:'postcss-loader',
                        options: {
                          sourceMap: true
                        }

                      },
                      'stylus-loader'
                    ]
                    // use: ExtractPlugin.extract({
                    //     fallback: 'vue-style-loader',
                    //     use: [
                    //         'css-loader',
                    //         {
                    //             loader: 'postcss-loader',
                    //             options: {
                    //                 sourceMap: true
                    //             }
                    //         },
                    //         'stylus-loader'
                    //     ]
                    // })
                }
            ],
        },
       optimization: {  // webpack4 废弃了webpack.optimize.CommonsChunkPlugin
         splitChunks: {
           chunks: 'all'
         },
         runtimeChunk: true,
       },
        plugins: defaultPlugins.concat([
            new MiniCssExtractPlugin('styles.[contentHash:8].css'),
            // new webpack.optimize.CommonsChunkPlugin({
            //     name: 'vendor'
            // }),
            // new webpack.optimize.CommonsChunkPlugin({
            //     // 注意： vendor要在runtime前面
            //     // 把webpack生成在app.js里面webpack相关的代码单独打包到一个文件里面，
            //     // 这样好处是，有新的模块加入的时候，webpack会给每个模块加一个id上去的，
            //     // 插入的顺序可能在中间，导致后面的每个模块的id发生变化，发生变化后就会导致打包出来的内容的hash发生一定的变化，hash想要使用浏览器长缓存的目的就失效了
            //     name: 'runtime'
            // })
        ])
    });
}


module.exports = config;

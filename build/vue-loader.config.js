/**
 * Created by Crystal on 2018/10/18.
 */
// const docsLoader = require('./doc-loader');

module.exports = (isDev) => {
    return {
        preserveWhitespace: true, // 清理文字后面的空格
        extractCSS: !isDev,
        cssModules: {},
        // hotReload: false, // 根据环境变量生产
        loaders: { // 自定义模块定义loader
            // 'docs': docsLoader
        },
        preLoader: {

        },
        postLoader: {

        },
        cssModules: {
            localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]', // 把css对应的class name编译成根据文件路径-文件名-文件内容的hash生产一个独一无二的名字
            camelCase: true
        }
    }
}
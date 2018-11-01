/**
 * Created by Crystal on 2018/10/26.
 */
const Router = require('koa-router')
const axios = require('axios')
const MemoryFS = require('memory-fs') // 写入内存
const webpack = require('webpack')
const VueServerRenderer = require('vue-server-renderer')
const path = require('path')
const fs = require('fs')

const serverRenderer = require('./server-render')
const serverConfig = require('../../build/webpack.config.server')

// compiler可以在nodejs中直接run或者watch 帮我们生成服务端要用的bundle
const serverCompiler = webpack(serverConfig)

const mfs = new MemoryFS()
serverCompiler.outputFileSystem = mfs // 指定webpack compiler在memory里面

let bundle

// 类似webpack-dev-server 每次在client目录下修改文件，都会重新打包
serverCompiler.watch({}, (err, stats) => {
  if (err) throw err
  // 有些错误不是打包的错误，比如eslint的错误，上面不会劫持到错误，会在stats里出现
  stats = stats.toJson()
  stats.errors.forEach(err => console.log(err))
  stats.warnings.forEach(warn => console.log(warn))

  const bundlePath = path.join(
    serverConfig.output.path,
    'vue-ssr-server-bundle.json'
  )

  bundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf-8'))
  console.log('new bundle generated')
})

// koa中间件
const handleSSR = async (ctx) => {
  if (!bundle) {
    ctx.body = '你等一会让，别着急...'
    return
  }
  // 做服务端渲染
  const clientManifestResp = await axios.get(
    'http://127.0.0.1:8003/public/vue-ssr-client-manifest.json')

  const clientManifest = clientManifestResp.data

  // 1. 读入template内容
  const template = fs.readFileSync(
    path.join(__dirname, '../server.template.ejs'),
    'utf-8'
  )
  // 2. 声明1个render
  const renderer = VueServerRenderer
    .createBundleRenderer(bundle, {
      inject: false, // 不需要注入操作
      clientManifest  // 生成一个带有script标签的js引用的字符串
    }) // 帮我们生成一个可以直接调用的render的function

  await serverRenderer(ctx, renderer, template)

}

const router = new Router()
router.get('*', handleSSR)

module.exports = router

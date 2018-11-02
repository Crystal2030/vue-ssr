/**
 * Created by Crystal on 2018/11/2.
 * 处理静态文件的中间件
 */
const Router = require('koa-router')
const send = require('koa-send')

const staticRouter = new Router({prefix: '/public'})

staticRouter.get('/*', async ctx => {
  await send(ctx, ctx.path)
})

module.exports = staticRouter

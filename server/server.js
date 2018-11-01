/**
 * Created by Crystal on 2018/10/26.
 */
const Koa = require('koa')

const pageRouter = require('./routers/dev-ssr')

const app = new Koa()

const isDev = process.env.NODE_ENV === 'devlopment'

// koa中间件
app.use(async (ctx, next) => {
  console.log('*******', ctx)
  try {
    console.log(`request with path ${ctx.path}`)
    await next()
  } catch (e) {
    console.log('我到底错哪儿了——————————>', e)
    ctx.status = 500
    if(isDev) {
      ctx.body = e.message
    } else {
      ctx.body = 'please try again later'
    }
  }
})

app.use(pageRouter.routes()).use(pageRouter.allowedMethods())

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3333

app.listen(PORT, HOST, () => {
  console.log(`server is listening on ${HOST}:${PORT}`)
})

/**
 * ctx:  把返回的html内容写到ctx.body里面
 * renderer： 开发和正式环境创建流程不一样，所以需要外部传入
 * template：也需要传入
 */
const ejs = require('ejs');

module.exports = async (ctx, renderer, template) => {
  ctx.headers['Content-Type'] = 'text/html'

  const context = {url: ctx.path};

  try {
    const appString = await renderer.renderToString(context)

    const html = ejs.render(template, {
      appString,
      style: context.renderStyles(),
      scripts: context.renderScripts(),
    })

    ctx.body = html
  } catch (err) {
    console.log('render error', err)
    throw err
  }

}

/**
 * Created by Crystal on 2018/10/24.
 */
import Router from 'vue-router'

import routes from './routes'

export default () => {
  return new Router({
    routes,
    mode: 'history',
    // base: '/base/' // 会给所有路由最前面加上/base/
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'extract-active-link',
    scrollBehavior (to, from, savedPosition) {
      console.log(to, from, savedPosition)
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    fallback: true // 当浏览器不支持 history.pushState 控制路由是否应该回退到 hash 模式, 默认为true
    // parseQuery (query) {
    //
    // },
    // stringifyQuery (obj) {
    //
    // }
  })
}

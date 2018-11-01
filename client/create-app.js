/**
 * Created by Crystal on 2018/10/30.
 * 每次服务器端渲染都需要渲染新的app，不能用上次渲染过的app对象，会影响下次渲染内容
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './app.vue'
import createStore from './store/store'
import createRouter from './config/router'

import './assets/styles/global.styl'

Vue.use(VueRouter)
Vue.use(Vuex)

export default () => {
  const router = createRouter()
  const store = createStore()

  const app = new App({
    router,
    store,
    render: h => h(app)
  })

  return { app, router, store }
}

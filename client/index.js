import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'

import './assets/styles/global.styl'

// const root = document.createElement('div')
// document.body.appendChild(root)
import createRouter from './config/router'
Vue.use(VueRouter)

const router = createRouter()

router.beforeEach((to, from, next) => {
  console.log('router before involke ----->')
  // if (to.fullPath === '/login') {
  //   next('/app')
  // }
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('router resolve involke ----->')
  next()
})

router.afterEach((to, from) => {
  console.log('router after involke ----->')
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#root')

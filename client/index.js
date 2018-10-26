import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import './assets/styles/global.styl'

// const root = document.createElement('div')
// document.body.appendChild(root)
import createRouter from './config/router'
import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

// store.registerModule('c', {
//   state: {
//     text: 3
//   }
// })

// store.watch((state) => state.count + 1, (newCount) => {
//   console.log('第一个函数有新值才执行第二个', newCount)
// })
//
// store.subscribe((mutation, state) => {
//   console.log('store subscribe------>', mutation.type, mutation.payload)
// })
//
// store.subscribe((action, state) => {
//   console.log('store subscribe action------>', action.type, action.payload)
// })
//
// // store.unregisterModule('c')
//
// router.beforeEach((to, from, next) => {
//   console.log('router before involke ----->')
//   // if (to.fullPath === '/login') {
//   //   next('/app')
//   // }
//   next()
// })
//
// router.beforeResolve((to, from, next) => {
//   console.log('router resolve involke ----->')
//   next()
// })
//
// router.afterEach((to, from) => {
//   console.log('router after involke ----->')
// })

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')

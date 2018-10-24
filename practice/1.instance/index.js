import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: '<div ref="textWrapper">{{text}} {{obj.a}}</div>',
  data: {
    text: 0,
    obj: {}
  }
  // watch: {
  //   text (newText, oldText) {
  //     console.log(`${newText}: ${oldText}`)
  //   }
  // }
})

app.$mount('#root')

// let i = 0
setInterval(() => {
  // i++
  // app.text += 1
  // app.text += 1
  // app.text += 1
  // app.text += 1
  // app.text += 1
  // app.obj.a = i
  // app.$set(app.obj, 'a', i)
  // app.$forceUpdate()
  // app.$options.data.text += 1
  // app.$data.text += 1
}, 1000)

// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$options)
// 下一次有值变化的时候，重新进行渲染的时候才会生效
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }
// console.log(app.$root === app)
// <item><div></div></item>  div就是item的$children  组件中要用到
// console.log(app.$children)
// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs)
// 服务端渲染：有些代码需要服务端渲染用到，有些代码只需要客户端做
// console.log(app.$isServer)

// const unwatch = app.$watch('text', (newText, oldText) => {
//   console.log(`${newText}: ${oldText}`)
// })
// setTimeout(() => {
//   unWatch()
// }, 2000)

// app.$on('test', (a, b) => {
//   console.log(`test emmited ${a} ${b}`)
// })
// 只触发一次
// app.$once('test', (a, b) => {
//   console.log(`test emmited ${a} ${b}`)
// })
// setInterval(() => {
//   app.$emit('test', 1, 2)
// }, 1000)

/**
 * Created by Crystal on 2018/10/22.
 */
import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  // template: '<div>{{text}}</div>',
  data: {
    text: 0
  },
  beforeCreate () {
    console.log(this.$el, 'beforeCreate')
  },
  created () {
    console.log(this.$el, 'created')
  },
  beforeMount () {
    console.log(this.$el, 'beforeMount')
  },
  mounted () {
    console.log(this.$el, 'mounted')
  },
  beforeUpdate () {
    console.log(this, 'beforeUpdate')
  },
  updated () {
    console.log(this, 'updated')
  },
  activated () {
    console.log(this, 'activated')
  },
  deactivated () {
    console.log(this, 'deactivated')
  },
  beforeDestroy () {
    console.log(this, 'beforeDestroy')
  },
  destroyed () {
    console.log(this, 'destoryed')
  },
  render (h) { // h就是vue里面的createElement方法
    // throw new TypeError('render error')
    console.log('render function invoked')
    return h('div', {}, this.text)
  },
  renderError (h, err) { // 这个方法只会在开发阶段本组件出现错误才会被执行
    return h('div', {}, err.stack)
  },
  errorCapture () { // 正式环境可以用，会向上冒泡，可以搜集线上的一些错误， 如果在根组件上使用这个方法，那么子组件出现的错误也会capture

  }
})

app.$mount('#root')
setInterval(() => {
  app.text += 1
}, 1000)
setTimeout(() => {
  app.$destroy()
}, 2000)

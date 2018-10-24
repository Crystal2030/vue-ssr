import Vue from 'vue'

// 使用全局数据 修改其中一个组件 另一个组件也会改变 这不是我们期望看到的结果， 所以data() 必须return一个新建的对象
// const data = {
//   text: 0
// }

const component = {
  props: {
    active: Boolean,
    propOne: String
  },
  template: `
    <div>
      <input type="text" v-model="text">
      <p @click="handleChange">{{propOne}}</p>
      <p v-show="active">See me if active</p>
    </div>`,
  mounted () {
    // 不应该主动修改父节点的定义
    // this.propOne = 'inner content'
    console.log('comp mounted')
  },
  data () {
    return {
      text: 0,
      b: '999'
    }
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}

const parent = new Vue({
  name: 'parent'
})

const component2 = {
  parent: parent,
  extends: component,
  mounted () {
    // 可以在子组件内部通过this.$parent直接去调用它parent
    this.$parent.text = '12345'
    console.log('comp2 mounted--->', this.$parent.name, this.$parent.$options.name) // name转化成$options里面的属性
  },
  data () {
    return {
      text: 1
    }
  }
}

// 可以简单的李杰CompVue是Vue的一个子类
// const CompVue = Vue.extend(component)
//
// new CompVue({
//   el: '#root',
//   propsData: {
//     propOne: 'xxx'
//   },
//   mounted () {
//     // 不应该主动修改父节点的定义
//     // this.propOne = 'inner content'
//     console.log('extends mounted')
//   },
//   // data可以和组件中的data合并
//   data: {
//     text: 123,
//     a: '555'
//   }
// })

new Vue({
  name: 'rooter',
  el: '#root',
  data: {
    text: 2333
  },
  components: {
    comp: component2
  },
  template: `
    <div>
      <span>{{text}}</span>
      <comp></comp>
    </div>
  `
})

import Vue from 'vue'

// 使用全局数据 修改其中一个组件 另一个组件也会改变 这不是我们期望看到的结果， 所以data() 必须return一个新建的对象
// const data = {
//   text: 0
// }

const component = {
  // props: ['active', 'propOne'],
  props: {
    active: {
      type: Boolean,
      // required: true,
      validator (value) {
        return typeof value === 'boolean'
      },
      default: true
    },
    propOne: String
    // onChange: Function
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
  },
  data () {
    return {
      text: 0
    }
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}

// 全局定义组件
// Vue.component('CompOne', component)

new Vue({
  components: { // 组件中定义组件
    CompOne: component
  },
  el: '#root',
  data: {
    prop1: 'text1'
  },
  mounted () {
    console.log(this.$refs.comp1)
  },
  methods: {
    handleChange () {
      this.prop1 += 1
    }
  },
  template: `
    <div>
      <comp-one ref="comp1" prop-one="prop1" :active="true" @change="handleChange"></comp-one>
      <comp-one :active="false"></comp-one>
    </div>
  `
})

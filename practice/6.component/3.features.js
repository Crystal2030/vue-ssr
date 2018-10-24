/**
 * Created by Crystal on 2018/10/23.
 */
import Vue from 'vue'

/**
 * 默认情况下vue的provide不提供vue的react特性，修改值后不会更新值的，如果想更新，需要在provide里面提供一个get方法
 */

const ChildComponent = {
  template: '<div>Child component: {{data.value}}</div>',
  inject: ['yeye', 'data'], // 引用爷爷组件
  mounted () {
    console.log('child component----->', this.$parent.$options.name)
    console.log('child component 引用爷爷----->', this.yeye, this.data)
  }
}

const component = {
  components: {
    ChildComponent
  },
  name: 'comp',
  // template: `
  //   <div :style="style">
  //     <div class="header">
  //       <slot name="header"></slot>
  //     </div>
  //     <div class="body">
  //         <slot name="body"></slot>
  //     </div>
  //   </div>
  // `,
  template: `
    <div :style="style">
      <slot :value="value" aaa="aaaaaaa"></slot>
      <child-component></child-component>
    </div>
  `,
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      },
      value: 'component value'
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  // provide: {
  //   yeye: this, // 把整个对象放出去
  //   value: this.value // 会报错，provide初始化的时候，vue对象根本就没初始化成功
  // },
  provide () {
    const data = {}
    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumerable: true
    })
    return {
      yeye: this,
      // value: this.value
      data
    }
  },
  el: '#root',
  data () {
    return {
      value: '000'
    }
  },
  mounted () {
    console.log(this.$refs.comp.value, this.$refs.span)
  },
  template: `
    <div>
      <comp-one ref="comp">
         <span ref="span" slot-scope="props">{{props.value}} {{props.aaa}} {{value}}</span>
         <!--<span slot="body">this is body</span>-->
      </comp-one>
      <input type="text" v-model="value" />
    </div>
  `
})

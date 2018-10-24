/**
 * Created by Crystal on 2018/10/23.
 */
import Vue from 'vue'

const component = {
  model: {
    prop: 'value1',
    event: 'change'
  },
  props: ['value', 'value1'],
  template: `
    <div>
      <input type="text" @input="handleInput" :value="value1">
    </div>
  `,
  methods: {
    handleInput (e) {
      this.$emit('change', e.target.value)
    }
  }
}

const extend = {
  created () {
    console.log('extends created')
  }
}

const mixin1 = {
  created () {
    console.log('mixin1 created')
  }
}

const mixin2 = {
  created () {
    console.log('mixin2 created')
  }
}

new Vue({
  extends: extend,
  mixins: [mixin1, mixin2],
  components: {
    CompOne: component
  },
  data () {
    return {
      value: '123'
    }
  },
  el: '#root',
  template: `
    <div>
      <!--<comp-one :value="value" @input="value = arguments[0]"></comp-one>-->
      <comp-one v-model="value"></comp-one>
    </div>
  `
})

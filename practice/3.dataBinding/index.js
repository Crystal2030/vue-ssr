/**
 * Created by Crystal on 2018/10/23.
 */
import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div 
      :style="[styles, styles2]"
      :class="[{active: isActive}]" v-on:click="handleClick">
      <!--{{isActive ? 'active' : 'not active'}}-->
      <p v-html="html"></p>
    </div>
  `,
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: '<span>123</span>',
    styles: {
      color: 'red',
      appearance: 'none'
    },
    styles2: {
      color: 'blue'
    }
  },
  methods: {
    handleClick () {
      alert ('clicked') // eslint-disable-line
    },
    getJoinedArr (arr) {
      return arr.join(' ')
    }
  }
})

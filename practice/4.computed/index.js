/**
 * Created by Crystal on 2018/10/23.
 */
import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <p>Name: {{name}}</p>
      <p>Name: {{getName()}}</p>
      <p>Number: {{number}}</p>
      <p>FullName: {{fullName}}</p>
      <p><input type="text" v-model="number"></p>
      <p>FirstName: <input type="text" v-model="firstName"></p>
      <p>LastName: <input type="text" v-model="lastName"></p>
      <p>Name: <input type="text" v-model="name"></p>
      <p>Obj: <input type="text" v-model="obj.a"></p>
    </div>
  `,
  data: {
    firstName: 'Crystal',
    lastName: 'Liu',
    number: 0,
    fullName: '',
    obj: {
      a: '123'
    }
  },
  computed: {
    name: {
      get () {
        console.log('new name')
        return `${this.firstName} ${this.lastName}`
      },
      set (name) {
        const names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  // watch不会立即执行，要立即执行需要绑定一个handler
  watch: {
    // firstName (newName, oldName) {
    //   this.fullName = newName + ' ' + this.lastName
    // }
    'obj.a': {
      handler (newName, oldName) {
        // this.fullName = newName + ' ' + this.lastName
        console.log('obj.a changed')
      },
      immediate: true
      // deep: true
    }
  },
  mounted () {
    this.obj = {
      a: '345'
    }
  },
  methods: {
    getName () {
      console.log('getName invoked')
      return `${this.firstName} ${this.lastName}`
    }
  }
})

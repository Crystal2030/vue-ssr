<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{counter}}</p>
    <p>{{fullName}}</p>
    <!--<p>A modules text: {{textA}}</p>-->
    <!--<p>B modules: {{textB}}</p>-->
    <!--<p>C modules: {{textC}}</p>-->
    <!--<p>A modules: {{textPlus}}</p>-->
    <!--<router-link :to="{name: 'app'}">app</router-link>-->
    <!--<router-link to="/app/123">app</router-link>-->
    <router-link to="/app">app</router-link>
    <router-link to="/login">login</router-link>
    <!--<router-link to="/login/exact">login exact</router-link>-->
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
    <!--<router-view name="a"></router-view>-->
  </div>
</template>

<script>
  import {
    mapState,
    mapGetters,
    mapActions,
    mapMutations
  } from 'vuex'
  import Header from './views/layout/header.vue'
  import Footer from './views/layout/footer.jsx'
  // import todo from './views/todo/todo.vue'

  export default {
    components: {
      Header,
      // todo,
      Footer
    },
    mounted () {
      console.log('111111', this)
      console.log(' store---->', this.$store)
      // 虽然可以直接这样修改，但是vuex官方推荐用commit方式提交一个mutations方式修改
      // this.$store.state.count = 3
      // let i = 1
      // setInterval(() => {
      //   this.$store.commit('updateCount', {
      //     num: i++,
      //     num2: 2
      //   })
      // }, 1000)
      // dispatch
      // this.$store.dispatch('updateCountSync', {
      //   num: 5,
      //   time: 2
      // })
      // 用辅助方法mapActions后就可以直接this调用actions的方法了
      this.updateCountAsync({
        num: 5,
        time: 2000
      })
      // this.updateText('123')
      // this['a/updateText']('123')

      // 调用a模块下的action
      // this['a/add']()

      // this.testAction()
    },
    computed: {
      // textA () {
      //   return this.$store.state.a.text
      // },
      // textB () {
      //   return this.$store.state.b.text
      // },
      ...mapState({
        counter: (state) => state.count
        // textA: state => state.a.text,
        // textB: state => state.b.text,
        // textC: state => state.c.text
      }),
      ...mapGetters({
        fullName: 'fullName',
        textPlus: 'a/textPlus'
      })
      // count () {
      // return this.$store.state.count
      // },
      // fullName () {
      //   return this.$store.getters.fullName
      // }
    },
    methods: {
      ...mapActions(['updateCountAsync']),
      ...mapMutations(['updateCount'])
    }

  }
</script>

<style lang="stylus" scoped>
  #app {
    position absolute
    left 0
    right 0
    top 0
    bottom 0
  }

  #cover {
    position absolute
    left 0
    top 0
    right 0
    bottom 0
    background-color #999
    opacity .9
    z-index -1
  }
</style>

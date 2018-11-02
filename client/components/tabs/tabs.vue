<template>

</template>

<script type="text/jsx">
  import TabContainer from './tab-container.vue'

  export default {
    name: 'Tabs',
    // provide () { //﻿默认情况下vue的provide不提供vue的react特性，修改值后不会更新值的，如果想更新，需要在provide里面提供一个get方法
    //   return {
    //     value: this.value
    //   }
    // },
    components: {
      TabContainer
    },
    props: {
      value: {
        type: [String, Number],
        required: true
      }
    },
    data () {
      return {
        panes: []
      }
    },
    render () {
      const contents = this.panes.map(pane => {
        return pane.active ? pane.$slots.default : null
      })
      return (
        <div class='tabs'>
          <ul class='tabs-header'>
            {this.$slots.default}
          </ul>
          <tab-container panes={this.panes}></tab-container>
        </div>
      )
    },
    methods: {
      onChange (index) {
        this.$emit('change', index)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .tabs-header
    display flex
    list-style none
    margin 0
    padding 0
    border-bottom 2px solid #ededed
</style>

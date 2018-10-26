<template>
    <!--<header :class="$style.mainHeader">
        <h1>TodoList</h1>
    </header>-->
  <header class="main-header">
    <h1 class="main-header">TodoList</h1>
  </header>
</template>

<script>
    export default {
      name: 'header1'
    }
</script>

<!--<style lang="stylus" module>-->
<style lang="stylus">
    .main-header{
        text-align center
        h1{
            font-size 100px
            color: rgba(175, 47, 47, 0.4)
            font-weight 100
            margin 20px
        }
    }
</style>

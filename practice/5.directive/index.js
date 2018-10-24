/**
 * Created by Crystal on 2018/10/23.
 */
import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <!--v-pre 里面的表达式不解析-->
      <div v-pre>Text: {{text}}</div>
      <!--v-cloak 使用webpack项目中用不上，唯一使用场景是直接页面上引入vue库代码，在页面上写vue代码，模板是写在body html里面写的 -->
      <div v-cloak>{{text}}</div>
      <!--使用场景：静态的内容-->
      <div v-once>Text: {{text}}</div>
      <div v-if="active">{{text}}</div>
      <div v-else-if="text === 0">else if</div>
      <div v-else>else content</div>
      <div v-html="html"></div>
      <input type="text" v-model.trim="text">
      <div>
        <input type="checkbox" :value="1" v-model="arr">
        <input type="checkbox" :value="2" v-model="arr">
        <input type="checkbox" :value="3" v-model="arr">
      </div>
      <div>
         <input type="radio" value="one" v-model="picked">
         <input type="radio" value="two" v-model="picked">
         <input type="radio" value="three" v-model="picked">
      </div>
      <ul>
         <!--key是唯一指定循环列表的值 为元素绑定一个key属性，这个key属性为元素添加了一个唯一身份标识符。 之后，当数据改变，vue底层通过对比能够更快的获取到更新的内容饼显示到页面上。总之，key属性能够提升性能-->
        <li v-for="(item, index) in arr" :key="index">{{item}} {{index}}</li>
      </ul>
      <ul>
        <li v-for="(val, key) in obj">{{val}} {{key}}</li>
      </ul>
  </div>
  `,
  data: {
    arr: [1, 2, 3],
    obj: {
      a: '123',
      b: '456',
      c: '789'
    },
    picked: '',
    text: 0,
    active: false,
    html: '<span>this is html</span>'
  }
})

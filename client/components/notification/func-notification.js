/**
 * Created by Crystal on 2018/11/2.
 */
import Notification from './notification.vue'

export default {
  extends: Notification,
  computed: {
    style () {
      return {
        position: 'fixed',
        right: '20px',
        bottom: `${this.verticalOffset}px`
      }
    }
  },
  mounted () {
    this.createTimer()
  },
  data () {
    return {
      verticalOffset: 0,
      autoClose: 3000,
      height: 0,
      visible: false
    }
  },
  methods: {
    createTimer () {
      if (this.autoClose) {
        this.timer = setTimeout(() => {
          this.visible = false
        }, this.autoClose)
      }
    },
    clearTimer () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
    },
    afterEnter () { // 只有visible值改变才会触发transition的
      this.height = this.$el.offsetHeight
    }
  },
  beforeDestroy () {
    this.clearTimer()
  }
}

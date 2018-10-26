/**
 * Created by Crystal on 2018/10/25.
 * mutations 必须放同步代码 actions里面可以处理异步代码
 */
export default {
  updateCount (state, { num }) {
    state.count = num
  }
}

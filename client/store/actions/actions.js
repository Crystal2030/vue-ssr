/**
 * Created by Crystal on 2018/10/26.
 */
export default {
  updateCountAsync (store, data) {
    setTimeout(() => {
      store.commit('updateCount', {
        num: data.num
      })
    }, data.time)
  }
}

/**
 * Created by Crystal on 2018/10/25.
 * getters提供方便应用里面要用的数据
 */
export default {
  fullName (state) {
    console.log('getters---->', state)
    return `${state.firstName} ${state.lastName}`
  }
}

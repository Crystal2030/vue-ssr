/**
 * Created by Crystal on 2018/10/25.
 */
import Vuex from 'vuex'

import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

// const store =

const isDev = process.env.NODE_ENV === 'developemnt'

// export default store  每次都用同一个store会出现内存溢出
export default () => {
  const store = new Vuex.Store({
    strict: isDev,
    state: defaultState,
    mutations,
    getters,
    actions,
    plugins: [ // plugin的定义
      (store) => {
        console.log('vuex plugins---->>', store)
      }
    ]
    // modules: {
    //   a: {
    //     namespace: true,
    //     state: {
    //       text: 1
    //     },
    //     mutations: {
    //       updateText (state, text) {
    //         state.text = text
    //       }
    //     },
    //     getters: {
    //       textPlus (state, getters, rootState) {
    //         console.log('A module state in getters--->', state.text + rootState.b.text)
    //         return state.text + rootState.b.text
    //       }
    //     },
    //     actions: {
    //       add ({ state, commit, rootState }) {
    //         // commit('updateText', rootState.count, { root: true })
    //         commit('updateCount', { num: 56789 }, { root: true })
    //       }
    //     }
    //   },
    //   b: {
    //     // namespace: true,
    //     state: {
    //       text: 2
    //     },
    //     actions: {
    //       testAction ({ commit }) {
    //         commit('a/updateText', 'test text', { root: true })
    //       }
    //     }
    //   }
    // }
  })

  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutations/mutations',
      './actions/actions',
      './getters/getters'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newActions = require('./actions/actions').default
      const newGetters = require('./getters/getters').default
      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        actions: newActions,
        getters: newGetters
      })
    })
  }

  return store
}

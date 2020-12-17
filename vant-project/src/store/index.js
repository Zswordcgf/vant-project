import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {}
  },
  mutations: {
    setUser: (state, dataInfo) => {
      state.userInfo = dataInfo
    }
  },
  actions: {
    changeUser: (context, data) => {
      context.commit('setUser', data)
    }
  },
  modules: {
  }
})

const state = {
  token: null,
  user: null
}

const getters = {
  getUser: (state) => state.user,
  getUserLatestData: (state) => {
    if (state.user) {
      return state.user.data[state.user.data.length - 1]
    }
  }
}

const mutations = {
  setToken: (state, token) => (state.token = token),
  clearToken: (state) => (state.token = null),
  setUser: (state, user) => (state.user = user),
  clearUser: (state) => (state.user = null)
}

const actions = {
  logUser ({ commit }, { token, user }) {
    commit('setToken', token)
    commit('setUser', user)
  },
  logoutUser ({ commit }) {
    commit('clearToken')
    commit('clearUser')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

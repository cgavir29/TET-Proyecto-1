import axios from 'axios'

const state = {
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
  setUser: (state, user) => (state.user = user),
  clearUser: (state) => (state.user = null)
}

const actions = {
  logUser ({ commit }, user) {
    axios.post('/signin', user)
      .then(res => commit('setUser', res.data))
      .catch(err => console.log(err))
  },
  logoutUser ({ commit }) {
    commit('clearUser')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

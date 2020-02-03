const state = {
  user: {
    data: {
      temperature: 't',
      humidity: 'h',
      location: 't',
      date: 'd'
    }
  }
}

const getters = {
  getUser: (state) => state.user
}

const actions = {
// commit('setUser', ...)
}

const mutations = {
  setUser: (user) => (state.user = user)
}

export default {
  state,
  getters,
  actions,
  mutations
}

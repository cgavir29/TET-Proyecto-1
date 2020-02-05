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

const mutations = {
  setUser: (user) => (state.user = user)
}

const actions = {
  setUser: (context) => (context.commit('setUser'))
}

export default {
  state,
  getters,
  actions,
  mutations
}

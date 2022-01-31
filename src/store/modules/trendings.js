import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    SET_STORIES (state, payload) {
      state.data = payload
    },
    SET_README (state, payload) {
      state.data = state.data.map(repo => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
        }
        return repo
      })
    }
  },
  getters: {
    getRepoById: (state) => (id) => {
      return state.data.find(item => item.id === id)
    }
  },
  actions: {
    async getTrendings ({ commit }) {
      try {
        const { data } = await api.trendings.getTrendings()
        commit('SET_STORIES', data.items)
      } catch (err) {
        console.log(err)
      }
    },

    async getReadme ({ commit, getters }, { id, owner, repo }) {
      const curRepo = getters.getRepoById(id)
      if (curRepo.readme !== undefined) return
      try {
        const { data } = await api.readme.getReadme({ id, owner, repo })
        commit('SET_README', { id, content: data })
      } catch (err) {
        console.log(err)
      }
    }
  }
}

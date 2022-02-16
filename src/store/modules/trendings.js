import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: [],
    issues: {}
  },
  mutations: {
    SET_TRENDINGS (state, trendings) {
      state.data = trendings.map((item) => {
        item.following = {
          status: false,
          loading: false,
          error: ''
        }
        return item
      })
    },
    SET_README (state, payload) {
      state.data = state.data.map((repo) => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
        }
        return repo
      })
    },
    SET_FOLLOWING: (state, payload) => {
      state.data = state.data.map((repo) => {
        if (payload.id === repo.id) {
          repo.following = {
            ...repo.following,
            ...payload.data
          }
        }
        return repo
      })
    },
    SET_USER: (state, payload) => {
      state.user = payload
    },
    SET_LIKED_REPOS: (state, payload) => {
      state.likedRepos = payload
    },
    SET_REPO_ISSUES: (state, payload) => {
      state.issues[payload.repo] = payload.data
    },
    SET_ACTUALLY_FOLLOWING: (state, payload) => {
      state.following = payload
    }
  },
  getters: {
    getRepoById: (state) => (id) => {
      return state.data.find((item) => item.id === id)
    },
    getUserLogin: (state) => state.user.login,
    likedRepos: (state) => state.likedRepos,
    repoIssues: (state) => (repo) => state.issues[repo],
    notLikedRepos: (state) => {
      const ids = state.likedRepos.map(item => item.id)
      return state.data.filter(item => !ids.includes(item.id))
    }
  },
  actions: {
    async getTrendings ({ commit }) {
      try {
        const { data } = await api.trendings.getTrendings()
        commit('SET_TRENDINGS', data.items)
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
    },

    async starRepo ({ commit, getters }, id) {
      const { name: repo, owner } = getters.getRepoById(id)

      commit('SET_FOLLOWING', {
        id,
        data: {
          status: false,
          loading: true,
          error: ''
        }
      })

      try {
        await api.trendings.starRepo({ repo, owner: owner.login })
        commit('SET_FOLLOWING', {
          id,
          data: {
            status: true
          }
        })
      } catch (err) {
        commit('SET_FOLLOWING', {
          id,
          data: {
            status: false,
            error: 'Error has happened'
          }
        })
      } finally {
        commit('SET_FOLLOWING', {
          id,
          data: {
            loading: false
          }
        })
      }
    },

    async unstarRepo ({ commit, getters }, id) {
      const { name: repo, owner } = getters.getRepoById(id)
      commit('SET_FOLLOWING', {
        id,
        data: {
          status: false,
          loading: true,
          error: ''
        }
      })

      try {
        await api.trendings.starRepo({ repo, owner: owner.login })
        commit('SET_FOLLOWING', {
          id,
          data: {
            status: false
          }
        })
      } catch (err) {
        commit('SET_FOLLOWING', {
          id,
          data: {
            status: true,
            error: 'Error has happened'
          }
        })
      } finally {
        commit('SET_FOLLOWING', {
          id,
          data: {
            loading: false
          }
        })
      }
    },

    async getUser ({ commit }) {
      const { data: user } = await api.trendings.getUser()

      try {
        commit('SET_USER', user)
      } catch (err) {
        console.log(err)
      }
    },

    async getLikedRepos ({ commit, getters }) {
      try {
        const { data } = await api.trendings.getStarredRepos(
          getters.getUserLogin
        )
        commit('SET_LIKED_REPOS', data)
      } catch (err) {
        console.log(err)
      }
    },

    async getIssuesByRepo ({ commit, getters }, payload) {
      const { repo } = payload
      if (getters.repoIssues(repo)) return
      try {
        const { data } = await api.trendings.getIssuesByRepo(payload)
        commit('SET_REPO_ISSUES', { repo, data })
      } catch (err) {
        console.log(err)
      }
    },

    async getFollowing ({ commit, getters }) {
      const { data } = await api.trendings.getFollowing()
      commit('SET_ACTUALLY_FOLLOWING', data)
    }
  }
}

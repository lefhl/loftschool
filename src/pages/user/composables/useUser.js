// import { ref } from 'vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default () => {
  const store = useStore()

  const stories = computed(() => store.state.trendings.data)
  const user = computed(() => store.state.trendings.user)
  const likedRepos = computed(() => store.state.trendings.likedRepos)
  const following = computed(() => store.state.trendings.following)

  const followUser = (payload) => store.dispatch('trendings/followUser', payload)
  const unfollowUser = (payload) => store.dispatch('trendings/unfollowUser', payload)

  const toggleFollowing = async (login, isFollowing) => {
    if (isFollowing) {
      await unfollowUser(login)
    } else {
      await followUser(login)
    }
  }

  return {
    stories,
    user,
    likedRepos,
    following,
    toggleFollowing,
    getUser: () => store.dispatch('trendings/getUser'),
    getLikedRepos: () => store.dispatch('trendings/getLikedRepos'),
    getFollowing: () => store.dispatch('trendings/getFollowing'),
    followUser,
    unfollowUser
  }
}

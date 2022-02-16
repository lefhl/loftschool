// import { ref } from 'vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default () => {
  const store = useStore()

  const stories = computed(() => store.state.trendings.data)
  const user = computed(() => store.state.trendings.user)
  const likedRepos = computed(() => store.state.trendings.likedRepos)
  const following = computed(() => store.state.trendings.following)

  return {
    stories,
    user,
    likedRepos,
    following,
    getUser: () => store.dispatch('trendings/getUser'),
    getLikedRepos: () => store.dispatch('trendings/getLikedRepos'),
    getFollowing: () => store.dispatch('trendings/getFollowing')
  }
}

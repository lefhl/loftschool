<template>
  <div class="following">
    <div class="following__header"><h1>Following</h1> <div class="following__count">{{user?.following}}</div></div>
    <div class="user" v-for="user in following" :key="user.id">
      <div class="user__main">
        <div class="user__ava">
          <img :src="user.avatar_url" alt="">
        </div>
        <div class="user__info">
          <div class="user__login">{{user.login}}</div>
          <div class="user__type">{{user.type}}</div>
        </div>
      </div>
      <btn
        :theme="user?.isFollowing ?  'grey' : 'green'"
        @click="toggleFollowing(user.login, user?.isFollowing)"
      >
        {{user.isFollowing ? 'Unfollow' : 'Follow'}}
      </btn>
    </div>
  </div>
</template>

<script>
import { btn } from '@comp/btn'
import useUser from './../composables/useUser'

export default {
  name: 'following',
  components: { btn },
  setup () {
    const {
      likedRepos,
      following,
      user,
      getFollowing,
      followUser,
      unfollowUser,
      toggleFollowing
    } = useUser()

    return {
      likedRepos,
      following,
      user,
      getFollowing,
      followUser,
      unfollowUser,
      toggleFollowing
    }
  },

  async created () {
    await this.getFollowing()
  }
}
</script>

<style lang="scss" scoped>
.following {
  &__header {
    display: flex;
    gap: 30px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 36px;
  }
}

.user {
  display: flex;
  justify-content: space-between;
  &__main {
    display: flex;
    gap: 18px;
    align-items: center;
  }
  &__ava {
    img {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  &__login {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  &__type {
    font-size: 12px;
    color: #9E9E9E;
  }
}
</style>

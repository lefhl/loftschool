<template>
  <div>
    <topline>
      <template #headline>
        <icon :name="'logo'" class="logo" />
        <user-bar :avatar="user?.avatar_url || ''" />
      </template>
    </topline>
    <main class="main x-container">
      <aside class="main__aside">
        <h2 class="title">My profile</h2>
        <div class="user">
          <div class="user__logo">
            <img :src="user?.avatar_url" alt="" />
          </div>
          <div class="user__info">
            <div class="user__login">{{ user?.login }}</div>
            <div class="user__links">
              <router-link :to="{ name: 'repos' }">
                <b>{{ likedRepos?.length }}</b> reposts
              </router-link>
              <router-link :to="{ name: 'following' }">
                <b>{{ user?.following }}</b> following
              </router-link>
            </div>
            <div>{{ user?.name }}</div>
          </div>
        </div>
      </aside>
      <div class="main__content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import { topline } from '@comp/topline'
import { userBar } from '@comp/userBar'
import Icon from '@assets/icons/icon.vue'

import useUser from './composables/useUser'

export default {
  name: 'user',
  components: { topline, icon: Icon, userBar },
  setup () {
    const {
      stories,
      user,
      likedRepos,
      getUser,
      getLikedRepos
    } = useUser()

    return {
      stories,
      user,
      likedRepos,
      getUser,
      getLikedRepos
    }
  },
  async created () {
    await this.getUser()
    await this.getLikedRepos()
  }
}
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #31ae54;
}

.logo {
  width: 174px;
}

.main {
  display: flex;
  min-height: 100vh;

  &__aside {
    padding-top: 40px;
    border-right: 1px solid #d3d3d3;
    padding-right: 40px;
    max-width: 352px;
    width: 100%;
  }

  &__content {
    padding-top: 40px;
    padding-left: 75px;
    flex-grow: 1;
  }
}

.title {
  font-size: 26px;
  line-height: (28/26);
  margin-bottom: 30px;
}

.user {
  display: flex;
  gap: 20px;
  &__logo {
    flex-shrink: 0;
    img {
      border-radius: 50%;
      width: 90px;
      height: 90px;
      object-fit: cover;
    }
  }
  &__login {
    font-size: 24px;
    margin-bottom: 9px;
    font-weight: bold;
  }

  &__links {
    display: flex;
    gap: 10px;
    font-size: 12px;
    margin-bottom: 9px;
    white-space: nowrap;
  }
}
</style>

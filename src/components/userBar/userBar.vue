<template>
  <div class="icons">
    <router-link :to="{name: 'feeds'}"><icon name="home" /></router-link>
    <router-link :to="{name: 'repos'}">
      <img :src="avatar" alt="" class="icons__user-pic">
    </router-link>
    <button type="button" @click="signOut">
      <icon :name="'signOut'" />
    </button>
  </div>
</template>

<script>
import Icon from '@assets/icons/icon.vue'

export default {
  name: 'user-bar',
  props: {
    avatar: {
      type: String,
      default: '@assets/images/currentUser.png'
    }
  },
  components: {
    icon: Icon
  },
  methods: {
    signOut () {
      localStorage.removeItem('token')
      this.$router.push('auth')
    }
  }
}
</script>

<style lang="scss" src="./userBar.scss">

</style>

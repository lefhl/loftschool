<template>
  <div class="icons">
    <a href="/"><icon name="home" /></a>
    <img :src="avatar" alt="" class="icons__user-pic">
    <button type="button" @click="signOut">
      <icon :name="'signOut'" />
    </button>
  </div>
</template>

<script>
import Icon from '@assets/icons/icon.vue'
import axios from 'axios'

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
      axios.defaults.headers.common.Authorization = ''
      this.$router.push('auth')
    }
  }
}
</script>

<style lang="scss" src="./userBar.scss">

</style>

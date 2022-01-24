<template>
  <div class="icons">
    <a href="/"><icon name="home" /></a>
    <img src="@assets/images/currentUser.png" alt="">
    <button type="button">
    <icon name="sign-out" />

    </button>
  </div>
</template>

<script>
import Icon from '@assets/icons/icon.vue'

export default {
  name: 'user-bar',
  components: {
    icon: Icon
  }
}
</script>

<style lang="scss" src="./userBar.scss">

</style>

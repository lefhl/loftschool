<template>
  <div class="story" >
    <img :src="data.userAvatar" alt="" class="story__img" >
    <p class="story__text">{{data.username}}</p>
  </div>
</template>

<script>
export default {
  name: 'storyUserItem',
  props: {
    data: {
      type: Object,
      required: true
    }
  }

}
</script>

<style lang="scss" src="./storyUserItem.scss" scoped>
</style>

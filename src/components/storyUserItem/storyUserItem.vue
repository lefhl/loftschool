<template>
  <div class="story" @click="$emit('onPress')">
    <img :src="avatar" alt="" class="story__img">
    <p class="story__text">{{username}}</p>
  </div>
</template>

<script>
export default {
  name: 'storyUserItem',
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./storyUserItem.scss" scoped>
</style>

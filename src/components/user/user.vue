<template>
  <div class="user">
    <img :src="avatar" alt="" class="user__pic">
    <span class="user__name">{{username}}</span>
  </div>
</template>

<script>
export default {
  name: 'user',
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

<style lang="scss" scoped>
  .user {
    display: flex;
    align-items: center;
    gap: 14px;

    &__pic {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      object-fit: cover;
    }

    &__name {
      font-size: 18px;
      font-weight: bold;
    }
  }
</style>

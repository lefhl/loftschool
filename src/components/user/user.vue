<template>
  <div class="user">
    <img :src="avatar" alt="" :class="['user__pic', {user__pic_xs: size === 'xs'}]">
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
    },
    size: {
      type: String
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

      &_xs {
        width: 32px;
        height: 32px;
      }
    }

    &__name {
      font-size: 18px;
      font-weight: bold;
    }
  }
</style>

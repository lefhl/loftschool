<template>
  <div class="story" @click="gotoSliderStorie">
    <div class="story__image" :class="{disabled: placeholder}">
      <div class="story__spinner" v-if="placeholder">
        <icon name="loader" />
      </div>
      <img :src="data.userAvatar" alt="" v-else>
    </div>
    <p class="story__text" :class="{empty: !data.username}">{{data.username}}</p>
  </div>
</template>

<script>
import Icon from '@assets/icons/icon.vue'

export default {
  name: 'storyUserItem',
  components: { icon: Icon },
  props: {
    data: {
      type: Object,
      default: () => ({ userAvatar: '', username: '' })
    },
    placeholder: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    gotoSliderStorie () {
      const { id } = this.$props.data
      if (id) {
        this.$router.push({ name: 'stories', params: { id } })
      }
    }
  }
}
</script>

<style lang="scss" src="./storyUserItem.scss" scoped>
</style>

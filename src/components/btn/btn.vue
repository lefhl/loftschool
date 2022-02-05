<template>
  <button class="btn" :class="{loading, gray: theme === 'gray'}" >
      <slot v-if="!loading"/>
      <icon v-else name="loader" class="spinner"/>
  </button>
</template>

<script>
import Icon from '@assets/icons/icon.vue'

export default {
  name: 'btn',
  components: { icon: Icon },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'green'
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn {
    background-color: #31AE54;
    padding: 11px 20px;
    font-weight: bold;
    font-size: 16px;
    display: flex;  align-items: center;
    justify-content: center;
    height: 44px;
    color: #fff;
    border-radius: 5px;
    line-height: 1.362;
    transition: background-color .23s;
    font-family: 'Inter', 'Open Sans';

    &.gray {
      background-color: #9E9E9E;
    }

    &:hover {
      background-color: #9E9E9E;
    }

    &.loading {
      background-color: #9E9E9E;
      .spinner {
        width: 21px;
        height: 21px;
      }
    }
  }
</style>

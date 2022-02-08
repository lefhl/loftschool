<template>
  <div class="stats">
      <div class="stats__sect"><icon name="star" class="stats__icon"/> Star</div>
      <div class="stats__sect">{{stars}}</div>
      <div class="stats__sect stats__sect_fork"><icon name="fork" class="stats__icon"/> Fork</div>
      <div class="stats__sect">{{forks}}</div>

  </div>
</template>

<script>
import Icon from '@assets/icons/icon.vue'

export default {
  name: 'stats',
  components: {
    icon: Icon
  },
  props: {
    stars: {
      type: Number,
      default: 0
    },
    forks: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss">
  .stats {
    border: 1px solid rgba(27, 31, 35, 0.15);
    background-color: #FAFBFC;
    border-radius: 6px;
    display: inline-flex;
    align-items: center;
    font-size: 14px;

    &__sect {
      display: flex;
      align-items: center;
      padding: 6px 12px;
      border-right: 1px solid rgba(27, 31, 35, 0.15);

      &:last-child {
        border: none;
      }
      &_fork {
        border-left: 1px solid rgba(27, 31, 35, 0.15);
      }
      svg {
        margin-right: 4px;
      }
    }
    &__icon {
      width: 16px;
    }
  }
</style>

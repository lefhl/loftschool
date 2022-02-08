<template>
  <div class="placeholder">
    <div class="placeholder__img" v-if="withImage"></div>
    <div class="placeholder__block" v-for="c, idx in count" :key="idx">
      <div class="placeholder__item"></div>
      <div class="placeholder__item placeholder__item_long"></div>
      <div class="placeholder__item placeholder__item_short"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'placeholder',
  props: {
    count: {
      type: Number,
      default: 2
    },
    withImage: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.placeholder {
  $primary: #DEDEDE;
  &__img {
    background-color: $primary;
    height: 136px;
    border-radius: 4px;
    margin-bottom: 22px;
    animation: appear 1s linear infinite alternate;
  }
  &__block{
    margin-bottom: 18px;
  }
  &__item {
    margin-bottom: 8px;
    border-radius: 4px;
    background-color: $primary;
    width: 66.5%;
    height: 14px;
    animation: appear 1s linear infinite alternate;
    &_long {
      width: 82%;
    }
    &_short {
      width: 52.3%;
    }
  }
}

@keyframes appear {
  from {
    opacity: 0.6;
  }
  to {
    opacity: 1;
  }
}
</style>

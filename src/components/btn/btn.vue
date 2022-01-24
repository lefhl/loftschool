<template>
  <button class="btn">
      <slot />
  </button>
</template>

<script>
export default {
  name: 'btn'
}
</script>

<style lang="scss" scoped>
  .btn {
    background-color: #31AE54;
    padding: 11px 20px;
    font-weight: bold;
    font-size: 16px;
    display: inline-block;
    color: #fff;
    border-radius: 5px;
    font-family: 'Open Sans';
    line-height: 1.362;
    transition: opacity .3s ease;

    &:hover {
      opacity: 0.7;
    }
  }
</style>

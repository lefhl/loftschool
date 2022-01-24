
<template>
  <div class="progress">
    <div class="progress__filled-part" :style="{width: percent + '%'}"></div>
  </div>
</template>

<script>
export default {
  name: 'progress',
  props: {
    percent: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

.progress {
  border-radius: 1px;
  background: rgba(49, 174, 84, 0.3);
  height: 2px;

  &__filled-part {
    border-radius: 1px;
    background: #31AE54;
    height: 2px;
  }
}

</style>

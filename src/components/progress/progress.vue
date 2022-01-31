
<template>
  <div class="progress" :class="{active}" >
    <div class="progress__filled-part"></div>
  </div>
</template>

<script>
export default {
  name: 'xProgress',
  props: {
    active: Boolean
  },
  data () {
    return {
      timeout: null,
      isActive: true
    }
  },

  mounted () {
    this.setTimeout()
  },
  methods: {
    onProgressFinish () {
      this.$emit('onProgressFinish', 'next')
    },
    setTimeout () {
      if (this.active) {
        this.timeout = setTimeout(() => {
          this.onProgressFinish()
        }, 3000)
      } else {
        clearTimeout(this.timeout)
      }
    }
  },
  watch: {
    active: function () {
      this.setTimeout()
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
    width: 0;

    .active &{
      width: 100%;
      transition: width 3s ease;

    }
  }
}

</style>

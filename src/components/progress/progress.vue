
<template>
  <div class="progress" ref="bar">
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
    // this.setTimeout()
    this.$nextTick().then(() => {
      setTimeout(() => {
        if (this.$props.active) {
          this.$refs.bar.classList.add('activated')
        }
      }, 0)
    })
  },

  beforeUnmount () {
    clearTimeout(this.timeout)
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
      // this.setTimeout()
      if (this.$props.active) {
        this.$refs.bar.classList.add('activated')
        return
      }
      this.$refs.bar.classList.remove('activated')
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

    .activated & {
      width: 100%;
      transition: width 3s ease;

    }
  }
}

</style>

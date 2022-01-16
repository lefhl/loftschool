<template>
  <button :class="['button', {active: isOpened}]" @click="toggle">
    <span class="text">{{isOpened ? "Hide" : "View"}} issues</span>
      <icon name="arrowUp"/>
  </button>
</template>

<script>
import Icon from './../../assets/icons/icon.vue'
export default {
  name: 'toggler',
  components: {
    icon: Icon
  },
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
      this.$emit('toggle', this.isOpened)
    }
  }
}
</script>

<style lang="scss" src="./toggler.scss">

</style>

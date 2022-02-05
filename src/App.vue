<template>
  <router-view />
  <x-footer />
</template>

<script>
import { footer } from '@comp/footer'

export default {
  name: 'App',
  components: {
    xFooter: footer
  }
}
</script>

<style lang="scss" src="./globals.scss"></style>

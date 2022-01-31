<template>
  <div class="page">
    <router-view />
    <slide />
  </div>
</template>

<script>
import { slide } from '@comp/slide'
export default {
  name: 'user',
  props: ['id'],
  components: { slide },
  created () {
  }
}
</script>

<style>
.page {
  background-color: #3a3939;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

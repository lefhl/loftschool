<template>
  <div class="repos">
    <div class="repos__header"><h1>Repositories</h1> <div class="repos__count">{{likedRepos?.length}}</div></div>
    <div class="repos__card" v-for="item in likedRepos" :key="item.id">
      <card :data="item" />
    </div>
  </div>
</template>

<script>
import { card } from '@comp/card'
import useUser from './../composables/useUser'

export default {
  name: 'repos',
  components: { card },
  setup () {
    const {
      likedRepos
    } = useUser()

    return {
      likedRepos
    }
  }
}
</script>

<style lang="scss" scoped>
.repos {
  &__header {
    display: flex;
    gap: 30px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 36px;
  }

  &__card {
    margin-bottom: 19px;
  }
}

</style>

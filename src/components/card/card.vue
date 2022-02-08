<template>
  <div class="card">
    <div class="card__title-wrap">
      <h2 class="card__title">{{data.name}}</h2>
    </div>
      <div class="card__content">{{data.description}} </div>
      <div class="card__stats">
        <stats :stars="data.stargazers_count" :forks="data.forks"/>
      </div>
  </div>
</template>

<script>
import { stats } from '@comp/stats'

export default {
  name: 'card',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  components: {
    stats
  }

}
</script>

<style lang="scss">
.card {
    background: #FFFFFF;
    border: 1px solid #F1F1F1;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
    border-radius: 10px;
    padding: 24px 20px;

    &__title-wrap {
      margin-bottom: 16px;
    }

    &__content {
      font-size: 14px;
    }

    &__stats {
      margin-top: 32px;
      display: inline-block;
    }
}
</style>

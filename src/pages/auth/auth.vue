<template>
  <div class="auth" v-if="is_created">
    <div class="x-container auth__wrapper">
      <div class="auth__logo"><icon name='logo' /></div>
      <div class="auth__subscription">
        More than just one repository.
        <br>
        This is our digital world.
      </div>
      <btn class="auth__btn" @click="getCode">
        Authorize with github <icon name='github' />
      </btn>
      <img src="@assets/images/laptop.png" alt="">
    </div>
  </div>
</template>

<script>
import Icon from '@assets/icons/icon.vue'
import { btn } from '@comp/btn/'
import * as api from '../../api'
import { clientId, clientSecret } from '@/../env.js'
import axios from 'axios'

export default {
  name: 'auth',
  components: { icon: Icon, btn },
  data () {
    return {
      is_created: false
    }
  },
  async created () {
    try {
      axios.defaults.headers.common.Authorization = `token ${localStorage.getItem('token')}`
      const resp = await api.trendings.getUser()
      if (resp.status === 200) {
        this.$router.replace({ name: 'feeds' })
      }
    } catch (err) {
      console.log(err)
    }

    const code = new URLSearchParams(window.location.search).get('code')

    if (code) {
      try {
        const responce = await api.trendings.getToken({
          clientId,
          clientSecret,
          code
        })

        const { token } = responce.data

        localStorage.setItem('token', token)
        this.$router.replace({ name: 'feeds' })
      } catch (err) {
        console.log('Ошибка:', err)
      }
    }

    this.is_created = true
  },
  methods: {
    async getCode () {
      const githubAuthApi = 'https://github.com/login/oauth/authorize'

      const params = new URLSearchParams()
      params.append('client_id', clientId)
      params.append('scope', 'repo:status public_repo read:user')
      window.location.href = `${githubAuthApi}?${params}`
    }
  }
}
</script>

<style lang="scss" scoped>
  .auth {
    min-height: 100vh;
    padding-top: 205px;
    margin-bottom: -50px;

    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    &__subscription {
      margin-bottom: 38px;
      font-size: 18px;
      line-height: 1.556;
      color: #6F6F6F;
    }

    &__logo {
      width: 200px;
      margin-bottom: 12px;
    }

    &__btn {
      line-height: 1.1875;
      margin-bottom: 90px;
      svg {
        margin-left: 12.5px;
      }
    }

    @media (max-height: 800px) {
      padding-top: 75px;
      &__subscription {
        margin-bottom: 25px;
      }
       &__btn {
         margin-bottom: 40px;
       }
    }
  }
</style>

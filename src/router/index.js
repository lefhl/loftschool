import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

import * as api from '../api'
import axios from 'axios'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.name === 'auth') {
    next()
    return
  }

  try {
    axios.defaults.headers.common.Authorization = `token ${localStorage.getItem('token')}`
    const resp = await api.trendings.getUser()
    if (to.name === 'auth' && resp.status === 200) {
      next({ name: 'feeds' })
    }
    if (resp.status === 401) throw new Error('Вы не авторизованы')
    next()
  } catch (err) {
    next({ name: 'auth' })
  }
})

export default router

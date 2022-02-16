import { feeds } from '@/pages/feeds/'
import { notFound } from '@/pages/notFound/'
import { storiesSlider } from '@/pages/storiesSlider/'
import { auth } from '@/pages/auth/'
import { user } from '@/pages/user/'
import repos from '@/pages/user/tabs/repos.vue'
import following from '@/pages/user/tabs/following.vue'

export default [
  {
    path: '/',
    component: feeds,
    name: 'feeds'
  },
  {
    path: '/user',
    component: user,
    name: 'user',
    children: [
      {
        path: '',
        name: 'repos',
        component: repos
      },
      {
        path: 'following',
        name: 'following',
        component: following
      }
    ]
  },
  {
    path: '/stories',
    component: storiesSlider,
    name: 'stories'
  },
  {
    path: '/auth',
    component: auth,
    name: 'auth'
  },
  {
    path: '/:pathMatch(.*)*',
    component: notFound
  }
]

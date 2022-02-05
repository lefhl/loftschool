import { feeds } from '@/pages/feeds/'
import { notFound } from '@/pages/notFound/'
import { profile } from '@/pages/profile/'
import { storiesSlider } from '@/pages/storiesSlider/'
import { auth } from '@/pages/auth/'

const user = () => import('../pages/user/user.vue')

export default [
  {
    path: '/',
    component: feeds,
    name: 'feeds'
  },
  {
    path: '/user/:id(\\d+)',
    component: user,
    name: 'user',
    props: true,
    children: [
      {
        path: 'profile',
        name: 'profile',
        component: profile
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

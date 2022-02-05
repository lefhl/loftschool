import { feeds } from '@/pages/feeds/'
import { notFound } from '@/pages/notFound/'
import { profile } from '@/pages/profile/'
import { storiesSlider } from '@/pages/storiesSlider/'

const user = () => import('../pages/user/user.vue')

export default [
  {
    path: '/',
    component: feeds
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
    path: '/:pathMatch(.*)*',
    component: notFound
  }
]
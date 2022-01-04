import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard, authSettled } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage'),
    beforeEnter: authSettled,
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/battlePage',
    name: 'BattlePage',
    component: loadPage('BattlePage'),
    beforeEnter: authSettled,
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
  {
    path: '/homebrew',
    name: 'HomebrewPage',
    component: loadPage('HomebrewPage'),
    beforeEnter: authSettled
  },
  {
    path: '/fifthEdition',
    name: 'FifthEditionPage',
    component: loadPage('FifthEditionPage'),
    beforeEnter: authSettled
  },
  {
    path: '/diceroller',
    name: 'DiceRollPage',
    component: loadPage('DiceRollPage'),
    beforeEnter: authSettled
  },
  {
    path: '/profile/:profileId',
    name: 'Profile',
    component: loadPage('ProfilePage'),
    beforeEnter: authSettled
  },
    

]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

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
    children: [
      {
        path: 'fifthEdition',
        name: 'Home.fifthEdition',
        component: loadPage('FifthEditionPage'),
        beforeEnter: authSettled
      },
      {
        path: 'homebrew',
        name: 'Home.homebrew',
        component: loadPage('HomebrewPage'),
        beforeEnter: authSettled
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/battlePage',
    name: 'BattlePage',
    component: loadPage('BattlePage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

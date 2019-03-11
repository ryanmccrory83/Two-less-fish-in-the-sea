import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import GettingReadyForTheBigDay from './views/GettingReadyForTheBigDay.vue'
import BeforeTheCeremony from './views/BeforeTheCeremony.vue'
import TheCeremony from './views/TheCeremony.vue'
import MrAndMrs from './views/MrAndMrs.vue'
import TheReception from './views/TheReception.vue'
import TripPhotos from './views/TripPhotos.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/gettingreadyforthebigday',
      name: 'gettingreadyforthebigday',
      component: GettingReadyForTheBigDay
    },
    {
      path: '/beforetheceremony',
      name: 'beforetheceremony',
      component: BeforeTheCeremony
    },
    {
      path: '/theceremony',
      name: 'theceremony',
      component: TheCeremony
    },
    {
      path: '/mrandmrs',
      name: 'mrandmrs',
      component: MrAndMrs
    },
    {
      path: '/thereception',
      name: 'thereception',
      component: TheReception
    },
    {
      path: '/tripphotos',
      name: 'tripphotos',
      component: () => import('./views/TripPhotos.vue')
    }
  ]
})

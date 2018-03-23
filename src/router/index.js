import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  { path: '/', component: 'Landing' },
  { path: '/signin', component: 'Signin' },
  { path: '/addcontact', component: 'AddContact' },
  { path: '/home', component: 'Home' }
  // { path: '/editcontact', component: 'EditContact' }
  // { path: '/addcontact', component:'AddContact'}
]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})

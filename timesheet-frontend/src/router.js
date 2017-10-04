import VueRouter from 'vue-router'

import Home from './containers/Home'
import About from './containers/About'
import User from './containers/User'
import UserInfo from './containers/UserInfo'
import UserEdit from './containers/UserEdit'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    {
      path: '/user/:id',
      component: User,
      children: [
        { path: '', name: 'User', component: UserInfo },
        { path: 'edit', name: 'UserEdit', component: UserEdit }
      ]
    },
    { path: '*', redirect: '/' }
  ]
})

export default router

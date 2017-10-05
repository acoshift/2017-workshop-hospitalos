import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import './filter'
import router from './router'

import '!script-loader!jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '!script-loader!bootstrap/dist/js/bootstrap.min.js'
import './style.scss'

Vue.config.productionTip = false

Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { library} from '@fortawesome/fontawesome-svg-core'
import  { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import  { faHome } from '@fortawesome/free-solid-svg-icons'
import  { faLock } from '@fortawesome/free-solid-svg-icons'
import  { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import  { FontAwesomeIcon}   from '@fortawesome/vue-fontawesome'
require('../node_modules/bootstrap/dist/css/bootstrap.css')
require('../node_modules/bootstrap/dist/js/bootstrap.min.js')
require('../node_modules/sweetalert/dist/sweetalert.min.js')

library.add(faAddressBook)
library.add(faHome)
library.add(faCreditCard)
library.add(faLock)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

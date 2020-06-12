import Vue from 'vue'
import App from './App'
// import './assets/style/main.css'
// import 'font-awesome/css/font-awesome.min.css'

import vueKeyboard from './lib/index.js'

Vue.use(vueKeyboard)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  components: { App },
  template: '<App/>'
})

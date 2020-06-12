import Vue from 'vue'
import App from './App'

import vueKeyboard from './lib/index.js'

Vue.use(vueKeyboard)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

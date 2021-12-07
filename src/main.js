import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
import '@vuikit/theme'

Vue.use(Vuikit)
Vue.use(VuikitIcons)
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
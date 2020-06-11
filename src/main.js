import Vue from 'vue'
import App from './App.vue'
import instance from '@/plugins/axios'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.$axios = instance

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

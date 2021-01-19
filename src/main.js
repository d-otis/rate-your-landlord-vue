import Vue from 'vue'
import App from './App.vue'
import router from './router'
import danStore from './danStore'

Vue.config.productionTip = false

new Vue({
  data: danStore,
  router,
  render: h => h(App)
}).$mount('#app')

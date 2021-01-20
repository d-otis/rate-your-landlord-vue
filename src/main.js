import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import danStore from './danStore'
import store from './store'

Vue.config.productionTip = false

new Vue({
  // data: danStore,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

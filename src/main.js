import Vue from 'vue'
import store from '@/store'
import router from '@/router'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import '@/helpers/rest-api-interceptor'

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')

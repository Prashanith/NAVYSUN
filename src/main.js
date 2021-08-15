import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import ScrollAnimation from './animations'

Vue.config.productionTip = false

Vue.directive('scrollanimation',ScrollAnimation)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

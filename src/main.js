import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './config/rem'
import './assets/fonts/index'
import './style/common.less'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)


Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

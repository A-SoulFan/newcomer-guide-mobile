import Vue from 'vue'
import App from './App.vue'
import less from 'less'
import './assets/common/font/font.css'
// import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
Vue.config.productionTip = false

Vue.use(less)
// Vue.use(Swiper)

new Vue({
  render: h => h(App),
}).$mount('#app')

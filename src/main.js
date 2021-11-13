import Vue from 'vue'
import App from './App.vue'
import less from 'less'

// import Swiper from 'swiper'
import 'reset-css'
import 'swiper/css/swiper.min.css'
import moment from 'moment/moment'
Vue.config.productionTip = false

Vue.use(less)
Vue.prototype.$moment = moment
// Vue.use(Swiper)
new Vue({
  render: h => h(App),
}).$mount('#app')

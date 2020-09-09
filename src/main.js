import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 全局加载 swiper 模块
// npm i swiper@^5 vue-awesome-swiper
// import VueAwesomeSwiper from "vue-awesome-swiper";
// import "swiper/css/swiper.css"
// Vue.use(VueAwesomeSwiper);

Vue.use(MintUI)

import axios from 'axios'; //WEB服务器的URL地址
 axios.defaults.baseURL = 'http://127.0.0.1:3000/' //在Vue原型扩展属性 
 Vue.prototype.axios = axios;


import vueSwiper from 'vue-awesome-swiper'
 
import 'swiper/css/swiper.css'  //引入样式

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

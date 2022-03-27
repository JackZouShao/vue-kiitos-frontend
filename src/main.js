import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

Vue.use(VueAxios, Axios).use(Antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Axios.defaults.baseURL = 'http://localhost:8079'
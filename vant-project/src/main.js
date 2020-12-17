import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index'
import http from './api'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant)
Vue.config.productionTip = false
Vue.prototype.$http = http


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/gloable.css'
import axios from 'axios'
//Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.use(ElementUI, { size: "large" });
Vue.prototype.HOST = '/api';//定义全局变量

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
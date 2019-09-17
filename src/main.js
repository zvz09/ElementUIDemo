import Vue from 'vue';
import Router from 'vue-router';
import App from './App';
import router from './router/index';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from "./store";
import axios from 'axios'
import Mock from '../mock' //也可以不写index.js


// 如果process.env.Mock == true执行startMock()
if (process.env.MOCK) {
  Mock.startMock();
}


Vue.prototype.$ajax = axios;
/**
 * 配置BaseUrl  配置下我们访问的Url前缀
 * 关键代码是：Axios.defaults.baseURL = '/api'，这样每次发送请求都会带一个/api的前缀。
 */
/*axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/json';*/

Vue.use(Element);


Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render(h){
    return h(App);
  }
})

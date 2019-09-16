import Vue from 'vue';
import Router from 'vue-router';
import App from './App';
import router from './router/index';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from "./store";

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

import Vue from 'vue';
import Router from 'vue-router';
import App from './App';
import router from './router/index';


Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render(h){
    return h(App);
  }
})

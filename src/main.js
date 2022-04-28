// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'

import echarts from 'echarts';
import 'echarts/map/js/china.js';

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// swiper@App.4.2版本引用
// import 'swiper/dist/css/swiper.css';  //引入swiper样式
// import swiper from 'swiper';
// Vue.prototype.swiper = swiper;

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
Vue.use(VueAwesomeSwiper);


import JsonViewer from 'vue-json-viewer';

Vue.config.productionTip = false

Vue.prototype.echarts = echarts;
Vue.use(echarts);
Vue.use(ViewUI);
Vue.use(ElementUI);
Vue.use(JsonViewer);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

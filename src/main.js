// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import Meta from 'vue-meta'
import {MediaQueries} from 'vue-media-queries';



Vue.use(Meta);
Vue.use(BootstrapVue);
const mediaQueries = new MediaQueries();
 
Vue.use(mediaQueries);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  mediaQueries: mediaQueries
})

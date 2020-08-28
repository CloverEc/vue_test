/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import App from './App.vue'

// Vuesax Component Framework
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css' //Material Icons
import 'vuesax/dist/vuesax.css' // Vuesax
Vue.use(Vuesax)


// axios
import axios from './axios.js'
Vue.prototype.$http = axios

import echarts from 'echarts'
Vue.prototype.$echarts = echarts;


// Filters
import './filters/filters.js'


// Theme Configurations
import '../themeConfig.js'


// Globally Registered Components
import './globalComponents.js'


// Styles: SCSS
import './assets/scss/main.scss'


// Tailwind
import '@/assets/css/main.css'


// Vue Router
import router from './router'


// Vuex Store
import store from './store/store'


// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)


// PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'


// Feather font icon
require('./assets/css/iconfont.css')
// Vue select css
// Note: In latest version you have to add it separately
// import 'vue-select/dist/vue-select.css';


Vue.config.productionTip = false

import storageUtils from '@/assets/utils/storageUtils.js';
Vue.prototype.$storage = storageUtils; 

import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

// const i18n = new VueI18n({
//     locale: storageUtils.getLang() , // 通过切换locale的值来实现语言切换
//     messages: {
//       'zh': require('@/lang/zh.js'), 
//       'en': require('@/lang/en.js')
//     }
// })

import i18n from '@/lang/i18n.js';

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')

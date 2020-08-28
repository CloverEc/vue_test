import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n) 

import storageUtils from '@/assets/utils/storageUtils.js';

const i18n = new VueI18n({ 
  locale: storageUtils.getLang(), 
  messages: {
    'zh': require('@/lang/zh.js'), 
    'en': require('@/lang/en.js')
  }
})
export default i18n
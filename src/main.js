import Vue from 'vue/dist/vue.js'
import { isRegExp } from 'util'
// import App from './App'
import FullPage from '@/components/fullPage.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
//   render: h => h()
  components: { FullPage },
  
})

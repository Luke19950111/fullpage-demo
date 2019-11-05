import Vue from 'vue/dist/vue.js'
import { isRegExp } from 'util'
// import App from './App'
import FullPage from '@/components/fullPage.vue'
import Page1 from '@/components/page1.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    bgColor: ["#30c", "#c03", "#c30", "#3c0", "#03c"],
  },
//   render: h => h()
  components: { 
      FullPage,
      Page1  
  },
  
})

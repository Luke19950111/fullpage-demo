import Vue from 'vue/dist/vue.js'
import { isRegExp } from 'util'
// import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
//   render: h => h()
  data(){
      return{
          bgColor: ['#30c', '#c03', '#c30', '#3c0', '#03c'],
          curIndex: 0
      }
  },
  methods: {
      onWheelScroll(e){
          console.log(e, 'eee')
          if(e.deltaY > 0){
              this.curIndex ++
          }
      }
  },
})

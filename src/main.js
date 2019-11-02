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
          curIndex: 0,
          name: '',
          canWheel: true,
          endCount: 0
      }
  },
  methods: {
      onWheelScroll(e){
          if(!this.canWheel){
              return
          }
          this.canWheel = false
          if(e.deltaY > 0){
              this.name = 'down'
              if(this.curIndex >= this.bgColor.length-1){
                  this.canWheel = true
                  this.endCount = 0
                  return
              }
              this.curIndex ++;
          }
          if(e.deltaY < 0){
              this.name = 'up'
              if(this.curIndex === 0){
                  this.canWheel = true
                  this.endCount = 0
                  return
              }
              this.curIndex --;
          }
      },
      end(){
          this.endCount ++;
          if(this.endCount == 2){
            this.canWheel = true
            this.endCount = 0
          }
      }
  },
})

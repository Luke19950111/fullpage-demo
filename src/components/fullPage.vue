<template>
  <div @wheel="onWheelScroll">
    <transition-group tag="div" :name="name" @enter="enter" @leave="leave">
      <div
        class="block"
        v-for="(list,index) in pages"
        :key="list"
        :style="{'background': bgColor&&bgColor[index]?bgColor[index]:baseColor}"
        v-show="index==curIndex"
        
        @transitionend="end"
      >
        {{ list }}
        <slot v-for="slotIndex in pages" :name="'slot'+slotIndex" v-if="index+1===slotIndex" :state="state"></slot>
      </div>
    </transition-group>
  </div>
</template>

<script>
  export default {
    props: {
        bgColor: {
            type: Array
        },
        baseColor: {
            default: '#c30'
        },
        pages: {
            type: Number,
            required: true
        }
    },
    data() {
      return {
        
        curIndex: 0,
        name: "",
        canWheel: true,
        endCount: 0,
        state: ''
      };
    },
    methods: {
      onWheelScroll(e) {
        if (!this.canWheel) {
          return;
        }
        this.canWheel = false;
        if (e.deltaY > 0) {
          this.name = "down";
          if (this.curIndex >= this.pages - 1) {
            this.canWheel = true;
            this.endCount = 0;
            return;
          }
          this.curIndex++;
        }
        if (e.deltaY < 0) {
          this.name = "up";
          if (this.curIndex === 0) {
            this.canWheel = true;
            this.endCount = 0;
            return;
          }
          this.curIndex--;
        }
      },
      end() {
        this.endCount++;
        if (this.endCount == 2) {
          this.canWheel = true;
          this.endCount = 0;
        }
        this.state = 'transitionend'
      },
      enter(el, done){
        this.state = 'enter'
        // done()
        //vue过渡javascript钩子，在enter和leave中，如果做了相应元素的处理，必须用done()，没有处理元素不用done()
      },
      leave(el, done){
        this.state = 'leave'
      }
    }
  };
</script>

<style>
  .block {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #c30;
  }
  .down-enter-active {
    transition: all 1s ease;
    /* transform: translateY(0); */
  }
  .down-leave-active {
    transition: all 1s ease;
    /* transform: translateY(-100%); */
  }
  .down-enter {
    transform: translateY(100%);
  }
  .down-enter-to {
    transform: translateY(0);
  }
  .down-leave-to {
    transform: translateY(-100%);
  }

  .up-enter-active {
    transition: all 1s ease;
  }
  .up-leave-active {
    transition: all 1s ease;
  }
  .up-enter {
    transform: translateY(-100%);
  }
  .up-enter-to {
    transform: translateY(0);
  }
  .up-leave-to {
    transform: translateY(100%);
  }
</style>

<template>
  <div>
    <transition-group tag="div" :name="name">
      <div
        class="block"
        v-for="(list,index) in bgColor"
        :key="list"
        :style="{background:list}"
        v-show="index==curIndex"
        @wheel="onWheelScroll"
        @transitionend="end"
      >
        {{ list }}
      </div>
    </transition-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bgColor: ["#30c", "#c03", "#c30", "#3c0", "#03c"],
        curIndex: 0,
        name: "",
        canWheel: true,
        endCount: 0
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
          if (this.curIndex >= this.bgColor.length - 1) {
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

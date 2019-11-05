<template>
    <div class="code-push">
        <span v-html='code' v-for="code in codes"></span>
        <span v-show='show'>|</span>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                msg: 'AbcDef()'.split('').concat(['</br>','{','</br>'],'return GHI'.split(''),['</br>','}']),
                codes: [],
                timer1: null,
                timer2: null,
                curIndex: 0,
                show: true
            }
        },
        mounted() {
            this.timer2 = setInterval(this.pushCode, 300)
            this.timer1 = setInterval(()=>{
                this.show=!this.show
                if(this.curIndex === this.msg.length){
                    clearInterval(this.timer1)
                    this.timer1 = null
                    clearInterval(this.timer2)
                    this.timer2 = null
                }
            }, 150)
        },
        methods: {
            pushCode(){
                this.codes.push(this.msg[this.curIndex])
                this.curIndex ++
            }
        },
    }
</script>

<style>
    .code-push{
        position: absolute;
        color: #fff;
        font-size: 30px;
        top: 50%;
        left: 50%;
        transform: translate(50% 50%);
    }
</style>
<template>
  <div class="Router3">
    <h1 @click="info" :class="color">{{ msg }}</h1>
  </div>
</template>

<script>
    export default {
        name: 'Router3',
        data () {
            return {
                msg: '我是Router3组件',
                color:'color'
            }
        },
        mounted(){
            console.log(this.$route);
        },
        methods:{
            info(){
                console.log('你点击了我');
            }
        }
    }
</script>

<style>
  .color{
    color:#630;
  }
</style>

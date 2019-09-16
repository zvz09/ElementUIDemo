<template>
  <div class="Router1">
    <h1 @click="info" :class="color">{{ msg }}</h1>
  </div>
</template>

<script>
    export default {
        name: 'Router1',
        data () {
            return {
                msg: '我是Router1组件',
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

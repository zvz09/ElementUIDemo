<template>
  <div class="Router2">
    <h1 @click="info" :class="color">{{ msg }}</h1>
  </div>
</template>

<script>
    export default {
        name: 'Router2',
        data () {
            return {
                msg: '我是Router2组件',
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

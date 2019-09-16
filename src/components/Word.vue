<template>
  <div class="word">
    <h1 @click="info" :class="color">{{ msg }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'word',
        data () {
            return {
                msg: '我是Word组件',
                color:'color'
            }
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

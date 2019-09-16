<template>
  <div id="app">
    <!--可以定义不变的内容-->
    <h3>{{title}}</h3>
    <ul>
      <li><router-link to="/routerPage">路由测试页面</router-link></li>
    </ul>
    <!--定义路由插座-->
    <router-view></router-view>
    <!--可以定义不变的内容-->
  </div>
</template>

<script>
    export default{
        name:'app',
        data(){
            return{
                title:'我是项目主入口',
                word:'/word'
            }
        }
    }
</script>

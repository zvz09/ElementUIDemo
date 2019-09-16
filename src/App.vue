<template>
  <div id="app">
    <!--可以定义不变的内容-->
    <h3>{{title}}</h3>
    <!--知道路径的跳转-->
    <ul>
      <li><router-link to="/">Hello页面</router-link></li>
      <li><router-link to="/word">word页面</router-link></li>
    </ul>
    <!--to是通过绑定数据到上面-->
    <ul>
      <li><router-link to="/">Hello页面</router-link></li>
      <li><router-link :to="word">word页面</router-link></li>
    </ul>
    <!--定义子路由跳转-->
    <ul>
      <li><router-link to="/word/router1">路由1</router-link></li>
      <li><router-link to="/word/router2/123">路由2</router-link></li>
      <li><router-link v-bind:to="{path:'/word/router2',query:{id:123}}">路由3</router-link></li>
      <li><router-link to="/word/router">路由4(重定向)</router-link></li>
      <li><router-link to="/word/router5">路由5(重定向)</router-link></li>
    </ul>
    <button @click="goTo(1)" >路由1</button>
    <button @click="goTo(2)" >路由2</button>

    <input type="button" value="前进" @click="next"/>
    <input type="button" value="后进" @click="prevent"/>
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
        },
        methods:{
            goTo(value){
                if(value === 1){
                    // 使用params传递参数
                    this.$router.push({path:'/word/router1/123'});
                }
                if(value === 2){
                    // 使用query传递参数
                    this.$router.replace({path:'/word/router2',query:{id:456}});
                }
            },
            next(){
                this.$router.go(1);
            },
            prevent(){
                this.$router.go(-1);
            }
        }
    }
</script>

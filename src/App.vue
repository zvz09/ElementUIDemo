<template>
  <div id="app">
    <!--可以定义不变的内容-->
    <h3>{{this.$store.state.count}}</h3>
    <div>
      <button @click="handleAddClick(10)">增加</button>
      <button @click="handleReduceClick(10)">减少</button>
    </div>
    <div>异步操作</div>
    <div>
      <button @click="handleActionsAdd(10)">异步增加</button>
      <button @click="handleActionsReduce(10)">异步减少</button>
    </div>
    <div>
      <button @click="getSomeThing()">获取某些东西</button>
    </div>
    <h3>{{title}}</h3>
    <ul>
      <li><router-link to="/routerPage">路由测试页面</router-link></li>
      <li><router-link to="/ElementUIPage">Element测试页面</router-link></li>
    </ul>
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
        mounted(){
            console.log(process.env.MOCK);
        },
        methods:{
            next(){
                this.$router.go(1);
            },
            prevent(){
                this.$router.go(-1);
            },
            handleAddClick(n){
                this.$store.commit('mutationsAddCount',n);
            },
            handleReduceClick(n){
                this.$store.commit('mutationsReduceCount',n);
            },
            handleActionsAdd(n){
                this.$store.dispatch('actionsAddCount',n)
            },
            handleActionsReduce(n){
                this.$store.dispatch('actionsReduceCount',n)
            },
            getSomeThing(){
                this.$ajax.get('/list/index').then(function (res) {
                    console.log(res);
                })
            }
        }
    }
</script>

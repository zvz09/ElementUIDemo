import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Word from '@/components/Word'
import Router1 from '@/components/Router1'
import Router2 from '@/components/Router2'
import Router3 from '@/components/Router3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path:'/index',
      component:Word
    },
    {
      path:'/word',
      component:Word,
      children:[
        {
          path:'router1',
          component:Router1
        },
        {
          path:'router1/:id',
          component:Router1
        },
        {
          path:'router2/:id',
          component:Router2
        },
        {
          path:'router2',
          component:Router2
        },
        {
          path:'router3',
          component:Router3
        },
        {
          path:'router',  // path路径
          redirect:'/word/router3'  // 重定向指向的路径
        },
        {
          path:'router5',
          redirect:()=>{
            console.log(arguments);
            return '/word/router3';
          }
        }

      ]
    }

  ]
})

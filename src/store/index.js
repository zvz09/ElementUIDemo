import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
      count: 1
    },
    //mutations里面的参数，第一个默认为state，接下来的为自定义参数。
    mutations: {
      mutationsAddCount(state, n = 0) {
        return (state.count += n)
      },
      mutationsReduceCount(state, n = 0) {
        return (state.count -= n)
      }
    },
    //这里我在两个方法中使用了两个不同的参数，一个是context，它是一个和store对象具有相同对象属性的参数
    actions: {
      actionsAddCount(context, n = 0) {
        console.log(context)
        return context.commit('mutationsAddCount', n)
      },
      actionsReduceCount({commit}, n = 0) {
        return commit('mutationsReduceCount', n)
      }
    },
    //我们一般使用getters来获取我们的state
    getters: {
      getterCount(state, n = 0) {
        return (state.count += n)
      }
    }
  }
)

export default store;


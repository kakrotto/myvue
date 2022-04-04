import { createStore } from 'vuex'

const admin = {
  // namespaced:true,
  state: {
    myNum:0
  },
  getters: {
    getNum:(state) => state.myNum+10
  },
  mutations: {
    // 接受参数 params，params类型都可以
    addNum(state, params){
      state.myNum += params.name
      console.log(params)
    },
    delNum(state){
      state.myNum --
    }
  },
  actions: {
    asyncAdd(context, params){
      setTimeout(() => {
        context.commit('delNum')
        console.log(params)
      }, 5000);
    }
  },
}

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {

  },
  modules: {
    admin
  }
})

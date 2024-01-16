import Vue from 'vue'
import Vuex from 'vuex'

Vuex.use(Vuex);

// 公共state对象，存储所有组件的状态
const state={
    user:{
        name:''
    }
}

// 唯一取值的方法，计算属性
const getters={
    getUser(state){
        return state.user;
    }
}

// 唯一可以修改state值的方法，同步阻塞
const mutations={
    updatedUser(state,user) {
        state.user = user;
    },
}

//异步调用mutations方法 
const actions={
    asyncUpdateUser(context,user){
        context.commit('updateUser',user)
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
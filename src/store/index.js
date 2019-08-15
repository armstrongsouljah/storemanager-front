import Vue from 'vue'
import Vuex from 'vuex'
import loginStore from './modules/loginModule'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{},
    actions:{},
    mutations:{},
    getters:{},
    modules:{
        loginStore,
    }
})

export default store

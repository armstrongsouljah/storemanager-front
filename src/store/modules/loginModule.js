import AxiosCalls from '../../utils/index'

export default {
    state: {
        userDetails: null,
        error: null
    },
    getters: {
        GET_DETAILS (state) {
            return state.userDetails
        },
        GET_ERROR (state) {
            return state.error
        }
    },
    mutations: {
       SET_DETAILS (state, payload) {
           state.userDetails = payload
       },
       SET_ERROR (state, payload) {
           state.error = payload
       }
    },
    actions: {
         async loginUser ({commit}, data) {
             let response = await AxiosCalls.post('auth/login', data)
             if(response.status == 200){
                 commit('SET_DETAILS', response.data)
             }
             commit('SET_ERROR', response.data.message)
         }
    }
}
<template>
    <div>
        <b-modal id="login-modal" 
                title="Store Manager Login"
                @ok.prevent="handleOk">
            <b-form-input v-model="username" type="text" placeholder="Enter username"></b-form-input> <br/>
            <b-form-input v-model="password" type="password" placeholder="Enter password"></b-form-input>
            <p v-if="error" class="text-danger">{{error}}</p>
        </b-modal>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    data () {
        return {
         username: '',
         password: '',
         error: null
        }
    },
    methods: {
        ...mapActions(['loginUser',]),
        handleOk (e) {
            const userDetails = {
                username: this.username,
                password: this.password
            }
            this.loginUser(userDetails)
        }
    },
    computed: {
        ...mapGetters(['GET_DETAILS', 'GET_ERROR'])

    },
    watch: {
      GET_DETAILS(newVal, oldVal) {
          console.log('logged in', newVal)
          this.$root.$emit('bv::hide::modal', 'login-modal', '#btnShow')
 
      },
      GET_ERROR (newVal, oldVal) {
        this.error = newVal
      }
    }
}
</script>
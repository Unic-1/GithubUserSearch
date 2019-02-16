<template>
  <div class="md-layout md-gutter">
    
    <div class="md-layout-item md-size-30"></div>
    <div class="md-layout-item">
      <div class="md-layout-item">
        <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" height="300" width="300" style="margin-top:  70px;">
      </div>
      <div class="md-layout-item" style="margin-top: 30px;">
        <h1>Login</h1>
      </div>
      <div class="md-layout-item">
        <md-field md-inline>
          <label>Username</label>
          <md-input v-model="username"></md-input>
        </md-field>
      </div>
      <div class="md-layout-item">
        <md-field md-inline>
          <label>Password</label>
          <md-input v-model="password"></md-input>
        </md-field>
      </div>
    <div  class="md-layout-item">
      <md-button class="md-primary" @click="createUser()">Login</md-button>
    </div>
    <div  class="md-layout-item">
      <md-button class="md-primary" @click="createAccount()">Create Account</md-button>
    </div>
    </div>
    <div class="md-layout-item md-size-30"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import { MdField, MdHighlightText, MdIcon, MdProgress, MdButton } from 'vue-material/dist/components'
import axios from 'axios'
import { mapMutations } from 'vuex'

Vue.use(MdField)
Vue.use(MdIcon)
Vue.use(MdProgress)
Vue.use(MdButton)
Vue.use(MdHighlightText)

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
      ...mapMutations(['setIsLoggedIn', 'setUsername']),
    createUser() {        
    //   axios.post('localhost:3000/login', {
    //     username: 'RIGDEN',
    //     password: '12345'
    //   }).then( res => {
    //     console.log(res)
    //   })
    //   .catch( e => {
    //     console.log(e)
    //   })
    axios.get('localhost:3020/products/1').then(res=>console.log(res))
    .catch(e=>console.log(e))
    // this.setIsLoggedIn(true)
    // this.setUsername(this.username)
    // this.$router.push('/search')
    },
    createAccount() {
        this.$router.push('/signup')
    }
  }
}
</script>


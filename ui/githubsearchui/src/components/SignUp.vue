<template>
  <div class="md-layout md-gutter">
    
    <div class="md-layout-item md-size-30"></div>
    <div class="md-layout-item">
      <div class="md-layout-item">
        <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" height="300" width="300" style="margin-top:  70px;">
      </div>
      <div class="md-layout-item" style="margin-top: 30px;">
        <h1>Create Account</h1>
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
          <md-input v-model="password" type="password"></md-input>
        </md-field>
      </div>
    <div  class="md-layout-item">
      <md-button class="md-primary" @click="createUser()">Create</md-button>
    </div>
    <div  class="md-layout-item">
      <md-button class="md-primary" @click="login()">Already have an account</md-button>
    </div>
    </div>
    <div class="md-layout-item md-size-30"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import { MdField, MdHighlightText, MdIcon, MdProgress, MdButton } from 'vue-material/dist/components'
import axios from 'axios'
import {mapMutations} from 'vuex'

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
      ...mapMutations(['setIsLoggedIn']),
    createUser() {
      this.setIsLoggedIn(true)
    this.$router.push('/search')

    //   axios.post('localhost:3000/signup', {
    //     username: this.username,
    //     password: this.password
    //   }).then( res => {
    //     console.log(res)
    //   })
    //   .catch( e => {
    //     console.log(e)
    //   })
    },
    login() {
      this.$router.push('/login')
    }

  }
}
</script>


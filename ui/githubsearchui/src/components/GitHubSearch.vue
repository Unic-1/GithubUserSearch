<template>
  <div>
    <md-toolbar class="md-accent" md-elevation="1">
      <h3 class="md-title" style="flex: 1">Hi! {{getUsername}}</h3>
      <!-- <span class="md-title">Hi! {{getUsername}}</span> -->
      <md-button class="md-primary" @click="logout()">Logout</md-button>
    </md-toolbar>
    <div>
      <h1>Search GitHub Users</h1>
    </div>
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-15"></div>
      <div class="md-layout-item">
        <md-field md-inline>
          <label>Enter username...</label>
          <md-input v-model="inline"></md-input>
        </md-field>
      </div>
      <div class="md-layout-item md-size-10 progress">
        <md-progress-spinner md-mode="indeterminate" :md-diameter="diameter" :md-stroke="3"></md-progress-spinner>
      </div>
      <div class="md-layout-item md-size-15"></div>
    </div>
    <div v-show="inline !== null">
      <md-card v-if="isValidUser" class="md-primary">
        <md-card-header>
          <md-card-media>
            <img :src="image" class="img-avatar" alt="Avatar">
          </md-card-media>
        </md-card-header>

        <md-list>
          <md-list-item>
            <md-icon>perm_identity</md-icon> <span class="md-list-item-text">Name</span>
            <span class="md-list-item-text">{{name | validate}}</span>
          </md-list-item>

          <md-list-item>
            <md-icon>location_city</md-icon>
            <span class="md-list-item-text">Company</span>
            <span class="md-list-item-text">{{company | validate}}</span>
          </md-list-item>

          <md-list-item>
            <md-icon>book</md-icon>
            <span class="md-list-item-text">Blog</span>
            <span class="md-list-item-text">{{blog | validate}}</span>
          </md-list-item>

          <md-list-item>
            <md-icon>location_on</md-icon>
            <span class="md-list-item-text">Location</span>
            <span class="md-list-item-text">{{location | validate}}</span>
          </md-list-item>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Email</span>
            <span class="md-list-item-text">{{email | validate}}</span>
          </md-list-item>

          <md-list-item>
            <md-icon>attach_money</md-icon>
            <span class="md-list-item-text">Hireable</span>
            <span class="md-list-item-text">{{hireable | validate}}</span>
          </md-list-item>

          <md-list-item>
            <md-icon>info</md-icon>
            <span class="md-list-item-text">Bio</span>
            <span class="md-list-item-text">{{bio | validate}}</span>
          </md-list-item>

          <md-list-item>
            <md-icon>tab</md-icon>
            <span class="md-list-item-text">Public Repos</span>
            <span class="md-list-item-text">{{public_repos}}</span>
          </md-list-item>
          <md-list-item>
            <md-icon>receipt</md-icon>
            <span class="md-list-item-text">Public Gists</span>
            <span class="md-list-item-text">{{public_gists}}</span>
          </md-list-item>

          <md-list-item>
            <md-icon>supervised_user_circle</md-icon>
            <span class="md-list-item-text">Followers</span>
            <span class="md-list-item-text">{{followers}}</span>
          </md-list-item>

          <md-list-item>
            <md-icon>supervisor_account</md-icon>
            <span class="md-list-item-text">Following</span>
            <span class="md-list-item-text">{{following}}</span>
          </md-list-item>
        </md-list>
      </md-card>
      <md-card v-else class="md-primary" style="padding: 20px">
        <h1>The user you have enetered is Invalid. Please try again.</h1>
      </md-card>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { MdField, MdHighlightText, MdCard, MdIcon, MdList, MdProgress, MdButton } from 'vue-material/dist/components'
import axios from 'axios'
import { mapGetters, mapMutations } from 'vuex'


Vue.use(MdField)
Vue.use(MdCard)
Vue.use(MdIcon)
Vue.use(MdList)
Vue.use(MdProgress)
Vue.use(MdButton)
Vue.use(MdHighlightText)

export default {
  name: 'GitHubSearch',
  data() {
    return {
      inline: null,
      isValidUser: true,
      image: '',
      diameter: 0,
      name: '',
      company: null,
      blog: "",
      location: null,
      email: null,
      hireable: null,
      bio: null,
      public_repos: 0,
      public_gists: 0,
      followers: 0,
      following: 0,
    }
  },
  mounted() {
    if(!this.getIsLoggedIn) {
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapGetters(['getIsLoggedIn', 'getUsername'])
  },
  methods: {
    ...mapMutations(['setIsLoggedIn']),
    logout() {
      this.setIsLoggedIn(false)
      this.$router.push('/login')
    }
  },
  watch: {
    inline() {
      this.diameter = 30
      axios.get(`https://api.github.com/users/${this.inline}`)
      .then(res => {
        // Hide the progress spinner
        this.diameter = 0
        this.isValidUser = true

        // User Data
        const userData = res.data;
        // Read user data
        this.image = userData.avatar_url
        this.name = userData.name
        this.company = userData.company
        this.blog = userData.blog
        this.location = userData.location
        this.email = userData.email
        this.hireable = userData.hireable
        this.bio = userData.bio
        this.public_repos = userData.public_repos
        this.public_gists = userData.public_gists
        this.followers = userData.followers
        this.following = userData.following
      }).catch(e => {
        this.diameter = 0
        this.isValidUser = false
        console.log(e)
      })
    }
  },
  filters: {
    validate(text) {
      if(text === null || text.trim() === '') {
        return 'N/A'
      }
      return text
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.progress {
  margin-top: 20px;
}

.md-list.md-theme-default {
    background-color: #448AFF;
    color: white;
}

.md-list-item-text {
  color: white
}
</style>

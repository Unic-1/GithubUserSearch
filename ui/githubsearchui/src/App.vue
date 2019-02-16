<template>
  <div id="app">
    <md-toolbar class="md-accent" md-elevation="1">
      <span class="md-title">Hi!</span>
      <md-button class="md-primary">Create</md-button>
    </md-toolbar>
    <GitHubSearch/>
  </div>
</template>

<script>
import Vue from 'vue'
import GitHubSearch from './components/GitHubSearch.vue'
import { MdToolbar } from 'vue-material/dist/components'

Vue.use(MdToolbar)

export default {
  name: 'app',
  components: {
    GitHubSearch
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

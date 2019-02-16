import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const login = require('./components/Login.vue').default
const signup = require('./components/SignUp.vue').default
const githubSearch = require('./components/GitHubSearch.vue').default


const routes = [
    { path: '/login', component: login },
    { path: '/signup', component: signup },
    { path: '/search', component: githubSearch}
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = new VueRouter({
    routes // short for `routes: routes`
  })

export default router
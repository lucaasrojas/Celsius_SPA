import Vue from 'vue'
import App from './App.vue'

//Import components
import Home from './components/Home.vue'
import Musica from './components/Musica.vue'
import Peliculas from './components/Peliculas.vue'

//Import Router
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {path: '/', component: Home},
    {path: '/musica', component: Musica},
    {path: '/peliculas', component: Peliculas}
  ]

})

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

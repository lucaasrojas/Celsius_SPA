import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false

//Import components
import Home from './components/Home.vue'
import Musica from './components/Musica.vue'
import Peliculas from './components/Peliculas.vue'
import Galerias from './components/Galerias.vue'

//Import Router
import VueRouter from 'vue-router'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({
  routes: [
    {path: '/', component: Home},
    {path: '/musica', component: Musica},
    {path: '/peliculas', component: Peliculas},
    {path: '/galerias', component: Galerias}
  ]

})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

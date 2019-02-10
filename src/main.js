import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//Import components
import Home from './components/Home.vue'
import Musica from './components/Musica.vue'
import Peliculas from './components/Peliculas.vue'
import Galerias from './components/Galerias.vue'
import galeriaGifs from './components/Galerias/gifs.vue'
import galeriaGTAIV from './components/Galerias/gtaiv.vue'
import educativo from './components/Educativo.vue'
import listacontador from './components/Aplicaciones/ListaContador.vue'

//Import Router
import VueRouter from 'vue-router'

//Import Bootstrap
import 'bootstrap'

//Import Vuetify
import Vuetify from 'vuetify'

Vue.use(VueRouter);
Vue.use(Vuetify);

const router = new VueRouter({
  routes: [
    {
      path: '/', 
      component: Home, 
      meta: {
        title: "Home Page"
      }
    },
    {path: '/musica', component: Musica},
    {path: '/peliculas', component: Peliculas},
    {path: '/galerias', component: Galerias},
    {path: '/galeriaGifs', component: galeriaGifs},
    {path: '/galeriaGTAIV', component: galeriaGTAIV},
    {path: '/educativo', component: educativo},
    {path: '/listacontador', component: listacontador}

  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

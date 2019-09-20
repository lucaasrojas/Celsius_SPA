import Vue from 'vue'
import App from './App.vue'
//import firebase from 'firebase'


Vue.config.productionTip = false

//Import components
import Home from './components/pages/Home.vue'
import Musica from './components/pages/Musica.vue'
import Peliculas from './components/pages/Peliculas.vue'
import Galerias from './components/pages/Galerias.vue'
import galeriaGifs from './components/Galerias/gifs.vue'
import galeriaGTAIV from './components/Galerias/gtaiv.vue'
import educativo from './components/pages/Educativo.vue'
import listacontador from './components/Aplicaciones/ListaContador.vue'
import todolist from './components/Aplicaciones/Todo-list.vue'
import usuarios from './components/Aplicaciones/Usuarios.vue'
import login from './components/Login.vue'
import administrator from './components/Admin.vue'
import recetas from './components/pages/Recetas.vue'
import store from './components/pages/Store.vue'

//Import Router
import VueRouter from 'vue-router'

//Import Bootstrap
import 'bootstrap'
//Import Vuetify
import Vuetify from 'vuetify'

Vue.use(VueRouter);
Vue.use(Vuetify);

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// El fas agrega todos los iconos solid
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
 
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '*', 
      redirect: '/home'
    },
    {path: '/home', component: Home},
    {path: '/musica', component: Musica},
    {path: '/peliculas', component: Peliculas},
    {path: '/galerias', component: Galerias},
    {path: '/store', component: store},
    {path: '/galeriaGifs', component: galeriaGifs},
    {path: '/galeriaGTAIV', component: galeriaGTAIV},
    {path: '/educativo', component: educativo},
    {path: '/listacontador', component: listacontador},
    {path: '/todolist', component: todolist},
    {path: '/usuarios', component: usuarios},
    {path: '/login', component: login},
    {path: '/recetas', component: recetas},
    {path: '/admin', component: administrator, meta: {admin: true}}

  ]
})

new Vue({
  data: {
    soyAdmin: false
  },
  router,
  render: h => h(App)
}).$mount('#app')


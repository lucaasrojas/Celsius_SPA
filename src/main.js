import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

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
import todolist from './components/Aplicaciones/Todo-list.vue'
import usuarios from './components/Aplicaciones/Usuarios.vue'
import login from './components/Login.vue'
import administrator from './components/Admin.vue'

//Import Router
import VueRouter from 'vue-router'

//Import Bootstrap
import 'bootstrap'

//Import Vuetify
import Vuetify from 'vuetify'

import VueFire from 'vuefire';

Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(VueFire);

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
    {path: '/galeriaGifs', component: galeriaGifs},
    {path: '/galeriaGTAIV', component: galeriaGTAIV},
    {path: '/educativo', component: educativo},
    {path: '/listacontador', component: listacontador},
    {path: '/todolist', component: todolist},
    {path: '/usuarios', component: usuarios},
    {path: '/login', component: login},
    {path: '/admin', component: administrator, meta: {admin: true}}

  ]
})

firebase.auth().onAuthStateChanged(function(){
  new Vue({
    data: {
      soyAdmin: false
    },
    router,
    render: h => h(App)
  }).$mount('#app')
})


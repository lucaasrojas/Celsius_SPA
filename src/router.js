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
import videoCard from './components/Shared/videoCard.vue'

// SHARED

import product from './components/Shared/product.vue'

//Import Router
import VueRouter from 'vue-router'

export default new VueRouter({
    routes: [
      {
        path: '*', 
        redirect: '/home'
      },
      {path: '/home', name: 'home', component: Home},
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
      {path: '/login', name: "Login" ,component: login},
      {path: '/recetas', component: recetas},
      {path: '/admin', component: administrator, meta: {admin: true}},
      {path: '/product', name:'product', component: product, props: true},
      {path: '/videoCard', name:'videoCard', component: videoCard, props: true}

  
    ]
  })
  
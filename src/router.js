//Import components
import Home from './components/pages/Home.vue'
import Musica from './components/pages/Musica.vue'
import Peliculas from './components/pages/Peliculas.vue'
import educativo from './components/pages/Educativo.vue'
import listacontador from './components/Aplicaciones/ListaContador.vue'
import todolist from './components/Aplicaciones/Todo-list.vue'
import usuarios from './components/Aplicaciones/Usuarios.vue'
import login from './components/Login.vue'
import administrator from './components/Admin.vue'
import recetas from './components/pages/Recetas.vue'
import store from './components/pages/Store.vue'
import videoCard from './components/Shared/videoCard.vue'
import adminPanel from './components/pages/adminPanel.vue'
import spotifylist from './components/Aplicaciones/SpotifyList.vue'
import responsiveLoginFormComponent from './components/sitesComponents/responsiveLoginForm.vue'
import projects from '@/components/pages/Projects.vue'

// APPS

import cotizacionDolar from './components/Aplicaciones/cotizacionDolar.vue'

// SHARED

import product from './components/Shared/product.vue'

//Import Router
import VueRouter from 'vue-router'

export default new VueRouter({
    mode: 'history',
    routes: [
      {path: '/', component: Home},
      {path: '/home', name: 'home', component: Home},
      {path: '/musica', name: 'musica', component: Musica},
      {path: '/peliculas', name: 'peliculas', component: Peliculas},
      {path: '/store', name: 'store', component: store},
      {path: '/educativo', name: 'educativo', component: educativo},
      {path: '/listacontador', name: 'listacontador', component: listacontador},
      {path: '/todolist', name: 'todolist', component: todolist},
      {path: '/usuarios', name: 'usuarios', component: usuarios},
      {path: '/login', name: "Login" ,component: login},
      {
        path: '/spotifyList', 
        name: "spotifyList",
        component: spotifylist
      },
      {path: '/recetas', name: 'recetas', component: recetas},
      {
        path: '/admin', 
        component: administrator, 
        meta: { 
          admin: true
        }
      },
      {
        path: '/product', 
        name:'product', 
        component: product, 
        props: true
      },
      {
        path: '/videoCard', 
        name:'videoCard', 
        component: videoCard, 
        props: true
      },
      { 
        path: '/adminPanel', 
        name:'adminPanel', 
        component: adminPanel
      },
      { 
        path: '/sites/responsiveLoginForm', 
        name:'responsiveLoginFormComponent', 
        component: responsiveLoginFormComponent, 
        props: true
      },
      { 
        path: '/apps/cotizacionDolar', 
        name:'cotizacionDolar', 
        component: cotizacionDolar, 
        props: true
      },
    ]
  })
  
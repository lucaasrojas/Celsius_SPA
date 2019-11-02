import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from '@/router.js'
import firebase from 'firebase';
import config from '../config/firebase_config';
Vue.config.productionTip = false

// Init firebase
firebase.initializeApp(config.MainDB);

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


new Vue({
  data: {
    soyAdmin: false,
    usuariosDB: firebase.database().ref('usuarios'),
    recetasDB: firebase.database().ref('recetas'),
  },
  created() {
    console.log("VUE CREATED", )
  },
  router,
  render: h => h(App)
}).$mount('#app')


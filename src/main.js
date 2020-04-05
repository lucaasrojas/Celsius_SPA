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
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// El fas agrega todos los iconos solid
library.add(fas, fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)
 
Vue.config.productionTip = false


async function getDBTables(table) {
  let values = [];
  await firebase.database().ref(table).once('value',(data)=>{
    values = data.val()
  });

  return values;
}
let dbPagesConfig , dbMainConfig;
var pagesPromise = new Promise(async (resolve, reject) => {
  resolve(await getDBTables('pages'));
}); 

var configPromise = new Promise(async (resolve, reject) => {
 resolve(await getDBTables('config'));
}); 

Promise.all([pagesPromise, configPromise]).then(values => { 
  dbPagesConfig = values[0];
  dbMainConfig = values[1];

  new Vue({
    data: {
      dbConfig: dbMainConfig,
      dbPages: dbPagesConfig,
      loginStatus: false,
      lang: "es"
    },
    async created(){
    },
    router,
    render: h => h(App)
  }).$mount('#app')
});

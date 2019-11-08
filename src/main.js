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
    dbPages: null,
    dbConfig: null,
    loginStatus: false
  },
  created() {
    this.dbPages = getDBTables('pages');
    this.dbConfig = getDBTables('config');

    console.log("VUE CREATED", this.dbConfig)
  },
  router,
  render: h => h(App)
}).$mount('#app')

function getDBTables(table) {
  let values = {};
  firebase.database().ref(table).once('value',(data)=>{
    data.forEach(item => {
      values[item.key] = item.val();
    })
  });

  return values;
}
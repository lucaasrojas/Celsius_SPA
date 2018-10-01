<template>
  <div id="app">
     <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
    <b-container style="width: 95%; margin: 5px; heigth: 10px">
        <b-row>
          <b-col><img src="@/assets/images/celsius.png" class="logoImg"></b-col>
        </b-row>
          <v-navigation-drawer v-model="sideNav">
            <v-list>
        <b-row class="row barraMenu">
              <v-list-tile v-for="item in menuItems" :key="item.title">
                <!-- <v-list-tile-action>
                  <v-icon> {{ item.icon }} </v-icon>
                </v-list-tile-action> -->
                <!--<v-list-tile-content>-->
                 <b-col><router-link class="menuLink" v-bind="{ to: item.url}"><b>{{ item.title }}</b></router-link></b-col>
                <!--</v-list-tile-content>-->
              </v-list-tile>
        </b-row>
            </v-list>
          </v-navigation-drawer>
          <v-toolbar dark class="primary">
            <v-toolbar-side-icon @icon.native.stop="sideNav = !sideNav"></v-toolbar-side-icon>
            
          </v-toolbar>

    </b-container>

    <router-view></router-view>
 </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  data() {
    return {
      sideNav: false,
      menuItems: [
        {icon: '', title: "Home", url: "/"},
        {icon: '', title: "Musica", url: "/musica"},
        {icon: '', title: "Peliculas", url: "/peliculas"},
        {icon: '', title: "Galerias", url: "/galerias"},
        {icon: '', title: "Impresora 3D", url: "/impresora3d"},

      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  box-sizing: content-box;
	
}

.barraMenu {
  background-color: #2c3e50;
  border: 5px;
  border-color: black;
  border-radius: 10px;
  text-decoration-color: white;
  
}

.menuLink {
  color: white;
}

.logoImg {
  text-align: center
}

body {
  background-image: url("./assets/images/general-background.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>

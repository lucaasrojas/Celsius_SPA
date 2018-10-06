<template>
  <div id="app">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
    <div class="container">
        <div class="row" >
          <div class="col-12">
            <img src="@/assets/images/celsius.png" class="logoImg">
          </div>
        </div>
          <div class="row barraMenu">
                <div v-for="item in menuItems" :key="item.title" >
                  <!-- <v-list-tile-action>
                    <v-icon> {{ item.icon }} </v-icon>
                  </v-list-tile-action> -->
                  <!--<v-list-tile-content>-->
                  <div class="col-sm">
                    <router-link class="menuLink" v-bind="{ to: item.url}"><b>{{ item.title }}</b></router-link>
                  </div>
                  <!--</v-list-tile-content>-->
                </div>
          </div>        
    </div>
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
        {icon: '', title: "Educativo", url: "/educativo"}
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
  text-align: center;
  display: inline-flex;
}

.container {
  padding: 2px;
}

.menuLink {
  color: white;
  text-align: center;
}

.logoImg {
  text-align: center
}

body {
  background-image: url("./assets/images/general-background.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>

<template>
  <div id="app">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <div class="container">
        <div class="row">
          <div class="col-sm">
              <img src="@/assets/images/celsius.png" class="logoImg">
          </div>
        </div>
        <div class="row barraMenu">
            <div  v-for="item in menuItems" :key="item.title">
              <router-link class="menuLink" v-bind="{ to: item.url}"><b>{{ item.title }}</b></router-link>
            </div>     
        </div>
    </div>
    
    <router-view></router-view>
 </div>
</template>

<script>
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

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
        {icon: '', title: "Educativo", url: "/educativo"},
        {icon: '', title: "ListaFrutas", url: "/listafrutas"}
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
  font-size: 20px;
  text-decoration: none;
  padding: 5px;
}

.logoImg {
  text-align: center
}

.subtitulo {
    margin: 5px;
    border-style: solid;
    border-width: 5px;
    border-color:blanchedalmond;
    border-radius: 25px;
    background-color: darkgray;
    color: blanchedalmond;
}

.imgGaleria {
  max-width: 400px;
}

body {
  background-image: url("./assets/images/general-background.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>

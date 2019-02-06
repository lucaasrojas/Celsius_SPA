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
        <div class="navbar barraMenu"  v-for="item in menuItems" :key="item.title">
            <div v-if="item.subitem == false">
              <router-link class="menuLink" v-bind="{ to: item.url}"><b>{{ item.title }}</b></router-link>
            </div>
            <div v-else>
              <div class="dropdown">
                <button class="dropbtn">Dropdown
                  <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content" >
                  <router-link class="menuLink" v-bind="{ to: item.url}"><b>{{ item.title }}</b></router-link>
                </div>
              </div>
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
        {icon: '', subitem: false, title: "Home", url: "/"},
        {icon: '', subitem: false, title: "Musica", url: "/musica"},
        {icon: '', subitem: false, title: "Peliculas", url: "/peliculas"},
        {icon: '', subitem: false, title: "Galerias", url: "/galerias"},
        {icon: '', subitem: false, title: "Impresora 3D", url: "/impresora3d"},
        {icon: '', subitem: false, title: "Educativo", url: "/educativo"},
        {icon: '', subitem: true, title: "ListaFrutas", url: "/listafrutas"}
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



/* The dropdown container */
.dropdown {
  float: left;
  overflow: hidden;
}

/* Dropdown button */
.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
}

/* Add a red background color to navbar links on hover */
.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: red;
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}
</style>

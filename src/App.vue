<template>
  <div id="app">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">

          <router-link  class="navbar-brand" to="/"><b>Celsius</b></router-link>
          
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <div  v-for="item in menuItems" :key="item.title">
                <li class="nav-item active" v-if="item.disponible == true">
                  <router-link  class="nav-link" v-bind="{ to: item.url}"><b>{{ item.title }}</b></router-link>
                </li>
                </div>

                <li class="nav-item dropdown"  v-for="item in dropDowns" :key="item">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <b>{{item.title}}</b>
                  </a> 

                  <div class="dropdown-menu" aria-labelledby="navbarDropdown" >
                    <div v-for="sItem in item.subItems" :key="sItem">
                      <router-link class="dropdown-item" v-bind="{ to: sItem.url}"><b>{{ sItem.title }}</b></router-link>
                    </div>
                  </div>
                </li>
              </ul>
          </div>
        </nav>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
 </div>
</template>

<script>
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'


export default {
  name: 'App',

  data() {
    return {
      sideNav: false,
      menuItems: [
        {icon: '', title: "Musica", url: "/musica", disponible: true},
        {icon: '', title: "Peliculas", url: "/peliculas", disponible: false},
        {icon: '', title: "Impresora 3D", url: "/impresora3d", disponible: false},
        {icon: '', title: "Educativo", url: "/educativo", disponible: true},
      ],
      dropDowns: [
        {
          title: "Galerias",
          subItems: [
            {title: "GIFS", url: "/galeriaGifs", disponible: true},
            {title: "GTAIV", url: "/galeriaGTAIV", disponible: true}
          ]
        },
        {
          title: "Aplicaciones",
          subItems: [
            {title: "Lista con contador", url: "/listaContador", disponible: true},
            {title: "ToDo List", url: "/todolist", disponible: true},
            {title: "Usuarios", url: "/usuarios", disponible: false}
          ]
        }

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

<template>
  <b-container id="app">
     <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
    <b-container style="width: 90%">
        <b-row>
          <b-col><img src="@/assets/images/celsius.png" class="logoImg"></b-col>
        </b-row>
        <b-row class="row barraMenu">
            <b-col><router-link to="/">Home</router-link></b-col>
            <b-col><router-link to="/musica">Musica</router-link></b-col>
            <b-col><router-link to="/peliculas">Peliculas</router-link></b-col>
            <b-col><router-link to="/galerias">Galerias</router-link></b-col>
        </b-row>
    </b-container>

    <router-view></router-view>
 </b-container>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  
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
}

.logoImg {
  text-align: center
}

body {
  background-image: url("./assets/images/general-background.jpg");
}
</style>

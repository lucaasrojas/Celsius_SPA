<template>
  <div id="app" class="row">
     <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
  <div class="col-sm">
    <div class="row" >
      <div class="col-sm">
        <img src="@/assets/images/celsius.png" class="logoImg">
      </div>
    </div>
    <div class="row barraMenu">
      <div class="col-sm">
        <router-link to="/">Home</router-link>
      </div>
      <div class="col-sm">
        <router-link to="/musica">Musica</router-link>
      </div>
      <div class="col-sm">
        <router-link to="/peliculas">Peliculas</router-link>
      </div>
    </div>

    <router-view></router-view>
    
    </div>
  </div>
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
  text-align: center
}

.logoImg {
  text-align: center
}

body {
  background-image: url("http://images.unsplash.com/photo-1460602594182-8568137446ce?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=420ab23d79ab3e4696fdaacfd3a77be0")
}
</style>

<template>
  <div id="app">
        <router-link to="/">Home</router-link>
        <router-link to="/musica">Musica</router-link>
        <router-link to="/peliculas">Peliculas</router-link>
        <hr />
    <router-view></router-view>
  </div>
</template>

<script>


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
	
}

body {
  background-image: url("http://images.unsplash.com/photo-1460602594182-8568137446ce?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=420ab23d79ab3e4696fdaacfd3a77be0")
}
</style>

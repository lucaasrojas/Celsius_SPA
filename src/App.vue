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
	background-image: "images/remix.png"
}

#body {
}
</style>

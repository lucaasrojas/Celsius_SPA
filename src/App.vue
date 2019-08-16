<template>
  <div id="app">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <navbar></navbar>
    <div class="container">
      <router-view></router-view>
    </div>
 </div>
</template>

<script>
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    navbar: navbar
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: content-box;
	
}

.container {
  padding: 2px;
}

body {
  background-image: url("./assets/images/general-background.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>

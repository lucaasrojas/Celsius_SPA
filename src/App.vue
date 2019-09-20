<template>
  <div id="app">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <jumbotron></jumbotron>
    <div class="container">
      <router-view class=" position-sticky"></router-view>
    </div>
 </div>
</template>

<script>
import Jumbotron from './components/Jumbotron.vue';

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

export default {
  name: 'App',
  components: {
    jumbotron: Jumbotron
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
  box-sizing: content-box;
	
}

.container {
  padding: 2px;
}

body {
  background-image: url("./assets/images/general-background.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
/*
    height: 100%;
background-image: linear-gradient(-180deg, #cccccc 0%, #5e5e5e 25%, #363636 100%);
background-size: cover;
*/
}

.backgroun-header{
  background-color: black;
  filter: opacity(0.5);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
}
</style>

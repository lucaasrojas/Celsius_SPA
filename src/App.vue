<template>
  <div id="app">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <jumbotron :mainTitle="mainTitle" :mainDescription="mainDescription" class="header"></jumbotron>
    <div class="container">
      <router-view v-on:receiveData="receiveData"></router-view>
    </div>
 </div>
</template>

<script>
import Jumbotron from '@/components/Shared/Jumbotron.vue';

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

export default {
  name: 'App',
  components: {
    jumbotron: Jumbotron
  },
  methods: {
    receiveData(data) {
      this.mainTitle = data.mainTitle;
      this.mainDescription = data.mainDescription;
    }
  },
  data() {
    return {
      mainTitle: '',
      mainDescription: ''
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
  box-sizing: content-box;
  background-color:white;
  min-height: 100vh;
}

.container {
  height: 100%;
}

.header {
  background-color: rgba(0 , 0, 0, 0.5);
}
</style>

<template>
  <div id="app">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <navbar class="navbarFixed"></navbar>
    <jumbotron style="margin-top: 55px" :mainTitle="mainTitle" :mainDescription="mainDescription" class="header"></jumbotron>
      <router-view v-on:receiveData="receiveData" class="content"></router-view>
    <pageFooter></pageFooter>
  </div>
</template>

<script>
import Jumbotron from '@/components/Shared/Jumbotron.vue';
import navbar from '@/components/Shared/Navbar.vue'
import pageFooter from '@/components/Footer.vue'


import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

export default {
  name: 'App',
  components: {
    jumbotron: Jumbotron,
    navbar: navbar,
    pageFooter: pageFooter
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

.navbarFixed{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  z-index:9989;
}
</style>

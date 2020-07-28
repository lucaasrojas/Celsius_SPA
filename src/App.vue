<template>
  <div id="app">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
    <navbar class="navbarFixed"></navbar>
    <jumbotron  :mainTitle="mainTitle" :mainDescription="mainDescription" class="header"></jumbotron>
      <router-view v-on:jumbotronData="jumbotronData" class="content"></router-view>
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
  el: 'app',
  name: 'App',
    data() {
      return {
        pagesConfiguration: this.$root.dbPages,
        mainTitle: '',
        mainDescription: ''
      }
    },
  components: {
    jumbotron: Jumbotron,
    navbar: navbar,
    pageFooter: pageFooter,
    
  },
  methods: {
    jumbotronData(data) {
      this.mainTitle = data.mainTitle;
      this.mainDescription = data.mainDescription;
    }
  },
  mounted() {
    this.$el.style.setProperty('--bg-color', this.$root.dbConfig.backgroundColor)
    this.$el.style.setProperty('--sectionCard-color', this.$root.dbConfig.sectionCardsColor)
    this.$el.style.setProperty('--navbar-bg', this.$root.dbConfig.navbarColor)
    this.$el.style.setProperty('--mainColor', this.$root.dbConfig.navbarColor)
    this.$el.style.setProperty('--secondaryColor', this.$root.dbConfig.backgroundColor)

  }
}
</script>

<style>
:root {
  --bg-color: black;
  --sectionCard-color: black;
  --navbar-bg: black;
  --mainColor: transparent;
  --secondaryColor: transparent;
}
#app {
  font-family: 'Josefin Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: content-box;
  background-color: var(--bg-color);
  min-height: 150vh;
}

.container {
  height: 100%;
}

.header {
  background-color: rgba(0 , 0, 0, 0.5);
  margin-top: 49px;
}

.navbarFixed{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height: 49px;
  z-index:10;
}
</style>

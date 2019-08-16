<template>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

      <router-link  class="navbar-brand navbar-element-padding" to="/"><b>Celsius</b></router-link>
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item active navbar-element-padding" v-for="item in navbarConfig.menuItems" :key="item.title" >
              <router-link  class="nav-link" v-if="item.disponible == true" v-bind="{ to: item.url}"><b>{{ item.title }}</b></router-link>
            </li>

            <li class="nav-item dropdown navbar-element-padding active"  v-for="item in navbarConfig.dropDowns" :key="item">
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
</template>

<script>
import navbarConfig from '../assets/navbarItems.json';
export default {
data() {
    return {
      sideNav: false,
      navbarConfig: navbarConfig
    }
},
  methods: {
    logout(){
      this.$root.$data.soyAdmin = false;
    }
    
  }
}
</script>

<style>

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

.navbar-element-padding {
  padding-top: .25rem;
  padding-bottom: .25rem;
}
</style>
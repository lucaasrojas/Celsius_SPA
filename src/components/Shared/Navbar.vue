<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <router-link  class="navbar-brand navbar-element-padding" style="position: relative" to="/"><strong>TakeACoffee</strong></router-link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent" style="position: relative; left: 100">
          <ul class="navbar-nav">
            <div v-for="(item, index) in navbarConfig" :key="index" >
              <div v-if="!item.subItems">
                <li class="nav-item active navbar-element-padding">
                  <router-link  class="nav-link active" v-if="item.visible" v-bind="{ to: item.url}"><strong>{{ $t(`navbar.${item.title}`) }}</strong></router-link>
                </li>
              </div>
              <div v-if="item.subItems">
                <li class="nav-item dropdown navbar-element-padding active">  
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <strong>{{ $t(`navbar.${item.title}.title`) }}</strong>
                  </a> 
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown" >
                    <div v-for="(sItem, index) in item.subItems" :key="index">
                      <div v-if="item.title === 'language'">
                        <button class="dropdown-item text-center" @click="$root.changeLanguage(sItem)"><strong>{{ $t(`navbar.${item.title}.elements.${sItem}`) }}</strong></button>
                      </div>
                      <div v-if="!sItem.value">
                        <router-link class="dropdown-item text-center" v-if="sItem.visible" v-bind="{ to: sItem.url}"><strong> {{ $t(`navbar.${item.title}.elements.${sItem.title}`) }}</strong></router-link>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
            </div>
          </ul>
          <!--
          <ul class="navbar-nav">
            <li class="nav-item active navbar-element-padding ">
                <span class="nav-link active"><strong>Logged: {{this.$root.loginStatus}}</strong></span>
              </li>
              <li v-if="this.$root.loginStatus" class="nav-item active navbar-element-padding ">
                <span class="nav-link active" style="cursor: pointer" @click="logout()"><strong>Logout</strong></span>
              </li>
          </ul>
          -->
        </div>
    </nav>
  </div>
</template>

<script>
import router from '@/router.js'

export default {
  data() {
    return {
      sideNav: false,
      navbarConfig: this.$root.dbConfig.menuItems
    }
  },
  methods: {
    logout(){
      console.log("Logout");
      router.push({name: "home"});
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

.navbar {
  background-color: rgb(78, 78, 78);
}


</style>
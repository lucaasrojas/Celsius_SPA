<template>
    <div class="container">
        <gallery :pictures="pictures"></gallery>
    </div>
</template>

<script>
import gallery from '../galleryTemplate.vue'

export default {
components: {
    gallery: gallery
},
data() {
    return {
        sideNav: false,
        pictures: [
            {url: "assets/images/Galerias/Gifs/gif01.gif"},
            {url: "assets/images/Galerias/Gifs/gif03.gif"},
            {url: "assets/images/Galerias/Gifs/gif04.gif"},
            {url: "assets/images/Galerias/Gifs/gif10.gif"},
            {url: "assets/images/Galerias/Gifs/gif13.gif"},
            {url: "assets/images/Galerias/Gifs/gif16.gif"},
            {url: "assets/images/Galerias/Gifs/gif18.gif"},
            {url: "assets/images/Galerias/Gifs/gif20.gif"},
            {url: "assets/images/Galerias/Gifs/gif21.gif"},
            {url: "assets/images/Galerias/Gifs/gif24.gif"},
            {url: "assets/images/Galerias/Gifs/gif30.gif"},
            {url: "assets/images/Galerias/Gifs/gif54.gif"},
            {url: "assets/images/Galerias/Gifs/gif58.gif"},
            {url: "assets/images/Galerias/Gifs/gif60.gif"},
            {url: "assets/images/Galerias/Gifs/gif68.gif"},
            {url: "assets/images/Galerias/Gifs/gif76.gif"},
            ]
    }
    
}
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}


</style>
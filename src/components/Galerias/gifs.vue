<template>
    <div class="container">
        <gallery :pictures="pictures"></gallery>
    </div>
</template>

<script>
import gallery from '../galleryTemplate.vue'
import picturesList from '../../assets/galleryImages.json'

export default {
    components: {
        gallery: gallery
    },
    data() {
        return {
            sideNav: false,
            pictures: picturesList.gifs
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
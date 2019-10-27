<template>
    <div class="container">
        <gallery :pictures="pictures"></gallery>
    </div>
</template>

<script>
import gallery from '@/components/Shared/galleryTemplate.vue'
import picturesList from '@/assets/gallery.json'

export default {
    components: {
        gallery: gallery
    },
    data() {
        return {
            sideNav: false,
            pictures: picturesList.images.gifs
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
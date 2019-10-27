<template>
    <div class="container">
        <carousel class="carousel" :pictures="pictures"></carousel>
        <gallery :pictures="pictures"></gallery>
    </div>
</template>

<script>
import gallery from '@/components/Shared/galleryTemplate.vue'
import picturesList from '@/assets/gallery.json'
import carousel from '@/components/Shared/carousel.vue'

export default {
  components: {
    gallery: gallery,
    carousel: carousel
  },
  data () {
    return {
      pictures: picturesList.images.gtaiv,
      mainTitle: "GTA IV",
      mainDescription: "",
    }
  },
  mounted() {
    this.$emit('receiveData', {mainTitle: this.mainTitle, mainDescription: this.mainDescription});
  }
}
</script>

<style>
.carousel {
  margin-bottom: 10px;}
</style>

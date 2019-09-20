<template>
    <div class="container">
        <div class="row">
            <v-flex>
                 <v-carousel>
                        <v-carousel-item
                        v-for="(item,i) in pictures"
                            :key="i"
                            :src="require(`@/${item.url}`)"
                        ></v-carousel-item>
                    </v-carousel>
            </v-flex>
        </div>
        <gallery :pictures="pictures"></gallery>
    </div>
</template>

<script>
import gallery from '@/components/Shared/galleryTemplate.vue'
import picturesList from '@/assets/galleryImages.json'

export default {
    components: {
      gallery: gallery
    },
    data () {
      return {
        pictures: picturesList.gtaiv
      }
    }
}
</script>

<style>

</style>

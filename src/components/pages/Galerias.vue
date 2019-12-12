<template>
    <div>
        <div class="dropdown mb-5">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Seleccionar Galeria
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                <div v-for="(gallery, index) in galleries.sections" :key="index">
                    <button class="dropdown-item" id="" @click="dropdownClick(index)">{{gallery.title}}</button>
                </div>
            </div>
        </div>
        <div class="row mb-5">
            <span class="mx-auto display-1">{{galleryTitle}}</span>
        </div>    
        <div class="gallery" id="gallery">
            <div v-for="(img, index) in imgList" :key="index">
                <div :class="`mb-3 pics animation all`">
                    <img class="img-fluid" :src="require(`@/${img.url}`)">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import galleries from '@/assets/gallery.json'

export default {
    data() {
        return {
            mainTitle: "Galerias",
            mainDescription: "La vida en imagenes",
            galleries: galleries,
            imgList: [],
            galleryTitle: '',
        }
    },
    methods: {
        dropdownClick(gallery){
            console.log("Button", gallery)
            console.log(galleries.images[gallery])
            this.imgList = this.galleries.images[gallery]
            this.galleryTitle = this.galleries.sections[gallery].title
        }
    },
    computed: {
        getImageUrl(url){
            return url;
        }
    },
    mounted() {
		this.$emit('receiveData', {mainTitle: this.mainTitle, mainDescription: this.mainDescription});
	}
}
</script>

<style>
.gallery {
-webkit-column-count: 3;
-moz-column-count: 3;
column-count: 3;
-webkit-column-width: 33%;
-moz-column-width: 33%;
column-width: 33%; }
.gallery .pics {
-webkit-transition: all 350ms ease;
transition: all 350ms ease; }
.gallery .animation {
-webkit-transform: scale(1);
-ms-transform: scale(1);
transform: scale(1); }

@media (max-width: 450px) {
.gallery {
-webkit-column-count: 1;
-moz-column-count: 1;
column-count: 1;
-webkit-column-width: 100%;
-moz-column-width: 100%;
column-width: 100%;
}
}
</style>

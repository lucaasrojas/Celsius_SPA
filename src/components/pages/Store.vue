<template>
<div class="store-container mx-auto">
<div class="row">

  <div class="col-md-6 d-flex justify-content-center mx-auto mb-5">
    <div class="row">
      <div class="col-md">
        <button type="button" class="btn btn-secondary waves-effect filter text-white store-btn" @click="btnClicked($event)" data-rel="all">All</button>
        <button type="button" id="btnMountains" class="btn btn-secondary waves-effect filter text-white store-btn" @click="btnClicked($event)" data-rel="deco">Deco</button>
        <button type="button" class="btn btn-secondary waves-effect filter text-white store-btn" @click="btnClicked($event)" data-rel="geek">Geek</button>
      </div>
    </div>

  </div>

</div>
<div class="gallery" id="gallery">
  <div v-for="img in imgList" :key="img.id">
    <div :class="`mb-3 pics animation all ${img.category}`">
      <img class="img-fluid" :id="img.id" :src="img.src" @click="productSelected($event)">
    </div>
  </div>
</div>
</div>

</template>

<script>
import $ from 'jquery'
import imgList from '@/assets/store.json'
import router from '@/router.js'

export default {
  data() {
    return {
      imgList: imgList,
      mainTitle: "Store",
			mainDescription: "La tienda donde vas a encontrar lo que estas buscando"
    }
  },
  methods: {
    btnClicked: (btn) => {
      let selectedClass = btn.srcElement.dataset.rel;
      $("#gallery").fadeTo(100, 0.1);
      $("#gallery div div").not("."+selectedClass).fadeOut().removeClass('animation');
      setTimeout(function() {
        $("."+selectedClass).fadeIn().addClass('animation');
        $("#gallery").fadeTo(300, 1);
      }, 300);
    },
    productSelected: (prod) => {
      const elementID = prod.toElement.id;

      const product = imgList.filter(img => {
        return img.id === elementID
      });
      router.push({name: "product", params: {img: product[0]}});
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

@media (max-width: 400px) {
.btn.filter {
padding-left: 1.1rem;
padding-right: 1.1rem;
}
}

.store-container {
  max-width: 75%
}

.store-btn {
  margin-left: 30px; 
  font-size: 1.5em !important
}

</style>
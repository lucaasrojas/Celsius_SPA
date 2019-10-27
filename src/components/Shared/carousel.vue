<template>
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="require(`@/${pictures[0].url}`)" class="d-block w-100">
            </div>
            <div class="carousel-item" v-for="item in pictures.slice(1,pictures.length)" :key="item">
              <img :src="require(`@/${item.url}`)" class="d-block w-100">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
    </div>
</template>

<script>
export default {
    props: ['pictures'],
    data() {
        return {
            pictures: pictures
        }
    }

}
</script>

<style>

</style>
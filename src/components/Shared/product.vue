<template>
  <div class="col-md-12">

    <div class="row">
      <div class="col-md-12">
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-6">
              <img :src="img.src" class="card-img" alt="...">
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12">
                    <p class="card-title" style="font-size: 2rem;">{{img.title}}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <p class="card-text" style="font-size: 1rem">{{img.description}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3" v-for="subImg in img.subImages"> 
        <imgCard :imgData="subImg"></imgCard>
      </div>
    </div>
      
  </div>
</template>

<script>
import imgCard from './ImageCard.vue'

export default {
components: {
  imgCard: imgCard
},
props: ["img"]

}
</script>

<style>

</style>
<template>
  <div>
      <imgCard :imgData="img"></imgCard>
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
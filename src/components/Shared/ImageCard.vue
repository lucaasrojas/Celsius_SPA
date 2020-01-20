<template>
    <div class="card bg-dark text-white">
        <img :src="imgData.src" class="card-img imgOverlay" alt="...">
        <div class="card-img-overlay ">
            <h5 class="card-title">{{imgData.title}}</h5>
            <p class="card-text">{{imgData.description}}</p>
            <router-link :to="imgData.url" class="btn btn-primary">More</router-link>
        </div>
    </div>
</template>

<script>
export default {
props: ["imgData"]
}
</script>

<style>
.imgOverlay {
    filter: grayscale(100%);
}
</style>
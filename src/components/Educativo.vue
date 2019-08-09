<template>
    <div class="container">
        
        <div class="row my-2" v-for="video in videoList" v-bind:key="video.id">
           <div class="card mx-auto text-white bg-dark">
            <h5 class="card-header">{{video.title}}</h5>
            <div class="card-body">
                <iframe width="560" height="315" :src=video.url frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import videoListJSON from '../assets/videoList.json'

export default {
data() {
    return {
        videoList : videoListJSON
    }
}
}
</script>

<style scoped>
iframe {
    margin: 5px;
    border-style: solid;
    border-width: 5px;
    border-color:blanchedalmond;
    border-radius: 5px;
}

.subtitulo {
    margin: 5px;
    border-style: solid;
    border-width: 5px;
    border-color:blanchedalmond;
    border-radius: 25px;
    background-color: darkgray;
    color: blanchedalmond;
}
</style>

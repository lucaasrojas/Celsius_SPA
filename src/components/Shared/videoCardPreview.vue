<template>
    <div>
        <div class="card mx-auto text-white bg-dark">
            <h5 class="card-header">{{video.title}}</h5>
            <div class="card-body">
                <!-- <iframe width="100%" :src=video.url frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> -->
                <img style="max-width:100%" :src="video.thumbnail"  @click="videoSelected(video)" />
            </div>
        </div>
    </div>
</template>

<script>
import videoCard from '@/components/Shared/videoCard.vue'
import router from '@/router.js'

export default {
    components: {
        videoCard: videoCard
    },
    props: ['video'],
    data() {
        return {
        }
    },
    methods: {
        videoSelected: (video) => {
            router.push({name: "videoCard", params: {video: video}});
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
    width: 100vw; 
   /* height: 56.25vw; /* 100/56.25 = 560/315 = 1.778 */
    max-width: 100%;
    /*max-height: calc((100vw - 40px) / (16/9));*/
    max-height: 100px
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

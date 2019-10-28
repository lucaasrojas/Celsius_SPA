<template>
<div>
    <div class="row" >
        <div class="col-md-4" v-for="video in videoList" v-bind:key="video.id">
            <videoCardPreview class="videoCard" :video="video"></videoCardPreview>
        </div>
    </div>
</div>
</template>

<script>
import videoListJSON from '@/assets/videoList.json'
import videoCard from '@/components/Shared/videoCardPreview.vue'

export default {
    components: {
        videoCardPreview: videoCard
    },
    data() {
        return {
            videoList : videoListJSON,
            mainTitle: "Educativo",
			mainDescription: "Videos educativos"
        }
    },
    mounted() {
		this.$emit('receiveData', {mainTitle: this.mainTitle, mainDescription: this.mainDescription});
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

.videoCard {
    margin-bottom: 10px;
}
</style>

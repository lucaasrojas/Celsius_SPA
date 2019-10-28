<template>
    <div>
        <div v-for="video in videoList" :key="video">
            <videoCardComponent :video="video"></videoCardComponent>
        </div>
    </div>
</template>

<script>
import musicListJSON from '@/assets/musicList.json'
import videoCardComponent from '@/components/Shared/videoCard.vue'

export default {
    components: {
        videoCardComponent: videoCardComponent
    },
    data(){
        return {
            videoList: musicListJSON,
            mainTitle: "Musica",
			mainDescription: "Las mejores canciones para tus oidos"
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
</style>

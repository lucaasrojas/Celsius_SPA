<template>
<div>
    <videoCardComponent :itemsList="videoList"></videoCardComponent>
</div>
</template>

<script>
import videoListJSON from '@/assets/videoList.json'
import videoCardComponent from '@/components/Shared/videoCard.vue'

export default {
    components: {
        videoCardComponent: videoCardComponent
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
</style>

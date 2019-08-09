<template>
    <div>
        <videoCardComponent :itemsList="videoList"></videoCardComponent>
    </div>
</template>

<script>
import musicListJSON from '../assets/musicList.json'
import videoCardComponent from './Shared/videoCard.vue'
export default {
components: {
    videoCardComponent: videoCardComponent
},
data(){
    return {
        videoList: musicListJSON
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
</style>

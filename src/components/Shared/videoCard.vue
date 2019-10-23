<template>
    <div>
        <div class="row my-2" v-for="video in itemsList" v-bind:key="video.id">
            <div class="col-md-12">
            
                <div class="card mx-auto text-white bg-dark">
            <h5 class="card-header">{{video.title}}</h5>
            <div class="card-body">
                <iframe width="100%" :src=video.url frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
           </div>
            
            </div>
           
        </div>
    </div>
</template>

<script>
export default {
props: ['itemsList'],
data() {
    return {
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
    height: 56.25vw; /* 100/56.25 = 560/315 = 1.778 */
    max-width: 100%;
    max-height: calc((100vw - 40px) / (16/9));
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

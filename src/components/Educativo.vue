<template>
    <div class="container">

        <div class="row" v-for="video in videoList" v-bind:key="video.id">
            <div class="col-sm">
                <h2 class="subtitulo">{{video.title}}</h2>
                <iframe width="560" height="315" :src=video.url frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </div>
        
        <!--
        <div class="row">
            <div class="col-sm">
                <h2 class="subtitulo"> Electronica </h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/8n1RHhw1cRM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <h2 class="subtitulo"> JavaScript </h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/9me1HvKs_1U" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <h2 class="subtitulo"> Kendo UI </h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/gVu79Sh6Lpg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <h2 class="subtitulo"> Azure </h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/raDPpcRKAGQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <h2 class="subtitulo"> Dispositivos Moviles </h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/hLuDoT05QPQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <h2 class="subtitulo"> DMX </h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/fU0d4IStcWw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <h2 class="subtitulo"> ASP.NET MVC </h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/EFxkYjN4670" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </div>
        -->
    </div>
</template>

<script>
export default {
data() {
    return {
        videoList: [
            {
                id: 1,
                title: "Vue JS",
                url: "https://www.youtube.com/embed/REqu-nKek-o"
            },
            {
                id: 2,
                title: "Apache Cordova",
                url: "https://www.youtube.com/embed/6jVOruQ2T9E"
            },
            {
                id: 3,
                title: "TEDx",
                url: "https://www.youtube.com/embed/_DgpIDlV_CY"
            }
        ]
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

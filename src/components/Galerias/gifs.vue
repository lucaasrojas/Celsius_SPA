<template>
    <div class="container">
        <div class="row">
                <div class="col-sm">
                    <img class="imgGaleria" v-for="item in pictures" :key="item.url" :src="require(`@/${item.url}`)"/>
                </div>

        </div>
    </div>
</template>

<script>
export default {
data() {
    return {
        sideNav: false,
        pictures: [
            {url: "assets/images/Galerias/Gifs/gif01.gif"},
            {url: "assets/images/Galerias/Gifs/gif02.gif"},
            {url: "assets/images/Galerias/Gifs/gif03.gif"},
            {url: "assets/images/Galerias/Gifs/gif04.gif"},
            {url: "assets/images/Galerias/Gifs/gif05.gif"},
            {url: "assets/images/Galerias/Gifs/gif06.gif"},
            {url: "assets/images/Galerias/Gifs/gif07.gif"},
            {url: "assets/images/Galerias/Gifs/gif08.gif"},
            {url: "assets/images/Galerias/Gifs/gif09.gif"},
            {url: "assets/images/Galerias/Gifs/gif10.gif"},
            {url: "assets/images/Galerias/Gifs/gif11.gif"},
            {url: "assets/images/Galerias/Gifs/gif12.gif"},
            {url: "assets/images/Galerias/Gifs/gif13.gif"},
            {url: "assets/images/Galerias/Gifs/gif14.gif"},
            {url: "assets/images/Galerias/Gifs/gif15.gif"},
            {url: "assets/images/Galerias/Gifs/gif16.gif"},
            {url: "assets/images/Galerias/Gifs/gif17.gif"},
            {url: "assets/images/Galerias/Gifs/gif18.gif"},
            {url: "assets/images/Galerias/Gifs/gif19.gif"},
            {url: "assets/images/Galerias/Gifs/gif20.gif"},
            {url: "assets/images/Galerias/Gifs/gif21.gif"},
            {url: "assets/images/Galerias/Gifs/gif22.gif"},
            {url: "assets/images/Galerias/Gifs/gif23.gif"},
            {url: "assets/images/Galerias/Gifs/gif24.gif"},
            {url: "assets/images/Galerias/Gifs/gif25.gif"},
            {url: "assets/images/Galerias/Gifs/gif26.gif"},
            {url: "assets/images/Galerias/Gifs/gif27.gif"},
            {url: "assets/images/Galerias/Gifs/gif28.gif"},
            {url: "assets/images/Galerias/Gifs/gif29.gif"},
            {url: "assets/images/Galerias/Gifs/gif30.gif"},
            {url: "assets/images/Galerias/Gifs/gif31.gif"},
            {url: "assets/images/Galerias/Gifs/gif32.gif"},
            {url: "assets/images/Galerias/Gifs/gif33.gif"},
            {url: "assets/images/Galerias/Gifs/gif34.gif"},
            {url: "assets/images/Galerias/Gifs/gif36.gif"},
            {url: "assets/images/Galerias/Gifs/gif37.gif"},
            {url: "assets/images/Galerias/Gifs/gif38.gif"},
            {url: "assets/images/Galerias/Gifs/gif39.gif"},
            {url: "assets/images/Galerias/Gifs/gif44.gif"},
            {url: "assets/images/Galerias/Gifs/gif45.gif"},
            {url: "assets/images/Galerias/Gifs/gif46.gif"},
            {url: "assets/images/Galerias/Gifs/gif47.gif"},
            {url: "assets/images/Galerias/Gifs/gif48.gif"},
            {url: "assets/images/Galerias/Gifs/gif49.gif"},
            {url: "assets/images/Galerias/Gifs/gif50.gif"},
            {url: "assets/images/Galerias/Gifs/gif51.gif"},
            {url: "assets/images/Galerias/Gifs/gif52.gif"},
            {url: "assets/images/Galerias/Gifs/gif53.gif"},
            {url: "assets/images/Galerias/Gifs/gif54.gif"},
            {url: "assets/images/Galerias/Gifs/gif55.gif"},
            {url: "assets/images/Galerias/Gifs/gif56.gif"},
            {url: "assets/images/Galerias/Gifs/gif57.gif"},
            {url: "assets/images/Galerias/Gifs/gif58.gif"},
            {url: "assets/images/Galerias/Gifs/gif59.gif"},
            {url: "assets/images/Galerias/Gifs/gif60.gif"},
            {url: "assets/images/Galerias/Gifs/gif61.gif"},
            {url: "assets/images/Galerias/Gifs/gif62.gif"},
            {url: "assets/images/Galerias/Gifs/gif63.gif"},
            {url: "assets/images/Galerias/Gifs/gif64.gif"},
            {url: "assets/images/Galerias/Gifs/gif65.gif"},
            {url: "assets/images/Galerias/Gifs/gif68.gif"},
            {url: "assets/images/Galerias/Gifs/gif69.gif"},
            {url: "assets/images/Galerias/Gifs/gif70.gif"},
            {url: "assets/images/Galerias/Gifs/gif71.gif"},
            {url: "assets/images/Galerias/Gifs/gif74.gif"},
            {url: "assets/images/Galerias/Gifs/gif75.gif"},
            {url: "assets/images/Galerias/Gifs/gif76.gif"},
            ]
    }
    
}
}
</script>

<style scoped>

</style>
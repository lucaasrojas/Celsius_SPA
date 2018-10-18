<template>
    <div class="container">
        <div class="row">
            
                <div class="col-sm">
                    <img v-for="item in pictures" :key="item.url" :src="item.url" />
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
            {url: "@/assets/images/Galerias/Gifs/gif01.gif"},
            {url: "@/assets/images/Galerias/Gifs/gif02.gif"},
            {url: "@/assets/images/Galerias/Gifs/gif03.gif"},
            {url: "@/assets/images/Galerias/Gifs/gif04.gif"},
            {url: "@/assets/images/Galerias/Gifs/gif05.gif"},
            {url: "@/assets/images/Galerias/Gifs/gif06.gif"},
            {url: "@/assets/images/Galerias/Gifs/gif07.gif"},
            {url: "@/assets/images/Galerias/Gifs/gif08.gif"},
            {url: "@/assets/images/Galerias/Gifs/gif09.gif"},
            {url: "@/assets/images/Galerias/Gifs/gif10.gif"},
        ]
    }
}
}
</script>

<style scoped>

</style>
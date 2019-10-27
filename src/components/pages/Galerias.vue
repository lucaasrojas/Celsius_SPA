<template>
    <div class="container">
        <router-link v-for="gallery in galleries.sections" :key="gallery" :to="'/'+gallery.path">
            <div class="card text-white bg-primary mb-3" style="border-radius:30px">
                <div class="card-body">
                    <h1 class="card-title">{{gallery.title}}</h1>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
import galleries from '@/assets/gallery.json'

export default {
    data() {
        return {
            mainTitle: "Galerias",
            mainDescription: "La vida en imagenes",
            galleries: galleries
        }
    },
    mounted() {
		this.$emit('receiveData', {mainTitle: this.mainTitle, mainDescription: this.mainDescription});
	}
}
</script>

<style>

</style>

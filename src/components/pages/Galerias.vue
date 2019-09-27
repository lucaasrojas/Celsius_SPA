<template>
    <div class="container">
        <div class="row">
            <router-link to="/galeriaGifs"><img src="@/assets/images/titulogifs.png" /></router-link>
        </div>
        <div class="row">
            <router-link to="/galeriaGTAIV"><img src="@/assets/images/titulogtaiv.png" /></router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mainTitle: "Galerias",
			mainDescription: "La vida en imagenes"
        }
    },
    mounted() {
		this.$emit('receiveData', {mainTitle: this.mainTitle, mainDescription: this.mainDescription});
	}
}
</script>

<style>

</style>

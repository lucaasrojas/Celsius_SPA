<template>
    <div class="container">

    </div>
</template>

<script>
export default {
    data() {
        return {
            mainTitle: "Peliculas",
			mainDescription: "Una seleccion para esos dias de flojera"
        }
    },
    mounted() {
		this.$emit('receiveData', {mainTitle: this.mainTitle, mainDescription: this.mainDescription});
	}
}
</script>

<style scoped>
.detailMovie {
    background-color: rgba(100, 120, 120, .5);
    border: 10px;
    border-color: black;
    border-radius: 5px;
}
</style>

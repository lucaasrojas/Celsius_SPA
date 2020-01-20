<template>
    <div class="container">

    </div>
</template>

<script>
export default {
    data() {
        return {
            mainTitle: "Impresion 3D",
			mainDescription: "Vas a ver lo que una impresora puede hacer"
        }
    },
   	mounted() {
		this.$emit('receiveData', {mainTitle: this.mainTitle, mainDescription: this.mainDescription});
	} 
}
</script>
<script>

</script>

<style>

</style>

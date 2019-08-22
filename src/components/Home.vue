<template>
	<div class="container">
		<div class="col-md-12">
			<jumbotron></jumbotron>
		<div class="row">
			<!--
		<div class="col-md-4" v-for="img in imagesList" :key="img">
			<imgCard :imgData="img"></imgCard>
		</div>
			-->

		</div>
		</div>
		
	</div>
	
</template>
<script>
import ImageCard from './ImageCard.vue';

export default {
components: {
	imgCard: ImageCard
},
data() {
	return {
		imagesList: [
			{	
				title: "Galerias", 
				description: "Contiene imagenes variadas", 
				src: "assets/images/mosaicogalerias.png", 
				url: "/galerias"
			},
			{	
				title: "Peliculas", 
				description: "Peliculas para descargar y con review", 
				src: "assets/images/mosaicopeliculas.png", 
				url: "/peliculas"
			},
			{	
				title: "Musica", 
				description: "Listados de la mejor musica", 
				src: "assets/images/mosaicomusica.png", 
				url: "/musica"
			},
		]
	}
}
}
</script>

<style scoped>

</style>

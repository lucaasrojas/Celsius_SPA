<template>
	<div class="container">
		<div class="col-md-12">
			<jumbotron></jumbotron>
		<div class="row">
		<div class="col-md-4" v-for="img in imagesList" :key="img">
			<div class="card alert-dark">
				<img :src="require(`@/${img.src}`)" class="card-img-top"/>
				<div class="card-body">
					<h5 class="card-title">{{img.title}}</h5>
					<p class="card-text">{{img.description}}</p>
					<router-link :to="img.url" class="btn btn-primary">More</router-link>
				</div>
			</div>
		</div>
		</div>
		</div>
		
	</div>
	
</template>
<script>

export default {

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

<template>
	<div class="container">
		<div class="row">
			<div class="column">
				<router-link to="/galerias"><img src="@/assets/images/galerias.png"><img src="@/assets/images/mosaicogalerias.png"></router-link>
			</div>
		</div>
		<div class="row">
			<div class="column">
				<router-link to="/peliculas"><img src="@/assets/images/mosaicopeliculas.png"><img src="@/assets/images/peliculas.png"></router-link>
			</div>
		</div>
		<div class="row">
			<div class="column">
				<router-link to="/musica"><img src="@/assets/images/musicaa.png"><img src="@/assets/images/mosaicomusica.png"></router-link>
			</div>
		</div>
	</div>
	
</template>
<script>
export default {

}
</script>

<style scoped>
#body {
	background-image: "assets/logo.png";
}

.container {
	padding: 2px;
}
</style>

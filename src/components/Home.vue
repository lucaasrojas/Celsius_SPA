<template>
	<div class="container">
		<div class="col-md-12">
			<jumbotron></jumbotron>
		<div class="row">
		<div class="col-md-3 mx-auto sectionCard" v-for="img in imagesList" :key="img" @click="goTo(img.url)">
			<div class="row">
				<div class="col">
					<h1 class="text-light my-2"> {{img.title}} </h1>
				</div>
			</div>
			<div class="row">
				<div class="col home-img">
					<!-- 
						<img :src="require(`@/${img.src}`)" class="rounded-circle my-4" style="max-width: 196px;">
					-->
					<font-awesome-icon fas :icon="img.icon" size="10x" style="color:white"></font-awesome-icon>
				</div>
			</div>
		</div>

		</div>
		</div>
		
	</div>
	
</template>
<script>
import ImageCard from './ImageCard.vue';
import homeImages from '../assets/homeImagesOptions.json';

export default {
components: {
	imgCard: ImageCard
},
data() {
	return {
		imagesList: homeImages
	}
},
methods: {
    goTo(url){
        this.$router.push(url.replace("/",""));
    }
}
}
</script>

<style scoped>
.sectionCard {
	background: rgba(192, 192, 192, 0.3);
	border-radius: 25px;
}

.home-image {
	max-width: 14rem;
}
</style>

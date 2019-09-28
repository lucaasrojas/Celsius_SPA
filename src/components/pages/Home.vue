<template>
	<div>
		<div class="row justify-content-center">
			<div class="col-md-4 sectionCard m-1" v-for="img in imagesList" :key="img" @click="goTo(img.url)">
				<div class="row">
					<div class="col-md-12">
						<p class="text-light my-2 sectionCard-title"> {{img.title}} </p>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 home-img">
						<!-- 
							<img :src="require(`@/${img.src}`)" class="rounded-circle my-4" style="max-width: 196px;">
						-->
						<font-awesome-icon fas :icon="img.icon" class="icon" style="color:white;"></font-awesome-icon>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import ImageCard from '@/components/Shared/ImageCard.vue';
import homeImages from '@/assets/homeImagesOptions.json';
import Jumbotron from '@/components/Shared/Jumbotron.vue';

export default {
	components: {
		imgCard: ImageCard,
		jumbotron: Jumbotron
	},
	data() {
		return {
			imagesList: homeImages,
			mainTitle: "Home",
			mainDescription: "Welcome"
		}
	},
	methods: {
		goTo(url){
			this.$router.push(url.replace("/",""));
		}
	},
	mounted() {
		this.$emit('receiveData', {mainTitle: this.mainTitle, mainDescription: this.mainDescription});
	}
}
</script>

<style scoped>
.sectionCard {
	background: rgba(192, 192, 192, 0.3);
	border-radius: 25px;
}

.sectionCard-title {
	font-size: 1.5em
}


.home-image {
	max-width: 100vw;
}

.icon {
	font-size: 8vw;
	margin-bottom: 10px;
}
</style>

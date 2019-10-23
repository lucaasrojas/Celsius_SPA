<template>
	<div>
		<div class="row justify-content-center">
			<div class="col-md-4 sectionCard m-1" v-for="img in imagesList" :key="img" @click="goTo(img.url)">
				<sectionCard :img="img" />
			</div>
		</div>
	</div>
</template>
<script>
import ImageCard from '@/components/Shared/ImageCard.vue';
import homeImages from '@/assets/homeImagesOptions.json';
import Jumbotron from '@/components/Shared/Jumbotron.vue';
import SectionCard from '@/components/Shared/sectionCard.vue';

export default {
	components: {
		imgCard: ImageCard,
		jumbotron: Jumbotron,
		sectionCard: SectionCard
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


</style>

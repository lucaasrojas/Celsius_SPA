<template>
	<div>
		<div class="row justify-content-center sectionGrid">
			<div class="col-md-2 sectionCard m-1" v-for="section in sectionsList" :key="section" @click="goTo(section.url)">
				<sectionCard :section="section" />
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
			sectionsList: homeImages,
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
.sectionGrid {
	-webkit-column-count: 4;
	-moz-column-count: 4;
	column-count: 4;
	-webkit-column-width: 25%;
	-moz-column-width: 25%;
	column-width: 25%; 
}
</style>

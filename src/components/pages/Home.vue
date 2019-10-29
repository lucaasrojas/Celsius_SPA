<template>
	<div>
		<div class="row justify-content-center sectionGrid">
			<sectionCard class="" :section="section" v-for="section in sectionsList" :key="section" @click="goTo(section.url)" />
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

</style>

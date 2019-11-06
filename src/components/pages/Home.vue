<template>
	<div>
		<div class="row justify-content-center sectionGrid">
			<div :section="section" v-for="section in sectionsList" :key="section">
				<sectionCard class="" v-if="section.visible" :section="section" />
			</div>
		</div>
	</div>
</template>
<script>
import ImageCard from '@/components/Shared/ImageCard.vue';
import homeImages from '@/assets/navbarItems.json';
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
			sectionsList: homeImages.menuItems,
			mainTitle: "Home",
			mainDescription: "Welcome"
		}
	},
	mounted() {
		this.$emit('receiveData', {mainTitle: this.mainTitle, mainDescription: this.mainDescription});
	}
}
</script>

<style scoped>

</style>

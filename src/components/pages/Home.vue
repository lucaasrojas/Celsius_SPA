<template>
	<div>
		<div class="row justify-content-center sectionGrid">
			<div v-for="(section, index) in sectionsList" :key="index">
				<sectionCard class="" v-if="section.visible" :section="section" />
			</div>
		</div>
	</div>
</template>
<script>
import ImageCard from '@/components/Shared/ImageCard.vue';
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
			sectionsList: null,
			mainTitle: "Home",
			mainDescription: "Welcome"
		}
	},
	created() {
		this.sectionsList = this.$root.dbConfig.menuItems;
	},
	mounted() {
		this.$emit('receiveData', {mainTitle: this.mainTitle, mainDescription: this.mainDescription});
	}
}
</script>

<style scoped>

</style>

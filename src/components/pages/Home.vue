<template>
	<div>
		<div class="row justify-content-center sectionGrid container">
			<div v-for="(section, index) in sectionsList" :key="index">
				<sectionCard class="" v-if="section.visible" :section="section" />
			</div>
		</div>
		<div class="col-md-12" style="background-color: black; color: white; height: 200px">
			<div class="row h-100">
				<div class="col-md-6 my-auto">
					<h1>GET THE TRACKLIST OF YOUR FAVOURITE SPOTIFY LIST</h1>
				</div>
				<div class="col-md-6" style="color: white">
					<h1>ICONO</h1>
					<font-awesome-icon fas :icon="'spotify'" style="font-size: 7rem"></font-awesome-icon>
				</div>
			</div>
		</div>
		<div class="col-md-12" style="height: 200px">
			<h1>GET THE TRACKLIST OF YOUR FAVOURITE SPOTIFY LIST</h1>
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
			sectionsList: this.$root.dbConfig.menuItems,
			mainTitle: "Home",
			mainDescription: "Welcome"
		}
	},
	created() {
	},
	mounted() {
		this.$emit('receiveData', {mainTitle: this.mainTitle, mainDescription: this.mainDescription});
	}
}
</script>

<style scoped>

</style>

<template>
	<div class="col-md-12">
		<div class="row justify-content-center mx-auto">
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
import Vue from 'vue'

export default {
	components: {
		imgCard: ImageCard,
		jumbotron: Jumbotron,
		sectionCard: SectionCard
	},
	data() {
		return {
			sectionsList: this.$root.dbConfig.menuItems,
		}
	},
	created() {
		const langData = this.$i18n.messages[this.$i18n.locale].home;
		this.$emit('jumbotronData', {mainTitle: langData.mainTitle, mainDescription: langData.mainDescription});

		this.bus.$on('locale-changed', () => {
			const langData = this.$i18n.messages[this.$i18n.locale].home;
			this.$emit('jumbotronData', {mainTitle: langData.mainTitle, mainDescription: langData.mainDescription});
		})
	},
	mounted() {

	}
}
</script>

<style scoped>

</style>

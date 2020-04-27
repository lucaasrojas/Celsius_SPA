<template>
	<div class="col-md-12">
		<div class="row background-text">
			<span class="title-back" style="margin-left:auto">{{ backgroundHoverSection }}</span>
		</div>
		<div class="row justify-content-center mx-auto sections-row">
			<div v-for="(section, index) in sectionsList" :key="index" @mouseover="hoverOption(section)" @mouseleave="hoverOption({title: ''})">
				<sectionCard class="sectionCard" v-if="section.visible"  :section="section" />
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
			backgroundHoverSection: ''
		}
	},
	methods: {
		hoverOption(section) {
			this.backgroundHoverSection = section.title;
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
.title-back {
	font-size: 10rem;
	opacity: 0.1;
	color: black;
	position: absolute;
	transition: 2s;
}

.sections-row {
position: absolute; width:100%
}

.background-text {
	position: absolute
}
</style>

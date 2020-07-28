<template>
<div>

	<div class="col-md-12">
		<div class="row justify-content-center mx-auto sections-row">
			<div v-for="(section, index) in sectionsList" :key="index">
				<sectionCard class="sectionCard" v-if="section.visible"  :section="section" />
			</div>
		</div>
	</div>
	<div class="row home-news home-padding">
		<div class="col image">
			<img src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2017/05/Chemex-Coffee-Brewing-11.jpg" alt="">
		</div>
		<div class="col-8 text my-auto">
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, enim.</p>
		</div>
	</div>
	<div class="row home-padding">
		<div class="col">
			<dolar></dolar>
		</div>
	</div>
	<instagram style="padding:3rem"/>
</div>
</template>
<script>
import ImageCard from '@/components/Shared/ImageCard.vue';
import Jumbotron from '@/components/Shared/Jumbotron.vue';
import SectionCard from '@/components/Shared/sectionCard.vue';
import Instagram from '@/components/Shared/instagram.vue';
import Vue from 'vue'

export default {
	components: {
		imgCard: ImageCard,
		jumbotron: Jumbotron,
		sectionCard: SectionCard,
		instagram: Instagram
	},
	data() {
		return {
			sectionsList: this.$root.dbConfig.menuItems,
		}
	},
	methods: {

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
		fetch('http://www.instagram.com/boywithtools')
		.then(async res => {
			const response = await res.text();
			var parser = new DOMParser();
			var doc = parser.parseFromString(response, "text/html");
			console.log("instagram", doc.childNodes)
		})
	}
}
</script>

<style scoped>
.sectionCard {
	background-color: var(--sectionCard-color) !important;
}

.home-news {
	background-color: var(--navbar-bg); 
	color: var(--bg-color);
	font-size: 2rem;
}

.home-news > div > img {
	max-width: 200px;
	border: 0.5vw solid var(--bg-color);
	border-radius: 5%;
}

.home-news > div > .image {
	text-align: left;
	height: 100%	;
}

.home-padding{
	padding: 3vh;
	margin-top: 3vh;
	margin-bottom: 3vh;
}

</style>

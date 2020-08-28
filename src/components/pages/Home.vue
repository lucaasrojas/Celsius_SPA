<template>
<div>
	<div class="intro_text">
		<div class="title">
			<h2>{{aboutMe.title}}</h2>
		</div>
		<div class="information">
			<h5>{{aboutMe.description}}</h5>
		</div>
	</div>

	<hr class="spacer">

	<!-- Apps cards -->
	<div class="apps_wrapper">
		<div class="apps_title">
			<h1>Apps</h1>
		</div>
		<div class="apps_container">
			<div class="column" v-for="(app, index) in appList" :key="index">
				<router-link :to="app.url" class="app_box">
					<h1>{{app.kindTitle}}</h1>
				</router-link>
			</div>
		</div>
	</div>
	<!-- <div class="row home-news home-padding">
		<div class="col image">
			<img src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2017/05/Chemex-Coffee-Brewing-11.jpg" alt="">
		</div>
		<div class="col-8 text my-auto">
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, enim.</p>
		</div>
	</div> -->
	<!-- <div class="row home-padding">
		<div class="col">
			<dolar></dolar>
		</div>
	</div>
	<instagram style="padding:3rem"/> -->


	<bannerTechs :techs="techs" class="bannerTechs" />


	<div class="hobbies_wrapper space">
		<div class="hobbies_title">
			<h1>{{hobbies.title}}</h1>
		</div>
		<div class="hobbies_container">
			
		</div>
	</div>
	<!-- Banner dummy -->
	<!-- <div  v-if="false" class="row home-news">
		<div class="col image">
			<img src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2017/05/Chemex-Coffee-Brewing-11.jpg" alt="">
		</div>
		<div class="col-8 text my-auto">
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, enim.</p>
		</div>
	</div> -->
</div>
</template>
<script>
import ImageCard from '@/components/Shared/ImageCard.vue';
import Jumbotron from '@/components/Shared/Jumbotron.vue';
import SectionCard from '@/components/Shared/sectionCard.vue';
import Instagram from '@/components/Shared/instagram.vue';
import BannerTechs from '@/components/Shared/bannerTecnologias.vue';
import Vue from 'vue'
var axios = require('axios');
export default {
	props:['dbData'],
	components: {
		imgCard: ImageCard,
		jumbotron: Jumbotron,
		sectionCard: SectionCard,
		instagram: Instagram,
		bannerTechs: BannerTechs
	},
	data() {
		return {
			sectionsList: this.$root.dbConfig.menuItems,
			techs: ['react', 'vuejs', 'github', 'aws', 'sass'],
			appList: [],
			aboutMe: {
				title: '',
				description: ''
			},
			hobbies:{
				title: ''
			}
		}
	},
	methods: {
		getTraducedText(item) {
			return this.$i18n.messages[this.$i18n.locale][item];
		},
		getAppList(){
			const appsMenu = this.dbData.config.menuItems.find(item => item.title === 'apps' )
			this.appList = appsMenu.subItems.filter(app => app.visible && app)
			this.appList = this.appList.map(app => {return {...app, kindTitle: this.getTraducedText(app.title)}})
		},
		updateJumbotron(){
			const langData = this.getTraducedText('home');
			this.$emit('jumbotronData', {mainTitle: langData.mainTitle, mainDescription: langData.mainDescription});
		},
		updateAboutMe(){
			this.aboutMe = this.getTraducedText('aboutMe')
		}
	},
	created() {
		this.updateJumbotron()
		this.getAppList()
		this.updateAboutMe()


		this.bus.$on('locale-changed', () => {
			this.updateJumbotron()
			this.getAppList()
			this.updateAboutMe()
		})

		fetch('https://medium.com/feed/@lucaasrojas')
		.then(res => {
			console.log('fetch', res.text())
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
.space {
	padding: 40px 0px;
}
.apps_container {
	display: grid;
	grid-template-rows: 30px auto 30px;
	grid-template-columns: repeat(1fr);
	align-content: center;
	justify-content: center;
	grid-gap: 15px;
}

.apps_container > * {
	grid-row: 2;
}

.app_box {
	background-color: var(--navbar-bg);
	width: 300px;
	border-radius: 20px;
	border: 1px solid black;
	color: var(--bg-color);
	display: flex;
	flex-direction: column;
	text-align: center;
	align-content: center;
	justify-content: center;
	text-decoration: none;
	padding: 0.75rem;
	height: 100%;
}

.app_box:hover {
	transform: scale(1.1);
	transition: all 0.5s;
	
}

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

.bannerTechs{
	background-color: var(--navbar-bg);
}

.intro_text {
	display: grid;
	grid-template-columns: auto minmax(350px,400px) 10px minmax(350px, 500px) auto;
	grid-template-rows: 50px auto 50px;

}

.intro_text .title {
	grid-column: 2;
	grid-row:2
}

.intro_text .information {
	grid-column: 4;
	grid-row:2

}

.spacer {
    border: 0;
    height: 2px;
    background-image: linear-gradient(to right, rgba(171, 171, 171, 0), rgba(171, 171, 171, 0.75), rgba(171, 171, 171, 0));
}

.icon{
    stroke: 3px #000;
}
.techBox {
    display: flex;
    background-color: var(--sectionCard-color);
    border: 2px solid #2c3e50;
    border-radius: 15%;
    margin: 0.75rem;
    width: fit-content;
}


/* --------- APPS --------------- */
.apps_wrapper {
	display: grid;
	grid-template-rows: 10px auto auto 10px;
}

.apps_title{
	grid-row: 2;
}

.apps_container {
	grid-row: 3;
}




</style>

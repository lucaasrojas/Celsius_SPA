<template>
	<v-container>
		<v-layout row>
			<v-layout column>
				<v-flex>
					<router-link to="/galerias"><img src="@/assets/images/galerias.png"></router-link>
				</v-flex>
			</v-layout>
			<v-layout column>
				<v-flex>
					<router-link to="/galerias"><img src="@/assets/images/mosaicogalerias.png"></router-link>
				</v-flex>
			</v-layout>
		</v-layout>
		<v-layout row>
			<v-layout column>
				<v-flex>
					<router-link to="/peliculas"><img src="@/assets/images/mosaicopeliculas.png"></router-link>
				</v-flex>
			</v-layout>
			<v-layout column>
				<v-flex>
					<router-link to="/peliculas"><img src="@/assets/images/peliculas.png"></router-link>
				</v-flex>
			</v-layout>
		</v-layout>
		<v-layout row>
			<v-layout column>
				<v-flex>
					<router-link to="/musica"><img src="@/assets/images/musicaa.png"></router-link>
				</v-flex>
			</v-layout>
			<v-layout column>
				<v-flex>
					<router-link to="/musica"><img src="@/assets/images/mosaicomusica.png"></router-link>
				</v-flex>
			</v-layout>
		</v-layout>
	</v-container>
	
</template>
<script>
import titleChanger from './TitleChanger.vue';
import Vue from 'vue';

Vue.component(titleChanger);

export default {

}
</script>

<style scoped>
#body {
	background-image: "assets/logo.png";
}

.container {
	padding: 2px;
}
</style>

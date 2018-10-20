<template>
	<v-container>
		<v-layout row>
			<v-layout column>
				<v-flex>
					<img src="@/assets/images/galerias.png">
				</v-flex>
			</v-layout>
			<v-layout column>
				<v-flex>
					<img src="@/assets/images/mosaicogalerias.png">
				</v-flex>
			</v-layout>
		</v-layout>
		<v-layout row>
			<v-layout column>
				<v-flex>
					<img src="@/assets/images/mosaicopeliculas.png">
				</v-flex>
			</v-layout>
			<v-layout column>
				<v-flex>
					<img src="@/assets/images/peliculas.png">
				</v-flex>
			</v-layout>
		</v-layout>
		<v-layout row>
			<v-layout column>
				<v-flex>
					<img src="@/assets/images/musicaa.png">
				</v-flex>
			</v-layout>
			<v-layout column>
				<v-flex>
					<img src="@/assets/images/mosaicomusica.png">
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

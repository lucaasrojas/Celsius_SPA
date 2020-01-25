<template>
    <div class="rounded-circle sectionCircle" :style="'background-color:' + section.card_background_color" @click="goTo(section.url)">
        <font-awesome-icon :icon="['fas', section.icon]" class="icon"></font-awesome-icon>
    </div>
</template>

<script>
export default {
props: ['section'],
	methods: {
		goTo(url){
			this.$router.push(url.replace("/",""));
		}
	},
}
</script>

<style>
.sectionCard-title {
	font-size: 1.2em
}


.home-image {
	max-width: 90%;
}

.icon {
	font-size: 7em;
	margin: 2rem;
	max-width: 100px;
    color:white;
}

.sectionCircle {
	margin: 10px;
    border: 1px solid;
    border-color: rgba(133, 133, 133, 0.459);
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
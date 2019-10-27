<template>
    <div class="shape" :style="'background-color:' + section.card_background_color">
        <font-awesome-icon fas :icon="section.icon" class="icon"></font-awesome-icon>
    </div>
</template>

<script>
export default {
props: ['section']
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
	font-size: 10vw;
	margin: 3vw;
    color:white;
}

.shape{
    background-color: black;
    border-radius: 50%;
    width: 80%;
    margin: 5px;
}
</style>
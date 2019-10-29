<template>
    <div class="rounded-circle sectionCircle" :style="'background-color:' + section.card_background_color">
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
	font-size: 7rem;
	margin: 2rem;
    color:white;
}

.sectionCircle {
	margin: 10px;
    max-width: 200px;
    border: 1px solid;
    border-color: rgba(133, 133, 133, 0.459);
}
</style>
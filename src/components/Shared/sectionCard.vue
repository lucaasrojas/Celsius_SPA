<template>
    <div class="shape" :style="'background-color:' + section.card_background_color">
        <div class="row">
            <div class="col-md-12">
                <!-- 
                    <img :src="require(`@/${img.src}`)" class="rounded-circle my-4" style="max-width: 196px;">
                -->
                <font-awesome-icon fas :icon="section.icon" class="icon"></font-awesome-icon>
            </div>
	    </div>
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
	font-size: 4vw;
	margin: 2vw;
    color:white;
}

.shape{
    background-color: black;
    border-radius: 50%;
    width: 80%;
}
</style>
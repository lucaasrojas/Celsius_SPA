<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <p class="my-2 sectionCard-title"> {{img.title}} </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 home-img">
                <!-- 
                    <img :src="require(`@/${img.src}`)" class="rounded-circle my-4" style="max-width: 196px;">
                -->
                <font-awesome-icon fas :icon="img.icon" class="icon"></font-awesome-icon>
            </div>
	    </div>
    </div>
</template>

<script>
export default {
props: ['img']
}
</script>

<style>
.sectionCard-title {
	font-size: 1.5em
}


.home-image {
	max-width: 100vw;
}

.icon {
	font-size: 8vw;
	margin-bottom: 10px;
}
</style>
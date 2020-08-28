<template>
    <div class="box_wrapper">
		<div class="boxes_wrapper row justify-content-center mx-auto sections-row">
            <div class="techBox column" v-for="(langImg, index) in techs" :key="index">
                <font-awesome-icon :icon="['fab', langImg]" class="icon"></font-awesome-icon>
            </div>
		</div>
	</div>
	
</template>
<script>

import Jumbotron from '@/components/Shared/Jumbotron.vue';
import SectionCard from '@/components/Shared/sectionCard.vue';
import Vue from 'vue'

export default {
    props: ['techs']

}
</script>

<style scoped>
.icon{
    color: #2c3e50;
}
.banner_title {
    display: flex;
    align-items: center;
    justify-content: center;
}

.boxes_wrapper {
    grid-row:2
    
}

.techBox {
    display: flex;
    background-color: var(--sectionCard-color);
    border: 2px solid #2c3e50;
    border-radius: 15%;
    margin: 0.75rem;
    width: fit-content;
    
}
.box_wrapper {
    display: grid;
    grid-template-rows: 100px auto 100px;
    color:var(--bg-color);
}

</style>

<template>
    <div class="box_wrapper">
		<div class="boxes_wrapper row justify-content-center mx-auto sections-row">
            <div class="techBox column" v-for="({icon, redirect}, index) in techs" :key="index">
                <font-awesome-icon :icon="['fab', icon]" @click="iconClick(redirect)" class="icon"></font-awesome-icon>
            </div>
		</div>
	</div>
	
</template>
<script>

export default {
    props: ['techs'],
    methods: {
        iconClick: (item) => {
            window.open(item, "_blank")
        }
    }
}
</script>

<style scoped>
.icon{
    color: var(--bg-color);
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

.techBox:hover  {
    box-shadow: 0 0 30px white;
    transition: 0.5s;
    transform: scale(1.2);

}
.techBox:hover > .icon {
    transition: 0.5s;
    color: white
}
.box_wrapper {
    display: grid;
    grid-template-rows: 100px auto 100px;
    color:var(--bg-color);
}

</style>

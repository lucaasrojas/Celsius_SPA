<template>
<div>
	<div class="row">
		<div class="col">
			<h1>{{user}}</h1>
		</div>
	</div>
    <div class="row">
        <div class="col" v-for="(image,index) in images" :key="index">
            <h1></h1>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" :src="`${image.node.display_url}`" alt="Card image cap">
                <div class="card-body">
                    <p class="card-text">{{image.node.edge_media_to_caption.edges[0].node.text}}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
	</div>
</div>
</template>

<script>
export default {
    data() {
        return {
            images: [],
            user: ''
        }
    },
    methods: {
        getInstagramData() {
            fetch('https://www.instagram.com/boywithtools')
            .then(async res => {
                const response = await res.json();
                console.log("instagram", response)
            })
        }
    },
    mounted(){
        this.getInstagramData();
    }
}
</script>

<style>

</style>
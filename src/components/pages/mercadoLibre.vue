<template>
    <div class="row">
        <div v-for="(pub, index) of publicaciones" :key="index" class="col-md-4 col-sm-6">
            
            <div  class="card" style="width: 18rem;">
                <div  :id="`${pub.id}`" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li :data-target="`#${pub.id}`" :data-slide-to="0" class="active"></li>

                        <div v-for="(pictures, index) of pub.pictures" :key="pictures.id">
                            <li :data-target="`#${pub.id}`" :if="index!=0" :data-slide-to="index"></li>
                        </div>
                        
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img  :src="`${pub.pictures[0].url}`" class="d-block w-100">
                        </div>
                        <div  v-for="(picture, index) of pub.pictures" :key="picture.id" :if="index !== 0" class="carousel-item">
                            <img  :src="`${picture.url}`" class="d-block w-100">
                        </div>
                    </div>
                    <a class="carousel-control-prev" :href="`#${pub.id}`" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" :href="`#${pub.id}`" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

                <div class="card-body">
                    <h5 class="card-title">{{pub.title}}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{{pub.currency_id}} {{pub.base_price}}</li>
                </ul>
                <div class="card-body">
                    <a :href="`${pub.permalink}`" target="_blank" class="card-link">Ver publicacion</a>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            publicaciones: []
        }
    },
    async mounted(){
        
        const responseJSON = await this.fetchJSON('https://api.mercadolibre.com/sites/MLA/search?nickname=lucaas123')

        const promises = responseJSON.results.map(async result => {
            return await this.fetchJSON(`https://api.mercadolibre.com/items/${result.id}`)
        })

        this.publicaciones = await Promise.all(promises)

        $('.carousel').carousel({
            interval: false
        })
    },
    methods: {
        fetchJSON(url){
                return fetch(url)
                        .then(async response => {
                            return await response.clone().json()
                        })
                }
    },
    created() {
		const langData = this.$i18n.messages[this.$i18n.locale].ecommerce;
		this.$emit('jumbotronData', {mainTitle: langData.mainTitle, mainDescription: langData.mainDescription});

		this.bus.$on('locale-changed', () => {
			const langData = this.$i18n.messages[this.$i18n.locale].ecommerce;
			this.$emit('jumbotronData', {mainTitle: langData.mainTitle, mainDescription: langData.mainDescription});
		})
	}

}
</script>

<style>

</style>
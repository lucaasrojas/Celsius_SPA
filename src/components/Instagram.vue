<template>
    <div>
        <h1>INSTAGRAM GALLERY</h1>
        <div class="col-md-12">
            <div class="row justify-content-center mx-auto sections-row">
                <div v-for="(post, index) in instagramPosts" :key="index">
                    <img :src="post.displayUrl" />
                </div>
            </div>
        </div>      
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            instagramPosts: []
        }
    },
    async mounted() {
        this.instagramPosts = await this.fetchInstagramPhotos('https://www.instagram.com/lucaasrojas')
        console.log(this.instagramPosts)
    },
    methods: {
        async fetchInstagramPhotos (accountUrl) {
            const instagramRegExp = new RegExp(/<script type="text\/javascript">window._sharedData.=(.*);<\/script>/g)
            const response = await axios.get(accountUrl)
            
            const elementString = response.data.match(instagramRegExp)[0]
            const element = elementString.replace('<script type="text/javascript">','').replace("window._sharedData = ","").replace(";<\/script>","")
            const json = JSON.parse(element)
            const edges = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges
            const photos = edges.map(edge => {
                return {
                    url: `https://www.instagram.com/p/${edge.node.shortcode}/`,
                    thumbnailUrl: edge.node.thumbnail_src,
                    displayUrl: edge.node.display_url,
                    caption: edge.node.edge_media_to_caption.edges[0] ? edge.node.edge_media_to_caption.edges[0].node.text : ''
                }
            })
            return photos
        }
    }
}
</script>

<style>

</style>
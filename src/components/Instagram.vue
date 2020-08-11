<template>
    <div>
        <div v-if="loading">
            <div class="spinner-border" role="status" />
        </div>

        <div v-else class="col-md-12">
            <div class="wrapper">
                <div v-for="(post, index) in instagramPosts" :key="index">
                    <div class="card" @click="openExternalLink(post.url)">
                        <img :src="post.displayUrl" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">{{post.caption}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props : [ 'account' ],
    data() {
        return {
            instagramPosts: [],
            loading: false,
        }
    },
    async mounted () {
        this.instagramPosts = await this.fetchInstagramPhotos(`https://www.instagram.com/${this.account}`)
    },
    watch: {
        async account(newVal, oldVal) {
            newVal !== oldVal && (this.instagramPosts = await this.fetchInstagramPhotos(`https://www.instagram.com/${this.account}`))
            
        }
    },
    async beforeUpdate() {


    },
    methods: {
        async fetchInstagramPhotos (accountUrl) {
            this.loading = true;
            this.instagramPosts = [];
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
            this.loading = false;
            return photos
        },

        openExternalLink(link) {
            window.open(link, '_blank')
        }
    }
}
</script>

<style>
.wrapper {
    column-count: auto;
    column-width: 18rem;
}

.wrapper div { 
    page-break-inside: avoid;
    break-inside: avoid;
    margin-bottom: 1rem;
}

.card {
    border-radius: 2rem !important;
    cursor: pointer;
}

.card img {
    border-top-left-radius: 2rem !important;
    border-top-right-radius: 2rem !important;

}
</style>
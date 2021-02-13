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
            <a :href="`${image.permalink}`" class="card" style="width: 18rem;">
                <img class="card-img-top" :src="`${image.media_url}`" alt="Card image cap">
            </a>
        </div>
	</div>
</div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            images: [],
            user: ''
        }
    },
    methods: {
        getInstagramData() {
          // se resetea cada 60dias
                  const token = "IGQVJWUGh1Vm9JOHFrbnplam1uaUVNZAHBYSkd1RHpoOUljTWRhUVlrSFV0MWJSSEFPYU15ZAUozRGUwUkg1TDlMSS1GTnNyZAzdSOEJ4QXhWZAnJ4WTlZAZA3A3ZA3NWcmN5TkpvYmpRa2ItVFkxdTRmcGVHdwZDZD"
      axios.get(`https://graph.instagram.com/me/media?access_token=${token}&fields=media_url,media_type,caption,permalink`)
      .then((res) => {
        console.log("DATA", res.data.data)
        res.status === 200 && (this.images = res.data.data)
      });
        }
    },
    mounted(){
        this.getInstagramData();
    }
}
</script>

<style>

</style>
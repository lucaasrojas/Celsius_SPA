<template>
    <v-container>
        <v-layout row>
            
                <v-flex>
                    <router-link to="/galeriaGifs"><img src="@/assets/images/titulogifs.png" /></router-link>
                </v-flex>
        </v-layout>
            
            <v-layout row>
                <v-flex>
                    <img src="@/assets/images/titulogtaiv.png" />

                </v-flex>
                
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-carousel hide-controls>
                        <v-carousel-item
                        v-for="item in carouselPics"
                        :key="item.src"
                        :src="item.src"
                        ></v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            carouselPics: [
                {
                    src: "@/assets/images/Galerias/GTAIV/GTAIV.jpg"
                }
            ]
        }
    }
}
</script>

<style>

</style>

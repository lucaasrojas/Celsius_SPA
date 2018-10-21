<template>
    <v-container>
        <v-layout row>
            <v-flex>
                 <v-carousel>
                        <v-carousel-item
                        v-for="(item,i) in items"
                            :key="i"
                            :src="require(`@/${item.url}`)"
                        ></v-carousel-item>
                    </v-carousel>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data () {
      return {
        items: [
          {url: 'assets/images/Galerias/GTAIV/GTAIV.png'},
          {url: 'assets/images/Galerias/GTAIV/GTAIV(1).png'},
          {url: 'assets/images/Galerias/GTAIV/GTAIV(2).png'},
          {url: 'assets/images/Galerias/GTAIV/GTAIV(3).png'},
          {url: 'assets/images/Galerias/GTAIV/GTAIV(4).png'},
          {url: 'assets/images/Galerias/GTAIV/GTAIV(5).png'},
          {url: 'assets/images/Galerias/GTAIV/GTAIV(6).png'},

        ]
      }
    }
}
</script>

<style>

</style>

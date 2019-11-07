<template>
    <div class="container">
        
        <h2 class="alert alert-light  d-inline-flex">Recetas</h2>
        <div class="row bg-dark rounded text-center" id="appContainer">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <table class="table table-striped table-bordered tabler-hover" v-for="(category, index) in listaRecetas" :key="index">
                                    <tr>

                                        <th>{{CapitalizeFirstLetter(index)}}</th>
                                    </tr>
                                    <tbody v-for="categoryItem in category" :key="categoryItem.nombre">
                                           <tr>
                                        
                                                <th>{{categoryItem.nombre}}</th>
                                            </tr>
                                            <tr>
                                                    <td>
                                                        <tr>
                                                            <th>Ingrediente</th>
                                                            <th>Cantidad</th>
                                                        </tr>
                                                        <tr v-for="ing in categoryItem.ingredientes" :key="ing.nombre">
                                                            <th>{{ing.nombre}}</th>
                                                            <th>{{ing.cantidad}}</th>
                                                        </tr>
                                                        <tr>
                                                            <th colspan="2"> Proceso </th>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2">
                                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa dolorum velit nesciunt modi consequatur aut sed a, unde impedit perferendis ex fugit ut facilis sapiente, consequuntur optio odio quas iste.
                                                            </td>
                                                        </tr>
                                                    </td>
                                            </tr>
                                    </tbody>

                            </table>  
                        </div>
                    </div>
                </div>
            
        </div>
        
        
    </div>
</template>

<script>

export default {
    data(){
        return {
            listaRecetas: this.$root.dbPages.recetas,
            mainTitle: "Recetas",
			mainDescription: "Cocinar es facil!"
        }
    },
    created() {
        console.log("Recetas", this.$root.dbPages)
    },
    mounted(){
		this.$emit('receiveData', {mainTitle: this.mainTitle, mainDescription: this.mainDescription});

    },
    methods: {
        CapitalizeFirstLetter: function(word){
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    }

}
</script>

<style scoped>
</style>

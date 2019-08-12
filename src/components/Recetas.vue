<template>
    <div class="container">
        
        <h2 class="alert alert-light  d-inline-flex">Recetas</h2>
        <div class="row bg-dark rounded text-center" id="appContainer">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <table class="table table-striped table-bordered tabler-hover" v-for="(rec, index) in listaRecetas" :key="index">
                                    <tr>
                                            <th>{{rec.category}}</th>
                                    </tr>
                                    <tbody v-for="categoryItem in rec.items" :key="categoryItem.nombre">
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
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cumque possimus delectus cum distinctio ad quas, quia porro enim quo odio? Hic harum ipsa fugit amet deleniti debitis temporibus. Sed.
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
<!--
<tr>
                                                        <th v-for="ing in categoryItem.ingredientes" :key="ing.nombre">
                                                           <tr>
                                                               <th>Ingrediente</th>
                                                               <th>Cantidad</th>
                                                            </tr>
                                                           <tr>
                                                               <th>{{ing.nombre}}</th>
                                                               <th>{{ing.cantidad}}</th>
                                                           </tr>
                                                        </th>
                                                    </tr>
-->

<script>
import firebaseDB from '../firebaseDB'
let recetasRef = [];


export default {
    data(){
        return {
            listaRecetas: recetasRef
        }
    },
    mounted(){
        firebaseDB.db.ref('recetas').once('value',(data)=>{
            data.forEach(function(snapshot){
                recetasRef.push({
                    category: snapshot.key,
                    items: snapshot.val()
                })
            })
        });
    }

}
</script>

<style scoped>
</style>

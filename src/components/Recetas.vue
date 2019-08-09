<template>
    <div class="container">
        
        <h2 class="alert alert-light  d-inline-flex">{{listaRecetas}}</h2>
        <div class="row bg-dark rounded text-center" id="appContainer">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <table class="table table-striped table-bordered tabler-hover">
                                    <tr v-for="(rec, index) in listaRecetas" :key="index">
                                        <th>{{rec.category}}</th>
                                        

                                        <tbody v-for="categoryItem in rec.items" :key="categoryItem.nombre">
                                            <tr >
                                                <th>{{categoryItem.nombre}}</th>
                                            </tr>
                                        </tbody>

                                    </tr>
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

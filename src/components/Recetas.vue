<template>
    <div class="container">
        
        <h2 class="alert alert-light  d-inline-flex">{{listaRecetas}}</h2>
        <div class="row bg-dark rounded text-center" id="appContainer">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <table class="table table-striped table-bordered tabler-hover">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Dificultad</th>
                                        <th>Ingredientes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Dificultad</th>
                                        <th>Ingredientes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   <!--
                                    <tr v-for="rec in recetas" :key="rec.nombre">
                                        <td>
                                            {{rec.nombre}}
                                        </td>
                                        <td>
                                            {{rec.dificultad}}
                                        </td>
                                        <td>
                                            <ul v-for="ing in rec.ingredientes" :key="ing">
                                                <li>{{ing.nombre}} - {{ing.cantidad}}</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    -->
                                </tbody>
                            </table>  
                        </div>
                    </div>
                </div>
            
        </div>
        
        
    </div>
</template>

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

            console.log("list",recetasRef)
        });
    }

}
</script>

<style scoped>
</style>

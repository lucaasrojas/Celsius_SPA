<template>
    <div class="container">
        
        <h2 class="alert alert-light  d-inline-flex">Recetas</h2>
        <div class="row bg-dark rounded text-center" id="appContainer">
                <div class="col">
                    <div class="card">
                        <div class="card-header">
                        </div>
                        <div class="card-body">
                            <table class="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Dificultad</th>
                                        <th>Ingredientes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   
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
let recetasRef = firebaseDB.db.ref('recetas/pasteleria');

export default {
  firebase: {
    recetas: recetasRef.orderByKey()
  },
    data(){
        return {
            
        }
    },
    methods:{

    },

}
</script>

<style scoped>
</style>

<template>
    <div class="container">
        <h2 class="alert alert-light  d-inline-flex">Donaciones</h2>
        <div class="row bg-dark rounded text-center" id="appContainer">
                <div class="col">
                    <div class="card">
                        <div class="card-header">
                            <h3>Total: {{sumAll}}</h3>
                        </div>
                        <div class="card-body">
                            <table class="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Monto</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="user in usuarios" :key="user.id">
                                        <td>
                                            {{user.name}}
                                        </td>
                                        <td>
                                            {{user.lastname}}
                                        </td>
                                        <td>
                                            {{user.monto}}
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
import firebaseDB from '../../firebaseDB'
let usuariosRef = firebaseDB.db.ref('usuarios');

export default {
  firebase: {
    usuarios: usuariosRef
  },
    data(){
        return {
        }
    },
    methods:{

    },
    computed: {
        sumAll: function(){
            
            let total = 0;
            this.usuarios.forEach(element => {
                total += element.monto
            });
            return total;
        }
    }
}
</script>

<style>

</style>

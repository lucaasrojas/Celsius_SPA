<template>
    <div class="container">
        <h2 class="alert alert-light  d-inline-flex">Donaciones</h2>
        <div class="row bg-dark rounded text-center" id="appContainer">
                <!--
            <div class="row mt-5">
                <div class="col">
                    <div class="card">
                        <div class="card-header">
                            <h3>Add new user</h3>
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="addUser">
                                <div class="form-group">
                                    <input type="text" class="form-control" v-model="newUser.name"
                                    placeholder="Name" >
                                    <input type="text" class="form-control" v-model="newUser.lastname"
                                    placeholder="Lastname" >
                                </div>
                                <button type="submit" class="btn btn-primary">Add</button>
                            </form>    
                        </div>
                    </div>
                </div>
            </div>
                -->
            
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
import Firebase from 'firebase';
import config from '../../config';
let app = Firebase.initializeApp(config);
let db = app.database();
let usuariosRef = db.ref('usuarios');

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

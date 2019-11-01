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
                                            {{user}}
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

export default {
    data(){
        return {
            usuarios: null
        }
    },
    methods:{

    },
    computed: {
        sumAll: function(){
            
          
        }
    },
    created() {
        console.log("USUARIOS", this.$root.usuariosDB)

        this.usuarios = this.$root.usuariosDB;
    }
}
</script>

<style>

</style>

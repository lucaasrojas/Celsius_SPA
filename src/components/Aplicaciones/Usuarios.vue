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
                                            {{user.items.name}}
                                        </td>
                                        <td>
                                            {{user.items.lastname}}
                                        </td>
                                        <td>
                                            {{user.items.monto}}
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
let usuariosRef = []
export default {
    data(){
        return {
            usuarios: usuariosRef
        }
    },
    methods:{

    },
    computed: {
        sumAll: function(){
            
          
        }
    },
    mounted() {
        this.$root.usuariosDB.once('value',(data)=>{
            data.forEach(function(snapshot){
                console.log("snap", snapshot.val())
                usuariosRef.push({
                    category: snapshot.key,
                    items: snapshot.val()
                })
            })
        });
    }
}
</script>

<style>

</style>

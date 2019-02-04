<template>
    <div class="container">
                    <h2>Listado de Frutas</h2>
                    <ul class="list-group">
                        <li v-for="(item, index) of frutas" v-bind:key="item.id" v-on:click="aumentar(index)"
                        class="list-group-item d-flex justify-content-between align-items-center">
                            {{index}} -{{item.nombre}}
                            <span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
                        </li>
                        
                    </ul>
                    <button type="button" class="btn btn-danger" v-on:click="reiniciar">Reset</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            frutas: [
                {nombre: "Manzana", cantidad: 0},
                {nombre: "Pera", cantidad: 0},
                {nombre: "Naranja", cantidad: 0},
            ],
        }
    },
    methods:{
            aumentar: function(index){
                this.$data.frutas[index].cantidad ++
            },
            reiniciar: function(){
                this.$data.frutas.forEach(element => {
                    element.cantidad = 0;
                });
            }
    }
}
</script>

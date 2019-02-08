<template>
    <div class="container">
        <h2>Listado de Frutas</h2>
        <div class="row">
            <div class="col">
                <ul class="list-group d-inline-flex">
                    <li v-for="(item, index) of frutas" :key="item.id" @click="aumentar(index)"
                    class="list-group-item d-flex justify-content-between align-items-center">
                        <div class="col text-left">
                            {{item.nombre}}
                        </div>
                        <div class="col">
                            <span class="badge badge-primary badge-pill text-right">{{item.cantidad}}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <button type="button" class="btn btn-danger" @click="reiniciar">Reset</button>
            </div>
        </div>
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

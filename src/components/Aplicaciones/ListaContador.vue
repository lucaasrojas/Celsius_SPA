<template>
    <div class="container">
        <h2 class="alert alert-light  d-inline-flex">Listado con contador</h2>
        <div class="row bg-dark rounded" id="appContainer">
            <div class="col">
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control my-3" v-model="nuevoElemento" 
                        id="inputElement" placeholder="Enter new element" v-on:keyup.enter="agregarElemento"  >
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <button type="submit" class="btn btn-primary" @click="agregarElemento">Submit</button>
                    </div>
                    <div class="col">
                        <button type="submit" class="btn btn-danger" @click="borrarTodo">Delete all</button>
                    </div>
                </div>

            </div>
            <div class="col">
                <ul class="list-group d-inline-flex">
                    <li v-for="(item, index) of elementos" :key="item.id" @click="aumentar(index)"
                    class="list-group-item d-flex justify-content-between align-items-center">
                        <div class="col-sm-auto">
                            {{item.nombre}}
                        </div>
                        <div class="col-sm-2">
                            <span class="badge badge-primary badge-pill text-right">{{item.cantidad}}</span>
                        </div>
                    </li>
                </ul>
                <div class="row">
                    <div class="col">
                        <button type="button" :class="['btn', 'btn-danger', elementos.length > 0 ? '' : 'disabled']"  @click="reiniciar">Reset</button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    nuevoElemento: '',
    data(){
        return {
            elementos: [],
        }
    },
    methods:{
            aumentar: function(index){
                this.$data.elementos[index].cantidad ++
            },
            reiniciar: function(){
                this.$data.elementos.forEach(element => {
                    element.cantidad = 0;
                });
            },
            agregarElemento: function(){
                if(this.nuevoElemento != ""){
                    let el = {
                        nombre: this.nuevoElemento,
                        cantidad: 0
                    }
                    this.elementos.push(el);
                    this.nuevoElemento = "";
                }
            },
            borrarTodo: function(){
                this.elementos = [];
            }
    }
}
</script>

<style>
#appContainer {
    padding: 1rem;
    border: 2px;
    border-color: snow;
    border-style: solid;
}
</style>

<template>
    <div class="container">
        <div class="row bg-dark rounded" id="appContainer">
            <div class="col my-auto card">
                <div class="row">
                    <input type="text" class="form-control m-3" v-model="nuevoElemento" maxlength="40"
                    id="inputElement" placeholder="Enter new element" v-on:keyup.enter="agregarElemento"  >
                </div>
                <div class="row my-2">
                    <div class="col">
                        <button type="submit" class="btn btn-primary" @click="agregarElemento">Submit</button>
                    </div>
                    <div class="col">
                        <button type="submit" class="btn btn-danger" @click="borrarTodo">Delete all</button>
                    </div>
                    <div class="col">
                        <button type="button" :class="['btn', 'btn-danger', elementos.length > 0 ? '' : 'disabled']"  @click="reiniciar">Reset</button>
                    </div>
                </div>

            </div>
            <div class="col">
                <div class="row">
                    <ul class="list-group d-inline-flex my-3 mx-auto">
                        <li v-for="(item, index) of elementos" :key="item.id" @click="aumentar(index)"
                        class="list-group-item d-flex justify-content-between align-items-center form-control"
                        style="cursor:pointer">
                            <div class="col-sm-auto">
                                {{item.nombre}}
                            </div>
                            <div class="col-sm-2">
                                <span class="badge badge-primary badge-pill text-right">{{item.cantidad}}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            elementos: [],
            nuevoElemento: '',
            mainTitle: 'Counter List',
            description: ''
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
    },
    created() {
		this.$emit('receiveData', {mainTitle: this.mainTitle, mainDescription: this.mainDescription});
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

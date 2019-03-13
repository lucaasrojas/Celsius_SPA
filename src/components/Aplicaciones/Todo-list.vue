<template>
    <div class="container">
        <h2 class="alert alert-light  d-inline-flex">Lista To-Do</h2>
        <div class="row bg-dark rounded" id="appContainer">
            <div class="col-sm-4">
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control my-3" v-model="nuevaTarea" 
                        id="inputElement" placeholder="Enter new element" v-on:keyup.enter="agregarTarea"  >
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <button type="submit" class="btn btn-primary" @click="agregarTarea">Submit</button>
                    </div>
                    <div class="col">
                        <button type="submit" class="btn btn-danger" @click="borrarTodo">Delete all</button>
                    </div>
                </div>

            </div>
            <div class="col-sm-8">
                <ul class="list-group">
                    <li v-for="(item, index) of tareas" :key="item.id"
                    class="list-group-item">
                        <div :class="['alert','row', item.estado ? 'alert-success' : 'alert-primary']">
                            <div class="col-8">
                                {{item.nombre}}
                            </div>
                            <div class="col-4">
                            <button type="button" :class="['btn btn-success', item.estado ? 'd-none' : '']" @click="completarTarea(index)">OK</button>
                            <button type="button" class="btn btn-danger" @click="borrarTarea(index)">X</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    nuevaTarea: '',
    data(){
        return {
            tareas: [],
        }
    },
    methods:{
            agregarTarea: function(){
                if(this.nuevaTarea != ""){
                    let el = {
                        nombre: this.nuevaTarea,
                        estado: false
                    }
                    this.tareas.push(el);
                    this.nuevaTarea = "";
                }
            },
            borrarTodo: function(){
                this.tareas = [];
            },
            completarTarea: function(index){
                this.tareas[index].estado = true;
            },
            borrarTarea: function(index){
                this.tareas.splice(index, 1);
            }
    }
}
</script>

<style>

</style>

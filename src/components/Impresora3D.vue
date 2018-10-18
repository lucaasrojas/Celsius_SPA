<template>
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <h2 class="subtitulo"> Soporte Notebook Simple </h2>
                <img class="imgGaleria" src="@/assets/images/impresora3D/soporte-note-1.jpg"/>
                <img class="imgGaleria" src="@/assets/images/impresora3D/soporte-note-2.jpg"/>
                <img class="imgGaleria" src="@/assets/images/impresora3D/soporte-note-3.jpg"/>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <h2 class="subtitulo"> Soporte Auriculares Articulado </h2>
                <img class="imgGaleria" src="@/assets/images/impresora3D/soporte-auris-articulado.jpg"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.subtitulo {
    margin: 5px;
    border-style: solid;
    border-width: 5px;
    border-color:blanchedalmond;
    border-radius: 25px;
    background-color: darkgray;
    color: blanchedalmond;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: center;
}

.imgGaleria {
    max-width: 400px;
    padding: 5px;
}
</style>

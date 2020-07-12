<template>
    <div class="dolar">
        <h1>{{ title }}</h1>
        <div class="row">
            <div v-for="(dolar, index) of apiResponse" :key="index" 
            class="col-sm-10 col-md-4 card border-dark mb-3 cotizacion">
                <h2 class="card-header">
                    {{dolar.casa.nombre}}
                </h2>
                <div class="col card-body text-dark">
                    <div class="row"> 
                        <div class="col"> 
                            <h3 class="card-title">Venta</h3>
                            <span class="card-text">
                                {{dolar.casa.venta}}
                            </span>
                        </div>
                        <div class="col"> 
                            <h3 class="card-title">Compra</h3>
                            <span class="card-text">
                                {{dolar.casa.compra}}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "Cotizacion Dolar",
            apiResponse: {}        
        }
    },
    mounted(){
        fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
        .then(async res => {
            this.apiResponse = await res.clone().json()
        })
    }

}
</script>

<style>
.card.cotizacion {
    padding: 0;
    margin: 1rem;
    display: inline-block;
}

.dolar{
    text-align: center;
}

.dolar > div {
    display: inline-block;
}
</style>